import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { storeToken, validateEmail, validatePassword, validateUsername } from '../../lib/authTools'
import { useGlobalContext } from '../context/GlobalProvider'
import { register } from '../../api/authAPI'
import { Link, router } from 'expo-router'
import CustomButton from '../Components/CustomButton'

interface ISignUpForm {
  email: string
  username: string
  password: string
  age: string
}

const SignUp = () => {

  const {setUser, setIsLoggedIn} = useGlobalContext()

  const [forms, setForms] = useState<ISignUpForm>({
    email: '',
    username: '',
    password: '',
    age: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const signUpPressed = async () => {
    const {email, username, password, age} = forms
    setIsLoading(true)
    try {
      if(!validateEmail(email)){
        throw new Error("Invalid email.")
      } else if(!validateUsername(username)) {
        throw new Error("Username must be at least 5 characters and only letter and numbers.")
      } else if(!validatePassword(password)) {
        throw new Error("Password must be at least 6 characters long.")
      }

      const newUser = await register(email, username, password)
      await storeToken(newUser.token)
      setUser({id: newUser.id, username: newUser.username})
      setIsLoggedIn(true)
      
      router.replace('/home')
    } catch (error) {
      Alert.alert("Error: ", error.message)
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <SafeAreaView className='flex-1 justify-center items-center h-full bg-primary-default'>
      <View>
        <TextInput
          className='p-3 border-2 rounded-xl border-primary-600 mb-3'
          value={forms.email}
          onChangeText={text => setForms({... forms, email: text})}
          autoCorrect={false}
          placeholder='Enter your email.'
          inputMode='email'
        />
        <TextInput
          className='p-3 border-2 rounded-xl border-primary-600 mb-3'
          value={forms.username}
          onChangeText={text => setForms({... forms, username: text})}
          autoCorrect={false}
          placeholder='Enter your username.'
        />
        <TextInput
          className='p-3 border-2 rounded-xl border-primary-600 mb-3'
          value={forms.password}
          onChangeText={text => setForms({... forms, password: text})}
          autoCorrect={false}
          placeholder='Enter your password.'
          secureTextEntry={true}
        />

        <CustomButton
          text='Sign Up'
          onPress={signUpPressed}
        />
        <View className='justify-center pt-5 flex-row gap-2'>
          <Text className='text-lg '>Already have an account?</Text>
          <Link href={"sign-in"} className='text-lg font-psemibold text-primary-600'>Sign In</Link>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp