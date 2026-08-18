import type { ErrorInfo, PropsWithChildren } from "react";
import { Component } from "react";
import { ErrorState } from "./ErrorState";

type ErrorBoundaryState = {
  error: Error | null;
};

export class ErrorBoundary extends Component<PropsWithChildren, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Frontend webview error", error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return <ErrorState title="Something went wrong" actionLabel="Try again" onAction={() => this.setState({ error: null })} />;
    }

    return this.props.children;
  }
}
