import Image from 'next/image';
import TagIcon from '@/public/icons/cardList/genre_tag_icon.svg';

interface TagProps {
  tag: string[];
}

export default function Tag({ tag }: TagProps) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        {tag.map((genre, index) => (
          <p
            key={index}
            className="flex gap-[2px] rounded-[4px] px-3 py-[6px] text-[13px]/[18px] font-normal text-brand-main600 border-[1px] border-brand-main500"
          >
            <Image src={TagIcon} alt="핀셋 아이콘" width={16} height={16} />
            {genre}
          </p>
        ))}
      </div>
    </div>
  );
}
