import { useAuthStore } from '@/store/authStore';
import MainBlueButton from '@/components/@shared/button/MainBlueButton';
import MainPurpleButton from '@/components/@shared/button/MainPurpleButton';
import MainWhiteButton from '@/components/@shared/button/MainWhiteButton';
import Modal from '@/components/@shared/modal/Modal';
import PatchGatheringModal from '@/components/@shared/modal/PatchGathering/PatchGatheringModal';
import GatheringMemberButton from '@/components/gatheringDetail/GatheringMemberButton';
import { useDeleteGathering } from '@/hooks/reactQuery/useDeleteGathering';
import { useUserInfo } from '@/hooks/reactQuery/useUserInfo';
import { useOpen } from '@/hooks/useOpen';
import { GatheringDetailDTO } from '@/types/gathering/gathering.type';

interface GatheringDetailButtonProps {
  data: GatheringDetailDTO['get'];
  leader?: string;
}

export default function GatheringDetailButton({
  data,
  leader,
}: GatheringDetailButtonProps) {
  const { accessToken } = useAuthStore();
  const { userInfo } = useUserInfo({ enabled: !!accessToken });
  const { isOpen, openModal, closeModal } = useOpen();
  const {
    isOpen: isPatchGatheringOpen,
    openModal: openPatchGathering,
    closeModal: closePatchGathering,
  } = useOpen();
  const { mutate } = useDeleteGathering(data.id);

  return (
    <div>
      {userInfo && userInfo.nickname === leader ? (
        <div className="mt-5 md:absolute bottom-5 right-5 grid grid-cols-2 md:w-[431px] gap-2">
          <MainBlueButton onClick={openPatchGathering} className="!text-base">
            모임 수정하기
          </MainBlueButton>
          <MainWhiteButton onClick={openModal} className="!text-base">
            모임 삭제하기
          </MainWhiteButton>
        </div>
      ) : (
        <GatheringMemberButton gatheringId={data.id} />
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
          <MainBlueButton className="w-full" onClick={() => mutate()}>
            확인
          </MainBlueButton>
          <MainPurpleButton className="w-full" onClick={closeModal}>
            취소
          </MainPurpleButton>
        </div>
      </Modal>

      <PatchGatheringModal
        isOpen={isPatchGatheringOpen}
        onClose={closePatchGathering}
        defaultValues={{
          name: data.name,
          themeId: data.themeId,
          content: data.content,
          isIndividual: data.isIndividual ? '인당' : '총액',
          price: data.price,
          dateTime: data.date ? new Date(data.date) : new Date(),
          registrationStart: data.registrationStart
            ? new Date(data.registrationStart)
            : new Date(),
          registrationEnd: data.registrationEnd
            ? new Date(data.registrationEnd)
            : new Date(),
          capacity: data.capacity,
        }}
      />
    </div>
  );
}
