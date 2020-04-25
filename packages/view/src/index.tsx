import React from 'react';
import { render } from 'react-dom';
import styles from './index.scss';

import { emit } from 'alt-client';

window.addEventListener('load', () => {
  emit('view:loaded');
});

const App: React.FC = () => <h1 className={styles['title']}>boilerplate</h1>;

render(<App />, document.getElementById('root'));
