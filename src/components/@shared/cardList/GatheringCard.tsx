import { useEffect, useState } from 'react';
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

interface GatheringCardProps {
  favoriteCheck?: boolean;
  gathering: GatheringDTO['get']['data'][number];
}

export default function GatheringCard({
  favoriteCheck,
  gathering,
}: GatheringCardProps) {
  const [isLiked, setIsLiked] = useState(
    favoriteCheck ? true : gathering.isLiked
  );
  const { setSelectedGathering } = useGatheringStore();
  const { likesMutation } = usePostGatheringLike();

  const handleLikeButtonClick = (userAction: 'LIKE_POST' | 'UNLIKE_POST') => {
    setIsLiked(userAction === 'LIKE_POST');
    likesMutation.mutate({
      gatheringId: gathering.gatheringId,
      userAction,
    });
  };

  useEffect(() => {
    if (!favoriteCheck) {
      setIsLiked(gathering.isLiked);
    }
  }, [gathering.isLiked, favoriteCheck]);
  return (
    <div
      key={gathering.gatheringId}
      className="md:h-[252px] relative flex md:flex-row flex-col md:w-[630px] items-start rounded-3xl bg-card p-5 transition-all hover:scale-[102%]"
    >
      <Link
        href={`/gathering/${gathering.gatheringId}`}
        onClick={() => setSelectedGathering(gathering)}
        className="w-full md:w-[212px]"
      >
        <Image
          src={gathering.listImage}
          alt={gathering.name}
          width={212}
          height={212}
          quality={100}
          className="rounded-3xl w-full h-[360px] md:w-[212px] md:h-[212px]"
        />
      </Link>
      <div className="absolute top-10 md:top-auto right-10 md:right-5 flex flex-col bg-card rounded-[30px] p-1 md:p-0">
        <button
          type="button"
          className={`transition-transform duration-300 active:scale-90 ${
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
      </div>
      <Link
        href={`/gathering/${gathering.gatheringId}`}
        onClick={() => setSelectedGathering(gathering)}
        className="w-full md:w-auto"
      >
        <div className="md:ml-5 mt-5 md:mt-0 flex h-[212px] md:w-[322px] flex-col justify-between">
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
              registrationEnd={gathering.dateTime}
              capacity={gathering.capacity}
              participantCount={gathering.participantCount}
            />
            <AddressAndLevel
              address={gathering.address}
              level={gathering.level}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
