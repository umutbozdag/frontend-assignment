import { useContext } from 'react';
import TabItem from '../TabItem';
import { ITabItem } from '../../config/tabs';
import styles from './Tabs.module.scss';
import cn from 'classnames/bind';
import { Context } from '../../context/ContextProvider';

const cx = cn.bind(styles);

type TabsProps = {
  tabs: ITabItem[];
};

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const {
    sharedData: { activeTab },
  } = useContext(Context)!;

  return (
    <div className={cx('tabs')}>
      {tabs.map((tab, index) => (
        <TabItem
          key={index}
          icon={tab.icon}
          label={tab.label}
          idx={index}
          active={activeTab === index}
        />
      ))}
    </div>
  );
};

export default Tabs;
