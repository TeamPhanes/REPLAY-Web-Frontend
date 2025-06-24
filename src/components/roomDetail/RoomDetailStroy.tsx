import MainBlueButton from '@/components/@shared/button/MainBlueButton';
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
        <MainBlueButton className="h-[58px] w-[431px]" onClick={openModal}>
          모임 만들기
        </MainBlueButton>
        <AddGatheringModal isOpen={isOpen} onClose={closeModal} />
      </div>
    </>
  );
}
