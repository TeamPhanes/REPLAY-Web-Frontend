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
  reviewCheck?: boolean;
}

export default function GatheringCardContainer({
  data,
  reviewCheck,
}: GatheringCardContainerProps) {
  return (
    <>
      {data.map((gathering) => (
        <div
          key={gathering.gatheringId}
          className={`${reviewCheck ? 'h-[352px]' : 'h-[252px]'} relative flex  w-[630px] items-start rounded-3xl bg-card p-5`}
        >
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
          </Link>
          {reviewCheck ? (
            <div className="absolute bottom-5 flex flex-col gap-1">
              <p className="text-base font-semibold tracking-[-2.5%] text-basefont">
                참여한 분들
              </p>
              <div className="flex gap-2">
                {gathering.participatingUsers.map((user) => (
                  <Image
                    key={user.nickname}
                    src={user.image}
                    alt={user.nickname}
                    width={60}
                    height={60}
                    className="h-[60px] w-[60px] rounded-full border-2 border-mainBlue shadow-md"
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}
