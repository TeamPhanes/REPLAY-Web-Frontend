import { useState } from 'react';

export const useOpen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleOpen,
  };
};
