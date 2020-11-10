import React from 'react';
import { render } from 'react-dom';
import styles from './index.scss';

if ('alt' in window) {
  window.alt.emit('client:someEvent');
}

export const App: React.FC = () => <h1 className={styles['title']}>boilerplate</h1>;

render(<App />, document.getElementById('root'));
