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

export default function OrderChanger({
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
          className={`rounded-full border-2 px-4 py-1 text-2xl/[34px] font-normal tracking-[-2.5%] duration-500 ease-in-out hover:bg-white hover:border-mainBlue hover:text-mainBlue ${
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
