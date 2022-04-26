import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';


const LastScreen = ({navigation, route}) => {
  const Comp = route.params.company
  const Type = route.params.type
  const features = route.params.specs
  const life = route.params.battery
  const time = route.params.date
  const price= route.params.cost
    return (
      <View style={styles.container}>
        <Text style={styles.information}> The {Comp} {Type} features {features}. It also includes {life} for all your continuous needs.
        This phone was launched in {time} with a price point of {price}. </Text>

        <Text style={styles.table}>
        Company: {Comp}{"\n"}
        Phone: {Type}{"\n"}
        Specifications: {features}{"\n"}
        Battery Life: {life}{"\n"}
        Release Date: {time}{"\n"}
        Cost: {price}{"\n"}
        </Text>

        <Button 
        title="Back"
        onPress={() => navigation.goBack()} ></Button>
      </View>
    )
  }

  const styles = StyleSheet.create({
   
    table: {
     lineHeight: 50,
      fontSize: 25,
        width: 350,
        height: 550,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderColor: '#c50c6e',
        borderWidth: 3,
        borderRadius: 9,
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 20,
        shadowColor: 'black',
        shadowOffset: {
	      width: 0,
	      height: 11,
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 22,
      },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 22,
            },

    container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  information: {
      fontSize: 15,
      paddingLeft: 5,
    },
  



  });
  

  export default LastScreen;

  