import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.text}>
        Manage your notification preferences here.
      </Text>
      <Text style={styles.text}>
        Manage your notification preferences here.
      </Text>
      <Text style={styles.text}>
        Manage your notification preferences here.
      </Text>
      <Text style={styles.text}>
        Manage your notification preferences here.
      </Text>
      <Text style={styles.text}>
        Manage your notification preferences here.
      </Text>
      <Text style={styles.text}>
        Manage your notification preferences here.
      </Text>
      <Text style={styles.text}>
        Manage your notification preferences here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Ensures contrast if your text is white
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  text: {
    color: "#fff",
  },
});
