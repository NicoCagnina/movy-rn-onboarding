import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';

const PlayIcon = (props: any) => (
  <Svg
    width={36}
    height={44}
    viewBox="0 0 36 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#filter0_d_4789_1026)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 0C8.064 0 0 8.064 0 18C0 27.936 8.064 36 18 36C27.936 36 36 27.936 36 18C36 8.064 27.936 0 18 0ZM16.022 25.529L24.49 19.1568C24.9795 18.7927 24.9795 18.0644 24.49 17.7003L16.022 11.3282C15.4237 10.873 14.5714 11.3099 14.5714 12.0564V24.8007C14.5714 25.5472 15.4237 25.9841 16.022 25.529ZM3.42857 18C3.42857 26.0325 9.9675 32.5714 18 32.5714C26.0325 32.5714 32.5714 26.0325 32.5714 18C32.5714 9.9675 26.0325 3.42857 18 3.42857C9.9675 3.42857 3.42857 9.9675 3.42857 18Z"
        fill="white"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default PlayIcon;
