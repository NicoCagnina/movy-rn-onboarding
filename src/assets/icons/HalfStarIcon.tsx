import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HalfStarIcon(props: any) {
  return (
    <Svg
      width={11}
      height={10}
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.108 4.67l2.577.227c.468.038.654.633.298.948L9.029 7.567l.586 2.562c.106.466-.389.834-.793.585l-2.21-1.36-2.208 1.355c-.405.249-.9-.12-.793-.585l.585-2.557-1.953-1.722c-.357-.315-.165-.91.303-.948l2.571-.222 1.006-2.416a.529.529 0 01.98 0l1.005 2.41zM6.613 3.303v5.038l2.006 1.235-.532-2.319 1.767-1.56-2.331-.206-.91-2.188z"
        fill="#FFD000"
      />
    </Svg>
  );
}

export default HalfStarIcon;
