import React from 'react';
export interface AppErrorBoundaryFallbackProps {
    error: any;
    errorInfo: {
        componentStack?: string;
    } | null;
    reset: () => void;
}
export interface AppErrorBoundaryProps {
    children?: React.ReactNode;
    fallbackDev?: React.ReactNode | ((props: AppErrorBoundaryFallbackProps) => React.ReactNode);
    fallbackProd?: React.ReactNode | ((props: AppErrorBoundaryFallbackProps) => React.ReactNode);
}
export interface AppErrorBoundaryState {
    hasError: boolean;
    error: any;
    reactError: {
        name?: string;
        message?: string;
        stack?: string;
    } | null;
    errorInfo: {
        componentStack?: string;
    } | null;
}
export declare class AppErrorBoundary extends React.Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
    state: AppErrorBoundaryState;
    handleReset: () => void;
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
        error: any;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    renderDevError(): any;
    renderProdError(): any;
    render(): any;
}
