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
    <div className="w-full relative">
      <div
        className={`${errors.name ? 'border-error' : 'border-line-Gray'} flex p-4 border-b-[1px] items-center mt-2`}
      >
        <Image
          src="/icons/pencil/dark_pencil.svg"
          alt="연필 아이콘"
          width={24}
          height={24}
        />
        <input
          {...register('name', { required: '내용 입력은 필수입니다.' })}
          type="text"
          placeholder="모임명을 입력해 주세요."
          className="w-full text-base tracking-[-2.5%] placeholder:text-font-disabled text-font-baseBlack bg-[#F7F7FB] z-20 ml-[6px]"
          value={name}
          onChange={(e) => nameChange(e.target.value)}
        />
      </div>
      {errors.name && (
        <p className="text-red-500 text-sm mt-1 ml-5 absolute bottom--5">
          {errors.name.message}
        </p>
      )}
    </div>
  );
}
