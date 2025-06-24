import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import AddressAndLevel from '@/components/@shared/cardList/AddressAndLevel';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import Rating from '@/components/@shared/rating/Rating';
import DateAndPrice from '@/components/gatheringDetail/DateAndPrice';
import GatheringDetailButton from '@/components/gatheringDetail/GatheringDetailButton';
import TagAndLink from '@/components/gatheringDetail/TagAndLink';
import { useGetGatheringMember } from '@/hooks/reactQuery/useGetGatheringMember';
import { usePostGatheringLike } from '@/hooks/reactQuery/usePostGatheringLike';
import {
  GatheringDTO,
  GatheringDetailDTO,
} from '@/types/gathering/gathering.type';
import HeartFull from '@/public/icons/cardList/heart_full.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';

interface GatheringDetailCardProps {
  list: GatheringDTO['get']['data'][number];
  detail: GatheringDetailDTO['get'];
  leader: string;
}

export default function GatheringDetailCard({
  list,
  detail,
  leader,
}: GatheringDetailCardProps) {
  const { id } = useParams();
  const { gatheringMember } = useGetGatheringMember(id);
  const [isLiked, setIsLiked] = useState(list.isLiked);
  const { likesMutation } = usePostGatheringLike();

  const participantCount = gatheringMember.filter(
    (user: any) => user.nickname
  ).length;

  const handleLikeButtonClick = (userAction: 'LIKE_POST' | 'UNLIKE_POST') => {
    setIsLiked(userAction === 'LIKE_POST');
    likesMutation.mutate({
      gatheringId: detail.gatheringId,
      userAction,
    });
  };

  useEffect(() => {
    setIsLiked(list.isLiked);
  }, [list.isLiked]);

  return (
    <>
      <div className="flex h-[460px] justify-between">
        <Image
          src={detail.detailImage}
          alt={list.name}
          width={797}
          height={460}
          quality={100}
          className="rounded-[30px]"
        />
        <div className="relative h-[460px] w-[471px] rounded-[30px] bg-card p-5">
          <button
            type="button"
            className={`absolute right-5 top-20 transition-transform duration-300 active:scale-90 ${
              isLiked ? 'animate-pop' : ''
            }`}
            onClick={() =>
              handleLikeButtonClick(isLiked ? 'UNLIKE_POST' : 'LIKE_POST')
            }
          >
            <Image
              src={isLiked ? HeartFull : HeartLine}
              alt="heart"
              width={32}
              height={32}
            />
          </button>
          <TagAndLink tag={list.genres} />
          <div className="mt-7 w-[395px]">
            <TitleAndSpot
              themeName={detail.name}
              cafe={list.cafe}
              spot={list.spot}
            />
          </div>
          <div className="mt-5 flex w-[395px] flex-col gap-3">
            <DateAndPrice
              registrationStart={detail.registrationStart}
              registrationEnd={detail.registrationEnd}
              dateTime={detail.dateTime}
              isIndividual={detail.isIndividual}
              price={detail.price}
            />
            <AddressAndLevel address={list.address} level={list.level} />
          </div>
          <div className="mt-5 flex items-center justify-center gap-12">
            <Rating
              rating={participantCount}
              maxRating={6}
              width={288}
              height={48}
              type="User"
              capacity={detail.capacity}
            />
            <p className="text-2xl/[34px] font-normal tracking-[-2.5%] text-grayFont">
              {participantCount}/{detail.capacity}
            </p>
          </div>
          <GatheringDetailButton
            list={list}
            detail={detail}
            leader={leader}
            gatheringId={detail.gatheringId}
          />
        </div>
      </div>
      <div className="mt-5 h-[712px] w-[570px] rounded-[30px] bg-card p-5">
        <div className="relative flex items-center justify-center">
          <div className="w-[169px] border-t border-black" />
          <p className="min-w-[90px] text-center text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont">
            소개
          </p>
          <div className="w-[169px] border-t border-black" />
        </div>
        <p className="mt-5 text-base font-normal tracking-[-2.5%] text-basefont">
          {detail.content}
        </p>
      </div>
    </>
  );
}
