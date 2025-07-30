'use client';

import Image from 'next/image';
import Link from 'next/link';
import AddGatheringModal from '@/components/@shared/modal/AddGathering/AddGatheringModal';
import { useOpen } from '@/hooks/useOpen';

export default function RoutingMenu() {
  const { isOpen, openModal, closeModal } = useOpen();

  return (
    <div className="flex md:w-[912px] flex-col">
      <div className="mt-10 md:mt-16 flex md:justify-between gap-3 md:gap-0 flex-col md:flex-row">
        <Link href="/theme">
          <div className="md:h-[248px] w-full md:w-[450px] rounded-[28px] bg-homeCard p-8 relative transition-all hover:scale-[102%] hover:border-2 hover:border-white">
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-2.5%] text-white">
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
              className="w-10 h-10 md:w-[113px] md:h-[110px] absolute top-8 left-32 md:top-auto md:left-auto md:right-8 md:bottom-6"
            />
          </div>
        </Link>
        <Link href="/gathering">
          <div className="md:h-[248px] w-full md:w-[450px] rounded-[28px] bg-homeCard p-8 relative transition-all hover:scale-[102%] hover:border-2 hover:border-white">
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-2.5%] text-white">
              모임
            </h2>
            <p className="mt-4 md:w-[338px] text-base font-normal tracking-[-2.5%] text-homeFont">
              전국 각지에 있는 방탈출 모임을 필터링하여 볼 수 있습니다. 다양한
              사람들과 방탈출을 즐겨보세요!
            </p>
            <Image
              src="/icons/home/home_gathering_button.svg"
              alt="모임 바로가기"
              width={96}
              height={96}
              className="w-10 h-10 md:w-[96px] md:h-[96px] absolute top-8 left-[90px] md:top-auto md:left-auto md:right-8 md:bottom-6"
            />
          </div>
        </Link>
      </div>

      <div className="mt-3 flex justify-between flex-col md:flex-row gap-3 md:gap-0">
        <Link href="/mypage/favorite?type=room">
          <div className="md:h-[248px] w-full md:w-[450px] rounded-[28px] bg-homeCard p-8 relative transition-all hover:scale-[102%] hover:border-2 hover:border-white">
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-2.5%] text-white">
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
              className="w-10 h-10 md:w-[113px] md:h-[118px] absolute top-8 left-48 md:top-auto md:left-auto md:right-8 md:bottom-6"
            />
          </div>
        </Link>
        <Link href="/mypage/favorite?type=gathering">
          <div className="flex md:h-[248px] w-full md:w-[219px] items-center justify-center rounded-[28px] bg-homeCard p-8 relative transition-all hover:scale-[102%] hover:border-2 hover:border-white">
            <h2 className="text-2xl md:text-[40px]/[52px] font-bold tracking-[-2.5%] text-white">
              찜한모임
            </h2>
            <Image
              src="/icons/home/home_likedGathering_button.svg"
              alt="모임 바로가기"
              width={56}
              height={56}
              className="w-10 h-10 md:w-[56px] md:h-[56px] absolute right-20 md:right-auto md:top-8"
            />
          </div>
        </Link>
        <div
          className="flex md:h-[248px] w-full md:w-[219px] items-center justify-center rounded-[28px] bg-homeCard p-8 relative cursor-pointer transition-all hover:scale-[102%] hover:border-2 hover:border-white"
          onClick={openModal}
        >
          <h2 className="text-2xl md:text-[40px]/[52px] font-bold tracking-[-2.5%] text-white">
            모임생성
          </h2>
          <Image
            src="/icons/home/home_addGathering_button.svg"
            alt="모임 바로가기"
            width={56}
            height={56}
            className="w-10 h-10 md:w-[56px] md:h-[56px] absolute right-20 md:right-auto md:top-8"
          />
        </div>
        <AddGatheringModal isOpen={isOpen} onClose={closeModal} />
      </div>
    </div>
  );
}
