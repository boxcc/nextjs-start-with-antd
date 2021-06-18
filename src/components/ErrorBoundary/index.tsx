import React from 'react';
import { Button } from 'antd';
import ReloadOutlined from '@ant-design/icons/ReloadOutlined';

import styles from './styles.module.less';

interface Props {}

interface State {
  hasError: boolean;
  errorInfo: any;
}

// const CATCH_HAS_REFRESH_URL_PARAM = '____ErrorBoundary';

export class ErrorBoundary extends React.Component<Props, State> {
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: {},
    };
  }

  componentDidCatch(err: Error) {
    this.setState({ errorInfo: err.message });
  }

  onRefresh = () => {
    window.location.href = `/`;
    // window.location.reload();
  };

  render() {
    const { hasError, errorInfo } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className={styles[`error-boundary-comp-wrapper`]}>
          <div className={styles[`error-boundary-container`]}>
            <div className={styles.title}>
              <strong>Page Load Error</strong>
            </div>

            <Button
              type="primary"
              icon={<ReloadOutlined />}
              onClick={this.onRefresh}
              className={styles[`refresh-button`]}
            >
              Reload
            </Button>

            <div className={styles[`error-info`]}>
              <pre>
                <code>{JSON.stringify(errorInfo)}</code>
              </pre>
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}
