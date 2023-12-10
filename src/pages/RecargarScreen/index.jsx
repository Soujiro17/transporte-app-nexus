import { View } from "react-native";
import { Paragraph } from "../../components/Paragraph";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { BlueGradientLayout } from "../../layouts/BlueGradientLayout";
import styles from "./styles";
import { Title } from "../../components/Title";
import { Line } from "../../components/Line";

export function RecargarScreen() {
  return (
    <View style={styles.container}>
      <Title textAlign="center">Bienvenido al área de recarga</Title>
      <Line />
      <View style={styles.content}>
        <BlueGradientLayout style={styles.creditCard} minHeight={1}>
          <Input width="100%" placeholder="xxx-xxx-xxx-xxx" />
          <View style={styles.row}>
            <Input width="49%" placeholder="dd/mm" />
            <Input width="49%" type="password" placeholder="cvv" />
          </View>
        </BlueGradientLayout>
        <Paragraph size={18}>¿Cuánto deseas recargar?</Paragraph>
        <Input placeholder="Ex: 9990" />
        <Paragraph size={18}>Ingresa tu email</Paragraph>
        <Input placeholder="Ex: aaa@gmail.com" />
        <Button style={{ width: "100%" }}>Recargar</Button>
      </View>
      <View
        style={[
          styles.square,
          { top: "-25%", left: "-40%", backgroundColor: "#225068" },
        ]}
      ></View>
      <View style={styles.square}></View>
    </View>
  );
}
