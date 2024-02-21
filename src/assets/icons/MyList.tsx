import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const MyListIcon = (props: any) => (
  <Svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.6667 10H6.66675V13.3333H26.6667V10ZM26.6667 16.6667H6.66675V20H26.6667V16.6667ZM6.66675 23.3333H20.0001V26.6667H6.66675V23.3333ZM31.6667 28.3333L23.3334 33.3333V23.3333L31.6667 28.3333Z"
      fill={props.fill}
    />
  </Svg>
);
export default MyListIcon;
