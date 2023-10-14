import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup';

// import common components
import Header from '../../components/Header';
import AppButton from '../../components/Button';
import MainView from '../../components/MainView';

//import utils
import colors from '../../assets/colors/colors';
import {translate} from '../../utils/i18n';

//import style
import styles from '../../utils/styles';

type ComponentsProps = {
  headerImage: string;
  handleFormSubmit: (data: FormValues) => void;
  handleBackPress: () => void;
};

interface FormValues {
  name: string;
}

const UserNameComponent = ({
  headerImage,
  handleFormSubmit,
  handleBackPress,
}: ComponentsProps) => {
  const renderForm = () => {
    const formSchema = yup.object({
      name: yup.string().required().min(2),
    });

    const initialValues = {
      name: '',
    };
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={values => {
          handleFormSubmit(values);
        }}>
        {({handleSubmit, isValid, values, errors, handleChange}) => {
          return (
            <View style={{flex: 1}}>
              <TextInput
                autoCapitalize="none"
                autoCompleteType="off"
                error={errors.name ? true : false}
                style={styles.background}
                label={
                  errors.name
                    ? translate('error')
                    : translate('nameScreen.yourName')
                }
                placeholder={translate('nameScreen.yourName')}
                value={values.name}
                onChangeText={handleChange('name')}
                theme={{colors: {primary: colors.paleTeal}}}
              />
              <View style={[inlineStyle.bottomContainer]}>
                <AppButton
                  key={0}
                  disabled={!isValid}
                  title={translate('continue')}
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
    <MainView keyboardVerticalOffset={0}>
      <View style={styles.flexOne}>
        <Header
          withBackIcon
          onPress={() => handleBackPress()}
          image={headerImage}
          imageStyle={styles.header}
          containerStyle={styles.halfScreen}
        />

        <View style={styles.containerPadding}>
          <Text style={styles.message1}>
            {translate('nameScreen.message1')}
          </Text>
          <Text style={styles.welcomeText}>
            {translate('nameScreen.message2')}
          </Text>
          <Text style={styles.welcomeText}>
            {translate('nameScreen.message3')}
          </Text>
          {renderForm()}
        </View>
      </View>
    </MainView>
  );
};

const inlineStyle = StyleSheet.create({
  bottomContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
});

export default UserNameComponent;
