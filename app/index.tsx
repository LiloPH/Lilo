import {Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View className="flex-1 items-center p-6">
      <View className="flex-1 justify-center max-w-[960px] mx-auto">
        <Text className="text-4xl font-bold">Hello World</Text>
        <Text className="text-2xl text-[#38434D]">
          This is the first page of your app.
        </Text>
      </View>
    </View>
  )
}

export default index
