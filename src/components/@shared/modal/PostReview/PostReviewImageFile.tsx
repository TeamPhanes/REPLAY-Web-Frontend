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
      className="flex h-[93px] w-[93px] cursor-pointer items-center justify-center gap-2 rounded-[4px] bg-line-lightGray p-10 md:h-[108px] md:w-[108px]"
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
    <div className="group relative flex items-center">
      <label
        htmlFor={`image${index}`}
        className="flex h-[93px] w-[93px] cursor-pointer items-center justify-center gap-2 rounded-[4px] bg-line-lightGray md:h-[108px] md:w-[108px]"
      >
        <Image
          src={previewUrl.image}
          alt="첨부 이미지 미리보기"
          width={100}
          height={100}
          className="h-[93px] w-[93px] rounded-[4px] md:h-[100px] md:w-[100px]"
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
        className="absolute left-1/2 top-1/2 block -translate-x-1/2 -translate-y-1/2 animate-modalIn rounded-full bg-white duration-500 md:group-hover:block xl:hidden"
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
          className="h-6 w-6"
        />
      </button>
    </div>
  );
}
