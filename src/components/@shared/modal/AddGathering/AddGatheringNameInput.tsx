import { FieldErrors, UseFormRegister } from 'react-hook-form';
import Image from 'next/image';

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

interface AddGatheringNameInputProps {
  name: string;
  nameChange: (value: string) => void;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
}

export default function AddGatheringNameInput({
  name,
  nameChange,
  register,
  errors,
}: AddGatheringNameInputProps) {
  return (
    <>
      <div
        className={`${errors.name ? 'border-error' : 'border-tag'} flex gap-2 border-b-[1px] items-center mt-[30px]`}
      >
        <Image
          src="/icons/mypage/gray_pencil.svg"
          alt="연필 아이콘"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <input
          {...register('name', { required: '제목 입력은 필수입니다.' })}
          type="text"
          placeholder="모임명을 입력해 주세요."
          className="w-full py-1 font-normal text-2xl/[34px] tracking-[-2.5%] text-basefont"
          value={name}
          onChange={(e) => nameChange(e.target.value)}
        />
      </div>
      {errors.name && (
        <p className="text-red-500 text-sm mt-1 ml-5 absolute bottom--5">
          {errors.name.message}
        </p>
      )}
    </>
  );
}
