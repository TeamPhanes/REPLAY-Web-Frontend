import { ReactNode, useCallback, useEffect, useRef } from 'react';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  customDimStyle?: string;
}

/**
 * 공통 Modal 컴포넌트
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
  const modalContentRef = useRef<HTMLDivElement>(null);

  // modalContent가 등록되었고 현재 클릭한 target이 modal 혹은 modal 내부의 element가 아닌 경우
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  // 내부에서 이벤트 핸들러를 등록 해서 모달 외부 클릭 시 모달 닫히게 설정
  // mousedown이 아니라 click으로 하는 경우 modal open button의 onClick과 겹쳐서 열리자마자 닫힘 (안 열린것 처럼 보이게 됨)
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  // 첫 번째 input에 포커스 설정을 위한 useEffect
  useEffect(() => {
    if (!modalContentRef.current) return;

    if (isOpen) {
      modalContentRef.current.querySelector('input')?.focus();
    } else {
      onClose();
    }
  }, [isOpen, handleClickOutside, onClose]);

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

  // 기존 페이지 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 flex h-full w-full items-center justify-center bg-tag opacity-40" />
      )}
      <div
        ref={modalContentRef}
        className={`
    scrollbar-hide fixed left-1/2 top-1/2 z-50 
    max-h-[calc(100vh-40px)] -translate-x-1/2 
    -translate-y-1/2 overflow-auto transform animate-modalIn 
    ${customDimStyle}
  `}
      >
        {children}
      </div>
    </>
  );
}
