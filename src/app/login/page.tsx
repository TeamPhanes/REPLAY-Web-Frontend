import PageContainer from "@/src/components/@shared/layout/PageContainer";
import Image from "next/image";
import { easyLoginIcons } from "@/src/constants/login/easyLoginIcons";

export default function LoginPage() {

  return (
    <PageContainer>
      <div className="mx-auto w-[448px] h-[400px] border-2 border-white rounded-xl shadow-xl flex flex-col items-center">
        <Image src='/images/logo.png' alt="서비스 로고" width={182} height={183} quality={100} />
        <p className="text-sm">소셜 계정으로 가입하세요</p>
        <div className="w-80 flex items-center mt-4">
          <span className="flex-grow border-t border-gray-300" />
          <p className="w-28 text-center text-xs text-gray-300">
            간편로그인
          </p>
          <span className="flex-grow border-t border-gray-300" />
        </div>
        <div className="mt-8 w-full flex justify-center gap-8">
          {Object.keys(easyLoginIcons).map((key) => (
            <div className="flex flex-col items-center justify-center gap-1">
              <button key={key} className={`flex items-center justify-center rounded-full w-14 h-14 ${easyLoginIcons[key].color}`}>
              <Image src={easyLoginIcons[key].value} alt={easyLoginIcons[key].label} width={36} height={36} />
              </button>
              <p className="text-xs">{easyLoginIcons[key].label}</p>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
