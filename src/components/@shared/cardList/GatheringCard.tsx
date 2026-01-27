import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  gathering: GatheringDTO['get'];
}

export default function GatheringCard({
  favoriteCheck,
  gathering,
}: GatheringCardProps) {
  const [isLiked, setIsLiked] = useState(
    favoriteCheck ? true : gathering.isLiked
  );
  const { likesMutation } = usePostGatheringLike();
  const levelList = {
    HARD: '어려움',
    NORMAL: '보통',
    EASY: '쉬움',
  };
  const handleLikeButtonClick = (userAction: 'LIKE_POST' | 'UNLIKE_POST') => {
    setIsLiked(userAction === 'LIKE_POST');
    likesMutation.mutate({
      gatheringId: gathering.id,
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
      key={gathering.id}
      className="relative flex w-[335px] flex-col items-start rounded-[4px] bg-card-white p-5 transition-all hover:scale-[102%] md:w-[630px] md:flex-row"
    >
      <Link href={`/gathering/${gathering.id}`} className="w-full md:w-[145px]">
        {gathering.image !== null ? (
          <Image
            src={gathering.image}
            alt={gathering.title}
            width={145}
            height={218}
            quality={100}
            className="h-[360px] w-full rounded-[4px] md:h-[218px] md:w-[145px]"
          />
        ) : (
          <div className="h-[218px] w-[145px] rounded-[4px] bg-gray-300" />
        )}
      </Link>
      <div className="absolute right-5 top-auto flex gap-3 rounded-l-md rounded-t-none bg-card-white p-1 md:p-0">
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
      <Link href={`/gathering/${gathering.id}`} className="w-full md:w-auto">
        <div className="mt-5 flex min-h-[212px] flex-col justify-between md:ml-5 md:mt-0 md:min-w-[424px]">
          <div className="flex flex-col gap-3">
            <Tag tag={gathering.genres} />
            <TitleAndSpot themeName={gathering.name} cafe={gathering.title} />
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
                <p className="text-sm font-normal tracking-[-2.5%] text-font-baseBlack">
                  {yearMonthDayHourTime(gathering.date)}
                </p>
              </div>
              <div className="flex items-center gap-[6px]">
                <Image
                  src={UserIcon}
                  alt="유저 아이콘"
                  width={20}
                  height={20}
                />
                <p className="text-sm font-normal tracking-[-2.5%] text-font-baseBlack">
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
              <p className="text-sm font-normal tracking-[2.5%] text-font-baseBlack">
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
                <p className="text-sm font-semibold tracking-[-2.5%] text-font-baseBlack">
                  {gathering.playtime}분
                </p>
                <span className="text-sm font-normal tracking-[-2.5%] text-font-disabled">
                  •
                </span>
                <p className="text-sm font-semibold tracking-[-2.5%] text-font-baseBlack">
                  {levelList[gathering.level as keyof typeof levelList]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
