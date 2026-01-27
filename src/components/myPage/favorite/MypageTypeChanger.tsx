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
    <div className="flex items-center gap-2 md:gap-4 xl:gap-6">
      {buttonList.map((list) => {
        return (
          <button
            key={list.value}
            type="button"
            onClick={() => setSelectedType(list.value)}
            className={`${selectedType === list.value ? 'border-brand-sub500 text-brand-sub500' : 'border-line-darkGray text-font-secondBlack'} rounded-[4px] border-2 bg-white px-4 py-2 text-lg font-semibold tracking-[-2.5%] md:px-5 md:text-2xl`}
          >
            {list.label}
          </button>
        );
      })}
    </div>
  );
}
