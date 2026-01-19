interface PatchMyPageSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function PatchMyPageSwitch({
  checked,
  onChange,
}: PatchMyPageSwitchProps) {
  return (
    <div
      onClick={() => onChange(!checked)}
      className={`flex h-8 w-[52px] cursor-pointer items-center rounded-full py-[2px] transition-colors duration-300 ${
        checked
          ? 'bg-mainBlue px-[2px]'
          : 'border-2 border-spot bg-homeFont px-1'
      }`}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div
        className={`transform rounded-full shadow-md transition-transform duration-300 ${
          checked
            ? 'h-6 w-6 translate-x-5 bg-white'
            : 'h-4 w-4 translate-x-1 bg-spot'
        }`}
      />
    </div>
  );
}
