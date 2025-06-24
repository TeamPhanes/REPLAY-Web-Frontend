interface LineSkeletonProps {
  className?: string;
}

export default function LineSkeleton({ className }: LineSkeletonProps) {
  return (
    <div className={`${className}`}>
      <div
        role="status"
        className="animate-pulse flex w-full h-full justify-between"
      >
        <div className="bg-card w-28 rounded-3xl" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
