'use client';

import { type FC, type MouseEvent, type ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import cn from '@assignment/utils/style.util';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
}

const Modal: FC<IModalProps> = ({
  isOpen,
  onClose,
  children,
  className = '',
  overlayClassName = '',
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm',
        overlayClassName,
      )}
      onClick={(event) => handleBackdropClick(event)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={cn(
          'animate-in fade-in-0 zoom-in-95 relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl duration-300 dark:bg-gray-900',
          className,
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );

  // Create portal to document.body
  return createPortal(modalContent, document.body);
};

export default Modal;
