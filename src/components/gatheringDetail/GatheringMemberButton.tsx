import { mockParticipants } from '@/data/mockParticipants';
import { useAuthStore } from '@/store/authStore';
import MainBlueButton from '@/components/@shared/button/MainBlueButton';
import { usePostGatheringMember } from '@/hooks/reactQuery/usePostGatheringMember';
import { useUserInfo } from '@/hooks/reactQuery/useUserInfo';

export default function GatheringMemberButton({
  gatheringId,
}: {
  gatheringId: number;
}) {
  const { accessToken } = useAuthStore();
  const { userInfo } = useUserInfo({ enabled: !!accessToken });
  const { memberMutation } = usePostGatheringMember();

  const handleMemberButtonClick = (userAction: 'POST' | 'DELETE') => {
    memberMutation.mutate({
      gatheringId,
      userAction,
    });
  };
  const FindMember = mockParticipants
    .map((user: any) => user.nickname === userInfo?.nickname)
    .find((check: boolean) => check === true);
  return !FindMember ? (
    <MainBlueButton
      className="bottom-5 right-5 mt-5 w-full md:absolute md:w-[300px]"
      onClick={() => handleMemberButtonClick('POST')}
    >
      <p className="text-base font-semibold tracking-[-2.5%] text-font-baseWhite">
        모임 참여하기
      </p>
    </MainBlueButton>
  ) : (
    <MainBlueButton
      className="bottom-5 right-5 mt-5 w-full md:absolute md:w-[300px]"
      onClick={() => handleMemberButtonClick('DELETE')}
    >
      <p className="text-base font-semibold tracking-[-2.5%] text-font-baseWhite">
        참여 취소하기
      </p>
    </MainBlueButton>
  );
}
