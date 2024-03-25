import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CheckIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
      {...props}>
      <Path d="M42.875 8.625a.88.88 0 00-.094.031 1.011 1.011 0 00-.625.469L21.72 40.813 7.656 28.124a.997.997 0 00-1.773.473.998.998 0 00.46.996l14.907 13.5a.999.999 0 001.5-.219l21.094-32.688a1 1 0 00-.969-1.562z" />
    </Svg>
  );
}

export default CheckIcon;
