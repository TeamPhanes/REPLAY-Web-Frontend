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
          className={`h-[44px] min-w-[100px] rounded-[4px] border-[1px] text-sm font-semibold duration-500 ease-in-out hover:border-mainBlue hover:bg-white hover:text-mainBlue ${
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
