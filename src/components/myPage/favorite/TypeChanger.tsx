interface Option {
  value: string;
  label: string;
}

interface TypeChangerProps {
  gap?: string;
  options: Option[];
  selectedType: string;
  setSelectedType: (key: string) => void;
}

export default function TypeChanger({
  gap,
  options,
  selectedType,
  setSelectedType,
}: TypeChangerProps) {
  return (
    <div className={`flex ${gap}`}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`text-xl md:text-2xl font-semibold tracking-[-2.5%] duration-500 ease-in-out hover:text-white ${
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
