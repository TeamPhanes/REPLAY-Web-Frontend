import Image from 'next/image';
import Delete from '@/public/icons/modal/delete.svg';
import ImageIcon from '@/public/icons/modal/image_icon.svg';

interface PostReviewImageFileProps {
  previewUrl: string | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageReset: () => void;
}
export default function PostReviewImageFile({
  previewUrl,
  handleImageChange,
  handleImageReset,
}: PostReviewImageFileProps) {
  return previewUrl === null ? (
    <div className="w-full h-[60px] border-[1px] border-spot rounded-xl border-dashed mt-2 cursor-pointer">
      <label
        htmlFor="image"
        className="cursor-pointer flex items-center gap-2 w-full justify-center h-full"
      >
        <Image
          src={ImageIcon}
          alt="사진 아이콘"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <p className="font-semibold text-xl tracking-[-2.5%] text-basefont">
          사진 첨부하기
        </p>
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="sr-only"
        />
      </label>
    </div>
  ) : (
    <div className="flex items-center">
      <Image
        src={previewUrl}
        alt="첨부 이미지 미리보기"
        width={240}
        height={240}
        className="w-[240xp] h-[240px] p-2 rounded-2xl"
      />
      <div className="flex flex-col w-[446px] gap-2">
        <div className="flex items-center border-[1px] border-spot rounded-xl border-dashed relative h-[110px] justify-center">
          <label
            htmlFor="image"
            className="cursor-pointer flex items-center gap-2 justify-center"
          >
            <Image
              src={ImageIcon}
              alt="사진 아이콘"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <p className="font-semibold text-xl tracking-[-2.5%] text-basefont">
              사진 수정하기
            </p>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="sr-only"
            />
          </label>
        </div>
        <div className="border-[1px] border-spot rounded-xl border-dashed relative h-[110px] flex items-center justify-center">
          <button
            type="button"
            className="flex items-center gap-2"
            onClick={handleImageReset}
          >
            <Image
              src={Delete}
              alt="지우기 아이콘"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <p className="font-semibold text-xl tracking-[-2.5%] text-basefont">
              사진 지우기
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
