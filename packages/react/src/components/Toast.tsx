import React from 'react'

export type ToastVariant = 'info' | 'success' | 'warning' | 'error'
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export interface ToastItem {
  id: string
  variant?: ToastVariant
  title?: string
  message: string
  duration?: number
  action?: { label: string; onClick: () => void }
}

interface ToastContextValue {
  show: (toast: Omit<ToastItem, 'id'>) => string
  dismiss: (id: string) => void
}

const ToastContext = React.createContext<ToastContextValue | null>(null)

export interface ToastProviderProps {
  position?: ToastPosition
  children: React.ReactNode
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  position = 'top-right',
  children,
}) => {
  const [toasts, setToasts] = React.useState<ToastItem[]>([])

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const show = React.useCallback(
    (toast: Omit<ToastItem, 'id'>): string => {
      const id = Math.random().toString(36).slice(2)
      setToasts((prev) => [...prev, { ...toast, id }])
      const duration = toast.duration ?? 4000
      if (duration > 0) {
        setTimeout(() => dismiss(id), duration)
      }
      return id
    },
    [dismiss]
  )

  return (
    <ToastContext.Provider value={{ show, dismiss }}>
      {children}
      <div
        className={`pom-toast-region pom-toast-region--${position}`}
        role="region"
        aria-label="Notifications"
        aria-live="polite"
      >
        {toasts.map((toast) => (
          <ToastCard key={toast.id} toast={toast} onDismiss={() => dismiss(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

interface ToastCardProps {
  toast: ToastItem
  onDismiss: () => void
}

const icons: Record<ToastVariant, string> = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  error: '✕',
}

const ToastCard: React.FC<ToastCardProps> = ({ toast, onDismiss }) => {
  const variant = toast.variant ?? 'info'
  return (
    <div
      role="status"
      className={`pom-toast pom-toast--${variant}`}
    >
      <span className="pom-toast__icon" aria-hidden="true">{icons[variant]}</span>
      <div className="pom-toast__body">
        {toast.title && <p className="pom-toast__title">{toast.title}</p>}
        <p className="pom-toast__message">{toast.message}</p>
        {toast.action && (
          <button className="pom-toast__action" onClick={toast.action.onClick}>
            {toast.action.label}
          </button>
        )}
      </div>
      <button className="pom-toast__close" onClick={onDismiss} aria-label="Dismiss">
        ✕
      </button>
    </div>
  )
}

export const useToast = (): ToastContextValue => {
  const ctx = React.useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
