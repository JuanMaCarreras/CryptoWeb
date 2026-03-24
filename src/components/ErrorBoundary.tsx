// src/components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error 
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Solo loguear en desarrollo
    if (import.meta.env.DEV) {
      console.error('Error capturado por ErrorBoundary:', error, errorInfo)
    }
    
    this.setState({ errorInfo })
  }

  // ✅ IMPORTANTE: Reset cuando cambia la ruta
  componentDidUpdate(prevProps: Props) {
    if (this.props.children !== prevProps.children && this.state.hasError) {
      this.setState({ hasError: false, error: undefined, errorInfo: undefined })
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='flex flex-col items-center justify-center min-h-screen p-4'>
          <h1 className='text-3xl font-bold mb-4'>Algo salió mal 😔</h1>
          <p className='text-gray-600 mb-6 text-center max-w-md'>
            Lo sentimos, ocurrió un error inesperado
          </p>
          
          {/* Mostrar error solo en desarrollo */}
          {import.meta.env.DEV && this.state.error && (
            <div className='mb-6 p-4 bg-red-50 rounded-lg max-w-2xl overflow-auto'>
              <p className='text-sm text-red-800 font-mono'>
                {this.state.error.toString()}
              </p>
            </div>
          )}
          
          <div className='flex gap-4'>
            <button 
              onClick={() => window.history.back()}
              className='px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition'
            >
              Volver atrás
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
            >
              Ir al inicio
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}