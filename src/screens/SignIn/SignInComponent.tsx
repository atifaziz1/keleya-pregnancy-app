import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup';

// import common components
import Header from '../../components/Header';
import AppButton from '../../components/Button';
import MainView from '../../components/MainView';


//import utils
import {emailValidation} from '../../utils/yupValidation';
import colors from '../../assets/colors/colors';
import {setLocal, translate} from '../../utils/i18n';

//import style
import styles from '../../utils/styles';

interface FormValues {
  email: string;
  password: string;
}

type ComponentProps = {
  headerImage: string;
  handleFormSubmit: (value: FormValues) => void;
  handleBack: () => void;
};

const SignInComponent = ({
  headerImage,
  handleFormSubmit,
  handleBack,
}: ComponentProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const renderSignInForm = () => {
    const formSchema = yup.object({
      email: yup.string().required(),
      password: yup.string().required().min(4),
    });

    const initialValues = {
      email: '',
      password: '',
    };
    return (
      <Formik
        style={{flex: 1}}
        initialValues={initialValues}
        validate={values => emailValidation(values)}
        validationSchema={formSchema}
        onSubmit={values => {
          handleFormSubmit(values);
        }}>
        {({handleSubmit, isValid, values, errors, handleChange}) => {
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
                  error={errors.email ? true : false}
                  style={styles.background}
                  placeholder="example@gmail.com"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  theme={{colors: {primary: colors.paleTeal}}}
                />
                <TextInput
                  autoCapitalize="none"
                  autoCompleteType="off"
                  error={errors.password ? true : false}
                  style={styles.background}
                  placeholder={translate('passwordPlaceholder')}
                  right={
                    <TextInput.Icon
                      icon={!showPassword ? 'eye-off' : 'eye'}
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
              </View>

              <View style={[inlineStyle.bottomContainer]}>
                <Text>{translate('login.forgottenPassword')}</Text>
                <AppButton
                  key={1}
                  disabled={!isValid}
                  title={translate('login.logIn')}
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
          onPress={handleBack}
          image={headerImage}
          imageStyle={styles.header}
          containerStyle={styles.headerContainer}
        />

        <View style={[styles.containerPadding, styles.flexOne]}>
          <Text style={styles.welcomeText}>{translate('login.header')}</Text>
          {renderSignInForm()}
        </View>
      </View>
    </MainView>
  );
};

const inlineStyle = StyleSheet.create({
  bottomContainer: {
    alignItems: 'center',
  },
});

export default SignInComponent;
