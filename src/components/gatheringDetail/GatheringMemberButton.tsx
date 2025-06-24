import { useParams } from 'next/navigation';
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
  const FindMember = gatheringMember
    .map((user: any) => user.nickname === userInfo?.nickname)
    .find((check: boolean) => check === true);
  return !FindMember ? (
    <MainBlueButton
      className="absolute bottom-5 w-[431px]"
      onClick={() => handleMemberButtonClick('POST')}
    >
      <p className="text-2xl font-semibold text-white">모임 참여하기</p>
    </MainBlueButton>
  ) : (
    <MainBlueButton
      className="absolute bottom-5 w-[431px]"
      onClick={() => handleMemberButtonClick('DELETE')}
    >
      <p className="text-2xl font-semibold text-white">참여 취소하기</p>
    </MainBlueButton>
  );
}
