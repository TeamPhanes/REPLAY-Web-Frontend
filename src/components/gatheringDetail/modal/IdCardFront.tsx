import Image from 'next/image';
import { OtherUserDTO } from '@/types/user/user.types';
import userDefault from '@/public/icons/user/user_default.svg';
import MainLogo from '@/public/images/Replay_Main_Logo.svg';

interface IdCardFrontProps {
  userData: OtherUserDTO['get'];
}

export default function IdCardFront({ userData }: IdCardFrontProps) {
  const { image, nickname, emailMark, email } = userData;

  return (
    <div className="absolute z-20 flex flex-col items-center backface-hidden">
      <p className="text-[32px]/[42px] font-semibold tracking-[0.2em] text-white">
        REPLAYER
      </p>
      <Image
        src={image === '' ? userDefault : image}
        alt="유저 이미지"
        width={406}
        height={494}
        quality={100}
        className="mt-5 h-[380px] w-[320px] md:h-[494px] md:w-[406px]"
      />
      <h2
        className={`${emailMark ? 'mt-10 md:mt-6' : 'md:mt-10'}  text-2xl md:text-[32px]/[42px] font-semibold tracking-[-2.5%] text-basefont`}
      >
        {nickname}
      </h2>
      <p
        className={`${emailMark ? '' : 'hidden'} mt-2 text-base font-normal tracking-[-2.5%] text-grayFont absolute -bottom-8`}
      >
        {email}
      </p>
      <Image
        src={MainLogo}
        alt="로고"
        width={458}
        height={118}
        quality={100}
        className={`${emailMark ? 'md:bottom-[-240px]' : 'md:bottom-[-224px]'} absolute bottom-[-340px] h-[118px] w-[458px]`}
      />
    </div>
  );
}
