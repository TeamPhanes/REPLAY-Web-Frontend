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
    <div className="relative w-full">
      <div
        className={`${errors.name ? 'border-error' : 'border-line-Gray'} mt-2 flex items-center border-b-[1px] p-4`}
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
          className="z-20 ml-[6px] w-full bg-[#F7F7FB] text-base tracking-[-2.5%] text-font-baseBlack placeholder:text-font-disabled"
          value={name}
          onChange={(e) => nameChange(e.target.value)}
        />
      </div>
      {errors.name && (
        <p className="absolute bottom--5 ml-5 mt-1 text-sm text-red-500">
          {errors.name.message}
        </p>
      )}
    </div>
  );
}
