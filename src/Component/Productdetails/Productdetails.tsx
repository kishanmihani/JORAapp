import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Productdetails(props:any) {
  const [postss, setPostss] = useState([]);
  const productId = props.route.params;
  let checkfunction=0;
  const BASE_URL = 'https://dummyjson.com/products';

  useEffect(() => {
   
     fetchProductDetails(productId, BASE_URL);
  }, [productId, BASE_URL]);
  const fetchProductDetails =async  (id:any, url:any) => {
    try{ 
    let response = await fetch(BASE_URL + '/' + productId);
    const data = await response.json();
    setPostss(data)
    if(postss === null){
    console.log(postss,id)
    }
    else{
      console.log('yes');;
      console.log(postss)
    }
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
  };
  // fetchProductDetails(productId, BASE_URL);
  return (
    <View>
      {/* {postss.map((items:any,index:any)=>{
        return <Text>{items.id}</Text>
      })} */}
      
      
        <View>
        <Image source={{uri: postss.thumbnail}} style={styles.imagesproduct} />
        <Text style={styles.producttitle} numberOfLines={1}>{postss.title}</Text>
        <Text  style={[styles.description,{marginTop:8,padding:8}]} ><Text style={styles.label}>description : </Text><Text style={styles.graytext}>{postss.description}</Text></Text>
                     <View style={{flexDirection:'row',marginTop:8,padding:8}}><Text style={styles.label}>Prices : </Text><Text style={styles.price}>$ {postss.price}</Text></View>
                     <View style={{flexDirection:'row',marginTop:8,padding:8}}><Text style={styles.label}>Rating : </Text><Image source={require('../../Assest/star.png')} style={styles.starimage} /><Text style={styles.graytext}>{postss.rating}</Text></View>
                     <View style={{display:'flex',flexDirection:'row',marginTop:8,padding:8}}><Text style={styles.label}>Warranty : </Text><Text style={styles.graytext}>{postss.warrantyInformation}</Text></View>
                     <View style={{display:'flex',flexDirection:'row',marginTop:8,padding:8}}><Text style={styles.label}>return Policy : </Text><Text style={styles.graytext}>{postss.returnPolicy}</Text></View>
        </View>
     

      
    </View>
  );
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
      height:15,
      width:15
    },
    label:{
     fontWeight:'500',
     color:'black',
     fontSize:18
    },
    producttitle: {
      fontSize: 25,
      fontWeight:'500',
      // color:'black',
      color:'blue',
      // width:'75%/',
      textAlign:'center',
      margin:7,

    },
    price:{
      color:'#388e3c',
      fontSize:18
    },
    imagesproduct:{
     height:180,
     width:180,
     padding:12,
     margin:'auto'
    },
    leftpart:{
      padding:5
    },
    description:{
     width:'95%'
    },
    rightpart:{
      padding:5,
      flexWrap:'nowrap',
      overflow:'scroll'
    },
    productlisttitle:{
     fontSize:30,
     paddingLeft:7,
     margin:5,
     borderBottomWidth:1,
     color:'red',
     borderColor:'rgba(0,0,0,0.15)'
    },
    graytext:{
        color:'gray',
        fontSize:18
    }
  });
