'use client';

import { Controller } from 'react-hook-form';
import Image from 'next/image';
import Modal from '@/components/@shared/modal/Modal';
import PatchMyPageImage from '@/components/@shared/modal/PatchMyPage/PatchMyPageImage';
import PatchMyPageSwitch from '@/components/@shared/modal/PatchMyPage/PatchMyPageSwitch';
import { usePatchMyProfile } from '@/hooks/reactQuery/usePatchMyProfile';
import useImagePreview from '@/hooks/useImagePreview';
import usePatchMyPageForm from '@/hooks/usePatchMyPageForm';
import DefaultUser from '@/public/icons/user/user_default.svg';

interface FormValues {
  nickname: string;
  comment: string;
  genderMark: boolean;
  emailMark: boolean;
}

interface PatchMyPageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PatchMyPageModal({
  isOpen,
  onClose,
}: PatchMyPageModalProps) {
  const { imageFile, previewUrl, handleImageChange } = useImagePreview(null);
  const { mutate } = usePatchMyProfile(onClose);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    userInfo,
  } = usePatchMyPageForm();

  const onSubmit = (data: FormValues) => {
    mutate({ ...data, image: imageFile });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="bg-white rounded-[30px] p-5 w-[648px]"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="relative">
            <Image
              src={previewUrl || (userInfo?.image ?? DefaultUser)}
              alt="유저 이미지"
              width={218}
              height={265}
              quality={100}
              className="w-[218px] h-[265px] border-2 border-card"
              priority
            />
            <PatchMyPageImage onImageChange={handleImageChange} />
          </div>

          <div className="flex flex-col ml-5">
            <p className="font-normal text-base tracking-[-2.5%] text-basefont">
              닉네임 변경
            </p>
            <input
              {...register('nickname', {
                required: '닉네임은 필수입니다.',
                maxLength: {
                  value: 10,
                  message: '닉네임은 10자 이내로 입력해 주세요',
                },
              })}
              type="text"
              placeholder="닉네임을 입력해 주세요. 최대 10글자 입니다."
              className="w-[368px] h-10 px-2 py-[10px] border-b-[1px] border-setfont font-normal text-base tracking-[-2.5%] text-basefont outline-none"
            />
            {errors.nickname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.nickname.message}
              </p>
            )}

            <div className="flex items-center justify-between mt-12 w-72">
              <p className="font-normal text-base tracking-[-2.5%] text-basefont">
                성별을 소개카드에 표시 합니다.
              </p>
              <Controller
                name="genderMark"
                control={control}
                render={({ field }) => (
                  <PatchMyPageSwitch
                    checked={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
            <div className="flex items-center justify-between mt-6 w-72">
              <p className="font-normal text-base tracking-[-2.5%] text-basefont">
                이메일을 소개카드에 표시 합니다.
              </p>
              <Controller
                name="emailMark"
                control={control}
                render={({ field }) => (
                  <PatchMyPageSwitch
                    checked={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>
        </div>

        <textarea
          {...register('comment')}
          placeholder="자신을 표현할 소개글을 써보세요."
          className="mt-8 rounded-[30px] border-[1px] border-spot bg-card w-full h-[261px] p-5 outline-none text-basefont resize-none"
        />

        <div className="flex mt-6 gap-2">
          <button
            type="button"
            className="min-w-36 py-3 px-[10px] border-cardActive border-2 font-semibold text-2xl/[34px] tracking-[-2.5%] text-buttonColor200 text-center rounded-2xl"
            onClick={onClose}
          >
            취소하기
          </button>
          <button
            type="submit"
            className="w-full py-3 px-[10px] bg-mainBlue rounded-2xl font-semibold text-2xl/[34px] tracking-[-2.5%] text-white"
          >
            수정하기
          </button>
        </div>
      </form>
    </Modal>
  );
}
