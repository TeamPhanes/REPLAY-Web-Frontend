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
    <div className="flex flex-col mt-8">
      <div className="flex items-center gap-4">
        <p className="font-medium text-xl md:text-2xl/[34px] tracking-[-2.5%] text-basefont">
          모임 소개글
        </p>
        {errors.content && (
          <p className="text-red-500 text-sm w-36">{errors.content.message}</p>
        )}
      </div>

      <textarea
        {...register('content', { required: '내용 입력은 필수 입니다.' })}
        placeholder={`모임에 대한 소개글을 써보세요.

모임에 대한 변동 가격을 써주면 모임 참여시 많은 도움이 되요.
ex) 인당 18,000원, 인당 20,000원이 예상됩니다.`}
        className={`${errors.content ? 'border-error' : 'border-spot'} rounded-[30px] border-[1px] bg-card w-full h-96 p-5 outline-none text-basefont resize-none mt-3`}
        value={content}
        onChange={(e) => contentChange(e.target.value)}
      />
    </div>
  );
}
