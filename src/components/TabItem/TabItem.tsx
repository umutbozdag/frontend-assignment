import { useContext, useLayoutEffect } from 'react';
import Icon from '../Icon';
import styles from './TabItem.module.scss';
import cn from 'classnames/bind';
import { Context } from '../../context/ContextProvider';
import { useRef } from 'react';
import gsap from 'gsap';

const cx = cn.bind(styles);

type TabItemProps = {
  label: string;
  icon: string;
  active: boolean;
  idx: number;
}

const TabItem = ({ label, icon, active, idx }: TabItemProps) => {
  const context = useContext(Context)!;

  const tabIconContainerRef = useRef(null);

  const tabClass = cx('tabItem', {
    active,
  });

  const iconClass = cx('tabItemIcon', {
    active,
  });

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    if (active) {
      tl.to(tabIconContainerRef.current, {
        borderLeftColor: '#0381FF',
        duration: 0.08,
        ease: 'circ.in',
      })
        .to(tabIconContainerRef.current, {
          borderBottomColor: '#0381FF',
          duration: 0.08,
          ease: 'circ.in',
        })
        .to(tabIconContainerRef.current, {
          borderRightColor: '#0381FF',
          duration: 0.08,
          ease: 'circ.in',
        })
        .to(tabIconContainerRef.current, {
          borderTopColor: '#0381FF',
          duration: 0.08,
          ease: 'circ.in',
        });
    } else {
      tl.to(tabIconContainerRef.current, {
        borderLeftColor: '#00000014',
        duration: 0.08,
        transitionDelay: 0.1,
        ease: 'power3.out',
      })
        .to(tabIconContainerRef.current, {
          borderBottomColor: '#00000014',
          duration: 0.08,
          transitionDelay: 0.1,
          ease: 'power2.out',
        })
        .to(tabIconContainerRef.current, {
          borderRightColor: '#00000014',
          duration: 0.08,
          transitionDelay: 0.1,
          ease: 'power3.out',
        })
        .to(tabIconContainerRef.current, {
          borderTopColor: '#00000014',
          duration: 0.08,
          transitionDelay: 0.1,
          ease: 'power3.out',
        });
    }

    return () => {
      tl.kill();
    };
  }, [active]);

  const handleTabClick = () => {
    context.setSharedData({
      activeTab: idx,
    });
  };

  const handleOnKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Enter' || e.code === 'Space') handleTabClick();
  };

  return (
    <div className={cx('tabItemContainer')}>
      <div
        className={tabClass}
        onClick={handleTabClick}
        tabIndex={0}
        onKeyUp={handleOnKeyUp}
      >
        <div ref={tabIconContainerRef} className={cx('tabItemIconContainer')}>
          <Icon className={cx(iconClass)} icon={icon} />
        </div>
        <p className={cx('tabItemLabel')}>{label}</p>
      </div>
    </div>
  );
};

export default TabItem;
