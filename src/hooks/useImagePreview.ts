import { useState } from 'react';

export default function useImagePreview(initialCount: number) {
  const [imageFiles, setImageFiles] = useState<(File | null)[]>(
    Array(initialCount).fill(null)
  );
  const [previewUrls, setPreviewUrls] = useState<(string | null)[]>(
    Array(initialCount).fill(null)
  );

  const handleImageChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selected = e.target.files?.[0];
    if (selected) {
      const newFiles = [...imageFiles];
      const newUrls = [...previewUrls];
      newFiles[index] = selected;
      newUrls[index] = URL.createObjectURL(selected);
      setImageFiles(newFiles);
      setPreviewUrls(newUrls);
    }
  };

  const handleImageReset = (index: number) => {
    const newFiles = [...imageFiles];
    const newUrls = [...previewUrls];
    newFiles[index] = null;
    newUrls[index] = null;
    setImageFiles(newFiles);
    setPreviewUrls(newUrls);
  };

  const resetAllImages = () => {
    setImageFiles(Array(initialCount).fill(null));
    setPreviewUrls(Array(initialCount).fill(null));
  };

  return {
    imageFiles,
    previewUrls,
    handleImageChange,
    handleImageReset,
    resetAllImages,
  };
}
