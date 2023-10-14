import React, {useState} from 'react';

import {View, Text} from 'react-native';
import CheckBox from '../../components/Checkbox/Checkbox';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';

// import common components
import Header from '../../components/Header';
import AppButton from '../../components/Button';
import checkboxData from '../../utils/signUpData';
import MainView from '../../components/MainView';

// import utils
import {translate} from '../../utils/i18n';
import colors from '../../assets/colors/colors';
import {signUpFormValidation} from '../../utils/yupValidation';
import {emailValidation} from '../../utils/yupValidation';

//import style
import styles from '../../utils/styles';

type FormValues = {
  email: string;
  password?: string;
  privacyPolicyCheck: boolean;
  termsConditions: boolean;
};

type ComponentsProps = {
  headerImage: string;
  handleFormSubmit: (data: FormValues) => void;
  handleBackPress: () => void;
};

const SignUpComponent = ({
  headerImage,
  handleFormSubmit,
  handleBackPress,
}: ComponentsProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const [privacyPolicyData, termsAndConditionsData] = checkboxData;

  const renderSignUpForm = () => {
    const initialValues = {
      email: '',
      password: '',
      privacyPolicyCheck: false,
      termsConditions: false,
    };
    return (
      <Formik
        initialValues={initialValues}
        validate={values => emailValidation(values)}
        validationSchema={signUpFormValidation()}
        onSubmit={values => {
          handleFormSubmit(values);
        }}>
        {({
          handleSubmit,
          isValid,
          values,
          errors,
          handleChange,
          setFieldValue,
        }) => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <View>
                <TextInput
                  autoCapitalize="none"
                  autoCompleteType="off"
                  error={errors.email}
                  style={styles.background}
                  placeholder="example@gmail.com"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  theme={{colors: {primary: colors.paleTeal}}}
                />
                <TextInput
                  autoCapitalize="none"
                  autoCompleteType="off"
                  error={errors.password}
                  style={styles.background}
                  placeholder={translate('passwordPlaceholder')}
                  right={
                    <TextInput.Icon
                      icon={showPassword ? 'eye' : 'eye-off'}
                      onPress={() => {
                        setShowPassword(!showPassword);
                      }}
                    />
                  }
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={!showPassword}
                  theme={{colors: {primary: colors.paleTeal}}}
                />
                <View>
                  <CheckBox
                    labelMap={privacyPolicyData}
                    onPress={(isChecked: Boolean) => {
                      setFieldValue('privacyPolicyCheck', isChecked);
                    }}
                  />
                  <CheckBox
                    labelMap={termsAndConditionsData}
                    onPress={(isChecked: Boolean) => {
                      setFieldValue('termsConditions', isChecked);
                    }}
                  />
                </View>
              </View>

              <View style={[styles.centerItem]}>
                <AppButton
                  key={0}
                  disabled={!isValid}
                  title={translate('singUp.createAccount')}
                  onPress={handleSubmit}
                  contentStyle={styles.buttonText}
                  containerStyle={
                    !isValid ? styles.buttonDisabled : styles.buttonEnabled
                  }
                />
              </View>
            </View>
          );
        }}
      </Formik>
    );
  };

  return (
    <MainView>
      <View style={styles.flexOne}>
        <Header
          withBackIcon
          onPress={() => handleBackPress()}
          image={headerImage}
          imageStyle={styles.header}
          containerStyle={styles.headerContainer}
        />

        <View style={[styles.flexOne, styles.containerPadding, ,]}>
          <Text style={styles.welcomeText}>{translate('singUp.header')}</Text>
          <Text style={styles.welcomeText}>{translate('singUp.headerR')}</Text>
          {renderSignUpForm()}
        </View>
      </View>
    </MainView>
  );
};

export default SignUpComponent;
