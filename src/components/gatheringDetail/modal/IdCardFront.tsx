import Image from 'next/image';
import { UserDTO } from '@/types/user/user.types';
import userDefault from '@/public/icons/user/user_default.svg';
import MainLogo from '@/public/images/Replay_Main_Logo.svg';

interface IdCardFrontProps {
  userData: UserDTO['get'];
}

export default function IdCardFront({ userData }: IdCardFrontProps) {
  const { image, nickname, gender, email } = userData;

  return (
    <div className="absolute z-20 flex flex-col items-center backface-hidden">
      <p className="text-[32px]/[42px] font-semibold tracking-[0.2em] text-white">
        PLAY CARD
      </p>
      <Image
        src={image === '' ? userDefault : image}
        alt="유저 이미지"
        width={406}
        height={494}
        quality={100}
        className="mt-5 h-[494px] w-[406px]"
      />
      <h2 className="mt-6 text-[32px]/[42px] font-semibold tracking-[-2.5%] text-basefont">
        {nickname}
      </h2>
      <p className="mt-2 text-base font-normal tracking-[-2.5%] text-grayFont">
        {gender}
      </p>
      <p className="mt-2 text-base font-normal tracking-[-2.5%] text-grayFont">
        {email}
      </p>
      <Image
        src={MainLogo}
        alt="로고"
        width={368}
        height={136}
        quality={100}
        className="mt-[54px] h-[136px] w-[368px]"
      />
    </div>
  );
}
