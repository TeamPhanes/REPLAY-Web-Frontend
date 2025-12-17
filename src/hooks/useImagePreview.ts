import { useEffect, useState } from 'react';

export default function useImagePreview(
  initialCount: number,
  reviewImages?: {
    id?: number | string;
    image: string | null;
    type?: string;
  }[]
) {
  // 이미지 파일 상태 초기화
  const [imageFiles, setImageFiles] = useState<
    { id: string; image: File | null; type?: string }[]
  >(
    reviewImages
      ? [
          ...reviewImages.map((img) => ({
            id: img.id ? String(img.id) : 'image',
            image: null,
          })),
          ...Array.from({ length: initialCount - reviewImages.length }, () => ({
            id: 'image',
            image: null,
          })),
        ].slice(0, initialCount)
      : Array.from({ length: initialCount }, () => ({
          id: 'image',
          image: null,
        }))
  );

  // 미리보기 URL 상태 초기화
  const [previewUrls, setPreviewUrls] = useState<
    { id: string; image: string | null }[]
  >(
    reviewImages
      ? [
          ...reviewImages.map((img) => ({
            id: img.id ? String(img.id) : 'image',
            image: img.image,
          })),
          ...Array.from({ length: initialCount - reviewImages.length }, () => ({
            id: 'image',
            image: null,
          })),
        ].slice(0, initialCount)
      : Array.from({ length: initialCount }, () => ({
          id: 'image',
          image: null,
        }))
  );

  // 이미지 변경 핸들러
  const handleImageChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selected = e.target.files?.[0];
    if (selected) {
      const newFiles = [...imageFiles];
      const newUrls = [...previewUrls];
      newFiles[index] = { ...newFiles[index], image: selected };
      newUrls[index] = {
        ...newUrls[index],
        image: URL.createObjectURL(selected),
      };
      setImageFiles(newFiles);
      setPreviewUrls(newUrls);
    }
  };

  // 특정 이미지 초기화
  const handleImageReset = (index: number) => {
    const newFiles = [...imageFiles];
    const newUrls = [...previewUrls];
    newFiles[index] = { ...newFiles[index], image: null };
    newUrls[index] = { ...newUrls[index], image: null };
    setImageFiles(newFiles);
    setPreviewUrls(newUrls);
  };

  // 모든 이미지 초기화
  const resetAllImages = () => {
    setImageFiles(
      Array.from({ length: initialCount }, (_, i) => ({
        id: String(i),
        image: null,
      }))
    );
    setPreviewUrls(
      Array.from({ length: initialCount }, () => ({ id: '', image: null }))
    );
  };

  // reviewImages 변경 시 상태 업데이트
  useEffect(() => {
    const paddedFiles = reviewImages
      ? [
          ...reviewImages.map((img) => ({
            id: img.id ? String(img.id) : '',
            image: null,
          })),
          ...Array.from({ length: initialCount - reviewImages.length }, () => ({
            id: '',
            image: null,
          })),
        ].slice(0, initialCount)
      : Array.from({ length: initialCount }, () => ({ id: '', image: null }));

    const paddedUrls = reviewImages
      ? [
          ...reviewImages.map((img) => ({
            id: img.id ? String(img.id) : '',
            image: img.image,
          })),
          ...Array.from({ length: initialCount - reviewImages.length }, () => ({
            id: '',
            image: null,
          })),
        ].slice(0, initialCount)
      : Array.from({ length: initialCount }, () => ({ id: '', image: null }));

    setImageFiles(paddedFiles);
    setPreviewUrls(paddedUrls);
  }, [reviewImages, initialCount]);

  return {
    imageFiles,
    previewUrls,
    setPreviewUrls,
    handleImageChange,
    handleImageReset,
    resetAllImages,
  };
}
