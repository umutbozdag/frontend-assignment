import React, { useRef, useLayoutEffect } from 'react';
import styles from './FeatureSignFrame.module.scss';
import classnames from 'classnames/bind';
import image from '../../assets/sign-frame.png';
import gsap from 'gsap';
import vendor1 from '../../assets/sign-frame-vendor-1.png';
import vendor2 from '../../assets/sign-frame-vendor-2.png';

const cx = classnames.bind(styles);

export default function FeatureSignFrame() {
  const featureImgRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      featureImgRef.current,
      {
        yPercent: 100,
        ease: 'back.in(1.8)', // Adjust the easing function as needed
      },
      {
        yPercent: 5,
        duration: 1,
      }
    ).set(featureImgRef.current, {
      overflow: 'auto'
    }).fromTo(
      ['#sign-frame-vendor1', '#sign-frame-vendor2'],
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'expo.inOut',
      }
    );

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className={cx('signFrameContainer')}>
      <div className={cx('signFrame')}>
        <img
          id="sign-frame-vendor1"
          loading="lazy"
          className={cx('signFrameVendor1')}
          src={vendor1}
          alt=""
        />

        <img
          id="sign-frame-vendor2"
          loading="lazy"
          className={cx('signFrameVendor2')}
          src={vendor2}
          alt=""
        />
        <img
          ref={featureImgRef}
          loading="lazy"
          className={cx('signFrameImg')}
          src={image}
          alt=""
        />
      </div>
    </div>
  );
}
