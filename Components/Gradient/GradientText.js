import React from 'react';
import { Dimensions, View } from 'react-native';
import Svg, { Text as SvgText, Defs, LinearGradient, Stop } from 'react-native-svg';
export default GradientText = ({ text, fontSize }) => {
    const { width } = Dimensions.get('window');
    return (
      <Svg height={fontSize}  width={width}>
        
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor="#12C2E9" stopOpacity="1" />
            <Stop offset="0.5" stopColor="#C471ED" stopOpacity="1" />
            <Stop offset="1" stopColor="#F64F59" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <SvgText
          fill="url(#grad)"
          fontSize={fontSize}
          fontStyle="italic"
          x="23%"
          y={fontSize-9}
          textAnchor="start"
        >
          {text}
        </SvgText>
      </Svg>
    );
  };
  