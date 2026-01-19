'use client';

import Image from 'next/image';
import Link from 'next/link';
import AddGatheringModal from '@/components/@shared/modal/AddGathering/AddGatheringModal';
import { useOpen } from '@/hooks/useOpen';

export default function RoutingMenu() {
  const { isOpen, openModal, closeModal } = useOpen();

  return (
    <div className="flex flex-col md:w-[912px]">
      <div className="mt-10 flex flex-col gap-3 md:mt-16 md:flex-row md:justify-between md:gap-0">
        <Link href="/theme">
          <div className="relative w-full rounded-[28px] bg-homeCard p-8 transition-all hover:scale-[102%] hover:border-2 hover:border-white md:h-[248px] md:w-[450px]">
            <h2 className="text-3xl font-bold tracking-[-2.5%] text-white md:text-5xl">
              방탈출
            </h2>
            <p className="mt-4 max-w-[338px] text-base font-normal tracking-[-2.5%] text-homeFont">
              전국 각지에 있는 다양한 테마의 방탈출을
              <br />
              필터링하여 볼 수 있습니다.
            </p>
            <Image
              src="/icons/home/home_room_button.webp"
              alt="방탈출 바로가기"
              width={113}
              height={110}
              className="absolute left-32 top-8 h-10 w-10 md:bottom-6 md:left-auto md:right-8 md:top-auto md:h-[110px] md:w-[113px]"
            />
          </div>
        </Link>
        <Link href="/gathering">
          <div className="relative w-full rounded-[28px] bg-homeCard p-8 transition-all hover:scale-[102%] hover:border-2 hover:border-white md:h-[248px] md:w-[450px]">
            <h2 className="text-3xl font-bold tracking-[-2.5%] text-white md:text-5xl">
              모임
            </h2>
            <p className="mt-4 text-base font-normal tracking-[-2.5%] text-homeFont md:w-[338px]">
              전국 각지에 있는 방탈출 모임을 필터링하여 볼 수 있습니다. 다양한
              사람들과 방탈출을 즐겨보세요!
            </p>
            <Image
              src="/icons/home/home_gathering_button.svg"
              alt="모임 바로가기"
              width={96}
              height={96}
              className="absolute left-[90px] top-8 h-10 w-10 md:bottom-6 md:left-auto md:right-8 md:top-auto md:h-[96px] md:w-[96px]"
            />
          </div>
        </Link>
      </div>

      <div className="mt-3 flex flex-col justify-between gap-3 md:flex-row md:gap-0">
        <Link href="/mypage/favorite?type=room">
          <div className="relative w-full rounded-[28px] bg-homeCard p-8 transition-all hover:scale-[102%] hover:border-2 hover:border-white md:h-[248px] md:w-[450px]">
            <h2 className="text-3xl font-bold tracking-[-2.5%] text-white md:text-5xl">
              찜한 방탈출
            </h2>
            <p className="mt-4 w-[338px] text-base font-normal tracking-[-2.5%] text-homeFont">
              흥미가 있던 방탈출을 한 눈에 볼 수 있습니다.
            </p>
            <Image
              src="/icons/home/home_likedRoom_button.webp"
              alt="찜한 방탈출 바로가기"
              width={113}
              height={118}
              className="absolute left-48 top-8 h-10 w-10 md:bottom-6 md:left-auto md:right-8 md:top-auto md:h-[118px] md:w-[113px]"
            />
          </div>
        </Link>
        <Link href="/mypage/favorite?type=gathering">
          <div className="relative flex w-full items-center justify-center rounded-[28px] bg-homeCard p-8 transition-all hover:scale-[102%] hover:border-2 hover:border-white md:h-[248px] md:w-[219px]">
            <h2 className="text-2xl font-bold tracking-[-2.5%] text-white md:text-[40px]/[52px]">
              찜한모임
            </h2>
            <Image
              src="/icons/home/home_likedGathering_button.svg"
              alt="모임 바로가기"
              width={56}
              height={56}
              className="absolute right-20 h-10 w-10 md:right-auto md:top-8 md:h-[56px] md:w-[56px]"
            />
          </div>
        </Link>
        <div
          className="relative flex w-full cursor-pointer items-center justify-center rounded-[28px] bg-homeCard p-8 transition-all hover:scale-[102%] hover:border-2 hover:border-white md:h-[248px] md:w-[219px]"
          onClick={openModal}
        >
          <h2 className="text-2xl font-bold tracking-[-2.5%] text-white md:text-[40px]/[52px]">
            모임생성
          </h2>
          <Image
            src="/icons/home/home_addGathering_button.svg"
            alt="모임 바로가기"
            width={56}
            height={56}
            className="absolute right-20 h-10 w-10 md:right-auto md:top-8 md:h-[56px] md:w-[56px]"
          />
        </div>
        <AddGatheringModal isOpen={isOpen} onClose={closeModal} />
      </div>
    </div>
  );
}
