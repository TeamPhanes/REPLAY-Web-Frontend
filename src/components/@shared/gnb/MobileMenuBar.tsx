import Image from 'next/image';
import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import { useLogout } from '@/hooks/reactQuery/useLogout';
import { useUserInfo } from '@/hooks/reactQuery/useUserInfo';
import { useOpen } from '@/hooks/useOpen';
import ChevronRightIcon from '@/public/icons/arrow/chevron_white_right.svg';
import DeleteIcon from '@/public/icons/delete/white_delete.svg';
import MenuIcon from '@/public/icons/home/menu_white.svg';
import LogoutIcon from '@/public/icons/user/gray_logout.svg';
import userDefault from '@/public/icons/user/user_default.svg';
import LoginButton from './LoginButton';

interface MobileMenuBarProps {
  isFocus: boolean;
}

export default function MobileMenuBar({ isFocus }: MobileMenuBarProps) {
  const { accessToken } = useAuthStore();
  const { userInfo, isLoading } = useUserInfo({ enabled: !!accessToken });
  const { mutate: logout } = useLogout();
  const { isOpen, openModal, closeModal } = useOpen();

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className={`${isFocus ? 'hidden' : ''} block md:hidden`}
      >
        <Image src={MenuIcon} alt="메뉴 더보기" width={24} height={24} />
      </button>

      {isOpen && (
        <div className="fixed min-w-[300px] min-h-[704px] bg-brand-gray right-0 top-0 flex flex-col">
          <div className="bg-[#2E2E2E] h-[70px] relative flex items-center px-6 justify-between">
            {userInfo ? (
              <div className="items-center justify-center gap-[6px] shrink-0 flex">
                <Image
                  src={userInfo.image || userDefault}
                  alt="유저 프로필 이미지"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full bg-line-Gray shadow-md"
                />
                <p className="truncate max-w-[130px]">{userInfo.nickname} 님</p>
              </div>
            ) : (
              <LoginButton />
            )}
            <button type="button" onClick={closeModal}>
              <Image src={DeleteIcon} alt="메뉴 끄기" width={24} height={24} />
            </button>
          </div>

          <Link
            href="/mypage"
            className="bg-card-gray h-[70px] px-6 flex items-center justify-between"
          >
            <p className="text-2xl/[34px] text-font-baseWhite font-semibold">
              마이페이지
            </p>
            <Image
              src={ChevronRightIcon}
              alt="바로가기"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="/theme"
            className="bg-card-gray h-[70px] px-6 flex items-center justify-between border-t-[1px] border-line-darkGray"
          >
            <p className="text-2xl/[34px] text-font-baseWhite font-semibold">
              방탈출
            </p>
            <Image
              src={ChevronRightIcon}
              alt="바로가기"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="/gathering"
            className="bg-card-gray h-[70px] px-6 flex items-center justify-between border-t-[1px] border-line-darkGray"
          >
            <p className="text-2xl/[34px] text-font-baseWhite font-semibold">
              모임
            </p>
            <Image
              src={ChevronRightIcon}
              alt="바로가기"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="/ranking"
            className="bg-card-gray h-[70px] px-6 flex items-center justify-between border-t-[1px] border-line-darkGray"
          >
            <p className="text-2xl/[34px] text-font-baseWhite font-semibold">
              랭킹
            </p>
            <Image
              src={ChevronRightIcon}
              alt="바로가기"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="/notice"
            className="bg-card-gray h-[70px] px-6 flex items-center justify-between border-t-[1px] border-line-darkGray"
          >
            <p className="text-2xl/[34px] text-font-baseWhite font-semibold">
              공지사항
            </p>
            <Image
              src={ChevronRightIcon}
              alt="바로가기"
              width={24}
              height={24}
            />
          </Link>

          {userInfo && (
            <button
              type="button"
              className="h-[70px] px-6 w-full flex items-center justify-between absolute bottom-0"
              onClick={() => logout()}
            >
              <p className="text-2xl/[34px] text-font-thirdWhite font-semibold">
                로그아웃
              </p>
              <Image src={LogoutIcon} alt="로그아웃" width={24} height={24} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
