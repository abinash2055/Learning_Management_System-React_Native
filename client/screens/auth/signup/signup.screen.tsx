import { 
    StyleSheet, 
    View, 
    Text, 
    Image, 
    ScrollView, 
    TextInput, 
    TouchableOpacity, 
    ActivityIndicator 
} from 'react-native'
import React, { useState } from 'react'
import {
    AntDesign,
    Entypo,
    FontAwesome,
    Fontisto,
    Ionicons,
    SimpleLineIcons
} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import {
    useFonts,
    Raleway_700Bold,
    Raleway_600SemiBold
} from "@expo-google-fonts/raleway"
import {
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_700Bold,
    Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
import { commonStyles } from '@/styles/common/common.styles';
import { router } from 'expo-router';

export default function SignUpScreen() {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [required, setRequired] = useState("")
    const [error, setError] = useState({
        password: "",
    });

    let [fontsLoaded, fontError] = useFonts({
        Raleway_600SemiBold,
        Raleway_700Bold,
        Nunito_400Regular,
        Nunito_500Medium,
        Nunito_700Bold,
        Nunito_600SemiBold
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const handlePasswordValidation = (value: string) => {
        const password = value;
        const passwordSpecialCharacter = /(?=.*[!@#$*])/;
        const passwordOneNumber = /(?=.*[0-9])/;
        const passwordSixValue = /(?=.{6,})/;

        if (!passwordSpecialCharacter.test(password)) {
            setError({
                ...error,
                password: "Write at least one special character",
            });
            setUserInfo({ ...userInfo, password: "" });
        } else if (!passwordOneNumber.test(password)) {
            setError({
                ...error,
                password: "Write at least one Number",
            });
            setUserInfo({ ...userInfo, password: "" });
        } else if (!passwordSixValue.test(password)) {
            setError({
                ...error,
                password: "Write at least 6 characters",
            });
            setUserInfo({ ...userInfo, password: "" });
        } else {
            setError({
                ...error,
                password: "",
            });
            setUserInfo({ ...userInfo, password: value });
        }
    };

    const handleSignIn = () => {
        router.push("/(routes)/verifyAccount")
    }

    return (
        <LinearGradient
            colors={["#E5ECF9", "#F6F7F9"]}
            style={{ 
                flex: 1, 
                paddingTop: 20 
            }}>
            <ScrollView>
                <Image
                    style={styles.signInImage}
                    source={require("@/assets/sign-in/signup.png")} />
                <Text
                    style={[styles.welcomeText, { fontFamily: "Raleway_700Bold" }]}>
                        Let's get Started
                </Text>
                <Text
                    style={styles.learningText}>
                        Create an account to Personal Signature to get all feature
                </Text>
                <View
                    style={styles.inputContainer}>
                    <View>
                        {/* Name Field  */}
                        <View style={{ marginBottom: 20 }}>
                            <TextInput
                                style={[styles.input, { 
                                    paddingLeft: 40,
                                    marginBottom: -12,
                                }]}
                                keyboardType="default"
                                value={userInfo.name}
                                placeholder="Personal Signature"
                                onChangeText={(value) =>
                                    setUserInfo({ ...userInfo, name: value })}
                            />
                            <AntDesign
                                style={{ position: "absolute", 
                                    left: 26, 
                                    top: 13 
                                }}
                                name="user"
                                size={20}
                                color={"#A1A1A1"}
                            />
                        </View>

                        {/* Email Field  */}
                        <View style={{ marginBottom: 20 }}>
                            <TextInput
                                style={[styles.input, { 
                                    paddingLeft: 40, 
                                    marginBottom: -25,
                                }]}
                                keyboardType="email-address"
                                value={userInfo.email}
                                placeholder="personal@signature.com"
                                onChangeText={(value) =>
                                    setUserInfo({ ...userInfo, email: value })}
                            />
                            <Fontisto
                                style={{ position: "absolute", left: 26, top: 17.8 }}
                                name="email"
                                size={20}
                                color={"#A1A1A1"}
                            />
                        </View>
                        {required && (
                            <View style={commonStyles.errorContainer}>
                                <Entypo
                                    name="cross"
                                    size={18}
                                    color={"red"} />
                            </View>
                        )}
                        <View style={{ marginTop: 15 }}>
                            <TextInput
                                style={commonStyles.input}
                                keyboardType="default"
                                secureTextEntry={!isPasswordVisible}
                                defaultValue=""
                                placeholder="**************"
                                onChangeText={handlePasswordValidation} />
                            <TouchableOpacity
                                style={styles.visibleIcon}
                                onPress={() => setPasswordVisible(!isPasswordVisible)}>
                                {isPasswordVisible ? (
                                    <Ionicons
                                        name="eye-off-outline"
                                        size={23}
                                        color={"#747474"} />
                                ) : (
                                    <Ionicons
                                        name="eye-outline"
                                        size={23}
                                        color={"#747474"} />
                                )}
                            </TouchableOpacity>
                            <SimpleLineIcons
                                style={styles.icon2}
                                name="lock"
                                size={20}
                                color={"#A1A1A1"} />
                        </View>
                        {error.password && (
                            <View style={[commonStyles.errorContainer, { top: 145 }]}>
                                <Entypo
                                    name="cross"
                                    size={18}
                                    color={"red"} />
                                <Text
                                    style={{
                                        color: "red",
                                        fontSize: 11,
                                        marginTop: -1
                                    }}>
                                    {error.password}
                                </Text>
                            </View>
                        )}

                        <TouchableOpacity
                            style={{
                                padding: 16,
                                borderRadius: 8,
                                marginHorizontal: 16,
                                backgroundColor: "#2467EC",
                                marginTop: 15,
                            }}
                            onPress={handleSignIn}>
                            {
                                buttonSpinner ? (
                                    <ActivityIndicator
                                        size="small"
                                        color={"white"} />
                                ) : (
                                    <Text style={{
                                        color: "white",
                                        textAlign: "center",
                                        fontSize: 16,
                                        fontFamily: "Raleway_700Bold"
                                    }}>
                                        Sign Up
                                    </Text>
                                )
                            }
                        </TouchableOpacity>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: 20,
                            gap: 15  // From 10 to 15
                        }}>
                            <TouchableOpacity>
                                <FontAwesome
                                    name="google"
                                    size={24} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <FontAwesome
                                    name="github"
                                    size={24} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.signupRedirect}>
                            <Text style={{
                                fontSize: 18,
                                fontFamily: "Raleway_600Bold"
                            }}>
                                Already have an account?
                            </Text>
                            <TouchableOpacity
                                onPress={() => router.push("/(routes)/login")}>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontFamily: "Raleway_600Bold",
                                        color: "#2467EC",
                                        marginLeft: 5
                                    }}>
                                    Sign In
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    signInImage: {
        width: "60%",
        height: 250,
        alignSelf: "center",
        marginTop: 50,
    },

    welcomeText: {
        textAlign: "center",
        fontSize: 24,
    },

    learningText: {
        textAlign: "center",
        color: "#575757",
        fontSize: 15,
        marginTop: 5,
    },

    inputContainer: {
        marginHorizontal: 16,
        marginTop: 30,
        rowGap: 30,
    },

    input: {
        height: 55,
        marginHorizontal: 16,
        borderRadius: 8,
        paddingLeft: 35,
        fontSize: 16,
        backgroundColor: "white",
        color: "#A1A1A1",
    },

    visibleIcon: {
        position: "absolute",
        right: 30,
        top: 15,
    },

    icon2: {
        position: "absolute",
        left: 24,
        top: 17.8,
        marginTop: -2,
    },

    forgotSection: {
        marginHorizontal: 16,
        textAlign: "right",
        fontSize: 16,
        marginTop: 10,  // From -10 to 10
    },

    signupRedirect: {
        flexDirection: "row",
        marginHorizontal: 16,
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 20,
    },
});