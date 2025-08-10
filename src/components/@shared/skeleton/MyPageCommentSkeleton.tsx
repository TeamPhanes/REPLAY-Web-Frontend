interface MyPageCommentSkeletonProps {
  count?: number;
  className?: string;
}

export default function MyPageCommentSkeleton({
  count = 6,
  className,
}: MyPageCommentSkeletonProps) {
  return (
    <div className={`${className} grid grid-cols-1 md:grid-cols-3 gap-5`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          role="status"
          className="animate-pulse flex rounded-3xl md:w-[421px] h-[180px] p-5 bg-card flex-col gap-2"
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
