import { useRef, useLayoutEffect } from 'react';
import styles from './FeatureSignFrame.module.scss';
import classnames from 'classnames/bind';
import image from '../../assets/sign-frame.png';
import vendor1 from '../../assets/sign-frame-vendor-1.png';
import vendor2 from '../../assets/sign-frame-vendor-2.png';
import createFrameAnimation from '../../utils/createFrameAnimation';

const cx = classnames.bind(styles);

const FeatureSignFrame = () => {
  const signFrameImgRef = useRef(null);

  useLayoutEffect(() => {
    const tl = createFrameAnimation(signFrameImgRef.current);
    tl.fromTo(
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
          ref={signFrameImgRef}
          loading="lazy"
          className={cx('signFrameImg')}
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default FeatureSignFrame;
