import { useState } from 'react';
import Loading from '@/components/@shared/loading/Loading';
import CommentCard from '@/components/gatheringDetail/comment/CommentCard';
import CommentInput from '@/components/gatheringDetail/comment/CommentPostInput';
import CommentSortMenu from '@/components/gatheringDetail/comment/CommentSortMenu';
import { useGetComment } from '@/hooks/reactQuery/useGetComment';
import { usePagination } from '@/hooks/usePagination';
import { CommentDTO } from '@/types/comment/comment.type';
import { GatheringMemberDTO } from '@/types/participant/participant.type';

interface CommentsContainerProps {
  id: string | string[];
  gatheringMember: GatheringMemberDTO['get'][];
}

export default function CommentsContainer({
  id,
  gatheringMember,
}: CommentsContainerProps) {
  const findHostName = gatheringMember.find(
    ({ role }) => role === 'HOST'
  )?.nickname;
  const [sort, setSort] = useState('asc');
  const [page, setPage] = useState(0);
  const { comment, isLoading } = useGetComment(id, page, 10, sort);
  const totalItems = comment ? comment.totalElements : 0;
  const { totalPages } = usePagination(page, totalItems, 10);

  if (!comment || isLoading) return <Loading isLoading={isLoading} />;

  return (
    <div className="mt-14 w-full bg-card-white rounded-lg">
      <CommentSortMenu sort={sort} setSort={setSort} />
      {comment.content.map((data: CommentDTO['get']) => (
        <div key={data.id}>
          <CommentCard
            gatheringId={id}
            leaderCheck={findHostName}
            userImage={data.profileImage}
            userNickname={data.nickname}
            content={data.content}
            createdAt={data.createdAt}
            commentId={String(data.id)}
            type="comment"
          />
          {data.comments.map((reComment) => (
            <div key={reComment.id}>
              <CommentCard
                gatheringId={id}
                leaderCheck={findHostName}
                userImage={reComment.profileImage}
                userNickname={reComment.nickname}
                content={reComment.content}
                createdAt={reComment.createdAt}
                commentId={String(data.id)}
                reCommentId={String(reComment.id)}
                type="reComment"
              />
            </div>
          ))}
        </div>
      ))}
      <CommentInput />
    </div>
  );
}
