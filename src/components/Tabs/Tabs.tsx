import React, { useState, useContext } from 'react';
import TabItem from '../TabItem/TabItem';
import { ITabItem } from '../../config/tabs';
import styles from './Tabs.module.scss';
import classnames from 'classnames/bind';
import { Context } from '../../context/Context';

const cx = classnames.bind(styles);

interface ITabsProps {
  tabs: ITabItem[];
}

const Tabs = ({ tabs }: ITabsProps) => {
  const { sharedData: { activeTab } } = useContext(Context)!;

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