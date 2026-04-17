import React, { Component, ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-100 p-6">
          <div className="bg-red-500/10 border border-red-500/50 p-6 rounded-xl max-w-2xl w-full">
            <h1 className="text-2xl font-bold text-red-500 mb-4">Bir hata oluştu!</h1>
            <pre className="text-sm text-red-400 whitespace-pre-wrap font-mono bg-black/50 p-4 rounded-lg overflow-auto">
              {this.state.error?.message}
              {'\n\n'}
              {this.state.error?.stack}
            </pre>
            <button 
              onClick={() => window.location.href = '/'}
              className="mt-6 px-6 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Ana Sayfaya Dön
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
