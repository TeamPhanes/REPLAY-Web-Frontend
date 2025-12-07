interface MyPageTypeChanger {
  selectedType: string;
  setSelectedType: (value: string) => void;
}

export default function MypageTypeChanger({
  selectedType,
  setSelectedType,
}: MyPageTypeChanger) {
  const buttonList = [
    { value: 'room', label: '방탈출' },
    { value: 'gathering', label: '모임' },
  ];

  return (
    <div className="flex items-center gap-6">
      {buttonList.map((list) => {
        return (
          <button
            key={list.value}
            type="button"
            onClick={() => setSelectedType(list.value)}
            className={`${selectedType === list.value ? 'border-brand-sub500 text-brand-sub500' : 'border-line-darkGray text-font-secondBlack'} rounded-[4px] text-2xl tracking-[-2.5%] font-semibold bg-white py-2 px-5 border-2`}
          >
            {list.label}
          </button>
        );
      })}
    </div>
  );
}
