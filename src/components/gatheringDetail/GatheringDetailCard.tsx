import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Tag from '@/components/@shared/cardList/Tag';
import Rating from '@/components/@shared/rating/Rating';
import DateAndPriceAndAddress from '@/components/gatheringDetail/DateAndPriceAndAddress';
import GatheringDetailButton from '@/components/gatheringDetail/GatheringDetailButton';
import { usePostGatheringLike } from '@/hooks/reactQuery/usePostGatheringLike';
import { GatheringDetailDTO } from '@/types/gathering/gathering.type';
import { periodYearMonthDayHourTime } from '@/utils/dateChange';
import HeartFull from '@/public/icons/cardList/heart_full.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';
import ShareIcon from '@/public/icons/cardList/share_icon.svg';

interface GatheringDetailCardProps {
  data: GatheringDetailDTO['get'];
}

export default function GatheringDetailCard({
  data,
}: GatheringDetailCardProps) {
  const [isLiked, setIsLiked] = useState(data.isLiked);
  const { likesMutation } = usePostGatheringLike();
  const findHostName = data.participants.find(
    ({ role }) => role === 'HOST'
  )?.nickname;

  const handleLikeButtonClick = (userAction: 'LIKE_POST' | 'UNLIKE_POST') => {
    setIsLiked(userAction === 'LIKE_POST');
    likesMutation.mutate({
      gatheringId: data.id,
      userAction,
    });
  };

  const handleShareButtonClick = () => {
    window.navigator.clipboard.writeText(window.location.href);
    toast.info('주소 링크가 복사되었습니다.', { toastId: 'url-copy' });
  };

  useEffect(() => {
    setIsLiked(data.isLiked);
  }, [data.isLiked]);

  return (
    <div className="flex flex-col justify-between gap-2 md:flex-row">
      <Image
        src={data.image}
        alt={data.title}
        width={413}
        height={500}
        quality={100}
        className="h-[360px] w-full rounded-[6px] md:h-[500px] md:w-[413px]"
      />
      <div className="relative rounded-[6px] bg-card-white p-5 md:h-[500px] md:w-[849px]">
        <div className="absolute right-5 top-[-340px] flex gap-[18px] rounded-[30px] p-1 md:top-auto md:rounded-none md:p-0">
          <button
            type="button"
            className={`transition-transform duration-300 active:scale-90 ${isLiked ? 'animate-pop' : ''}`}
            onClick={() =>
              handleLikeButtonClick(isLiked ? 'UNLIKE_POST' : 'LIKE_POST')
            }
          >
            <Image
              src={isLiked ? HeartFull : HeartLine}
              alt="heart"
              width={40}
              height={40}
            />
          </button>
          <button
            type="button"
            className="transition-transform duration-300 active:scale-90"
            onClick={handleShareButtonClick}
          >
            <Image src={ShareIcon} alt="share" width={40} height={40} />
          </button>
        </div>

        <Tag tag={data.genres} isDetail />

        <div className="mt-8 flex flex-col gap-1">
          <p className="text-lg/[26px] font-normal tracking-[-2.5%] text-font-disabled">
            {periodYearMonthDayHourTime(data.registrationStart)} ~{' '}
            {periodYearMonthDayHourTime(data.registrationEnd)}
          </p>
          <h2 className="truncate text-4xl/[48px]  font-semibold tracking-[-2.5%] text-font-baseBlack">
            {data.name}
          </h2>
          <p className="text-lg/[26px] font-normal tracking-[-2.5%] text-font-disabled">
            {data.title}
          </p>
        </div>

        <div className="mt-10 flex justify-between">
          <div className="flex min-h-[230px] min-w-[385px] flex-col gap-3">
            <p className="min-w-[90px] text-center text-xl font-normal tracking-[-2.5%] text-font-baseBlack">
              소개
            </p>
            <p className="line-clamp-[8] text-[13px]/[18px] font-normal tracking-[-2.5%] text-font-baseBlack">
              {data.content}
            </p>
          </div>

          <span className="h-44 w-[1px] bg-line-lightGray" />

          <div className="flex min-h-[230px] w-[385px] flex-col gap-3">
            <DateAndPriceAndAddress
              dateTime={data.date}
              price={data.price}
              address={data.address}
            />
            <div className="mt-10 flex items-center justify-between">
              <Rating
                rating={data.participantCount}
                maxRating={6}
                width={266}
                height={36}
                type="User"
                capacity={data.capacity}
              />
              <p className="text-xl font-normal tracking-[-2.5%] text-font-thirdBlack">
                {data.participantCount}/{data.capacity}
              </p>
            </div>
            <GatheringDetailButton data={data} leader={findHostName} />
          </div>
        </div>
      </div>
    </div>
  );
}
