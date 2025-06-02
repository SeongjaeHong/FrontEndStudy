import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('---- Error Boundary ----');
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      //   return this.props.fallback;
      return (
        <div className='counter'>
          <span className='number'>0</span>
          <button
            className='button'
            onClick={() => {
              console.log('다시 시도하기 꾹');
            }}
          >
            다시 시도하기
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
