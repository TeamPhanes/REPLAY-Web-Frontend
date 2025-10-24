import MainWhiteButton from '@/components/@shared/button/MainWhiteButton';

interface Option {
  value: string;
  label: string;
}

interface TypeButtonChangerProps {
  className: string;
  options: Option[];
  selectedType: string;
  setSelectedType: (key: string) => void;
}

export default function TypeButtonChanger({
  className,
  options,
  selectedType,
  setSelectedType,
}: TypeButtonChangerProps) {
  return (
    <div className={`flex ${className}`}>
      {options.map((option) => (
        <MainWhiteButton
          key={option.value}
          type="button"
          className={`${selectedType === option.value ? 'bg-[#E5E5E5] border-line-secondDarkGray' : ''} min-w-[68px] z-10`}
          onClick={() => setSelectedType(option.value)}
        >
          {option.label}
        </MainWhiteButton>
      ))}
    </div>
  );
}
