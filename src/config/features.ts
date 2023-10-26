export interface IFeatureItem {
  id?: number;
  title: string;
  subtitle: string;
  description: string;
  frame: FeatureFrameEnum;
}

export enum FeatureFrameEnum {
  SCAN = 'SCAN',
  SIGN = 'SIGN',
  BATCH = 'BATCH',
  FILTERS = 'FILTERS',
  EXPORT = 'EXPORT',
}

export const features: IFeatureItem[] = [
  {
    id: 1,
    frame: FeatureFrameEnum.SCAN,
    title: 'Scan with Ease',
    subtitle: 'Document Scanner',
    description:
      'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
  },
  {
    id: 2,
    frame: FeatureFrameEnum.SIGN,
    title: 'One-Tap Focus',
    subtitle: 'Sign & Stamp',
    description:
      'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
  },
  {
    id: 3,
    title: 'Multiple Page Scan',
    subtitle: 'Batch Scanning',
    frame: FeatureFrameEnum.BATCH,
    description:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
  },
  {
    id: 4,
    title: 'Unique Filters',
    subtitle: 'Advanced filters',
    frame: FeatureFrameEnum.FILTERS,
    description:
      'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
  },
  {
    id: 5,
    frame: FeatureFrameEnum.EXPORT,
    title: 'All-Round Conversion',
    subtitle: 'export & share',
    description: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
  },
];
