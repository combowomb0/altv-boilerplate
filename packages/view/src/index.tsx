/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { render } from 'react-dom';
import { emit } from 'alt-client';
import styles from './index.scss';

window.addEventListener('load', () => {
  emit('view:loaded');
});

const App: React.FC = () => <h1 className={styles['title']}>boilerplate</h1>;

render(<App />, document.getElementById('root'));
