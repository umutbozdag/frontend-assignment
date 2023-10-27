import cn from 'classnames/bind';
import styles from './FeatureItem.module.scss';
import { IFeatureItem } from '../../config/features';
import Button from '../Button';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import SpecificFeatureFrame from '../Frames/SpecificFeatureFrame';

const cx = cn.bind(styles);
const Feature = ({ title, description, subtitle, frame }: IFeatureItem) => {
  const featureContentRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      featureContentRef.current,
      {
        opacity: 0,
        duration: 0.1,
      },
      {
        opacity: 1,
      },
    );

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className={cx('feature')}>
      <div className={cx('featureContainer')}>
        <SpecificFeatureFrame frame={frame} />
      </div>
      <div ref={featureContentRef} className={cx('featureContent')}>
        <div className={cx('featureSubtitle')}>{subtitle}</div>
        <div className={cx('featureTitle')}>{title}</div>
        <div className={cx('featureDescription')}>{description}</div>
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

export default Feature;
