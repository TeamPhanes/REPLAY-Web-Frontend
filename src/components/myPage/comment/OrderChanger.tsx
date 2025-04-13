interface Option {
  value: string;
  label: string;
}

interface OrderChangerProps {
  options: Option[];
  selectedType: string;
  setSelectedType: (key: string) => void;
}

export default function OrderChanger({
  options,
  selectedType,
  setSelectedType,
}: OrderChangerProps) {
  return (
    <div className="mt-5 flex gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`rounded-full border-2 px-4 py-1 text-2xl/[34px] font-normal tracking-[-2.5%] ${
            selectedType === option.value
              ? 'border-mainBlue bg-card text-mainBlue'
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
