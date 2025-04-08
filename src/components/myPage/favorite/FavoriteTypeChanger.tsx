interface FavoriteTypeChangerProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
}

export default function FavoriteTypeChanger({
  selectedType,
  setSelectedType,
}: FavoriteTypeChangerProps) {
  const changeTypeClick = (type: string) => {
    setSelectedType(type);
  };

  return (
    <div className="flex gap-10">
      <button
        type="button"
        className={`text-[32px]/[42px] font-semibold tracking-[-2.5%] ${selectedType === 'room' ? 'text-white' : 'text-grayFont'}`}
        onClick={() => changeTypeClick('room')}
      >
        찜한 방탈출
      </button>
      <button
        type="button"
        className={`text-[32px]/[42px] font-semibold tracking-[-2.5%] ${selectedType === 'gathering' ? 'text-white' : 'text-grayFont'}`}
        onClick={() => changeTypeClick('gathering')}
      >
        찜한 모임
      </button>
    </div>
  );
}
