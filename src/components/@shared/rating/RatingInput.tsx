import React, { useState } from 'react';
import { ratingIcons } from '@/constants/rating/ratingIcons';

interface RatingInputProps {
  rating: number;
  maxRating?: number;
  width: number;
  height: number;
  type: 'Room' | 'Review' | 'User'; // 통합
  capacity?: number; // 항상 존재하지만, 'User'일 때만 사용
  onChange: (value: number, name: 'rating') => void;
}

/**
 * 공통 RatingInput 컴포넌트
 * @param rating <number> 색이 칠해져야하는 하트의 갯수
 * @param maxRating <number> 최대 하트의 갯수 (기본값 : 5)
 * @param width <number> 표현할 width 값
 * @param height <number> 표현할 height 값
 * @param type <string> 'Room' | 'Review' | 'User'
 * @param capacity <number> type이 User일 경우 표기할 자리 값 (기본값 : 6)
 * @param onChange <function> Rating 값이 변경될 때 실행될 함수
 */
export default function RatingInput({
  rating,
  maxRating = 5,
  width,
  height,
  type,
  capacity,
  onChange,
}: RatingInputProps) {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const handleMouseOut = () => setHoverRating(null);
  const handleSelect = (nextValue: number) => onChange(nextValue, 'rating');

  const starWidth = width / maxRating;
  const lineWidth =
    type === 'User' && typeof capacity === 'number'
      ? (capacity / maxRating) * width
      : (Math.ceil(rating) / maxRating) * width;
  const filledWidth = ((hoverRating || rating) / maxRating) * width;
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

  // 마우스를 hover 했을 때, rating 값이 변경되는 걸 보여주기 위한 이벤트 핸들러
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const hoverX = e.clientX - rect.left;
    const calculatedHoverRating = Math.ceil((hoverX / width) * maxRating);
    setHoverRating(calculatedHoverRating);
  };

  // 마우스를 click 했을 때, rating 값이 최종 변경되도록 실행하는 이벤트 핸들러
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newRating = Math.ceil((clickX / width) * maxRating);
    handleSelect(newRating);
  };

  return (
    <div
      className="relative inline-block"
      style={{ width: `${width}px`, height: `${height}px` }}
      aria-label="별점 평가"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
    >
      <span style={backgroundStyle(empty, width)} />
      <span style={backgroundStyle(line, lineWidth)} />
      <span style={backgroundStyle(full, filledWidth)} />
    </div>
  );
}
