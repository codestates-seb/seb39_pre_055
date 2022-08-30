import { FlattenSimpleInterpolation } from 'styled-components';

import { SCaption } from './style';

export interface CaptionProps {
  caption: string;
  mdStyle: FlattenSimpleInterpolation | undefined;
}

const Caption = ({ caption, mdStyle }: CaptionProps) => {
  return <SCaption mdStyle={mdStyle}>{caption}</SCaption>;
};

export default Caption;
