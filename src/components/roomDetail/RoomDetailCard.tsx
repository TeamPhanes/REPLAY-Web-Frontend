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
    <div className="flex flex-col md:flex-row justify-between gap-2">
      <Image
        src={data.image}
        alt={data.title}
        width={413}
        height={500}
        quality={100}
        className="w-full h-[360px] md:w-[413px] md:h-[500px] rounded-[6px]"
      />
      <div className="relative md:h-[500px] md:w-[849px] rounded-[6px] p-5 bg-card-white">
        <div className="absolute top-[-340px] md:top-auto rounded-[30px] p-1 md:p-0 md:rounded-none right-5 flex gap-[18px]">
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
            />
          </button>
          <button
            type="button"
            className="transition-transform duration-300 active:scale-90"
            onClick={handleShareButtonClick}
          >
            <Image src={ShareIcon} alt="share" width={40} height={40} />
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
        <div className="mt-16 flex items-center text-center">
          <StorySection story={data.story} />
          <span className="bg-line-lightGray h-36 w-[1px]" />
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between px-10">
              <div className="flex flex-col gap-[6px]">
                <p className="text-[28px]/[38px] tracking-[-2.5%] text-font-baseBlack font-semibold">
                  {levelList[data.level as keyof typeof levelList]}
                </p>
                <p className="text-base tracking-[-2.5%] text-font-baseBlack font-light">
                  난이도
                </p>
              </div>
              <span className="bg-line-lightGray h-5 w-[1px]" />
              <div className="flex flex-col gap-[6px]">
                <p className="text-[28px]/[38px] tracking-[-2.5%] text-font-baseBlack font-semibold">
                  {data.playtime}분
                </p>
                <p className="text-base tracking-[-2.5%] text-font-baseBlack font-light">
                  시간대
                </p>
              </div>
              <span className="bg-line-lightGray h-5 w-[1px]" />
              <div className="flex flex-col gap-[6px]">
                <p className="text-[28px]/[38px] tracking-[-2.5%] text-font-baseBlack font-semibold">
                  {data.minPlayer}~{data.maxPlayer}명
                </p>
                <p className="text-base tracking-[-2.5%] text-font-baseBlack font-light">
                  인원
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pl-5 mt-10">
              <div className="flex items-center gap-2">
                <Image
                  src={LinkIcon}
                  alt="링크 아이콘"
                  width={24}
                  height={24}
                />
                <p className="text-lg/[26px] tracking-[-2.5%] text-font-baseBlack font-normal max-w-80 truncate">
                  {data.link}
                </p>
              </div>
              <a href={data.link} target="tap">
                <Image
                  src={ExternalIcon}
                  alt="공식 홈페이지 바로가기"
                  width={24}
                  height={24}
                />
              </a>
            </div>

            <div className="flex items-center justify-between pl-5 mt-3">
              <div className="flex items-center gap-2">
                <Image
                  src={PhoneIcon}
                  alt="연락처 아이콘"
                  width={24}
                  height={24}
                />
                <p className="text-lg/[26px] tracking-[-2.5%] text-font-baseBlack font-normal">
                  {data.phone}
                </p>
              </div>
              <button type="button" onClick={handleTelePhoneButtonClick}>
                <Image
                  src={CopyIcon}
                  alt="전화번호 복사하기"
                  width={24}
                  height={24}
                />
              </button>
            </div>

            <div className="flex items-center justify-between pl-5 mt-3">
              <div className="flex items-center gap-2">
                <Image
                  src={AddressIcon}
                  alt="링크 아이콘"
                  width={24}
                  height={24}
                />
                <p className="text-lg/[26px] tracking-[-2.5%] text-font-baseBlack font-normal truncate">
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
