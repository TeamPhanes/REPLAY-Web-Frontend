import { PostGathering } from '@/axios/gathering';

interface AddGatheringButtonProps {
  onClose: () => void;
}

export default function AddGatheringButton({
  onClose,
}: AddGatheringButtonProps) {
  return (
    <div className="flex mt-6 gap-2">
      <button
        type="button"
        className="min-w-36 py-3 px-[10px] border-cardActive border-2 font-semibold text-2xl/[34px] tracking-[-2.5%] text-buttonColor200 text-center rounded-2xl"
        onClick={onClose}
      >
        취소하기
      </button>
      <button
        type="button"
        className="w-full py-3 px-[10px] bg-mainBlue rounded-2xl font-semibold text-2xl/[34px] tracking-[-2.5%] text-white"
        onClick={PostGathering}
      >
        등록하기
      </button>
    </div>
  );
}
