import { View, Text, Alert, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useGlobalContext } from '../context/GlobalProvider'
import { clearAllStorageOnLogout } from '../../lib/authTools'
import { router } from 'expo-router'
import { icons } from '../../constants'

const Profile = () => {

  const {user, setUser, setIsLoggedIn} = useGlobalContext()

  const logOutPressed = async () => {
    try {
      await clearAllStorageOnLogout()
      router.replace("/sign-in")
      setUser(null)
      setIsLoggedIn(false)
    } catch (error) {
      Alert.alert("Error Logging out")
    }
  }
  
  return (
    <View>

        <Pressable 
          className='absolute right-1'
          onPress={() => console.log("Edit Button Pressed")}
        >
          <Image
            source={icons.edit}
            resizeMode='contain'
            alt='Edit icon'
            tintColor={'black'}
          />
        </Pressable>
        


        <View className='flex items-center justify-center'>       
          <View className='border-4 w-1/4 py-3 rounded-full flex items-center'>
            <Image
              source={icons.profile}
              tintColor={'black'}
              alt='Profile icon'
              resizeMode='contain'
            />
          </View>
        </View>
        <TouchableOpacity 
          className={`bg-primary-600 border rounded-xl mt-4`}
          onPress={logOutPressed}
          activeOpacity={0.7}
        >
          <Text className={`text-primary font-psemibold text-lg text-center py-4`}>{"Log out"}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Profile