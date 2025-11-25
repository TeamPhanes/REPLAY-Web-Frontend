import Image from 'next/image';
import PatchMyPageModal from '@/components/@shared/modal/PatchMyPage/PatchMyPageModal';
import { useOpen } from '@/hooks/useOpen';
import WhiteSettings from '@/public/icons/mypage/white_settings.svg';

export default function MyPageModifyButton() {
  const { isOpen, openModal, closeModal } = useOpen();

  return (
    <>
      <button
        type="button"
        className="absolute right-5 top-5"
        onClick={openModal}
      >
        <Image
          src={WhiteSettings}
          alt="수정하기"
          width={32}
          height={32}
          className="hover:animate-[spin_3s_linear_infinite]"
        />
      </button>
      <PatchMyPageModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
