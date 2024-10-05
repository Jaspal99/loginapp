import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../Assets/Styles/scalling';
import { getFontFamily } from '../../Assets/Fonts/helper';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2E82FC',
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(12),
    padding:10,
    width: '90%',
    marginTop: verticalScale(10),
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    fontFamily: getFontFamily('Gilroy', '500'),
    // fontFamily: 'Gilroy',
    fontSize: scaleFontSize(16),
    // fontWeight: '500',
    lineHeight: scaleFontSize(19),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default style;