interface SortSkeletonProps {
  className?: string;
}

export default function SortSkeleton({ className }: SortSkeletonProps) {
  return (
    <div className={`${className}`}>
      <div
        role="status"
        className="flex h-full w-full animate-pulse justify-between"
      >
        <div className="w-16 rounded-3xl bg-card-white" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
