import { Image, View } from "react-native";
import { Marker } from "react-native-maps";
import styles from "./styles";

export function CustomMarker({ title, coordinate, description, source, size }) {
  return (
    <Marker coordinate={coordinate} title={title} description={description}>
      <View style={[styles.markerContainer]}>
        <Image
          style={[styles.logoMarker, { height: size, width: size }]}
          source={source}
        />
        {/* <View style={styles.punto} /> */}
      </View>
    </Marker>
  );
}
