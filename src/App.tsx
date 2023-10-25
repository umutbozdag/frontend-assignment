import classnames from 'classnames/bind';
import styles from './App.module.scss';
import { Hero } from './layout/hero/Hero';

const cx = classnames.bind(styles);

export function App() {
  return (
    <div className={cx('app')}>
      <Hero />
    </div>
  );
}
