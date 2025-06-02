import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGatheringStore } from '@/store/useGatheringStore';
import AddressAndLevel from '@/components/@shared/cardList/AddressAndLevel';
import DateAndParticipant from '@/components/@shared/cardList/DateAndParticipant';
import TagAndPlaytime from '@/components/@shared/cardList/TagAndPlaytime';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import { usePostGatheringLike } from '@/hooks/reactQuery/usePostGatheringLike';
import { GatheringDTO } from '@/types/gathering/gathering.type';
import HeartFull from '@/public/icons/cardList/heart_full.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';

interface GatheringCardReviewProps {
  gathering: GatheringDTO['get'];
}

export default function GatheringCardReview({
  gathering,
}: GatheringCardReviewProps) {
  const [isLiked, setIsLiked] = useState(gathering.isLiked);
  const { setSelectedGathering } = useGatheringStore();
  const { likesMutation } = usePostGatheringLike();

  const handleLikeButtonClick = (userAction: 'LIKE_POST' | 'UNLIKE_POST') => {
    setIsLiked(userAction === 'LIKE_POST');
    likesMutation.mutate({
      gatheringId: gathering.gatheringId,
      userAction,
    });
  };
  return (
    <div
      key={gathering.gatheringId}
      className="h-[352px] relative flex  w-[630px] items-start rounded-3xl bg-card p-5"
    >
      <Image
        src={gathering.listImage}
        alt={gathering.name}
        width={212}
        height={212}
        quality={100}
        className="rounded-3xl w-[212px] h-[212px]"
      />
      <div className="absolute right-5 flex flex-col">
        <button
          type="button"
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
      </div>
      <Link
        href={`/gathering/${gathering.gatheringId}`}
        onClick={() =>
          setSelectedGathering({
            ...gathering,
            participantCount: gathering.participants.length,
          })
        }
      >
        <div className="ml-5 flex h-[212px] w-[322px] flex-col justify-between">
          <div className="flex flex-col gap-3">
            <TagAndPlaytime
              tag={gathering.genres}
              playtime={gathering.playtime}
            />
            <TitleAndSpot
              themeName={gathering.name}
              cafe={gathering.cafe}
              spot={gathering.spot}
            />
          </div>
          <div className="flex flex-col gap-2">
            <DateAndParticipant
              registrationEnd={gathering.registrationEnd}
              capacity={gathering.capacity}
              participantCount={gathering.participants.length}
            />
            <AddressAndLevel
              address={gathering.address}
              level={gathering.level}
            />
          </div>
        </div>
      </Link>
      <div className="absolute bottom-5 flex flex-col gap-1">
        <p className="text-base font-semibold tracking-[-2.5%] text-basefont">
          참여한 분들
        </p>
        <div className="flex gap-2">
          {gathering.participants.map((user) => (
            <Image
              key={user.name}
              src={user.image}
              alt={user.name}
              width={60}
              height={60}
              className="h-[60px] w-[60px] rounded-full border-2 border-mainBlue shadow-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
