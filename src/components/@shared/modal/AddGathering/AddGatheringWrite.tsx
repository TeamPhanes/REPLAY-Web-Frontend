import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface FormValues {
  name: string;
  themeId: number;
  content: string;
  isIndividual: string;
  price: number;
  dateTime: Date;
  registrationStart: Date;
  registrationEnd: Date;
  capacity: number;
}

interface AddGatheringWriteProps {
  content: string;
  contentChange: (value: string) => void;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export default function AddGatheringWrite({
  content,
  contentChange,
  register,
  errors,
}: AddGatheringWriteProps) {
  return (
    <>
      <div className="mb-6 flex items-center gap-4 md:mb-0">
        <p className="text-2xl/[34px] font-normal tracking-[-2.5%] text-font-baseBlack">
          모임 소개글
        </p>
        {errors.content && (
          <p className="w-36 text-sm text-red-500">{errors.content.message}</p>
        )}
      </div>

      <textarea
        {...register('content', { required: '내용 입력은 필수 입니다.' })}
        placeholder={`모임에 대한 소개글을 써보세요.

모임에 대한 변동 가격을 써주면 모임 참여시 많은 도움이 되요.
ex) 인당 18,000원, 인당 20,000원이 예상됩니다.`}
        className={`${errors.content ? 'border-error' : 'border-line-secondLightGray'} h-60 w-full resize-none rounded-[4px] border-[1px] bg-card-white p-4 text-base text-font-baseBlack outline-none xl:w-[454px]`}
        value={content}
        onChange={(e) => contentChange(e.target.value)}
      />
    </>
  );
}
