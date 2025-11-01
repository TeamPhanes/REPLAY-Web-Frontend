import { commentTypeList } from '@/constants/mypage/typeList';

interface CommentSortMenuProps {
  sort: string;
  setSort: (value: string) => void;
}

export default function CommentSortMenu({
  sort,
  setSort,
}: CommentSortMenuProps) {
  return (
    <div className="flex items-center gap-2 p-5">
      {[...commentTypeList].reverse().map((option) => (
        <button
          key={option.value}
          type="button"
          className={`text-2xl/[34px] font-semibold tracking-[-2.5%] ${sort === option.value ? 'text-font-baseBlack' : 'text-font-disabled'}`}
          onClick={() => setSort(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
