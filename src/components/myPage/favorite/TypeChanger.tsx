interface Option {
  value: string;
  label: string;
}

interface TypeChangerProps {
  options: Option[];
  selectedType: string;
  setSelectedType: (key: string) => void;
}

export default function TypeChanger({
  options,
  selectedType,
  setSelectedType,
}: TypeChangerProps) {
  return (
    <div className="flex gap-5 md:gap-10">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`text-2xl md:text-[32px]/[42px] font-semibold tracking-[-2.5%] duration-500 ease-in-out hover:text-white ${
            selectedType === option.value ? 'text-white' : 'text-grayFont'
          }`}
          onClick={() => setSelectedType(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
