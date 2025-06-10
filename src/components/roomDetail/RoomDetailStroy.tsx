import AddGatheringModal from '@/components/@shared/modal/AddGathering/AddGatheringModal';
import StorySection from '@/components/roomDetail/StorySection';
import { useOpen } from '@/hooks/useOpen';

interface RoomDetailStoryProps {
  story: string;
}

export default function RoomDetailStroy({ story }: RoomDetailStoryProps) {
  const { isOpen, openModal, closeModal } = useOpen();
  return (
    <>
      <StorySection story={story} />
      <div className="mt-4 flex justify-between absolute bottom-5">
        <button
          type="button"
          className="h-[58px] w-[431px] rounded-2xl bg-mainBlue text-center text-2xl/[34px] font-semibold tracking-[-2.5%] hover:bg-mainBlueHover"
          onClick={openModal}
        >
          모임 만들기
        </button>
        <AddGatheringModal isOpen={isOpen} onClose={closeModal} />
      </div>
    </>
  );
}
