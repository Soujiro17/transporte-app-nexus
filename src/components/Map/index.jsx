/* eslint-disable react/no-array-index-key */
import React from "react";
import { Dimensions, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { CustomMarker } from "../CustomMarker";
import styles from "./style";

const { width, height } = Dimensions.get("screen");

const ASPECT_RATIO = width / height; // ASPECT RATIO
const LATITUDE_DELTA = 0.01; // ZOOM DEL MAPA
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO; // RELACIÓN DEL ZOOM Y EL ASPECT RATIO PARA QUE SE VEA BIEN

const latLongCoords = {
  latitude: -18.48333046420357,
  longitude: -70.31041909045754,
};

const INITIAL_REGION = {
  ...latLongCoords,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

function Map({
  containerHeight = "100%",
  mapHeight = "100%",
  innerRef,
  initialRegion = INITIAL_REGION,
  children,
  zoom = 1,
}) {
  return (
    <View style={[styles.container, { height: containerHeight }]}>
      <MapView
        ref={innerRef}
        initialRegion={{
          ...initialRegion,
          latitudeDelta: LATITUDE_DELTA / (zoom || 1),
          longitudeDelta: LONGITUDE_DELTA / (zoom || 1),
        }}
        followsUserLocation
        showsMyLocationButton
        showsUserLocation
        style={[styles.map, { height: mapHeight }]}
        provider={PROVIDER_GOOGLE}
      >
        <CustomMarker
          title="Universidad Santo Tomás"
          coordinate={latLongCoords}
          description="UST"
          size={20}
          source={require("../../../assets/ust.png")}
        />
        {children}
      </MapView>
    </View>
  );
}

export default Map;
