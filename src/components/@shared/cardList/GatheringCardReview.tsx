import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tag from '@/components/@shared/cardList/Tag';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import { usePostGatheringLike } from '@/hooks/reactQuery/usePostGatheringLike';
import { VisitGatheringDTO } from '@/types/gathering/gathering.type';
import { yearMonthDayHourTime } from '@/utils/dateChange';
import AddressIcon from '@/public/icons/cardList/address_icon.svg';
import CalendarIcon from '@/public/icons/cardList/calendar_icon.svg';
import HeartFull from '@/public/icons/cardList/heart_full.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';
import LightbulbIcon from '@/public/icons/cardList/lightbulb_icon.svg';
import UserIcon from '@/public/icons/cardList/user_icon.svg';

interface GatheringCardReviewProps {
  gathering: VisitGatheringDTO['get'];
}

export default function GatheringCardReview({
  gathering,
}: GatheringCardReviewProps) {
  const [isLiked, setIsLiked] = useState(gathering.isLiked);
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
  return (
    <div
      key={gathering.id}
      className="relative flex h-[728px] w-[335px] flex-col items-start rounded-[4px] bg-card-white p-5 md:h-[352px] md:w-[630px] md:flex-row"
    >
      <Link href={`/gathering/${gathering.id}`} className="w-full md:w-auto">
        <Image
          src={gathering.image}
          alt={gathering.name}
          width={212}
          height={212}
          quality={100}
          className="h-[360px] w-full rounded-[4px] md:h-[212px] md:w-[212px]"
        />
      </Link>
      <div className="bg-card absolute right-10 top-10 flex flex-col rounded-[4px] p-1 md:right-5 md:top-auto md:p-0">
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
                  {gathering.participants.length}/{gathering.capacity}
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
      <div className="absolute bottom-5 flex flex-col gap-1">
        <p className="text-base font-semibold tracking-[-2.5%] text-basefont">
          참여한 분들
        </p>
        <div className="flex gap-2">
          {gathering.participants.map((user) => (
            <Image
              key={user.nickname}
              src={user.profileImage}
              alt={user.nickname}
              width={60}
              height={60}
              className="h-11 w-11 rounded-full border-2 border-mainBlue shadow-md md:h-[60px] md:w-[60px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
