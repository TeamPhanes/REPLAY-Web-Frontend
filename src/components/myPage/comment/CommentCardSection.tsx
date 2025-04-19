import { mockMyComments } from '@/data/mockComments';
import { HourTime, periodFullYearMonthDay } from '@/utils/dateChange';

export default function CommentCardSection() {
  return (
    <>
      {Object.entries(mockMyComments).map(([date, comments]) => (
        <div key={date} className="mt-8 flex flex-col gap-2">
          <h2 className="text-2xl/[34px] font-normal tracking-[-2.5%] text-white">
            {periodFullYearMonthDay(date)}
          </h2>
          <div className="grid grid-cols-3 gap-x-2 gap-y-5">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="flex h-[180px] w-[421px] flex-col gap-1 rounded-3xl bg-spot p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-normal tracking-[-2.5%] text-homeFont">
                    {comment.gatheringName}
                  </p>
                  <p className="text-base font-normal tracking-[-2.5%] text-homeFont">
                    {HourTime(comment.dateTime)}
                  </p>
                </div>
                <p className="text-2xl/[34px] font-normal tracking-[-2.5%] text-basefont">
                  {comment.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
