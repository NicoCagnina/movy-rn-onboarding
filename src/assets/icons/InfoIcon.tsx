import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';

const InfoIcon = (props: any) => (
  <Svg
    width={42}
    height={43}
    viewBox="0 0 42 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#filter0_d_4789_1036)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.5 0C14.84 0 7 7.84 7 17.5C7 27.16 14.84 35 24.5 35C34.16 35 42 27.16 42 17.5C42 7.84 34.16 0 24.5 0ZM22.75 8.75V12.25H26.25V8.75H22.75ZM22.75 15.75V26.25H26.25V15.75H22.75ZM10.5 17.5C10.5 25.2175 16.7825 31.5 24.5 31.5C32.2175 31.5 38.5 25.2175 38.5 17.5C38.5 9.7825 32.2175 3.5 24.5 3.5C16.7825 3.5 10.5 9.7825 10.5 17.5Z"
        fill="white"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default InfoIcon;
