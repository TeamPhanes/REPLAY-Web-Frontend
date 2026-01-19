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
          className="flex animate-pulse flex-col gap-3 border-[1px] border-line-lightGray bg-card-white px-[30px] py-5"
        >
          <div className="flex h-6 w-full items-center justify-between gap-2">
            <div className="h-6 w-32 bg-white" />
            <div className="h-6 w-14 bg-white" />
          </div>
          <div className="h-[34px] w-full bg-white" />
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  );
}
