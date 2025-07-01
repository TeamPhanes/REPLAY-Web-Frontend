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
  const { comment, isLoading, showLoading } = useGetComment(id);

  if (showLoading) return <Loading isLoading={isLoading} />;

  return (
    <div className="mt-5 w-full bg-comment">
      <CommentSortMenu />
      {comment.map((data: CommentDTO['get']) => (
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
