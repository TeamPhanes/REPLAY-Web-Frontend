import { ReactNode, useEffect, useRef } from 'react';
import deleteIcon from '@/public/icons/modal/delete.svg';
import Image from 'next/image';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  customDimStyle?: string;
}

/**
 * HTML5 dialog 태그를 활용한 공통 Modal 컴포넌트
 * @param isOpen 모달이 열린 상태 (true), 닫힌 상태 (false)를 가지는 boolean state
 * @param onClose 모달의 닫는 기능을 실행하는 함수
 * @param customDimStyle padding 등의 스타일을 커스텀 하는 tailwind css classname
 */
export default function Modal({
  children,
  isOpen,
  onClose,
  customDimStyle,
}: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // 모달 상태 변화와 첫 번째 input에 포커스 설정을 위한 useEffect
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      dialog.querySelector('input')?.focus();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  // ESC 키 입력 시 모달 닫기 처리
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 h-full w-full bg-tag opacity-40" />
      )}
      <dialog
        ref={dialogRef}
        className={`fixed inset-0 z-50 rounded-[30px] bg-card p-5 shadow-lg ${customDimStyle}`}
      >
        {children}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5"
        >
          <Image
            src={deleteIcon}
            alt="모달 닫기"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </button>
      </dialog>
    </>
  );
}
