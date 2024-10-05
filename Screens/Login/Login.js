import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import { scaleFontSize, verticalScale } from '../../Assets/Styles/scalling';
import { getFontFamily } from '../../Assets/Fonts/helper';
import { useState } from 'react';
import { UserContext } from '../../Context/UserContext'; // Import UserContext
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
export default function Login({ navigation }) {
  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(true)
  const { users } = useContext(UserContext);
  const styles = StyleSheet.create({
    text: {
      color: 'black',
      fontSize: 14,
    },
    gradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });
  const handleLogin = () => {
    // Log user details when login button is clicked
    if (!Email || !password) {
      setError('Please fill all mandatory fields');
      return;
    }
    console.log(users); // Log all registered users
    // Add your login validation logic here
  };
  return (
    <ScrollView
    contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>


      <Image
        resizeMode='cover'
        source={require('../../Assets/Image/loginImage.jpeg')} style={{ width: "100%", height: "47%" }} />

      {/* <Text style={{ fontSize: scaleFontSize(32), fontStyle: 'italic' }}>Welcome back!</Text> */}
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 5 }}>

        <GradientText text="Welcome back!" fontSize={32} />
      </View>


      <Text style={{ fontSize: scaleFontSize(24), fontFamily: getFontFamily('Gilroy', '600') }}>
        Glad to see you, Again!
      </Text>

      {error &&
        <View style={{
          backgroundColor: '#F8D7DA',
          // height: '45px',
          width: '90%',
          margin: 2,
          paddingHorizontal: 10,
          paddingVertical: 15,
          flexDirection: 'row',
          borderRadius: 8,
          justifyContent: 'space-between',
        }}>
          <Text style={{ color: 'red' }}>{error}

          </Text>
          <TouchableOpacity onPress={() => setError('')}>
            <FontAwesomeIcon icon={faClose} size={20} />
          </TouchableOpacity>

        </View>
      }
      <Input onChangeText={(value) => setEmail(value)} placeholder={"Enter email"} label="Email" />
      <Input onChangeText={(value) => setPassword(value)} placeholder={"Enter Password"} label="Password" secureTextEntry={showPassword}
        onIconClick={(value) => setShowPassword(!showPassword)}
      />
      <Button
        title="Log In"
        onPress={handleLogin}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Registration')}

        style={{ marginTop: verticalScale(10) }}>
        <Text style={{ fontFamily: getFontFamily('Gilroy', '600'), color: '#2E82FC' }}>Forgot Password?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
