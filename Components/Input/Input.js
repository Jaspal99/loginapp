import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import style from './style';
// import globalStyle from '../../assets/styles/globalStyle';
import PropTypes from 'prop-types';
import style from './Style';
// import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import { faEye } from '@fortawesome/free-regular-svg-icons/faEye';
import { horizontalScale, verticalScale } from '../../Assets/Styles/scalling';
import { faEyeDropper } from '@fortawesome/free-solid-svg-icons';
const Input = props => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={style.label}>{props.label}{props.label === 'Phone Number'&& <Text
      style={{fontFamily:'Gilroy',fontWeight:'600',fontSize:10}}
      
      >(optional)</Text>}</Text>
      
      <View style={style.passwordContainer}>

        <TextInput
          placeholder={props.placeholder ? props.placeholder : null}
          style={style.input}
          value={value}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType}
          onChangeText={val => {
            setValue(val);
            props.onChangeText(val);
          }}


        />
        {props.label === 'Password' && (
          <TouchableOpacity style={{
            position: 'absolute',
            right: '7%', // Adjust as needed
            top: '30%',
          }}
          onPress={props.onIconClick}
          >
            <FontAwesomeIcon
              size={20}
              icon={faEye}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

Input.defaultProps = {
  onChangeText: () => { },
  keyboardType: 'default',
  secureTextEntry: false,
};

Input.propTypes = {
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};

export default Input;