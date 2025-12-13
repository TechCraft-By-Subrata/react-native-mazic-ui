import React from 'react';
import { View, Text, StyleSheet, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { setupGlobalExceptionHandlers } from './setupGlobalExceptionHandlers';
setupGlobalExceptionHandlers();
export class AppErrorBoundary extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            hasError: false,
            error: null,
            reactError: null,
            errorInfo: null,
        };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        // Log exactly what React gives
        console.log('React Render Error:', error);
        // Store everything needed for UI
        this.setState({
            error,
            reactError: {
                name: error === null || error === void 0 ? void 0 : error.name,
                message: error === null || error === void 0 ? void 0 : error.message,
                stack: error === null || error === void 0 ? void 0 : error.stack,
            },
            errorInfo,
        });
    }
    renderDevError() {
        const { error, reactError, errorInfo } = this.state;
        if (!error)
            return null;
        return (React.createElement(SafeAreaView, { style: { flex: 1 } },
            React.createElement(ScrollView, { style: styles.container },
                React.createElement(Text, { style: styles.title }, "\uD83D\uDEA8 Application Error (DEV)"),
                React.createElement(Section, { title: "\u274C What happened" },
                    React.createElement(Text, { style: styles.errorText },
                        error.name,
                        ": ",
                        error.message)),
                React.createElement(Section, { title: "\u269B\uFE0F React render error" },
                    React.createElement(Text, { style: styles.mono }, reactError === null || reactError === void 0 ? void 0 : reactError.stack)),
                React.createElement(Section, { title: "\uD83D\uDCDC Component stack (Advanced)" },
                    React.createElement(Text, { style: styles.stack }, errorInfo === null || errorInfo === void 0 ? void 0 : errorInfo.componentStack)))));
    }
    renderProdError() {
        return (React.createElement(View, { style: styles.prodContainer },
            React.createElement(Text, { style: styles.prodTitle }, "Something went wrong"),
            React.createElement(Text, { style: styles.prodSubtitle }, "Please restart the application.")));
    }
    render() {
        if (this.state.hasError) {
            return __DEV__ ? this.renderDevError() : this.renderProdError();
        }
        return this.props.children;
    }
}
const Section = ({ title, children }) => (React.createElement(View, { style: styles.section },
    React.createElement(Text, { style: styles.sectionTitle }, title),
    children));
/* ---------- Styles ---------- */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f172a',
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#f87171',
        marginBottom: 12,
    },
    section: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#38bdf8',
        marginBottom: 6,
    },
    errorText: {
        color: '#fecaca',
        fontSize: 14,
    },
    mono: {
        fontSize: 12,
        color: '#e5e7eb',
        lineHeight: 16,
    },
    stack: {
        fontSize: 11,
        color: '#94a3b8',
        lineHeight: 16,
    },
    prodContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    prodTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
    prodSubtitle: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
});
