import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MicIcon(props: any) {
  return (
    <Svg
      width={14}
      height={19}
      viewBox="0 0 14 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 9c0 1.66-1.34 3-3 3s-3-1.34-3-3V3c0-1.66 1.34-3 3-3s3 1.34 3 3v6zm1.93.85c.08-.49.49-.85.98-.85.61 0 1.1.54 1 1.14-.49 3-2.89 5.35-5.91 5.78V18c0 .55-.45 1-1 1s-1-.45-1-1v-2.08a6.993 6.993 0 01-5.91-5.78C0 9.54.48 9 1.09 9c.49 0 .9.36.98.85C2.48 12.2 4.53 14 7 14c2.47 0 4.52-1.8 4.93-4.15z"
        fill="#fff"
      />
    </Svg>
  );
}

export default MicIcon;
