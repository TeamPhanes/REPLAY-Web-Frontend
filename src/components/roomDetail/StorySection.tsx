import StoryContainer from '@/components/roomDetail/StoryContainer';
import StroyModal from '@/components/roomDetail/StoryModal';
import { useOpen } from '@/hooks/useOpen';

interface StorySectionProps {
  story: string;
}

export default function StorySection({ story }: StorySectionProps) {
  const { isOpen, openModal, closeModal } = useOpen();

  return (
    <div className="hidden xl:block xl:w-[405px] shrink-0">
      <StoryContainer isOpen={isOpen} openModal={openModal} story={story} />
      <StroyModal isOpen={isOpen} closeModal={closeModal} story={story} />
    </div>
  );
}
