interface CountListValueProps {
  value: number;
}

export default function CountListValue({ value }: CountListValueProps) {
  return (
    <p className="text-sm font-normal tracking-[-2.5%] text-font-baseWhite">
      전체 {value}개
    </p>
  );
}
