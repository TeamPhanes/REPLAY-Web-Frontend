interface CardSkeletonProps {
  count?: number;
  className?: string;
}

export default function CardSkeleton({
  count = 10,
  className,
}: CardSkeletonProps) {
  return (
    <div className={`${className} grid grid-cols-1 md:grid-cols-2 gap-5`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          role="status"
          className="animate-pulse flex md:flex-row flex-col rounded-3xl md:w-[630px] md:h-[252px] p-5 bg-card"
        >
          <div className="flex items-center justify-center w-[280px] h-[280px] md:w-[212px] md:h-[212px] bg-white rounded-3xl shrink-0">
            <svg
              className="w-10 h-10 text-card"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="md:ml-5 mt-5 md:mt-0 flex h-[212px] w-[322px] flex-col justify-between">
            <div className="flex justify-between">
              <div className="rounded-full bg-white w-[70px] h-8" />
              <div className="rounded-full bg-white w-[70px] h-8" />
            </div>

            <div className="flex flex-col gap-[2px]">
              <div className="w-full h-[34px] bg-white" />
              <div className="w-full h-[18px] bg-white" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="w-16 h-6 bg-white" />
                <div className="w-40 h-6 bg-white" />
              </div>
              <div className="w-full h-6 bg-white" />
              <div className="flex gap-2">
                <div className="w-20 h-6 bg-white" />
                <div className="w-48 h-6 bg-white" />
              </div>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  );
}
