import classnames from 'classnames/bind';
import Tabs from '../../components/Tabs';
import { tabs } from '../../config/tabs';
import styles from './Hero.module.scss';
import { Context } from '../../context/ContextProvider';
import { useContext } from 'react';
import { features } from '../../config/features';
import FeatureItem from '../../components/FeatureItem';

const cx = classnames.bind(styles);

export const Hero = () => {
  const {
    sharedData: { activeTab },
  } = useContext(Context)!;
  const currentFeature = features[activeTab];
  return (
    <section className={cx('heroSection')}>
      <div className={cx('featureWrapper')}>
        <FeatureItem
          key={currentFeature.id}
          title={currentFeature.title}
          description={currentFeature.description}
          subtitle={currentFeature.subtitle}
          frame={currentFeature.frame}
        />
      </div>
      <Tabs tabs={tabs} />
    </section>
  );
};
