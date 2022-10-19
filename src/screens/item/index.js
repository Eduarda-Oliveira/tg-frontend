import React, {Component} from "react";
import {View, Text, Image, StyleSheet} from "react-native";

export function Item() {
  const [items, setItems] = useState("");


  useEffect(() => {
    let params ={
      ITE_ID: 1 }
    api.get( "/item/id", {params:params})
    .then(({data}) => {
      setItems(data.item)
      console.log(items)
    }).catch((error) => {
      console.log(error.message)
    });
  }, []);

        return(
            <View>
                <Text style={styles.submitText}>{this.props.data.ITE_TITLE}</Text>
                <Text style={styles.listText}>
                  {items.ITE_TITLE} {items.ITE_DESCRIPTION} {items.ITE_PRICE} 
                  <Image source={{ uri: items.ITE_IMAGE }} style={styles.thumbnail} />
                  </Text>
            </View>
        )
}
const styles = StyleSheet.create({
    submitText:{
      fontSize:18,
      color: '#35AAFF',
      fontWeight: 'bold',
    },
  });
  