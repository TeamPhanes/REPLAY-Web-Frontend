import MainBlueButton from '@/components/@shared/button/MainBlueButton';
import MainBlackButton from '../../button/MainBlackButton';

interface AddGatheringButtonProps {
  onClose: () => void;
}

export default function AddGatheringButton({
  onClose,
}: AddGatheringButtonProps) {
  return (
    <div className="flex mt-14 gap-2 justify-center">
      <MainBlackButton className="min-w-40 !text-base" onClick={onClose}>
        취소하기
      </MainBlackButton>
      <MainBlueButton className="min-w-96 !text-base " type="submit">
        등록하기
      </MainBlueButton>
    </div>
  );
}
