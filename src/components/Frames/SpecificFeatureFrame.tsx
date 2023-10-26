import { FeatureFrameEnum } from '../../config/features';
import FeatureScanFrame from './FeatureScanFrame';
import FeatureSignFrame from './FeatureSignFrame';
import FeatureBatchFrame from './FeatureBatchFrame';
import FeatureFiltersFrame from './FeatureFiltersFrame';
import FeatureExportFrame from './FeatureExportFrame';

type SpecificFeatureFrameProps = {
  frame: FeatureFrameEnum;
};

export default function SpecificFeatureFrame({
  frame,
}: SpecificFeatureFrameProps) {
  // corresponding feature frame component
  const components: Record<FeatureFrameEnum, () => JSX.Element> = {
    [FeatureFrameEnum.SCAN]: FeatureScanFrame,
    [FeatureFrameEnum.SIGN]: FeatureSignFrame,
    [FeatureFrameEnum.BATCH]: FeatureBatchFrame,
    [FeatureFrameEnum.FILTERS]: FeatureFiltersFrame,
    [FeatureFrameEnum.EXPORT]: FeatureExportFrame,
  };

  const SpecificFeatureFrameComponent = components[frame];
  return <SpecificFeatureFrameComponent />;
}
