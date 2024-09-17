import { useLinkProps } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
// import '../../Assest'
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    TouchableHighlight
  } from 'react-native';
  import {useWindowDimensions} from 'react-native';  

function Productlist(props:any    ) {
  const BASE_URL='https://dummyjson.com/products';
  const [posts, setPosts] = useState([]);
  const windowWidth = useWindowDimensions().width;
  const [isPressed, setPressed] = useState(false);
const windowHeight = Dimensions.get('window').height - 32;
  useEffect(() => {
 
    // Fetch data using Promise with the Fetch API
     const fetchUsingPromiseWithFetchApi = () => {
      try{
       fetch(BASE_URL) // Fetch data based on the current page
         .then((response) => response.json()) // Parse the response as JSON
         .then((data) => {
           setPosts(data.products);
            // Set the fetched data
         });
        //  console.log(posts ===  )
      }catch(err){
          console.log(err)
      }
     };
 
     // Trigger fetching method on component mount
     fetchUsingPromiseWithFetchApi();
 
   }, []);
  
  return (
   
    <View >
    <View >
      <SafeAreaView >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
          {posts.map((items:any,index:any)=>{
            return  <TouchableHighlight key={index} onPress={() => {
                      props.navigation.navigate('Product Details',  items.id )
                       }}><View  style={styles.container} >
                     <View style={styles.leftpart}>
                     <Image source={{uri: items.thumbnail}}  style={styles.imagesproduct}/>
                     </View>
                     <View style={styles.rightpart}>
                     {/* <Text>{items.id}</Text> */}
                     <Text style={styles.producttitle} numberOfLines={1}>{items.title}</Text>
                     <Text  style={styles.description} numberOfLines={2}><Text style={styles.label}>description : </Text><Text style={styles.graytext}>{items.description}</Text></Text>
                     <View style={{flexDirection:'row'}}><Text style={styles.label}>Prices : </Text><Text style={styles.price}>$ {items.price}</Text></View>
                     <View style={{flexDirection:'row'}}><Text style={styles.label}>Rating : </Text><Image source={require('../../Assest/star.png')} style={styles.starimage} /><Text style={styles.graytext}>{items.rating}</Text></View>
                     </View>
                   </View>
                   </TouchableHighlight>
          })}
      </ScrollView>
      </SafeAreaView>
      </View>
   </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'row',
      height:'auto',
      margin:6,
      padding:8,
      borderWidth:1,
      borderColor:'rgba(0,0,0,0.15)',
      borderRadius:5,
      shadowColor:'rgba(0,0,0,0.06)',
      borderStartWidth:1.7,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    starimage:{
      height:12,
      width:12
    },
    label:{
     fontWeight:'500',
     color:'black'
    },
    producttitle: {
      fontSize: 17,
      fontWeight:'500',
      color:'black',
      width:'75%'
    },
    price:{
      color:'#388e3c'
    },
    imagesproduct:{
     borderRadius:50,
     height:80,
     width:80,
     padding:12
    },
    leftpart:{
      padding:5
    },
    description:{
     width:'75%'
    },
    rightpart:{
      padding:5,
      flexWrap:'nowrap',
      overflow:'scroll'
    },
    productlisttitle:{
     fontSize:30,
     paddingLeft:7,
     borderBottomWidth:1,
     color:'red',
     borderColor:'rgba(0,0,0,0.15)'
    },
    graytext:{
      color:'gray'
  }
  });

export default Productlist