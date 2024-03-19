import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function FullStarIcon(props: any) {
  return (
    <Svg
      width={11}
      height={10}
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.167 7.586l2.21 1.36c.404.249.899-.12.792-.585l-.585-2.557 1.953-1.722c.357-.315.165-.91-.303-.948l-2.571-.222L5.657.496a.529.529 0 00-.98 0l-1.005 2.41-2.571.222c-.469.038-.66.634-.304.948L2.751 5.8l-.586 2.556c-.106.466.389.834.793.585l2.21-1.354z"
        fill="#FFD000"
      />
    </Svg>
  );
}

export default FullStarIcon;
