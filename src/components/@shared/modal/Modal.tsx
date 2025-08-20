'use client';

import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export default function Modal({
  children,
  isOpen,
  onClose,
  className,
}: ModalProps) {
  const modalContentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!modalContentRef.current) return;
      const target = e.target as HTMLElement;

      if (target.tagName === 'HTML') {
        return;
      }

      if (!modalContentRef.current.contains(target)) {
        onClose();
      }
    },
    [onClose]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      modalContentRef.current?.querySelector('input')?.focus();
      window.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClickOutside, handleKeyDown]);

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-[#505050]/60 flex items-center justify-center">
      <div
        ref={modalContentRef}
        className={`
          max-h-[calc(100vh-120px)] md:max-h-[calc(100vh-40px)] max-w-[calc(100vw-20px)]
          overflow-auto animate-modalIn z-50 scrollbar-x-hidden 
          ${className}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    typeof window !== 'undefined' ? document.body : (null as any)
  );
}
