import { useModal } from '@/src/hooks/useModal';
import StroyModal from './StoryModal';
import StoryContainer from './StoryContainer';

interface StorySectionProps {
  story: string;
}

export default function StorySection({ story }: StorySectionProps) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <StoryContainer openModal={openModal} story={story} />
      <StroyModal isOpen={isOpen} closeModal={closeModal} story={story} />
    </>
  );
}
