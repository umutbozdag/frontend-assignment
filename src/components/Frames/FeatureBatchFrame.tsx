import { useRef, useEffect } from 'react';
import styles from './FeatureBatchFrame.module.scss';
import cn from 'classnames/bind';
import gsap from 'gsap';
import frame from '../../assets/batch-frame.png';
import batchFile1 from '../../assets/batch-file-1.png';
import batchFile2 from '../../assets/batch-file-2.png';
import batchFile3 from '../../assets/batch-file-3.png';

const cx = cn.bind(styles);

export default function FeatureSignFrame() {
  const featureImgRef = useRef(null);

  useEffect(() => {
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
    )
      .fromTo(
        '#batch-frame-file-1',
        {
          top: '120%'
        },
        {
          duration: 0.5,
          top: '44%',
          ease: 'power2.inOut',
        }
      )
      .fromTo(
        '#batch-frame-file-2',
        {
          top: '120%',
        },
        {
          duration: 0.5,
          top: '48%',
          ease: 'power2.inOut',
        }
      )
      .fromTo(
        '#batch-frame-file-3',
        {
          top: '120%'
        },
        {
          top: '52%',
          ease: 'power2.inOut',
          duration: 0.5,
        }
      );
    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div>
      <div className={cx('batchFrame')}>
        <img
          ref={featureImgRef}
          className={cx('batchFrameImg')}
          src={frame}
          alt=""
        />

        <img
          id="batch-frame-file-1"
          src={batchFile3}
          alt=""
          className={cx('batchFrameFile', 'batchFrameFile1')}
        />
        <img
          id="batch-frame-file-2"
          src={batchFile2}
          alt=""
          className={cx('batchFrameFile', 'batchFrameFile2')}
        />
        <img
          id="batch-frame-file-3"
          src={batchFile1}
          alt=""
          className={cx('batchFrameFile', 'batchFrameFile3')}
        />
      </div>
    </div>
  );
}
