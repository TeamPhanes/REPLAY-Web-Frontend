'use client';

import { useEffect, useState } from 'react';

export default function useImagePreview(reviewImage: string | null) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(reviewImage);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setImageFile(selected);
      const url = URL.createObjectURL(selected);
      setPreviewUrl(url);
    }
  };

  const handleImageReset = () => {
    setImageFile(null);
    setPreviewUrl(null);
  };

  useEffect(() => {
    setPreviewUrl(reviewImage);
  }, [reviewImage]);

  return {
    imageFile,
    previewUrl,
    handleImageChange,
    handleImageReset,
  };
}
