import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from "@react-navigation/native"
import Categories from '../components/Categories'
const HomeScreen = () => {
  const navigation = useNavigation()
    useLayoutEffect (()=>{
        navigation.setOptions({
         headerShown:false,
        })
    },[])
  return (
    <SafeAreaView className="bg-white pt-5">
      <Text className="text-red-500">HomeScreen</Text>
       {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
          <Image
            source={{
              uri:""
            }}
            className="h-7 w-7 bg-gray-300 rounded-full"
           />
      
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current Location
          <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB"  />
        </View>
        {/* Search  */}
        <View className="flex-row items-center space-x-2 pb-2 mx-2 px-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
            <SearchIcon size={20} color="gray" />
            <TextInput 
            placeholder="Restaurants and Cuisines"
             keyboardType='default'
             />
          </View>
          <AdjustmentIcon size={20} color="#00CCBB" />
        </View>
        {/* Body */}
        <ScrollView className="bg-gray-100"
          contentContainerStyle={{ paddingBottom:100}}
        >
            <Categories />
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen