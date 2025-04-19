import StoryContainer from '@/components/roomDetail/StoryContainer';
import StroyModal from '@/components/roomDetail/StoryModal';
import { useOpen } from '@/hooks/useOpen';

interface StorySectionProps {
  story: string;
}

export default function StorySection({ story }: StorySectionProps) {
  const { isOpen, openModal, closeModal } = useOpen();

  return (
    <>
      <StoryContainer openModal={openModal} story={story} />
      <StroyModal isOpen={isOpen} closeModal={closeModal} story={story} />
    </>
  );
}
