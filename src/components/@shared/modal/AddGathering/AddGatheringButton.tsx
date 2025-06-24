import MainBlueButton from '@/components/@shared/button/MainBlueButton';
import MainWhiteButton from '@/components/@shared/button/MainWhiteButton';

interface AddGatheringButtonProps {
  onClose: () => void;
}

export default function AddGatheringButton({
  onClose,
}: AddGatheringButtonProps) {
  return (
    <div className="flex mt-6 gap-2">
      <MainWhiteButton className="min-w-36" onClick={onClose}>
        취소하기
      </MainWhiteButton>
      <MainBlueButton className="w-full" type="submit">
        등록하기
      </MainBlueButton>
    </div>
  );
}
