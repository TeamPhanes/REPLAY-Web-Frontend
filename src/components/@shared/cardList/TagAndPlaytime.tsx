import Image from 'next/image';
import PlaytimeClock from '@/public/icons/cardList/playtime_clock.svg';

interface TagAndPlaytimeProps {
  tag: string[];
  playtime: number;
}

export default function TagAndPlaytime({ tag, playtime }: TagAndPlaytimeProps) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-1">
        {tag.map((genre) => (
          <p
            key={genre}
            className="flex gap-[2px] rounded-full bg-white px-2 py-1 text-base font-semibold text-tag"
          >
            <span>#</span>
            {genre}
          </p>
        ))}
      </div>

      <div className="flex gap-[2px] rounded-full bg-white px-2 py-1 text-base font-semibold text-tag">
        <Image src={PlaytimeClock} alt="시계 아이콘" width={24} height={24} />
        {playtime}
        <p>분</p>
      </div>
    </div>
  );
}
