import { useRef, useEffect, useLayoutEffect } from 'react';
import styles from './FeatureBatchFrame.module.scss';
import cn from 'classnames/bind';
import frame from '../../assets/batch-frame.png';
import batchFile1 from '../../assets/batch-file-1.png';
import batchFile2 from '../../assets/batch-file-2.png';
import batchFile3 from '../../assets/batch-file-3.png';
import createFrameAnimation from '../../utils/createFrameAnimation';

const cx = cn.bind(styles);

const files = [
  {
    id: 'batch-frame-file-1',
    src: batchFile3,
    alt: '',
    classes: ['batchFrameFile', 'batchFrameFile1'],
  },
  {
    id: 'batch-frame-file-2',
    src: batchFile2,
    alt: '',
    classes: ['batchFrameFile', 'batchFrameFile2'],
  },
  {
    id: 'batch-frame-file-3',
    src: batchFile1,
    alt: '',
    classes: ['batchFrameFile', 'batchFrameFile3'],
  },
];
export default function FeatureSignFrame() {
  const batchFrameImgRef = useRef(null);

  useLayoutEffect(() => {
    const tl = createFrameAnimation(batchFrameImgRef.current);
    tl.fromTo(
      '#batch-frame-file-1',
      {
        top: '120%',
        scale: 0.8,
      },
      {
        duration: 0.4,
        top: '44%',
        scale: 1,
        ease: 'power2.inOut',
      }
    )
      .fromTo(
        '#batch-frame-file-2',
        {
          top: '120%',
          scale: 0.8,
        },
        {
          duration: 0.4,
          scale: 1,
          top: '47%',
          ease: 'power2.inOut',
        }
      )
      .fromTo(
        '#batch-frame-file-3',
        {
          top: '120%',
        },
        {
          top: '50%',
          ease: 'power2.inOut',
          duration: 0.4,
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
          ref={batchFrameImgRef}
          className={cx('batchFrameImg')}
          src={frame}
          alt=""
        />

        {files.map((file) => {
          return (
            <img
              key={file.id}
              id={file.id}
              src={file.src}
              alt={file.alt}
              className={cx([...file.classes])}
            />
          );
        })}
      </div>
    </div>
  );
}
