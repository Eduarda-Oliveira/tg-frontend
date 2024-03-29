
import MapView from 'react-native-web-maps'
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export function Mapinha() {
    return (
        <View style={styles.container}>
          <MapView style={styles.map} />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    });