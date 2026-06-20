import React from 'react'

export type ModalSize = 'sm' | 'md' | 'lg' | 'full'

export interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  size?: ModalSize
  children: React.ReactNode
  footer?: React.ReactNode
  closeOnBackdrop?: boolean
  className?: string
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  size = 'md',
  children,
  footer,
  closeOnBackdrop = true,
  className = '',
}) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null)
  const titleId = React.useId()

  React.useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open) {
      if (!dialog.open) dialog.showModal()
    } else {
      if (dialog.open) dialog.close()
    }
  }, [open])

  React.useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const handleClose = () => onClose()
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [onClose])

  // Close on Escape is native to <dialog>
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (!closeOnBackdrop) return
    if (e.target === dialogRef.current) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className={['cp-modal-backdrop', className].filter(Boolean).join(' ')}
      onClick={handleBackdropClick}
      aria-labelledby={title ? titleId : undefined}
      aria-modal="true"
    >
      <div className={`cp-modal cp-modal--${size}`}>
        <div className="cp-modal__header">
          {title && (
            <h2 id={titleId} className="cp-modal__title">
              {title}
            </h2>
          )}
          <button
            className="cp-modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <div className="cp-modal__body">{children}</div>
        {footer && <div className="cp-modal__footer">{footer}</div>}
      </div>
    </dialog>
  )
}
