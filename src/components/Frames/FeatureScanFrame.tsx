import React, { useRef, useLayoutEffect } from 'react';
import styles from './FeatureScanFrame.module.scss';
import classnames from 'classnames/bind';
import image from '../../assets/scan-frame.png';
import gsap from 'gsap';

const cx = classnames.bind(styles);

export default function FeatureScanFrame() {
  const featureImgRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      featureImgRef.current,
      {
        yPercent: 100,
        ease: 'back.in(1.7)',
      },
      {
        yPercent: 5,
        duration: 1,
      }
    );

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div>
      <div className={cx('featureScanContainer')}>
        <img
          ref={featureImgRef}
          src={image}
          alt="Scan frame"
          className={cx('scanImg')}
        />
      </div>
    </div>
  );
}
