import { StyleSheet } from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "./components/Start";
import Chat from "./components/Chat";

const Stack = createNativeStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyClHVdOeUeutg5GKwOESL9ZmFaz4GztRcI",
  authDomain: "chatapp-7a027.firebaseapp.com",
  projectId: "chatapp-7a027",
  storageBucket: "chatapp-7a027.appspot.com",
  messagingSenderId: "629058402497",
  appId: "1:629058402497:web:c95804918e35aecff0fc40"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name='Start' component={Start} />
        <Stack.Screen name='Chat'>
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;