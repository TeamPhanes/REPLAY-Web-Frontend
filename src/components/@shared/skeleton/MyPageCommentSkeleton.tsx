interface MyPageCommentSkeletonProps {
  count?: number;
  className?: string;
}

export default function MyPageCommentSkeleton({
  count = 6,
  className,
}: MyPageCommentSkeletonProps) {
  return (
    <div className={`${className} grid grid-cols-1 gap-3`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          role="status"
          className="animate-pulse flex flex-col gap-3 bg-card-white px-[30px] py-5 border-[1px] border-line-lightGray"
        >
          <div className="flex justify-between items-center h-6 w-full gap-2">
            <div className="bg-white w-32 h-6" />
            <div className="bg-white w-14 h-6" />
          </div>
          <div className="w-full bg-white h-[34px]" />
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  );
}
