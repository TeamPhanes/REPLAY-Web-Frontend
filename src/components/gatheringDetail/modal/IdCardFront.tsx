import Image from 'next/image';
import { OtherUserDTO } from '@/types/user/user.types';
import userDefault from '@/public/icons/user/user_default.svg';

interface IdCardFrontProps {
  userData: OtherUserDTO['get'];
}

export default function IdCardFront({ userData }: IdCardFrontProps) {
  const { profileImage, nickname, email } = userData;

  return (
    <div className="absolute z-20 flex flex-col items-center backface-hidden">
      <p className="text-[32px]/[42px] font-semibold tracking-[0.2em] text-white">
        REPLAYER
      </p>
      <Image
        src={profileImage === '' ? userDefault : profileImage}
        alt="유저 이미지"
        width={406}
        height={494}
        quality={100}
        className="mt-5 h-[380px] w-[320px] md:h-[494px] md:w-[406px]"
      />
      <h2 className="mt-6 text-2xl font-semibold tracking-[-2.5%] text-basefont md:text-[32px]/[42px]">
        {nickname}
      </h2>
      <p
        className={`${email !== '' ? '' : 'hidden'} absolute -bottom-8 mt-2 text-base font-normal tracking-[-2.5%] text-grayFont`}
      >
        {email}
      </p>
    </div>
  );
}
