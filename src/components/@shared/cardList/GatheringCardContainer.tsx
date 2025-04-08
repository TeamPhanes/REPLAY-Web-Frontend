import { GatheringDTO } from '@/src/types/gathering/gathering.type';
import Image from 'next/image';
import HeartLine from '@/public/icons/cardList/heart_line.svg';
import HeartFull from '@/public/icons/cardList/heart_full.svg';
import TagAndPlaytime from '@/components/@shared/cardList/TagAndPlaytime';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import AddressAndLevel from '@/components/@shared/cardList/AddressAndLevel';
import DateAndParticipant from '@/components/@shared/cardList/DateAndParticipant';
import Link from 'next/link';

interface GatheringCardContainerProps {
  data: GatheringDTO['get'][];
}

export default function GatheringCardContainer({
  data,
}: GatheringCardContainerProps) {
  return (
    <>
      {data.map((gathering) => (
        <Link
          href={`/gathering/${gathering.gatheringId}`}
          key={gathering.gatheringId}
        >
          <div className="relative flex h-[252px] w-[630px] items-start rounded-3xl bg-card p-5">
            <Image
              src={gathering.listImage}
              alt={gathering.themeName}
              width={212}
              height={212}
              quality={100}
              className="rounded-3xl"
            />

            <div className="absolute right-5 flex flex-col">
              <button type="button">
                <Image
                  src={gathering.isLiked ? HeartFull : HeartLine}
                  alt="heart"
                  width={32}
                  height={32}
                />
              </button>
            </div>

            <div className="ml-5 flex h-[212px] w-[322px] flex-col justify-between">
              <div className="flex flex-col gap-3">
                <TagAndPlaytime
                  tag={gathering.genres}
                  playtime={gathering.playtime}
                />
                <TitleAndSpot
                  themeName={gathering.name}
                  spot={gathering.spot}
                />
              </div>
              <div className="flex flex-col gap-2">
                <DateAndParticipant
                  registrationEnd={gathering.registrationEnd}
                  capacity={gathering.capacity}
                  participantCount={gathering.participantCount}
                />
                <AddressAndLevel
                  address={gathering.address}
                  level={gathering.level}
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
