import React from 'react';
import { Button, View, Text } from 'react-native';
import { useEffect, useState } from "react";
import api from '../../services/api';

export function Home() {
 const [items, setItems] = useState([]);
 useEffect(() => {
   api.get(
     "/item/list"
   ).then(({data}) => {
     setItems(data.items)
     //console.log(data["items"])
     //setItems(data.items);
     //console.log(data)
   }).catch((error) => {
     console.log(error.message)
   });
 })
  return(
    <View className="Items">
      <div> {
      items?.map((item, index) => <li key={index}>{item.ITE_TITLE} {item.ITE_DESCRIPTION} {item.ITE_PRICE}</li>)
      } </div>
    </View>
  )

}
