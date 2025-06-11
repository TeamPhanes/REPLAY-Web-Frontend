interface PostReviewContentProps {
  content: string;
  contentChange: (value: string) => void;
}
export default function PostReviewContent({
  content,
  contentChange,
}: PostReviewContentProps) {
  return (
    <div className="mt-10">
      <textarea
        placeholder="최소 10자 이상 리뷰를 적어주세요."
        value={content}
        onChange={(e) => contentChange(e.target.value)}
        className="w-full h-[178px] resize-none rounded-[20px] border-[1px] border-spot bg-homeFont p-5 outline-none text-basefont"
      />
    </div>
  );
}
