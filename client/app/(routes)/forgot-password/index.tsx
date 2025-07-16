import React from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import {
  useFonts,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_400Regular
} from "@expo-google-fonts/nunito";
import { router } from "expo-router";

export default function ForgotPassword() {

  let [fontsLoaded, fontError] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <LinearGradient colors={[
      "#E5ECF9",
      "#F6F7F9"]}>
      <Text
        style={[styles.headerText, {
          fontFamily: "Nunito_700Bold"}]}>
        Reset Email Password
      </Text>
      <TextInput
        style={[styles.input, {
          fontFamily: "Nunito_400Regular"
        }]}
        placeholder="Username@gmail.com"
        keyboardType="email-address"
      />
      <TouchableOpacity
        style={styles.button}>
        <Text style={[
          styles.buttonText, {
            fontFamily: "Nunito_700Bold",
          }]}>
          Send
        </Text>
      </TouchableOpacity>
      <View style={styles.loginLink}>
        <Text style={[styles.backText, {
          fontFamily: "Nunito_400Regular"
        }]}>
          Back To ?
        </Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text
            style={[styles.loginText, {
              fontFamily: "Nunito_600SemiBold,"
            }]}
          >Sign In</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  headerText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },

  button: {
    alignItems: "center",
    fontSize: 5,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
  },

  loginLink: {
    flexDirection: "row",
    marginTop: 30,
  },

  loginText: {
    color: "#3876EE",
    marginLeft: 5,
    fontSize: 16,
  },

  backText: {
    fontSize: 16,
  },
})