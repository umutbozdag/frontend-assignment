import cn from 'classnames/bind';
import styles from './FeatureFiltersFrame.module.scss';
import filtersFrame from '../../assets/filters-frame.png';
import filtersFrameVendor1 from '../../assets/filters-frame-vendor-1.png';
import filtersFrameVendor2 from '../../assets/filters-frame-vendor-2.png';
import { useLayoutEffect, useRef } from 'react';
import createFrameAnimation from '../../utils/createFrameAnimation';

const cx = cn.bind(styles);

export default function FeatureFiltersFrame() {
  const filtersFrameImg = useRef(null);
  useLayoutEffect(() => {
    const tl = createFrameAnimation(filtersFrameImg.current);
    tl.fromTo(
      ['#filters-frame-vendor-1', '#filters-frame-vendor-2'],
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className={cx('filtersFrameContainer')}>
      <div className={cx('filtersFrame')}>
        <img
          id="filters-frame-img"
          className={cx('filtersFrameImg')}
          src={filtersFrame}
          alt="Filters frame image"
          ref={filtersFrameImg}
        />
        <img
          id="filters-frame-vendor-1"
          className={cx('filtersFrameVendor1')}
          src={filtersFrameVendor1}
          alt="Filters settings"
        />
        <img
          id="filters-frame-vendor-2"
          className={cx('filtersFrameVendor2')}
          src={filtersFrameVendor2}
          alt="Filters settings"
        />
      </div>
    </div>
  );
}
