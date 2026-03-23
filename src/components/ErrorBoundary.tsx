// src/components/ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='flex flex-col items-center justify-center min-h-screen p-4'>
          <h1 className='text-3xl font-bold mb-4'>Algo salió mal 😔</h1>
          <button 
            onClick={() => window.location.href = '/'}
            className='px-6 py-3 bg-blue-500 text-white rounded-lg'
          >
            Volver al inicio
          </button>
        </div>
      )
    }
    return this.props.children
  }
}