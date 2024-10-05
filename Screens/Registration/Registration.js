import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Button from '../../Components/Button/Button';
import { getFontFamily } from '../../Assets/Fonts/helper';
import { scaleFontSize } from '../../Assets/Styles/scalling';
import Input from '../../Components/Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faClose } from '@fortawesome/free-solid-svg-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from 'react';
import { UserContext } from '../../Context/UserContext'; // Import UserContext
import { useContext } from 'react'; // Import useContext
import GradientText from '../../Components/Gradient/GradientText';

export default function Registration({ navigation }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(true)
  const { addUser } = useContext(UserContext);
  const [isAgreed, setIsAgreed] = useState(false);
  const [error, setError] = useState('')
  const handleRegistration = () => {
    if (!isAgreed) {
      return;
    }
    const user = { firstName, lastName, phoneNo, Email, password };
    if (!firstName || !lastName || !Email || !password) {
      setError('Please fill all mandatory fields');
      return;
    }
    addUser(user); // Store user information
    navigation.navigate('Login'); // Navigate after registration
  };
  return (
    <ScrollView

    contentContainerStyle={{
        flex: 1,
        flexDirection: 'row',
      }}
    >

      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

      }}>



        <View style={{ width: '100%', justifyContent: 'flex-start', paddingHorizontal: 10, position: 'relative', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <FontAwesomeIcon icon={faAngleLeft} size={20} />
          </TouchableOpacity>
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
        </View>
        {/* <Text style={{ fontSize: scaleFontSize(32), fontStyle: 'italic' }}>Let's Begin!</Text> */}
        <GradientText text="Let's Begin!" fontSize={32} />
        <Text style={{ fontSize: scaleFontSize(20), fontFamily: getFontFamily('Gilroy', '500') }}>
          We're happy you decided to join us, register here
        </Text>

        <Input onChangeText={(value) => setFirstName(value)} placeholder={"Enter First Name"} label="First Name" />
        <Input onChangeText={(value) => setLastName(value)} placeholder={"Enter Last Name"} label="Last Name" />
        <Input onChangeText={(value) => setPhoneNo(value)} keyboardType={'number-pad'} placeholder={"Enter Phone Number"} label="Phone Number" />
        <Input onChangeText={(value) => setEmail(value)} placeholder={"Enter email"} label="Email" />
        <Input onChangeText={(value) => setPassword(value)} placeholder={"Enter Password"} label="Password" secureTextEntry={showPassword}
          onIconClick={(value) => setShowPassword(!showPassword)}
        />



        <Text style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

          <BouncyCheckbox

            size={25}
            fillColor="#3D8BFD"
            unFillColor="#FFFFFF"
            // text="Custom Checkbox"
            iconStyle={{ borderColor: "#3D8BFD", marginTop: 10 }}
            innerIconStyle={{ borderWidth: 1 }}
            textStyle={{ fontFamily: "JosefinSans-Regular" }}
            onPress={(isChecked) => { setIsAgreed(isChecked) }}
          />

          I agree with whatnxt

          <Text style={{ fontFamily: getFontFamily('Gilroy', '600'), color: '#2E82FC' }}>
            {' '} Terms & Condition{' '}
          </Text>
          and
          <Text style={{ fontFamily: getFontFamily('Gilroy', '600'), color: '#2E82FC' }}>

            {' '}Privacy Policies.
          </Text>
        </Text>


        <Button
          isDisabled={!isAgreed}
          title="Continue"
          onPress={handleRegistration}
        />
      </View>
    </ScrollView>
  );
}
