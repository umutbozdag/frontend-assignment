import classnames from 'classnames/bind';
import { features } from '../../config/features';
import Feature from '../FeatureItem/FeatureItem';
import styles from './Features.module.scss';
import { useContext } from 'react';
import { Context } from '../../context/Context';
const cx = classnames.bind(styles);

const Features = () => {
  const { sharedData: { activeTab } } = useContext(Context)!;
  const currentFeature = features[activeTab];
  
  return (
    <div className={cx('features')}>
      <Feature
        key={currentFeature.id}
        title={currentFeature.title}
        description={currentFeature.description}
        subtitle={currentFeature.subtitle}
        frame={currentFeature.frame}
      />
    </div>
  );
};

export default Features;
