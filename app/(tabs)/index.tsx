
import { View,Text,StatusBar,Image,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { shouldUseActivityState } from "react-native-screens";
import FontAwesome from "@expo/vector-icons/FontAwesome"
import {Navegation } from "../componts/model1"

export default function app1 (){
return(
    <SafeAreaView style={styles.container}>
    <StatusBar/>
    <View style={styles.header}>
        <View style={styles.headerCI}>
        <Image
        source={{uri : 'https://picsum.photos/id/237/200/300' }}
        style={styles.headerI}
        
        />
        </View>
        
        <View  style={styles.headerT}>
        <Text style={styles.title1}>Matheus</Text>
        <Text style={styles.title2}>Digital Whastapp</Text>
        </View>
        <FontAwesome style={styles.ico} size={20}  name ="angle-right"  color={'#8a8a83'}/>
    

    </View>



    <Navegation/>

    </SafeAreaView>


);



}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#E2E2E7'

    },
    header: {
       backgroundColor: 'white',
       width: '100%',
       height: 60,
       flexDirection: 'row',
       bottom: 25
      
        

    },
    headerCI :{
        height: '100%',
        width: 70,
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    headerI : {
        width: 50,
        height: 50,
        borderRadius: 50,
        resizeMode : 'cover'

    },
    title1 : {
        fontWeight: 'bold'


    },
    headerT :{
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'

    },
    title2 : {
        color: '#87898b',
        fontSize: 12

    },
    ico : {
    left: 130,
    top: 20        


    }





})