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
      className="w-full h-[415px] resize-none rounded-lg border-[1px] border-line-secondLightGray bg-white p-4 outline-none text-font-baseBlack"
    />
  );
}
