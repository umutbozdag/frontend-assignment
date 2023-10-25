import React from 'react'
import { FeatureFrameEnum } from '../../config/features'
import FeatureScanFrame from './FeatureScanFrame';
import FeatureSignFrame from './FeatureSignFrame';
import FeatureBatchFrame from './FeatureBatchFrame';
import FeatureFiltersFrame from './FeatureFiltersFrame';

interface ISpecificFeatureFrame {
  frame: FeatureFrameEnum;
}

export default function SpecificFeatureFrame({ frame }: ISpecificFeatureFrame) {
  // corresponding feature frame component
  const components: Record<FeatureFrameEnum, () => JSX.Element> = {
    [FeatureFrameEnum.SCAN]: FeatureScanFrame,
    [FeatureFrameEnum.SIGN]: FeatureSignFrame,
    [FeatureFrameEnum.BATCH]: FeatureBatchFrame,
    [FeatureFrameEnum.FILTERS]: FeatureFiltersFrame,
    [FeatureFrameEnum.EXPORT]: FeatureScanFrame
  }
  
  const SpecificFeatureFrameComponent = components[frame];
  return (
    <SpecificFeatureFrameComponent />
  )
}
