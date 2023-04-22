import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
    }}
    >
    <CategoryCard  imgUrt='https://links.papareact.com/wfu' title='Testing'/>
    <CategoryCard  imgUrt='https://links.papareact.com/wfu' title='Testing'/>
    <CategoryCard  imgUrt='https://links.papareact.com/wfu' title='Testing'/>
      <Text>Categories</Text>
    </ScrollView>
  )
}

export default Categories