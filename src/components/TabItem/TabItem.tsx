import { useContext, useEffect, useLayoutEffect } from 'react';
import Icon from '../Icon/Icon';
import styles from './TabItem.module.scss';
import cn from 'classnames/bind';
import { Context } from '../../context/Context';
import { useRef } from 'react';
import gsap from 'gsap';

const cx = cn.bind(styles);

interface ITabProps {
  label: string;
  icon: string;
  active: boolean;
  idx: number;
}

const Tab = ({ label, icon, active, idx }: ITabProps) => {
  const {
    sharedData: { activeTab },
    setSharedData,
  } = useContext(Context)!;

  const ref = useRef(null);

  const tabClass = cx('tab', {
    active,
  });

  const iconClass = cx('tabIcon', {
    active,
  });

  useLayoutEffect(() => {
    const timeline = gsap.timeline();

    if (active) {
      timeline
        .to(ref.current, {
          borderLeftColor: '#0381FF',
          duration: 0.08,
          ease: 'circ.in',
        })
        .to(ref.current, {
          borderBottomColor: '#0381FF',
          duration: 0.08,
          ease: 'circ.in',
        })
        .to(ref.current, {
          borderRightColor: '#0381FF',
          duration: 0.08,
          ease: 'circ.in',
        })
        .to(ref.current, {
          borderTopColor: '#0381FF',
          duration: 0.08,
          ease: 'circ.in',
        });
    } else {
      timeline
        .to(ref.current, {
          borderLeftColor: '#00000014',
          duration: 0.08,
          transitionDelay: 0.1,
          ease: 'power3.out',
        })
        .to(ref.current, {
          borderBottomColor: '#00000014',
          duration: 0.08,
          transitionDelay: 0.1,
          ease: 'power2.out',
        })
        .to(ref.current, {
          borderRightColor: '#00000014',
          duration: 0.08,
          transitionDelay: 0.1,
          ease: 'power3.out',
        })
        .to(ref.current, {
          borderTopColor: '#00000014',
          duration: 0.08,
          transitionDelay: 0.1,
          ease: 'power3.out',
        });
    }

    return () => {
      timeline.kill();
    };
  }, [active]);

  const handleTabClick = () => {
    setSharedData({
      activeTab: idx,
    });
  };

  const handleOnKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') handleTabClick();
  };

  return (
    <div className={cx('tabContainer')}>
      <div
        className={tabClass}
        onClick={handleTabClick}
        tabIndex={0}
        onKeyUp={handleOnKeyUp}
      >
        <div ref={ref} className={cx('tabIconContainer')}>
          <Icon className={cx(iconClass)} icon={icon} />
        </div>
        <p className={cx('tabLabel')}>{label}</p>
      </div>
    </div>
  );
};

export default Tab;
