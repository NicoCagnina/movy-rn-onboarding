import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const RoundSeparatorIcon = (props: any) => (
  <Svg
    width={8}
    height={9}
    viewBox="0 0 8 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M4.22073 8.01093C6.17815 8.01093 7.76495 6.39824 7.76495 4.40888C7.76495 2.41952 6.17815 0.806824 4.22073 0.806824C2.26331 0.806824 0.676514 2.41952 0.676514 4.40888C0.676514 6.39824 2.26331 8.01093 4.22073 8.01093Z"
      fill="white"
    />
  </Svg>
);
export default RoundSeparatorIcon;
