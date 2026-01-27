interface ReviewGatheringCardSkeletonProps {
  count?: number;
  className?: string;
}

export default function ReviewGatheringCardSkeleton({
  count = 10,
  className,
}: ReviewGatheringCardSkeletonProps) {
  return (
    <div
      className={`${className} grid grid-cols-1 place-items-center gap-5 xl:grid-cols-2`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          role="status"
          className="relative flex h-[728px] w-[335px] animate-pulse flex-col rounded-[4px] bg-card-white p-5 md:h-[352px] md:w-[630px] md:flex-row"
        >
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  );
}
