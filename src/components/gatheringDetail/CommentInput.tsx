export default function CommentInput() {
  return (
    <div className="flex h-[293px] items-center justify-center">
      <div className="relative h-[189px] w-[1000px] rounded-[30px] border-[1px] border-grayFont bg-white p-5">
        <p className="text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont">
          닉네임
        </p>
        <textarea
          className="mt-1 h-[70px] w-[960px] resize-none text-2xl/[34px] font-normal tracking-[-2.5%] text-basefont focus:outline-none"
          placeholder="댓글을 남겨보세요."
        />
        <button
          type="button"
          className="absolute bottom-5 right-5 rounded-2xl bg-commentButton px-4 py-1 text-2xl/[34px] font-semibold tracking-[-2.5%] text-white"
        >
          등록
        </button>
      </div>
    </div>
  );
}
