import {Dimensions, StyleSheet} from 'react-native';
import {scaleFontSize, verticalScale} from '../../Assets/Styles/scalling';
import { horizontalScale } from '../../Assets/Styles/scalling';
import { getFontFamily } from '../../Assets/Fonts/helper';
const {width, height} = Dimensions.get('window');
const style = StyleSheet.create({
  label: {
    fontFamily: getFontFamily('Gilroy', '600'),
    fontWeight: '600',
    color: '#3F4254',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(16.7),
    marginTop: verticalScale(10),
  },
  input: {
    color:'black',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
    backgroundColor: '#d8d8d8',
    marginVertical: verticalScale(5),
    width: width*0.9 ,
    borderRadius: 14,
  },
  passwordContainer: {
    flexDirection: 'row',
    width: width * 0.9,
alignItems:'center',
    // borderBottomWidth: 1,
    borderColor: '#000',
    // paddingBottom: 10,
  },
});

export default style;