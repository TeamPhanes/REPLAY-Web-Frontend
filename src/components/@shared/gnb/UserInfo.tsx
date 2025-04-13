import userDefault from '@/public/icons/user/user_default.svg';
import chevronDown from '@/public/icons/user/chevron_down.svg';
import Image from 'next/image';
import { mockUser } from '@/src/data/mockUser';
import UserInfoDropdown from '../dropdown/UserInfoDropdown';

export default function UserInfo() {
  return (
    <div className="flex items-center justify-center gap-1">
      <Image
        src={mockUser.image || userDefault}
        alt="유저 프로필 이미지"
        width={32}
        height={32}
        className="h-8 w-8 rounded-full border-2 border-mainBlue shadow-md"
      />
      <p className="text-xl font-semibold tracking-[-2.5%]">
        {mockUser.nickname} 님
      </p>
      {/* 드롭다운 공용 컴포넌트 제작 완료 후 연결 */}
      <UserInfoDropdown userImage={mockUser.image} nickname={mockUser.nickname}>
        <button type="button" className="flex items-center">
          <Image
            src={chevronDown}
            alt="유저 정보 더보기"
            width={24}
            height={24}
          />
        </button>
      </UserInfoDropdown>
    </div>
  );
}
