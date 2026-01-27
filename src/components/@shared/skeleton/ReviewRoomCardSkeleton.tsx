interface ReviewRoomCardSkeletonProps {
  count?: number;
  className?: string;
}

export default function ReviewRoomCardSkeleton({
  count = 10,
  className,
}: ReviewRoomCardSkeletonProps) {
  return (
    <div
      className={`${className} mt-6 grid grid-cols-1 place-items-center gap-5`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          role="status"
          className="flex h-[964px] w-[335px] animate-pulse flex-col rounded-md bg-card-white p-5 md:h-[520px] md:w-[740px] md:flex-row xl:h-[252px] xl:w-full"
        >
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  );
}
