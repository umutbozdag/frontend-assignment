import classnames from 'classnames/bind';
import Features from '../../components/Features/Features';
import Tabs from '../../components/Tabs/Tabs';
import { tabs } from '../../config/tabs';
import styles from './Hero.module.scss';

const cx = classnames.bind(styles);

export const Hero = () => {
  return (
    <section className={cx('hero')}>
      <Features />
      <Tabs tabs={tabs} />
    </section>
  );
};
