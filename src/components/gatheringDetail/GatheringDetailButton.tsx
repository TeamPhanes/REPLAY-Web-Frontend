import { useAuthStore } from '@/store/authStore';
import Modal from '@/components/@shared/modal/Modal';
import PatchGatheringModal from '@/components/@shared/modal/PatchGathering/PatchGatheringModal';
import GatheringMemberButton from '@/components/gatheringDetail/GatheringMemberButton';
import { useDeleteGathering } from '@/hooks/reactQuery/useDeleteGathering';
import { useUserInfo } from '@/hooks/reactQuery/useUserInfo';
import { useOpen } from '@/hooks/useOpen';
import {
  GatheringDTO,
  GatheringDetailDTO,
} from '@/types/gathering/gathering.type';

interface GatheringDetailButtonProps {
  list: GatheringDTO['get'];
  detail: GatheringDetailDTO['get'];
  leader: string;
  gatheringId: number;
}

export default function GatheringDetailButton({
  list,
  detail,
  leader,
  gatheringId,
}: GatheringDetailButtonProps) {
  const { accessToken } = useAuthStore();
  const { userInfo } = useUserInfo({ enabled: !!accessToken });
  const { isOpen, openModal, closeModal } = useOpen();
  const {
    isOpen: isPatchGatheringOpen,
    openModal: openPatchGathering,
    closeModal: closePatchGathering,
  } = useOpen();
  const { mutate } = useDeleteGathering(gatheringId);

  return (
    <div>
      {userInfo && userInfo.nickname === leader ? (
        <div className="absolute bottom-5 grid grid-cols-2 w-[431px] gap-2">
          <button
            type="button"
            className="rounded-2xl bg-mainBlue px-[10px] py-3 hover:bg-mainBlueHover"
            onClick={openPatchGathering}
          >
            <p className="text-2xl font-semibold text-white">모임 수정하기</p>
          </button>
          <button
            type="button"
            className="rounded-2xl bg-mainPurple px-[10px] py-3 hover:bg-mainPurpleHover"
            onClick={openModal}
          >
            <p className="text-2xl font-semibold text-white">모임 삭제하기</p>
          </button>
        </div>
      ) : (
        <GatheringMemberButton gatheringId={detail.gatheringId} />
      )}

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="bg-white rounded-[30px] px-10 py-5"
      >
        <p className="font-semibold text-2xl text-basefont">
          모임을 삭제하시겠습니까?
        </p>
        <div className="flex justify-between gap-2 mt-5">
          <button
            type="button"
            className="rounded-2xl bg-mainBlue px-[10px] py-3 hover:bg-mainBlueHover w-full"
            onClick={() => mutate()}
          >
            확인
          </button>
          <button
            type="button"
            className="rounded-2xl bg-mainPurple px-[10px] py-3 hover:bg-mainPurpleHover w-full"
            onClick={closeModal}
          >
            취소
          </button>
        </div>
      </Modal>
      <PatchGatheringModal
        isOpen={isPatchGatheringOpen}
        onClose={closePatchGathering}
        defaultValues={{
          name: detail.name,
          themeId: list.themeId,
          content: detail.content,
          isIndividual: detail.isIndividual === true ? '인당' : '총액',
          price: detail.price,
          dateTime: detail.dateTime ? new Date(detail.dateTime) : new Date(),
          registrationStart: detail.registrationStart
            ? new Date(detail.registrationStart)
            : new Date(),
          registrationEnd: detail.registrationEnd
            ? new Date(detail.registrationEnd)
            : new Date(),
          capacity: detail.capacity,
        }}
      />
    </div>
  );
}
