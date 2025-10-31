import { useParams } from 'next/navigation';
import { mockParticipants } from '@/data/mockParticipants';
import { useAuthStore } from '@/store/authStore';
import MainBlueButton from '@/components/@shared/button/MainBlueButton';
import { useGetGatheringMember } from '@/hooks/reactQuery/useGetGatheringMember';
import { usePostGatheringMember } from '@/hooks/reactQuery/usePostGatheringMember';
import { useUserInfo } from '@/hooks/reactQuery/useUserInfo';

export default function GatheringMemberButton({
  gatheringId,
}: {
  gatheringId: number;
}) {
  const { id } = useParams();
  const { gatheringMember } = useGetGatheringMember(id);
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
      className="mt-5 md:absolute bottom-5 w-full md:w-[300px] right-5"
      onClick={() => handleMemberButtonClick('POST')}
    >
      <p className="text-base tracking-[-2.5%] font-semibold text-font-baseWhite">
        모임 참여하기
      </p>
    </MainBlueButton>
  ) : (
    <MainBlueButton
      className="mt-5 md:absolute bottom-5 w-full md:w-[300px] right-5"
      onClick={() => handleMemberButtonClick('DELETE')}
    >
      <p className="text-base tracking-[-2.5%] font-semibold text-font-baseWhite">
        참여 취소하기
      </p>
    </MainBlueButton>
  );
}
