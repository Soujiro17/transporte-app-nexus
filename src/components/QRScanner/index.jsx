// Importaciones necesarias
import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";

const QRScannerApp = () => {
  const [scanResult, setScanResult] = useState("");

  // Función que se llama cuando se escanea un código QR
  const onSuccess = (e) => {
    setScanResult(e.data);
    Alert.alert("Código QR Escaneado", e.data, [{ text: "OK" }]);
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        topContent={
          <Text style={styles.centerText}>Escanea un código QR.</Text>
        }
        bottomContent={
          scanResult ? (
            <Text style={styles.centerText}>Resultado: {scanResult}</Text>
          ) : null
        }
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  centerText: {
    fontSize: 18,
    padding: 32,
    color: "#777",
  },
});

export default QRScannerApp;
