import CheckList from '@/components/@shared/cardList/CheckList';
import { ReviewDTO } from '@/types/review/review.type';

interface ThemeLevelStoryContainerProps {
  dataList: ReviewDTO['get'];
}

export default function ThemeLevelStoryContainer({
  dataList,
}: ThemeLevelStoryContainerProps) {
  const { themeReview, levelReview, storyReview } = dataList;

  return (
    <div className="flex justify-between mt-3">
      <CheckList
        title="테마"
        contentOne="좋아요"
        contentTwo="보통"
        contentThree="별로예요"
        check={themeReview}
      />
      <CheckList
        title="난이도"
        contentOne="좋아요"
        contentTwo="보통"
        contentThree="별로예요"
        check={levelReview}
      />
      <CheckList
        title="스토리"
        contentOne="좋아요"
        contentTwo="보통"
        contentThree="별로예요"
        check={storyReview}
      />
    </div>
  );
}
