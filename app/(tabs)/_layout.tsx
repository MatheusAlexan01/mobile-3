import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome"


export default function TabLayout () {
    return (
        <Tabs
            screenOptions={{
                //tabBarActiveBackgroundColor : 'black',
                tabBarActiveTintColor: '#007AFF',
                headerTitleAlign: 'center',
                headerStyle : ({
                    backgroundColor: 'f6f6f6'
                })
            }}
        
        >
            
    
    
    
            <Tabs.Screen
                
                
                name="index"
                options = {{
                    title : 'Settigs',
                    tabBarIcon : ({color})  => <FontAwesome size={28}  name ="gears" color={color}/>
                    
    
                }}
    
    
            />

                <Tabs.Screen
                
                
                name="chat"
                options = {{
                    title : 'Chat',
                    tabBarIcon : ({color})  => <FontAwesome size={28}  name ="comments-o" color={color}/>
                    
    
                }}
    
    
            />

            <Tabs.Screen
                name="calls"
                options = {{
                    title : 'Calls',
                    tabBarIcon : ({color})  => <FontAwesome size={28}  name ="phone" color={color}/>
                    
    
                }}
    
    
            />

            <Tabs.Screen
                name="camera"
                options = {{
                    title : 'Camera',
                    tabBarIcon : ({color})  => <FontAwesome size={28}  name ="camera" color={color}/>
                    
    
                }}
    
    
            />

                <Tabs.Screen
                name="status"
                options = {{
                    title : 'Status',
                    tabBarIcon : ({color})  => <FontAwesome size={28}  name ="circle-o-notch" color={color}/>
                    
    
                }}
    
    
            />
    
                
    
            
    
    
    
        </Tabs>
    )
} 


