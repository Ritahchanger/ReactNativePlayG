import { View, Text, TouchableOpacity, Switch, StyleSheet } from "react-native";
import { Settings, Bell, Shield, User, LogOut } from "lucide-react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const router = useRouter();

  return (
    <View
      style={[
        styles.container,
        darkMode ? styles.darkBackground : styles.lightBackground,
      ]}
    >
      <Text
        style={[styles.title, darkMode ? styles.darkText : styles.lightText]}
      >
        Settings
      </Text>

      {/* Dark Mode */}
      <View style={styles.settingRow}>
        <Settings size={22} color={darkMode ? "#fff" : "#333"} />
        <Text
          style={[
            styles.settingText,
            darkMode ? styles.darkText : styles.lightText,
          ]}
        >
          Dark Mode
        </Text>
        <Switch value={darkMode} onValueChange={() => setDarkMode(!darkMode)} />
      </View>

      {/* Notifications */}
      <TouchableOpacity
        style={styles.settingRow}
        onPress={() => router.push("/settings/notifications")}
      >
        <Bell size={22} color={darkMode ? "#fff" : "#333"} />
        <Text
          style={[
            styles.settingText,
            darkMode ? styles.darkText : styles.lightText,
          ]}
        >
          Notifications
        </Text>
      </TouchableOpacity>

      {/* Privacy */}
      <TouchableOpacity
        style={styles.settingRow}
        onPress={() => router.push("/settings/privacy")}
      >
        <Shield size={22} color={darkMode ? "#fff" : "#333"} />
        <Text
          style={[
            styles.settingText,
            darkMode ? styles.darkText : styles.lightText,
          ]}
        >
          Privacy
        </Text>
      </TouchableOpacity>

      {/* Account */}
      <TouchableOpacity
        style={styles.settingRow}
        onPress={() => router.push("/settings/account")}
      >
        <User size={22} color={darkMode ? "#fff" : "#333"} />
        <Text
          style={[
            styles.settingText,
            darkMode ? styles.darkText : styles.lightText,
          ]}
        >
          Account
        </Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity
        style={styles.logoutRow}
        onPress={() => alert("Logged Out")}
      >
        <LogOut size={22} color="red" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutRow}
        onPress={() => router.push("/auth/login")}
      >
        <LogOut size={22} color="green" />
        <Text style={styles.logoutText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  darkBackground: { backgroundColor: "#1a1a1a" },
  lightBackground: { backgroundColor: "#fff" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  lightText: { color: "#333" },
  darkText: { color: "#fff" },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: "#f5f5f5",
  },
  settingText: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
  },
  logoutRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#ffe5e5",
  },
  logoutText: {
    fontSize: 18,
    color: "red",
    marginLeft: 10,
  },
});
