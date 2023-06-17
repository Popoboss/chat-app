import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ImageBackground,
} from "react-native";

const Start = ({ navigation }) => {
    const [text, setText] = useState("");
    const [color, setColor] = useState("");

    return (
        <ImageBackground
            source={require("../assets/BackgroundImage.png")} //ask Jay if I can use my own backgrund img :)
            resizeMode='cover'
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.title}>The Chat App</Text>
                </View>
                <View style={styles.subContainer}>
                    <TextInput
                        placeholder='Your name'
                        style={styles.input}
                        onChangeText={setText}
                    />
                    <Text>Choose Background Color</Text>
                    <View style={styles.radioButtonContainer}>
                        <TouchableOpacity
                            style={[styles.radioButton, { backgroundColor: "#5E35B1" }]}
                            onPress={() => setColor("#5E35B1")}
                        ></TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.radioButton, { backgroundColor: "#18FFFF" }]}
                            onPress={() => setColor("#18FFFF")}
                        ></TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.radioButton, { backgroundColor: "#1B5E20" }]}
                            onPress={() => setColor("#1B5E20")}
                        ></TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.radioButton, { backgroundColor: "#FF5722" }]}
                            onPress={() => setColor("#FF5722")}
                        ></TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigation.navigate("Chat", {
                                name: text ? text : "User",
                                color: color ? color : "white",
                            })
                        }
                    >
                        <Text>Go to Chat</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    subContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "88%",

    },
    radioButtonContainer: {
        width: "70%",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 30,
        color: "black",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
    },
    radioButton: {
        backgroundColor: "black",
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    input: {
        height: 40,
        width: "88%",
        margin: 12,
        borderWidth: 3,
        borderColor: "white",
        padding: 10,
        color: "white"
    },
});

export default Start;