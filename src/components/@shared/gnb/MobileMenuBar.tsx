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
        <div className="fixed right-0 top-0 flex min-h-[704px] min-w-[300px] flex-col bg-brand-gray">
          <div className="relative flex h-[70px] items-center justify-between bg-[#2E2E2E] px-6">
            {userInfo ? (
              <div className="flex shrink-0 items-center justify-center gap-[6px]">
                <Image
                  src={userInfo.image || userDefault}
                  alt="유저 프로필 이미지"
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full bg-line-Gray shadow-md"
                />
                <p className="max-w-[130px] truncate">{userInfo.nickname} 님</p>
              </div>
            ) : (
              <Link href="/login" className="shrink-0">
                <button
                  type="button"
                  className="flex shrink-0 items-center gap-[6px]"
                >
                  <Image
                    src={userDefault}
                    alt="유저 기본 이미지"
                    width={24}
                    height={24}
                  />
                  로그인
                </button>
              </Link>
            )}
            <button type="button" onClick={closeModal}>
              <Image src={DeleteIcon} alt="메뉴 끄기" width={24} height={24} />
            </button>
          </div>

          <Link
            href="/mypage"
            className="flex h-[70px] items-center justify-between bg-card-gray px-6"
            onClick={closeModal}
          >
            <p className="text-2xl/[34px] font-semibold text-font-baseWhite">
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
            className="flex h-[70px] items-center justify-between border-t-[1px] border-line-darkGray bg-card-gray px-6"
            onClick={closeModal}
          >
            <p className="text-2xl/[34px] font-semibold text-font-baseWhite">
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
            className="flex h-[70px] items-center justify-between border-t-[1px] border-line-darkGray bg-card-gray px-6"
            onClick={closeModal}
          >
            <p className="text-2xl/[34px] font-semibold text-font-baseWhite">
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
            className="flex h-[70px] items-center justify-between border-t-[1px] border-line-darkGray bg-card-gray px-6"
            onClick={closeModal}
          >
            <p className="text-2xl/[34px] font-semibold text-font-baseWhite">
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
            className="flex h-[70px] items-center justify-between border-t-[1px] border-line-darkGray bg-card-gray px-6"
            onClick={closeModal}
          >
            <p className="text-2xl/[34px] font-semibold text-font-baseWhite">
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
              className="absolute bottom-0 flex h-[70px] w-full items-center justify-between px-6"
              onClick={() => logout()}
            >
              <p className="text-2xl/[34px] font-semibold text-font-thirdWhite">
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
