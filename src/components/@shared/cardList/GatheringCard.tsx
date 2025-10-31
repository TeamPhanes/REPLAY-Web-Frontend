import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGatheringStore } from '@/store/useGatheringStore';
import Tag from '@/components/@shared/cardList/Tag';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import { usePostGatheringLike } from '@/hooks/reactQuery/usePostGatheringLike';
import { GatheringDTO } from '@/types/gathering/gathering.type';
import { yearMonthDayHourTime } from '@/utils/dateChange';
import AddressIcon from '@/public/icons/cardList/address_icon.svg';
import CalendarIcon from '@/public/icons/cardList/calendar_icon.svg';
import HeartFull from '@/public/icons/cardList/heart_full.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';
import LightbulbIcon from '@/public/icons/cardList/lightbulb_icon.svg';
import UserIcon from '@/public/icons/cardList/user_icon.svg';

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
      className="relative flex md:flex-row flex-col md:w-[630px] items-start rounded-[4px] bg-card-white p-5 transition-all hover:scale-[102%]"
    >
      <Link
        href={`/gathering/${gathering.gatheringId}`}
        onClick={() => setSelectedGathering(gathering)}
        className="w-full md:w-[145px]"
      >
        <Image
          src={gathering.listImage}
          alt={gathering.name}
          width={145}
          height={218}
          quality={100}
          className="rounded-[4px] w-full h-[360px] md:w-[145px] md:h-[218px]"
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
            width={28}
            height={28}
          />
        </button>
      </div>
      <Link
        href={`/gathering/${gathering.gatheringId}`}
        onClick={() => setSelectedGathering(gathering)}
        className="w-full md:w-auto"
      >
        <div className="md:ml-5 mt-5 md:mt-0 flex min-h-[212px] min-w-[424px] flex-col justify-between">
          <div className="flex flex-col gap-3">
            <Tag tag={gathering.genres} />
            <TitleAndSpot
              themeName={gathering.name}
              cafe={gathering.cafe}
              spot={gathering.spot}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-9">
              <div className="flex items-center gap-[6px]">
                <Image
                  src={CalendarIcon}
                  alt="캘린더 아이콘"
                  width={20}
                  height={20}
                />
                <p className="text-sm tracking-[-2.5%] text-font-baseBlack font-normal">
                  {yearMonthDayHourTime(gathering.registrationEnd)}
                </p>
              </div>
              <div className="flex items-center gap-[6px]">
                <Image
                  src={UserIcon}
                  alt="유저 아이콘"
                  width={20}
                  height={20}
                />
                <p className="text-sm tracking-[-2.5%] text-font-baseBlack font-normal">
                  {gathering.participantCount}/{gathering.capacity}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[6px]">
              <Image
                src={AddressIcon}
                alt="주소 아이콘"
                width={20}
                height={20}
              />
              <p className="text-sm tracking-[2.5%] text-font-baseBlack font-normal">
                {gathering.address}
              </p>
            </div>

            <div className="flex items-center gap-[6px]">
              <Image
                src={LightbulbIcon}
                alt="전구 아이콘"
                width={20}
                height={20}
              />
              <div className="flex items-center gap-2">
                <p className="text-sm tracking-[-2.5%] text-font-baseBlack font-semibold">
                  {gathering.playtime}분
                </p>
                <span className="text-sm tracking-[-2.5%] text-font-disabled font-normal">
                  •
                </span>
                <p className="text-sm tracking-[-2.5%] text-font-baseBlack font-semibold">
                  {gathering.level}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
