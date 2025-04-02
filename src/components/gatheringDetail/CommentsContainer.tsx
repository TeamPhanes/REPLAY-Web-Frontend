import { mockComments } from '@/src/data/mockComments';
import CommentCard from './CommentCard';
import CommentSortMenu from './CommentSortMenu';
import CommentInput from './CommentInput';

interface CommentsContainerProps {
  leaderCheck: string;
}

export default function CommentsContainer({
  leaderCheck,
}: CommentsContainerProps) {
  const list = mockComments;

  return (
    <div className="mt-5 w-full bg-comment">
      <CommentSortMenu />
      {list.map((comment) => (
        <div key={comment.commentId}>
          <CommentCard
            leaderCheck={leaderCheck}
            userImage={comment.image}
            userNickname={comment.nickname}
            content={comment.content}
            createdAt={comment.createdAt}
            type="comment"
          />
          {comment.reComments.map((reComment) => (
            <CommentCard
              key={reComment.reCommentsId}
              leaderCheck={leaderCheck}
              userImage={reComment.image}
              userNickname={reComment.nickname}
              content={reComment.content}
              createdAt={reComment.createdAt}
              type="reComment"
            />
          ))}
        </div>
      ))}
      <CommentInput />
    </div>
  );
}
