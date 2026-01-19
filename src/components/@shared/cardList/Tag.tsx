import Image from 'next/image';
import TagIcon from '@/public/icons/cardList/genre_tag_icon.svg';

interface TagProps {
  tag: string[];
  isDetail?: boolean;
}

export default function Tag({ tag, isDetail }: TagProps) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        {tag.map((genre, index) => (
          <p
            key={index}
            className={`${isDetail ? 'text-lg/[26px]' : 'text-[13px]/[18px]'} flex gap-[2px] rounded-[4px] border-[1px] border-brand-main500 px-3 py-[6px] font-normal text-brand-main600`}
          >
            <Image
              src={TagIcon}
              alt="핀셋 아이콘"
              width={isDetail ? 24 : 16}
              height={isDetail ? 24 : 16}
            />
            {genre}
          </p>
        ))}
      </div>
    </div>
  );
}
