interface Option {
  value: string;
  label: string;
}

interface OrderChangerProps {
  options: Option[];
  selectedType: string;
  setSelectedType: (key: string) => void;
  gap?: string;
}

export default function ㅗOrderChanger({
  options,
  selectedType,
  setSelectedType,
  gap,
}: OrderChangerProps) {
  return (
    <div className={`${gap} flex`}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`rounded-[4px] min-w-[100px] h-[44px] text-sm font-semibold border-[1px] duration-500 ease-in-out hover:bg-white hover:border-mainBlue hover:text-mainBlue ${
            selectedType === option.value
              ? 'border-mainBlue bg-white text-mainBlue'
              : 'border-homeFont bg-homeFont text-grayFont'
          }`}
          onClick={() => setSelectedType(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
