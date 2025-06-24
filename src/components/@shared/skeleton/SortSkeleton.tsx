interface SortSkeletonProps {
  className?: string;
}

export default function SortSkeleton({ className }: SortSkeletonProps) {
  return (
    <div className={`${className}`}>
      <div
        role="status"
        className="animate-pulse flex w-full h-full justify-between"
      >
        <div className="bg-card w-16 rounded-3xl" />
        <div className="bg-card w-16 rounded-3xl" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
