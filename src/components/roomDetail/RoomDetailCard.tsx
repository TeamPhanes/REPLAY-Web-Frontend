import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Tag from '@/components/@shared/cardList/Tag';
import TitleAndSpot from '@/components/@shared/cardList/TitleAndSpot';
import StorySection from '@/components/roomDetail/StorySection';
import { usePostThemeLike } from '@/hooks/reactQuery/usePostThemeLike';
import { usePostThemeMark } from '@/hooks/reactQuery/usePostThemeMark';
import { RoomDetailDTO } from '@/types/room/roomDetail.types';
import AddressIcon from '@/public/icons/cardList/address_gray_icon.svg';
import BookmarkFull from '@/public/icons/cardList/bookmark_full.svg';
import BookmarkLine from '@/public/icons/cardList/bookmark_line.svg';
import CopyIcon from '@/public/icons/cardList/copy_icon.svg';
import ExternalIcon from '@/public/icons/cardList/external_icon.svg';
import HeartFull from '@/public/icons/cardList/heart_full.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';
import LinkIcon from '@/public/icons/cardList/link_icon.svg';
import PhoneIcon from '@/public/icons/cardList/phone_icon.svg';
import ShareIcon from '@/public/icons/cardList/share_icon.svg';

interface RoomDetailCardProps {
  data: RoomDetailDTO['get'];
}

export default function RoomDetailCard({ data }: RoomDetailCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isVisited, setIsVisited] = useState(false);
  const { likesMutation } = usePostThemeLike();
  const { marksMutation } = usePostThemeMark();
  const levelList = {
    HARD: '어려움',
    NORMAL: '보통',
    EASY: '쉬움',
  };

  const handleLikeButtonClick = (userAction: 'LIKE_POST' | 'UNLIKE_POST') => {
    setIsLiked(userAction === 'LIKE_POST');
    likesMutation.mutate({
      themeId: data.id,
      userAction,
    });
  };

  const handleMarkButtonClick = (userAction: 'MARK_POST' | 'UNMARK_POST') => {
    setIsVisited(userAction === 'MARK_POST');
    marksMutation.mutate({
      themeId: data.id,
      userAction,
    });
  };

  const handleShareButtonClick = () => {
    window.navigator.clipboard.writeText(window.location.href);
    toast.info('주소 링크가 복사되었습니다.', { toastId: 'url-copy' });
  };

  const handleTelePhoneButtonClick = () => {
    window.navigator.clipboard.writeText(data.phone);
    toast.info('매장 전화번호가 복사되었습니다.', { toastId: 'phone-copy' });
  };

  useEffect(() => {
    if (data) {
      setIsLiked(data.isLiked);
      setIsVisited(data.isVisited);
    }
  }, [data]);

  return (
    <div className="relative flex flex-col items-center md:flex-row md:justify-between md:gap-2">
      <Image
        src={data.image}
        alt={data.title}
        width={145}
        height={218}
        quality={100}
        className="h-[360px] w-full shrink-0 rounded-[4px] md:h-[400px] md:w-[295px] xl:h-[500px] xl:w-[413px]"
      />
      <div className="w-full rounded-b-[6px] bg-card-white p-5 md:relative md:min-w-[445px] md:rounded-[6px] xl:h-[500px] xl:w-[849px]">
        <div className="absolute right-0 top-0 flex gap-3 rounded-l-md rounded-t-none bg-card-white p-1 md:right-5 md:top-auto md:rounded-none md:p-0 xl:gap-[18px]">
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
              width={40}
              height={40}
              className="h-7 w-7 md:h-10 md:w-10"
            />
          </button>
          <button
            type="button"
            className={`transition-transform duration-300 active:scale-90 ${
              isVisited ? 'animate-pop' : ''
            }`}
            onClick={() =>
              handleMarkButtonClick(isVisited ? 'UNMARK_POST' : 'MARK_POST')
            }
          >
            <Image
              src={isVisited ? BookmarkFull : BookmarkLine}
              alt="bookmark"
              width={40}
              height={40}
              className="h-7 w-7 md:h-10 md:w-10"
            />
          </button>
          <button
            type="button"
            className="transition-transform duration-300 active:scale-90"
            onClick={handleShareButtonClick}
          >
            <Image
              src={ShareIcon}
              alt="share"
              width={40}
              height={40}
              className="h-7 w-7 md:h-10 md:w-10"
            />
          </button>
        </div>

        <Tag tag={data.genres} isDetail />

        <div className="mt-8">
          <TitleAndSpot
            themeName={data.title}
            cafe={data.cafeName}
            spot={data.spotName}
            isDetail
          />
        </div>
        <div className="mt-8 flex items-center text-center xl:mt-16">
          <StorySection story={data.story} />
          <span className="hidden h-36 w-[1px] bg-line-lightGray xl:block" />
          <div className="flex w-full flex-col">
            <div className="flex items-center justify-center gap-8 md:px-10 xl:justify-between xl:gap-0">
              <div className="flex flex-col gap-[6px]">
                <p className="text-xl font-semibold tracking-[-2.5%] text-font-baseBlack md:text-[28px]/[38px]">
                  {levelList[data.level as keyof typeof levelList]}
                </p>
                <p className="text-base font-light tracking-[-2.5%] text-font-baseBlack">
                  난이도
                </p>
              </div>
              <span className="h-5 w-[1px] bg-line-lightGray" />
              <div className="flex flex-col gap-[6px]">
                <p className="text-xl font-semibold tracking-[-2.5%] text-font-baseBlack md:text-[28px]/[38px]">
                  {data.playtime}분
                </p>
                <p className="text-base font-light tracking-[-2.5%] text-font-baseBlack">
                  시간대
                </p>
              </div>
              <span className="h-5 w-[1px] bg-line-lightGray" />
              <div className="flex flex-col gap-[6px]">
                <p className="text-xl font-semibold tracking-[-2.5%] text-font-baseBlack md:text-[28px]/[38px]">
                  {data.minPlayer}~{data.maxPlayer}명
                </p>
                <p className="text-base font-light tracking-[-2.5%] text-font-baseBlack">
                  인원
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between xl:mt-10 xl:pl-5">
              <div className="flex items-center gap-2">
                <Image
                  src={LinkIcon}
                  alt="링크 아이콘"
                  width={24}
                  height={24}
                />
                <p className="max-w-64 truncate text-base font-normal tracking-[-2.5%] text-font-baseBlack md:max-w-80 md:text-lg/[26px]">
                  {data.link}
                </p>
              </div>
              <a href={data.link} target="tap">
                <Image
                  src={ExternalIcon}
                  alt="공식 홈페이지 바로가기"
                  width={24}
                  height={24}
                  className="shrink-0"
                />
              </a>
            </div>

            <div className="mt-3 flex items-center justify-between xl:pl-5">
              <div className="flex items-center gap-2">
                <Image
                  src={PhoneIcon}
                  alt="연락처 아이콘"
                  width={24}
                  height={24}
                />
                <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack md:text-lg/[26px]">
                  {data.phone}
                </p>
              </div>
              <button type="button" onClick={handleTelePhoneButtonClick}>
                <Image
                  src={CopyIcon}
                  alt="전화번호 복사하기"
                  width={24}
                  height={24}
                  className="shrink-0"
                />
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between xl:pl-5">
              <div className="flex items-center gap-2">
                <Image
                  src={AddressIcon}
                  alt="링크 아이콘"
                  width={24}
                  height={24}
                />
                <p className="truncate text-base font-normal tracking-[-2.5%] text-font-baseBlack md:text-lg/[26px]">
                  {data.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
