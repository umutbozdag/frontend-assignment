import React, { useRef, useLayoutEffect } from 'react';
import styles from './FeatureScanFrame.module.scss';
import classnames from 'classnames/bind';
import image from '../../assets/scan-frame.png';
import createFrameAnimation from '../../utils/createFrameAnimation';

const cx = classnames.bind(styles);

export default function FeatureScanFrame() {
  const scanFrameImgRef = useRef(null);

  useLayoutEffect(() => {
    const tl = createFrameAnimation(scanFrameImgRef.current);
    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div>
      <div className={cx('featureScanContainer')}>
        <img
          ref={scanFrameImgRef}
          src={image}
          alt="Scan frame"
          className={cx('scanImg')}
        />
      </div>
    </div>
  );
}
