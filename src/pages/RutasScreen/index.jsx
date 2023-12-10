import Map from "../../components/Map";
import { Polyline } from "react-native-maps";
import { recorrido_uno } from "../../data/recorrido_uno";
import { recorrido_dos } from "../../data/recorrido_dos";
import { CustomMarker } from "../../components/CustomMarker";
import { useEffect, useState } from "react";

export function RutasScreen() {
  const [primeraMicroCoords, setPrimeraMicroCoords] = useState(
    recorrido_uno.length - 1
  );
  const [segundaMicroCoords, setSegundaMicroCoords] = useState(
    recorrido_dos.length - 1
  );

  useEffect(() => {
    setInterval(() => {
      setPrimeraMicroCoords((prev) =>
        prev - 1 < 0 ? recorrido_uno.length - 1 : prev - 1
      );
      setSegundaMicroCoords((prev) =>
        prev - 1 < 0 ? recorrido_dos.length - 1 : prev - 1
      );
    }, 2000);
  }, []);

  return (
    <Map zoom={0.2}>
      <CustomMarker
        description="Recorrido 1"
        title="Micro 1"
        size={25}
        source={require("../../../assets/micro1.png")}
        coordinate={recorrido_uno[primeraMicroCoords]}
      />
      <CustomMarker
        description="Recorrido 2"
        title="Micro 2"
        size={25}
        source={require("../../../assets/micro2.png")}
        coordinate={recorrido_dos[segundaMicroCoords]}
      />
      <Polyline
        coordinates={recorrido_uno}
        strokeColor="#0f0"
        strokeWidth={5}
      />
      <Polyline
        coordinates={recorrido_dos}
        strokeColor="#f00"
        strokeWidth={5}
      />
    </Map>
  );
}
