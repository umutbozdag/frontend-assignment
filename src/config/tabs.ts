export interface ITabItem {
  icon: string;
  label: string;
}

export const tabs: ITabItem[] = [
  {
    icon: 'document',
    label: 'Document Scanner',
  },
  {
    icon: 'sign',
    label: 'Sign & Stamp',
  },
  {
    icon: 'batch',
    label: 'Batch Scanning',
  },
  {
    icon: 'filters',
    label: 'Advanced Filters',
  },
  {
    icon: 'export',
    label: 'Export & Share',
  },
];
