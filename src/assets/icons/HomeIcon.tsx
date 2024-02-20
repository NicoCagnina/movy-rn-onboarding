import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const HomeIcon = (props: any) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.66675 16H2.66675L16.0001 4L29.3334 16H25.3334V26.6667H17.3334V18.6667H14.6667V26.6667H6.66675V16ZM22.6667 13.5867L16.0001 7.58667L9.33341 13.5867V24H12.0001V16H20.0001V24H22.6667V13.5867Z"
      fill={props.fill}
    />
  </Svg>
);
export default HomeIcon;
