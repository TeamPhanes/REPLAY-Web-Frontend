import { useState } from 'react';
import { mockComments } from '@/data/mockComments';
import Loading from '@/components/@shared/loading/Loading';
import CommentCard from '@/components/gatheringDetail/comment/CommentCard';
import CommentInput from '@/components/gatheringDetail/comment/CommentPostInput';
import CommentSortMenu from '@/components/gatheringDetail/comment/CommentSortMenu';
import { useGetComment } from '@/hooks/reactQuery/useGetComment';
import { CommentDTO } from '@/types/comment/comment.type';

interface CommentsContainerProps {
  id: string | string[];
  leaderCheck: string;
}

export default function CommentsContainer({
  id,
  leaderCheck,
}: CommentsContainerProps) {
  const [sort, setSort] = useState('create');
  const { comment, isLoading, showLoading } = useGetComment(id, sort);

  // if (showLoading) return <Loading isLoading={isLoading} />;

  return (
    <div className="mt-14 w-full bg-card-white rounded-lg">
      <CommentSortMenu sort={sort} setSort={setSort} />
      {mockComments.map((data: CommentDTO['get']) => (
        <div key={data.commentId}>
          <CommentCard
            gatheringId={id}
            leaderCheck={leaderCheck}
            userImage={data.image}
            userNickname={data.nickname}
            content={data.content}
            createdAt={data.createdAt}
            commentId={String(data.commentId)}
            type="comment"
          />
          {data.reComments.map((reComment) => (
            <div key={reComment.reCommentId}>
              <CommentCard
                gatheringId={id}
                leaderCheck={leaderCheck}
                userImage={reComment.image}
                userNickname={reComment.nickname}
                content={reComment.content}
                createdAt={reComment.createdAt}
                commentId={String(data.commentId)}
                reCommentId={String(reComment.reCommentId)}
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
