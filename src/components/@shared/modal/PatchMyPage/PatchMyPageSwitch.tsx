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
      className={`w-[52px] py-[2px] h-8 rounded-full transition-colors duration-300 flex items-center cursor-pointer ${
        checked
          ? 'bg-mainBlue px-[2px]'
          : 'bg-homeFont px-1 border-2 border-spot'
      }`}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div
        className={`rounded-full shadow-md transform transition-transform duration-300 ${
          checked
            ? 'translate-x-5 bg-white w-6 h-6'
            : 'translate-x-1 bg-spot w-4 h-4'
        }`}
      />
    </div>
  );
}
