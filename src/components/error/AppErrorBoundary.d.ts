import * as React from 'react';

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

export class AppErrorBoundary extends React.Component<AppErrorBoundaryProps, AppErrorBoundaryState> {}
