import React, { useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Modal from "react-native-modal";

export default function App() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false, // No cropping
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Image Gallery</Text>

      {images.length === 0 ? (
        <Text style={styles.noImagesText}>
          No images yet. Click "Add Image" below.
        </Text>
      ) : (
        <FlatList
          data={images}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedImage(item)}
              style={styles.imageWrapper}
            >
              <Image source={{ uri: item }} style={styles.image} />
            </TouchableOpacity>
          )}
        />
      )}

      <TouchableOpacity style={styles.addButton} onPress={pickImage}>
        <Text style={styles.addButtonText}>+ Add Image</Text>
      </TouchableOpacity>

      {/* Full-Screen Modal for Image Preview */}
      <Modal
        isVisible={!!selectedImage}
        onBackdropPress={() => setSelectedImage(null)}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Image source={{ uri: selectedImage }} style={styles.fullImage} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    paddingTop: 40,
  },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  noImagesText: { fontSize: 16, color: "#777", marginVertical: 20 },
  imageWrapper: {
    width: "30%",
    aspectRatio: 1,
    margin: "1.5%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    position: "absolute",
    bottom: 30,
  },
  addButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  // Modal styles
  modal: { justifyContent: "center", alignItems: "center" },
  modalContent: { backgroundColor: "white", padding: 10, borderRadius: 10 },
  fullImage: { width: 300, height: 300, resizeMode: "contain" },
});
