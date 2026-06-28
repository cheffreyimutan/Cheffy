import { StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(e) { return { error: e }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'monospace', color: '#ff4d4d', background: '#0c0617', minHeight: '100vh' }}>
          <h1 style={{ color: '#fff' }}>Something went wrong</h1>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{String(this.state.error)}</pre>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', color: '#aaa', fontSize: 13 }}>{this.state.error?.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
