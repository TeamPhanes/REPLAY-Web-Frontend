import { ratingIcons } from '@/src/constants/rating/ratingIcons';

interface RatingProps {
  rating: number;
  maxRating?: number;
  width: number;
  height: number;
  type: 'Room' | 'Review' | 'User';
}

/**
 * @param rating <number> 색이 칠해져야하는 캐릭터의 갯수
 * @param maxRating <number> 최대 캐릭터의 갯수 (기본값 : 5)
 * @param width <number> 표현할 width 값
 * @param height <number> 표현할 height 값
 * @param type <string> 'Room' | 'Review' | 'User'
 */

export default function Rating({
  rating,
  maxRating = 5,
  width,
  height,
  type,
}: RatingProps) {
  const starWidth = width / maxRating;
  const filledWidth = (rating / maxRating) * width;
  const { line, full } = ratingIcons[type];

  // inline 스타일을 위한 객체
  const containerStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  const backgroundStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundSize: `${starWidth}px ${height}px`,
    backgroundImage: `url(${line})`,
  };

  const filledStyle = {
    width: `${filledWidth}px`,
    height: `${height}px`,
    backgroundSize: `${starWidth}px ${height}px`,
    backgroundImage: `url(${full})`,
  };

  return (
    <div className="inline-block" style={containerStyle}>
      <span className="inline-block bg-repeat-x" style={backgroundStyle}>
        <span className="inline-block bg-repeat-x" style={filledStyle} />
      </span>
    </div>
  );
}
