interface ReviewRoomCardSkeletonProps {
  count?: number;
  className?: string;
}

export default function ReviewRoomCardSkeleton({
  count = 10,
  className,
}: ReviewRoomCardSkeletonProps) {
  return (
    <div className={`${className} mt-6 grid grid-cols-1 gap-5`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          role="status"
          className="flex animate-pulse flex-col rounded-3xl bg-card-white p-5 md:h-[252px] md:flex-row"
        >
          <div className="flex h-[212px] w-[212px] shrink-0 items-center justify-center rounded-3xl bg-white">
            <svg
              className="text-card h-10 w-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
          <div className="mt-5 flex h-[212px] w-[322px] flex-col justify-between md:ml-5 md:mt-auto">
            <div className="flex justify-between">
              <div className="h-8 w-[70px] rounded-full bg-white" />
              <div className="h-8 w-[70px] rounded-full bg-white" />
            </div>

            <div className="flex flex-col gap-[2px]">
              <div className="h-[34px] w-full bg-white" />
              <div className="h-[18px] w-full bg-white" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-white" />
                <div className="h-6 w-40 bg-white" />
              </div>
              <div className="h-6 w-full bg-white" />
              <div className="flex gap-2">
                <div className="h-6 w-20 bg-white" />
                <div className="h-6 w-48 bg-white" />
              </div>
            </div>
          </div>
          <div className="ml-10 hidden w-[624px] flex-col gap-2 md:flex">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="h-6 w-16 bg-white" />
                <div className="h-6 w-40 bg-white" />
                <div className="h-6 w-full bg-white" />
              </div>
              <div className="h-6 w-full bg-white" />
            </div>
            <div className="flex gap-2">
              <div className="flex h-[156px] w-[156px] shrink-0 items-center justify-center rounded-3xl bg-white">
                <svg
                  className="text-card h-10 w-10"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
              <div className="h-full w-full bg-white" />
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  );
}
