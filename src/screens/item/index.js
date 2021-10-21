import React, {Component} from "react";
import {View, Text, Image, StyleSheet} from "react-native";

export class Item extends Component{
    render(){
        return(
            <View>
                <Text style={styles.submitText}>{this.props.data.ITE_TITLE}</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    submitText:{
      fontSize:18,
      color: '#35AAFF',
      fontWeight: 'bold',
    },
  });
  