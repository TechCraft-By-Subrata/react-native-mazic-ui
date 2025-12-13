import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { setupGlobalExceptionHandlers } from './setupGlobalExceptionHandlers';

setupGlobalExceptionHandlers();

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

export class AppErrorBoundary extends React.Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = {
    hasError: false,
    error: null,
    reactError: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // Log exactly what React gives
    console.log('React Render Error:', error);

    // Store everything needed for UI
    this.setState({
      error,
      reactError: {
        name: error?.name,
        message: error?.message,
        stack: error?.stack,
      },
      errorInfo,
    });
  }

  renderDevError() {
    const { error, reactError, errorInfo } = this.state;

    if (!error) return null;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <Text style={styles.title}>🚨 Application Error (DEV)</Text>

          {/* 1️⃣ What happened */}
          <Section title="❌ What happened">
            <Text style={styles.errorText}>
              {error.name}: {error.message}
            </Text>
          </Section>

          {/* 2️⃣ React render error (same as console.log(error)) */}
          <Section title="⚛️ React render error">
            <Text style={styles.mono}>
              {reactError?.stack}
            </Text>
          </Section>

          {/* 3️⃣ Component stack (advanced) */}
          <Section title="📜 Component stack (Advanced)">
            <Text style={styles.stack}>
              {errorInfo?.componentStack}
            </Text>
          </Section>
        </ScrollView>
      </SafeAreaView>
    );
  }

  renderProdError() {
    return (
      <View style={styles.prodContainer}>
        <Text style={styles.prodTitle}>Something went wrong</Text>
        <Text style={styles.prodSubtitle}>
          Please restart the application.
        </Text>
      </View>
    );
  }

  render() {
    if (this.state.hasError) {
      return __DEV__ ? this.renderDevError() : this.renderProdError();
    }
    return this.props.children;
  }
}

/* ---------- Helper Components ---------- */

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

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
