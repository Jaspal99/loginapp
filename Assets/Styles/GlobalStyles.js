import {verticalScale} from './scalling';

const {StyleSheet} = require('react-native');

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  marginBottom24: {
    marginBottom: verticalScale(24),
  },
});

export default globalStyle;