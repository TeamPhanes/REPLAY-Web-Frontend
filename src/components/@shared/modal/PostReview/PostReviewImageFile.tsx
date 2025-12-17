import Image from 'next/image';
import Delete from '@/public/icons/modal/delete.svg';
import ReviewDefaultImage from '@/public/icons/modal/review_default_image.svg';

interface PostReviewImageFileProps {
  index: number;
  previewUrl: { id: string; image: string | null };
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageReset: () => void;
  handleAddDeleteImageIds?: (value: number[]) => void;
}
export default function PostReviewImageFile({
  index,
  previewUrl,
  handleImageChange,
  handleImageReset,
  handleAddDeleteImageIds,
}: PostReviewImageFileProps) {
  return previewUrl.image === null ? (
    <label
      htmlFor={`image${index}`}
      className="flex items-center gap-2 justify-center w-[108px] h-[108px] rounded-[4px] p-10 bg-line-lightGray cursor-pointer"
    >
      <Image
        src={ReviewDefaultImage}
        alt="사진 아이콘"
        width={28}
        height={28}
      />
      <input
        id={`image${index}`}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="sr-only"
      />
    </label>
  ) : (
    <div className="flex items-center relative group">
      <label
        htmlFor={`image${index}`}
        className="flex items-center gap-2 justify-center w-[108px] h-[108px] rounded-[4px] bg-line-lightGray cursor-pointer"
      >
        <Image
          src={previewUrl.image}
          alt="첨부 이미지 미리보기"
          width={100}
          height={100}
          className="w-[100px] h-[100px] rounded-[4px]"
        />
        <input
          id={`image${index}`}
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (handleAddDeleteImageIds) {
              handleAddDeleteImageIds([Number(previewUrl.id)]);
            }
            handleImageChange(e);
          }}
          className="sr-only"
        />
      </label>

      <button
        type="button"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white hidden group-hover:block duration-500 animate-modalIn"
        onClick={() => {
          handleImageReset();
          if (handleAddDeleteImageIds) {
            handleAddDeleteImageIds([Number(previewUrl.id)]);
          }
        }}
      >
        <Image
          src={Delete}
          alt="지우기 아이콘"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </button>
    </div>
  );
}
