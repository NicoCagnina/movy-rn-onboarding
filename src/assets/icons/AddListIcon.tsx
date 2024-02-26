import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const AddToListIcon = (props: any) => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26 16H16V26C16 27.1 15.1 28 14 28C12.9 28 12 27.1 12 26V16H2C0.9 16 0 15.1 0 14C0 12.9 0.9 12 2 12H12V2C12 0.9 12.9 0 14 0C15.1 0 16 0.9 16 2V12H26C27.1 12 28 12.9 28 14C28 15.1 27.1 16 26 16Z"
      fill="white"
    />
  </Svg>
);
export default AddToListIcon;
