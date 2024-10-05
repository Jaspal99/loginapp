import React from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './Style';
export default function Button(props) {
  return (


      <Pressable
        onPress={() => props?.onPress()}
        disabled={props.isDisabled}
      style={[style.button, props.isDisabled && style.disabled]}>
        <Text style={style.title}>{props.title}</Text>
      </Pressable>

  );
}
Button.default = {
  isDisabled: false,
  onPress: {},
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};