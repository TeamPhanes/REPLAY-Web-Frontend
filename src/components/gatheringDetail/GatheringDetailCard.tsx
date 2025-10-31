import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { mockGatheringsDetail } from '@/data/mockGatheringsDetail';
import AddressAndLevel from '@/components/@shared/cardList/AddressAndLevel';
import Tag from '@/components/@shared/cardList/Tag';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import Rating from '@/components/@shared/rating/Rating';
import DateAndPriceAndAddress from '@/components/gatheringDetail/DateAndPriceAndAddress';
import GatheringDetailButton from '@/components/gatheringDetail/GatheringDetailButton';
import TagAndLink from '@/components/gatheringDetail/TagAndLink';
import { useGetGatheringMember } from '@/hooks/reactQuery/useGetGatheringMember';
import { usePostGatheringLike } from '@/hooks/reactQuery/usePostGatheringLike';
import {
  GatheringDTO,
  GatheringDetailDTO,
} from '@/types/gathering/gathering.type';
import { periodYearMonthDayHourTime } from '@/utils/dateChange';
import HeartFull from '@/public/icons/cardList/heart_full.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';
import ShareIcon from '@/public/icons/cardList/share_icon.svg';

interface GatheringDetailCardProps {
  leader: string;
}

export default function GatheringDetailCard({
  leader,
}: GatheringDetailCardProps) {
  const { id } = useParams();
  const { gatheringMember } = useGetGatheringMember(id);
  const [isLiked, setIsLiked] = useState(mockGatheringsDetail.isLiked);
  const { likesMutation } = usePostGatheringLike();

  // const participantCount = gatheringMember.filter(
  //   (user: any) => user.nickname
  // ).length;

  const handleLikeButtonClick = (userAction: 'LIKE_POST' | 'UNLIKE_POST') => {
    setIsLiked(userAction === 'LIKE_POST');
    likesMutation.mutate({
      gatheringId: mockGatheringsDetail.gatheringId,
      userAction,
    });
  };

  const handleShareButtonClick = () => {
    window.navigator.clipboard.writeText(window.location.href);
    toast.info('주소 링크가 복사되었습니다.', { toastId: 'url-copy' });
  };

  useEffect(() => {
    setIsLiked(mockGatheringsDetail.isLiked);
  }, [mockGatheringsDetail.isLiked]);

  return (
    <div className="flex flex-col md:flex-row justify-between gap-2">
      <Image
        src={mockGatheringsDetail.detailImage}
        alt={mockGatheringsDetail.name}
        width={413}
        height={500}
        quality={100}
        className="w-full h-[360px] md:w-[413px] md:h-[500px] rounded-[6px]"
      />
      <div className="relative md:h-[500px] md:w-[849px] rounded-[6px] bg-card-white p-5">
        <div className="absolute top-[-340px] md:top-auto rounded-[30px] p-1 md:p-0 md:rounded-none right-5 flex gap-[18px]">
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

        <Tag tag={mockGatheringsDetail.genres} isDetail />

        <div className="gap-1 flex flex-col mt-8">
          <p className="text-lg/[26px] font-normal tracking-[-2.5%] text-font-disabled">
            {periodYearMonthDayHourTime(mockGatheringsDetail.registrationStart)}{' '}
            ~ {periodYearMonthDayHourTime(mockGatheringsDetail.registrationEnd)}
          </p>
          <h2 className="text-4xl/[48px] truncate  font-semibold tracking-[-2.5%] text-font-baseBlack">
            {mockGatheringsDetail.name}
          </h2>
          <p className="text-lg/[26px] font-normal tracking-[-2.5%] text-font-disabled">
            {mockGatheringsDetail.themeName}
          </p>
        </div>

        <div className="mt-10 flex justify-between">
          <div className="flex flex-col gap-3 min-w-[385px] min-h-[230px]">
            <p className="min-w-[90px] text-center text-xl font-normal tracking-[-2.5%] text-font-baseBlack">
              소개
            </p>
            <p className="line-clamp-[8] text-[13px]/[18px] font-normal tracking-[-2.5%] text-font-baseBlack">
              {mockGatheringsDetail.content}
            </p>
          </div>

          <span className="bg-line-lightGray h-44 w-[1px]" />

          <div className="flex flex-col gap-3 min-w-[385px] min-h-[230px]">
            <DateAndPriceAndAddress
              dateTime={mockGatheringsDetail.dateTime}
              price={mockGatheringsDetail.price}
              address={mockGatheringsDetail.address}
            />
            <div className="flex items-center justify-between mt-10">
              <Rating
                rating={mockGatheringsDetail.participantCount}
                maxRating={6}
                width={266}
                height={36}
                type="User"
                capacity={mockGatheringsDetail.capacity}
              />
              <p className="text-xl font-normal tracking-[-2.5%] text-font-thirdBlack">
                {mockGatheringsDetail.participantCount}/
                {mockGatheringsDetail.capacity}
              </p>
            </div>
            <GatheringDetailButton
              list={mockGatheringsDetail}
              leader={leader}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
