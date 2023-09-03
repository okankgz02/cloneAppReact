import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data=Array(220)
.fill(null)
.map((_,i)=>({
  number:i,
}));

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList 
      data={data}  //veriyi verdiğimiz yer
      keyExtractor={(x)=>x.number}  // item değeri
      numColumns={2}

      renderItem={({item})=><Box number={item.number}></Box> } /> 

      <StatusBar style="auto" />
    </View>
  );
}
const Box =({number}) =>{
  return(
    <View style={{margin:5,width:50,height:50,borderRadius:25,backgroundColor:"yellow",justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:20}}>{number}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
