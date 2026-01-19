import MainBlueButton from '@/components/@shared/button/MainBlueButton';
import AddGatheringModal from '@/components/@shared/modal/AddGathering/AddGatheringModal';
import StorySection from '@/components/roomDetail/StorySection';
import { useOpen } from '@/hooks/useOpen';

interface RoomDetailStoryProps {
  themeNameProps: string;
  themeIdProps: number;
  story: string;
}

export default function RoomDetailStroy({
  story,
  themeNameProps,
  themeIdProps,
}: RoomDetailStoryProps) {
  const { isOpen, openModal, closeModal } = useOpen();
  return (
    <>
      <StorySection story={story} />
      <div className="bottom-5 mt-4 flex justify-between md:absolute">
        <MainBlueButton
          className="h-[58px] w-full md:w-[431px]"
          onClick={openModal}
        >
          모임 만들기
        </MainBlueButton>
        <AddGatheringModal
          isOpen={isOpen}
          onClose={closeModal}
          themeNameProps={themeNameProps}
          themeIdProps={themeIdProps}
        />
      </div>
    </>
  );
}
