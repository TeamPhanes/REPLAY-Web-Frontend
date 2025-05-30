import Image from 'next/image';
import SearchNotFound from '@/public/images/error/search.png';

export default function EmptySearchResult() {
  return (
    <div className="flex justify-center items-center flex-col border-2 border-card rounded-3xl pb-5">
      <p className="font-normal text-[64px] tracking-[0.31em] mb-5">
        NOT FOUND
      </p>
      <Image
        src={SearchNotFound}
        alt="검색 결과 없음"
        width={200}
        height={200}
        priority
        quality={100}
      />
      <p className="font-normal text-2xl/[34px] tracking-[-2.5%]">
        열쇠를 찾지 못했어요.
      </p>
    </div>
  );
}
