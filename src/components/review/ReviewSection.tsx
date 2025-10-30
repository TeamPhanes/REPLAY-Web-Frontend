import { useState } from 'react';
import Image from 'next/image';
import { mockReviews } from '@/data/mockReviews';
import Pagination from '@/components/@shared/pagination/Pagination';
import ProgressBar from '@/components/@shared/progressBar/ProgressBar';
import Rating from '@/components/@shared/rating/Rating';
import ReviewContent from '@/components/review/ReviewContent';
import ReviewLikeButton from '@/components/review/ReviewLikeButton';
import ReviewUser from '@/components/review/ReviewUser';
import ThemeLevelStoryContainer from '@/components/review/ThemeLevelStoryContainer';
import { usePagination } from '@/hooks/usePagination';
import { ReviewDTO } from '@/types/review/review.type';
import { periodFullYearMonthDay } from '@/utils/dateChange';
import LightbulbIcon from '@/public/icons/cardList/lightbulb_gray_icon.svg';
import TrophyIcon from '@/public/icons/cardList/trophy_gray_icon.svg';
import UsersIcon from '@/public/icons/cardList/users_gray_icon.svg';
import SearchIcon from '@/public/icons/search/dark_search.svg';

export default function ReviewSection() {
  const [page, setPage] = useState(0);
  const totalItems = mockReviews ? mockReviews.totalCount : 0;
  const { totalPages } = usePagination(page, totalItems);

  if (mockReviews.data.length === 0)
    return (
      <div className="flex flex-col justify-center items-center md:w-xl h-[364px] rounded-lg bg-card-white gap-4 mt-6">
        <Image src={SearchIcon} alt="검색 아이콘" width={80} height={80} />
        <p className="font-normal text-2xl/[34px] tracking-[-2.5%] text-font-baseBlack">
          리뷰를 찾지 못했어요.
        </p>
      </div>
    );
  return (
    <div className="mt-6 bg-card-white rounded-lg">
      <div className="flex justify-between items-center p-20 border-b-4 border-line-lightGray">
        <div className="flex flex-col justify-between text-center h-[174px]">
          <p className="text-lg/[26px] tracking-[-2.5%] text-font-baseBlack font-normal">
            사용자 총 평점
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-5xl/[62px] tracking-[-2.5%] text-font-baseBlack font-semibold">
              {mockReviews.averageScore}
            </p>
            <Rating
              rating={mockReviews.averageScore}
              width={272}
              height={48}
              type="Review"
            />
          </div>
        </div>
        <span className="w-[1px] h-[120px] bg-line-secondLightGray" />
        <div className="flex flex-col justify-between h-[174px] text-center">
          <p className="text-lg/[26px] tracking-[-2.5%] text-font-baseBlack font-normal">
            생성된 모임
          </p>
          <p className="text-5xl/[62px] tracking-[-2.5%] text-font-baseBlack font-semibold py-10">
            {mockReviews.countGatherings}개
          </p>
        </div>
        <span className="w-[1px] h-[120px] bg-line-secondLightGray" />
        <div className="flex flex-col justify-between h-[174px] text-center">
          <p className="text-lg/[26px] tracking-[-2.5%] text-font-baseBlack font-normal">
            리뷰 평점 수치
          </p>
          <div className="flex gap-1">
            {mockReviews.score.map((count: number, index: number) => (
              <div key={index} className="flex items-center gap-2 flex-col">
                <p className="flex-shrink-0 text-xs/[18px] font-normal tracking-[-2.5%] text-font-secondBlack">
                  {count.toLocaleString()}개
                </p>
                <ProgressBar value={count} max={mockReviews.scoreCount} />
                <p className="flex-shrink-0 text-xs/[18px] font-normal tracking-[-2.5%] text-font-secondBlack">
                  {5 - index}점
                </p>
              </div>
            ))}
          </div>
        </div>
        <span className="w-[1px] h-[120px] bg-line-secondLightGray" />
        <div className="flex flex-col h-[174px] gap-3 text-center">
          <p className="text-lg/[26px] tracking-[-2.5%] text-font-baseBlack font-normal">
            사용자 평가
          </p>
          <div className="flex items-center justify-between w-44 mt-2">
            <p className="text-sm tracking-[-2.5%] text-font-thirdBlack font-semibold px-[6px]">
              테마
            </p>
            {mockReviews.theme.map((data) => {
              return (
                <p
                  key={data}
                  className="text-base tracking-[-2.5%] text-brand-main500 font-normal"
                >
                  {data}
                </p>
              );
            })}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm tracking-[-2.5%] text-font-thirdBlack font-semibold">
              난이도
            </p>
            {mockReviews.level.map((data) => {
              return (
                <p
                  key={data}
                  className="text-base tracking-[-2.5%] text-brand-main500 font-normal"
                >
                  {data}
                </p>
              );
            })}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm tracking-[-2.5%] text-font-thirdBlack font-semibold">
              스토리
            </p>
            {mockReviews.story.map((data) => {
              return (
                <p
                  key={data}
                  className="text-base tracking-[-2.5%] text-brand-main500 font-normal"
                >
                  {data}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      {mockReviews.data.map((review, index) => (
        <div key={index} className="relative p-10">
          <div className="flex flex-row items-center relative">
            <Image
              src={review.user.image}
              alt="유저 이미지"
              width={60}
              height={60}
              className="w-[60px] h-[60px] rounded-full bg-line-lightGray"
            />
            <div className="flex flex-col gap-3 ml-5">
              <Rating
                rating={review.rating}
                width={120}
                height={24}
                type="Review"
              />
              <div className="flex items-center gap-2">
                <p className="text-base tracking-[-2.5%] text-font-baseBlack font-normal">
                  {review.user.name}
                </p>
                <span className="w-[1px] h-3 bg-font-baseBlack" />
                <p className="text-base tracking-[-2.5%] text-font-baseBlack font-normal">
                  {periodFullYearMonthDay(review.createdAt)}
                </p>
                <span className="w-[1px] h-3 bg-font-baseBlack" />
                <button
                  type="button"
                  className="text-base tracking-[-2.5%] text-font-thirdBlack font-normal"
                >
                  신고
                </button>
              </div>
            </div>
            <ReviewLikeButton
              totalLikes={review.totalLikes}
              isLiked={review.isLiked}
              id={review.id}
            />
          </div>

          <div className="flex p-4 items-center gap-[60px]">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <p className="px-2 py-1 text-sm tracking-[-2.5%] text-font-disabled font-semibold">
                  테마
                </p>
                <p className="text-base tracking-[-2.5%] text-brand-main500 font-semibold">
                  {review.themeReview}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="px-2 py-1 text-sm tracking-[-2.5%] text-font-disabled font-semibold">
                  난이도
                </p>
                <p className="text-base tracking-[-2.5%] text-brand-main500 font-semibold">
                  {review.levelReview}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="px-2 py-1 text-sm tracking-[-2.5%] text-font-disabled font-semibold">
                  스토리
                </p>
                <p className="text-base tracking-[-2.5%] text-brand-main500 font-semibold">
                  {review.storyReview}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Image
                  src={LightbulbIcon}
                  alt="힌트 아이콘"
                  width={24}
                  height={24}
                />
                <p className="text-base tracking-[-2.5%] text-font-baseBlack font-normal">
                  {review.hint}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={UsersIcon}
                  alt="참여 인원 아이콘"
                  width={24}
                  height={24}
                />
                <p className="text-base tracking-[-2.5%] text-font-baseBlack font-normal">
                  {review.playUser}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={TrophyIcon}
                  alt="트로피 아이콘"
                  width={24}
                  height={24}
                />
                <p className="text-base tracking-[-2.5%] text-font-baseBlack font-normal">
                  {review.success ? '성공' : '실패'}
                </p>
              </div>
            </div>
          </div>
          <ReviewContent content={review.content} image={review.image} />
        </div>
      ))}
      <div className="pb-10 border-t-[1px] border-line-lightGray">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onChange={setPage}
        />
      </div>
    </div>
  );
}
