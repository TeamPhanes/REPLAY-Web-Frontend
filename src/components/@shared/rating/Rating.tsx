import { ratingIcons } from '@/src/constants/rating/ratingIcons';

interface CommonRatingProps {
  rating: number;
  maxRating?: number;
  width: number;
  height: number;
}

interface RoomOrReviewRatingProps extends CommonRatingProps {
  type: 'Room' | 'Review';
  capacity: never;
}

interface UserRatingProps extends CommonRatingProps {
  type: 'User';
  capacity: number;
}

type RatingProps = RoomOrReviewRatingProps | UserRatingProps;

/**
 * @param rating <number> 색이 칠해져야하는 캐릭터의 갯수
 * @param maxRating <number> 최대 캐릭터의 갯수 (기본값 : 5)
 * @param width <number> 표현할 width 값
 * @param height <number> 표현할 height 값
 * @param type <string> 'Room' | 'Review' | 'User'
 * @param capacity <number> type이 User일 경우 표기할 자리 값 (기본값 : 6)
 */

export default function Rating({
  rating,
  maxRating = 5,
  width,
  height,
  type,
  capacity,
}: RatingProps) {
  const starWidth = width / maxRating;
  const lineWidth =
    type === 'User'
      ? (capacity / maxRating) * width
      : (Math.ceil(rating) / maxRating) * width;
  const filledWidth = (rating / maxRating) * width;
  const { empty, line, full } = ratingIcons[type];

  const backgroundStyle = (imageUrl: string, changeWidth: number) => ({
    position: 'absolute' as const,
    width: `${changeWidth}px`,
    height: `${height}px`,
    backgroundSize: `${starWidth}px ${height}px`,
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: 'repeat-x',
    top: 0,
    left: 0,
  });

  return (
    <div
      className="relative inline-block"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <span style={backgroundStyle(empty, width)} />
      <span style={backgroundStyle(line, lineWidth)} />
      <span style={backgroundStyle(full, filledWidth)} />
    </div>
  );
}
