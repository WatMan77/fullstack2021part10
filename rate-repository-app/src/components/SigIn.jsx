import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik'
import * as yup from 'yup'
import theme from '../theme';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import useSignIn from '../../hooks/useSignIn';

const SignForm = ({ onSubmit }) => {

    const styles = StyleSheet.create({
        button: {
            backgroundColor: theme.colors.primary,
            color: 'white',
            justifyContent: 'center',
            padding: 10,
            width: 70,
            textAlign: 'center'

        }
    })

    return (
        <View >
            <FormikTextInput name='username' placeholder='username' />
            <FormikTextInput name='password' placeholder='password' secureTextEntry />
            <Pressable style={styles.button} onPress={onSubmit}>
                <Text>Login</Text>
            </Pressable>
        </View>
    )
};

const SignIn = () => {

    const [signIn] = useSignIn()

    const onSubmit = async(props) => {
        console.log(props)
        const { username, password } = props

        try {
            const { data } = await signIn({ username, password })
        } catch (e) {
            console.log(e);
        }
    }


    const initialValues = {
        username: '',
        password: ''
    }

    const validationSchema = yup.object().shape({
        username: yup
            .string()
            .min(5, 'Username must be at least 5 characters long'),
        password: yup
            .string()
            .min(5, 'Password must be at least 5 characters long')
    })

    return (
        <View>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => <SignForm onSubmit={handleSubmit} />}
            </Formik>
        </View>
    )
}

export default SignIn;