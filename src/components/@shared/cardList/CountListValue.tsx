interface CountListValueProps {
  value: number;
}

export default function CountListValue({ value }: CountListValueProps) {
  return (
    <p className="text-base font-normal tracking-[-2.5%] text-setfont">
      전체 {value}개
    </p>
  );
}
