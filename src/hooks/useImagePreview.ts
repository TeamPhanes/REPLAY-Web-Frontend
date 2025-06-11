'use client';

import { useState } from 'react';

export default function useImagePreview() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

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

  return {
    imageFile,
    previewUrl,
    handleImageChange,
    handleImageReset,
  };
}
