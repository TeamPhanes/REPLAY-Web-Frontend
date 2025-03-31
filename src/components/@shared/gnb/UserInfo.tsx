import userDefault from '@/public/icons/user/user_default.svg';
import chevronDown from '@/public/icons/user/chevron_down.svg';
import Image from 'next/image';

export default function UserInfo() {
  return (
    <div className="flex items-center justify-center gap-1">
      {/* src의 기본값은 유지하되, User 정보를 받아오면 삼항 연산자로 수정 */}
      <Image
        src={userDefault}
        alt="유저 프로필 이미지"
        width={32}
        height={32}
        className="rounded-full"
      />
      {/* 임시 닉네임 추후에 User 정보를 받아와서 추가 */}
      <p className="text-xl font-semibold tracking-[-2.5%]">닉네임 님</p>
      {/* 드롭다운 공용 컴포넌트 제작 완료 후 연결 */}
      <button type="button">
        <Image
          src={chevronDown}
          alt="유저 정보 더보기"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
