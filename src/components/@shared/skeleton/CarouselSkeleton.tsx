interface CarouselSkeletonProps {
  className?: string;
}

export default function CarouselSkeleton({ className }: CarouselSkeletonProps) {
  return (
    <div className={`${className}`}>
      <div role="status" className="relative mt-10 animate-pulse md:mt-24">
        <div className="h-8 w-32 bg-card-white" />
        <div className="mt-4 flex gap-4">
          <div className="h-[260px] w-[173px] bg-card-white" />
          <div className="h-[260px] w-[173px] bg-card-white" />
          <div className="h-[260px] w-[173px] bg-card-white" />
          <div className="h-[260px] w-[173px] bg-card-white" />
          <div className="h-[260px] w-[173px] bg-card-white" />
          <div className="h-[260px] w-[173px] bg-card-white" />
          <div className="h-[260px] w-[173px] bg-card-white" />
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
