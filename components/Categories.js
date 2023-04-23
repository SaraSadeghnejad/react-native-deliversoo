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
    <CategoryCard  imgUrt='https://links.papareact.com/wfu' title='Testing1'/>
    <CategoryCard  imgUrt='https://links.papareact.com/wfu' title='Testing2'/>
    <CategoryCard  imgUrt='https://links.papareact.com/wfu' title='Testing3'/>
    <CategoryCard  imgUrt='https://links.papareact.com/wfu' title='Testing4'/>
    <CategoryCard  imgUrt='https://links.papareact.com/wfu' title='Testing5'/>
    <CategoryCard  imgUrt='https://links.papareact.com/wfu' title='Testing6'/>
      <Text>Categories</Text>
    </ScrollView>
  )
}

export default Categories