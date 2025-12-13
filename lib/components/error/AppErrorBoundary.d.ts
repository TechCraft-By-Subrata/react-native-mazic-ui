import React from 'react';
export interface AppErrorBoundaryProps {
    children?: React.ReactNode;
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
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
        error: any;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    renderDevError(): React.JSX.Element | null;
    renderProdError(): React.JSX.Element;
    render(): React.ReactNode;
}
