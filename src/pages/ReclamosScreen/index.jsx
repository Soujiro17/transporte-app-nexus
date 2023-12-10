import { View } from "react-native";
import { Line } from "../../components/Line";
import { Title } from "../../components/Title";
import styles from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { notifyMessage } from "../../utils/notifyMessage";

export function ReclamosScreen() {
  const onPress = () => {
    notifyMessage("Reclamo recibido con éxito");
  };

  return (
    <View style={styles.container}>
      <Title color="#123144">Ingresar reclamo</Title>
      <Line />
      <Input width="100%" placeholder="Asunto" />
      <Input width="100%" placeholder="Fecha" />
      <View style={styles.row}>
        <Input width="49%" placeholder="Tramo" />
        <Input width="49%" placeholder="Patente" />
      </View>
      <Input
        textAlignVertical="top"
        height={300}
        width="100%"
        placeholder="Comentario"
      />
      <Button onPress={onPress} style={{ width: "100%" }}>
        Enviar reclamo
      </Button>
    </View>
  );
}
