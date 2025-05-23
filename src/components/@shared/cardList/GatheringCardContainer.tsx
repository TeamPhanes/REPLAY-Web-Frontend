import Image from 'next/image';
import Link from 'next/link';
import AddressAndLevel from '@/components/@shared/cardList/AddressAndLevel';
import DateAndParticipant from '@/components/@shared/cardList/DateAndParticipant';
import TagAndPlaytime from '@/components/@shared/cardList/TagAndPlaytime';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import { GatheringDTO } from '@/types/gathering/gathering.type';
import HeartFull from '@/public/icons/cardList/heart_full.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';

interface GatheringCardContainerProps {
  data: GatheringDTO['get'][];
}

export default function GatheringCardContainer({
  data,
}: GatheringCardContainerProps) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-5">
      {data.map((gathering) => (
        <div
          key={gathering.gatheringId}
          className="h-[252px] relative flex  w-[630px] items-start rounded-3xl bg-card p-5"
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
            <button type="button">
              <Image src={HeartLine} alt="heart" width={32} height={32} />
            </button>
          </div>
          <Link href={`/gathering/${gathering.gatheringId}`}>
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
      ))}
    </div>
  );
}
