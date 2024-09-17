import { View,Text,StatusBar,Image,StyleSheet,Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, router } from "expo-router";





export const Navegation = () =>{

        

    return (



<View style={styles.tab1}>

<View style={styles.tabIco}>
<Image
style={styles.ico1}
source={require('../../assets/ico1.png')}
/>
<Pressable >
    <Text style={styles.titile1}> Starred Messagens</Text>
</Pressable>
<FontAwesome style={{
    left: 116
 }} size={20}  name ="angle-right"  color={'#8a8a83'}/>
</View>

<View style={{width:'100%', backgroundColor: '#E2E2E4', height:1, bottom:0, left:45}}></View>


<View style={styles.tabIco}>
<Image
style={styles.ico1}
source={require('../../assets/ico2.png')}
/>

<Pressable>
    <Text style={styles.titile1}> Whastapp Web/Deskop</Text>
</Pressable>




 <FontAwesome style={{
    left: 90
 }} size={20}  name ="angle-right"  color={'#8a8a83'}/>
</View>





</View>





);

}


const styles = StyleSheet.create({
tab1 : {
width: '100%',
height: 85,
backgroundColor :'white',
flexDirection: 'column',
justifyContent: 'center'





},
tabIco: {
width: '100%' ,
height: '50%',
alignItems: 'center',
flexDirection: 'row'

}
,
ico1 : {
width: 30,
height: 30,
marginLeft: 10


},
titile1 : {
    marginLeft: 5,
    
}



})