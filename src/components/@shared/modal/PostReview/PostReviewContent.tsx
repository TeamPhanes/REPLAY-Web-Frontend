interface PostReviewContentProps {
  content: string;
  contentChange: (value: string) => void;
}
export default function PostReviewContent({
  content,
  contentChange,
}: PostReviewContentProps) {
  return (
    <textarea
      placeholder="리뷰를 작성해주세요."
      value={content}
      onChange={(e) => contentChange(e.target.value)}
      className="h-[415px] w-full resize-none rounded-lg border-[1px] border-line-secondLightGray bg-white p-4 text-font-baseBlack outline-none"
    />
  );
}
