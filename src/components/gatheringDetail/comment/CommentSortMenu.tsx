export default function CommentSortMenu() {
  return (
    <div className="flex items-center gap-2 p-5">
      <button
        type="button"
        className="text-2xl/[34px] font-normal tracking-[-2.5%] text-basefont"
      >
        등록순
      </button>
      <button
        type="button"
        className="text-2xl/[34px] font-normal tracking-[-2.5%] text-spot"
      >
        최신순
      </button>
    </div>
  );
}
