import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Link, Redirect } from 'expo-router';
import { useGlobalContext } from './context/GlobalProvider';

export default function App() {

  const {isLoading, isLoggedIn} = useGlobalContext()

  if(!isLoading && isLoggedIn) return <Redirect href={'/home'}/>

  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-3xl font-pblack'>Infinity Travel</Text>
      <StatusBar style="auto" />
      <Link href={"/sign-up"} className='text-blue-500'>Sign Up</Link>
    </View>
  );
}