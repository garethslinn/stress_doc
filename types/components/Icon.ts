export type IconName =
  | 'Home'
  | 'MindContents'
  | 'Issues'
  | 'Strategies'
  | 'Tools'
  | 'Settings';

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export interface IconButtonProps {
  title: IconName;
  screen: string;
  navigation: any;
  isLastButton?: boolean;
}
