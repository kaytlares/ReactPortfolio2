import React from 'react'
import { StyleSheet, Text, View, Button, Image, FlatList} from 'react-native';
import Card from '../design/card';

function PictureScreen({navigation}) {
  const phones = [
    {
      id: 1,
      company: 'Apple', 
      type: 'Iphone 13',
      specs: '128GB/256GB/512GB storage, 6.1 inches, 12mp camera, Apple A15 Chip',
      battery: '8 hours',
      date: 'September 2021',
      cost: '$800',
      image: require('../assets/iphone.jpg'),

    },

    {
      id: 2,
      company: 'Apple', 
      type: 'Iphone 13 Pro Max',
      specs: '128GB/256GB/512GB storage, 6.7 inches, 12mp camera, Apple A15 Chip',
      battery: '10 hours',
      date: 'September 2021',
      cost: '$1,099',
      image: require('../assets/Pro.jpg'),
    },

    {
      id: 3,
      company: 'Apple', 
      type: 'Iphone Se',
      specs: '64GB/128GB/256GB storage, 4.7 inches, 12mp camera, Apple A15 Chip',
      battery: '9 Hours',
      date: 'March 2022',
      cost: '$429',
      image: require('../assets/se.jpg'),
    },

    {
      id: 4,
      company: 'Samsung', 
      type: 'Samsung Galaxy 22',
      specs: '128GB/256GB storage, 6.1 inches, 50mp camera, Exynos 2200 Chip',
      battery: '12 Hours',
      date: 'February 2022',
      cost: '$999',
      image: require('../assets/galaxyr.jpg'),
    },

    {
      id: 5,
      company: 'Samsung', 
      type: 'Samsung Ultra 22',
      specs: '128GB/256GB/1TB storage, 6.8 inches, 108mp camera, Exynos 2200 Chip',
      battery: '13 Hours',
      date: 'February 2022',
      cost: '$1,199',
      image: require('../assets/ultra.jpg'),
    },

    {
      id: 6,
      company: 'Samsung', 
      type: 'Samsung Z Flip 3',
      specs: '128GB/256GB storage, 6.7 inches, 12mp camera,Qualcomm SM8350 Snapdragon 888 5G',
      battery: '6 Hours',
      date: 'August 2021',
      cost: '$999',
      image: require('../assets/flip.jpg'),
    },

    {
      id: 7,
      company: 'OnePlus', 
      type: 'OnePlus 10 Pro',
      specs: '128GB/256GB/512GB storage, 6.7 inches, 50mp camera, Qualcomm SM8450 Snapdragon 8 Gen 1',
      battery: '15 Hours',
      date: 'April 2022',
      cost: '$899',
      image: require('../assets/one.jpg'),
    },

    {
      id: 8,
      company: 'Motorola', 
      type: 'Motorola Edge 20 Pro',
      specs: '128GB/256GB storage, 6.7 inches, 108mp camera, Qualcomm SM8250-AC Snapdragon 870',
      battery: '34 Hours',
      date: 'July 2021',
      cost: '$450',
      image: require('../assets/moto.jpg'),
    },

    {
      id: 9,
      company: 'Sony', 
      type: 'Sony Xperia 1 III',
      specs: '256GB/512GB storage, 6.5 inches, 12mp camera, Qualcomm SM8350 Snapdragon 888',
      battery: '15 Hours',
      date: 'August 2021',
      cost: '$1,298',
      image: require('../assets/sony.jpg'),
    },

    {
      id: 10,
      company: 'Sony', 
      type: 'Sony Xperia 5 III',
      specs: '12GB/256GB storage, 6.1 inches, 12mp camera, Qualcomm SM8350 Snapdragon 888',
      battery: '15 Hours',
      date: 'April 2021',
      cost: '$799',
      image: require('../assets/sonyf.jpg'),
    },

    {
      id: 11,
      company: 'Google', 
      type: 'Google Pixel 6',
      specs: '12GB/256GB storage, 6.4 inches, 50mp camera, Google Tensor',
      battery: '9 Hours',
      date: 'October 2021',
      cost: '$599',
      image: require('../assets/pixel.jpg'),
    },

  ];

  
  const pictureShow = ({item}) => (
    <View style={styles.contain}>
      <View style={styles.card}>
      <View style={styles.cardContent}>
        <Card>
        <Text style={styles.text}>{item.type}</Text>
      <Image style={styles.avatar} source={item.image} />
      <Button title="Details"
       onPress={() => navigation.navigate('DashBoard', item)} >
       </Button>
       </Card>
    </View>
    </View>
    </View>

  )

  return (
 <FlatList
 data={phones}
 renderItem={pictureShow}
  />
  
  );
}

const styles = StyleSheet.create({
  contain: {
      backgroundColor: '#f5f5f5',
      flex: 1,
      justifyContent: "center",
      flexDirection: "row",
    },

    item: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 13,
    },

    avatar: {
      height: 275,
      width: 225,
      marginBottom: 5,
    },

    card: {
      borderRadius: 6,
      elevation: 3,
      backgroundColor: '#c50c6e', //'#000080',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 4,
      marginVertical: 6,
    },
  
    cardContent: {
      marginHorizontal: 1,
      marginVertical: 1,
    },

    text: {
      fontSize: 15,
      fontWeight: 'bold',

    }
  


});

export default PictureScreen;



