interface CarouselSkeletonProps {
  className?: string;
}

export default function CarouselSkeleton({ className }: CarouselSkeletonProps) {
  return (
    <div className={`${className}`}>
      <div role="status" className="animate-pulse relative mt-10 md:mt-24">
        <div className="bg-card-white w-32 h-8" />
        <div className="flex gap-4 mt-4">
          <div className="bg-card-white w-[173px] h-[260px]" />
          <div className="bg-card-white w-[173px] h-[260px]" />
          <div className="bg-card-white w-[173px] h-[260px]" />
          <div className="bg-card-white w-[173px] h-[260px]" />
          <div className="bg-card-white w-[173px] h-[260px]" />
          <div className="bg-card-white w-[173px] h-[260px]" />
          <div className="bg-card-white w-[173px] h-[260px]" />
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
