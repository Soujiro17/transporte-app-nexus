import { createContext, useEffect, useMemo, useState } from "react";
import { getUser } from "../../lib/user";

export const AuthContext = createContext({
  auth: { access: "" },
  nombre: "",
  edad: 0,
  beneficios: 0,
  rut: "",
  saldo: 0,
  setAuth: () => {},
  setNombre: () => {},
  setEdad: () => {},
  setRut: () => {},
  setBeneficios: () => {},
  setSaldo: () => {},
  fillState: (data) => {},
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [nombre, setNombre] = useState(null);
  const [edad, setEdad] = useState(null);
  const [beneficios, setBeneficios] = useState(0);
  const [rut, setRut] = useState(0);
  const [saldo, setSaldo] = useState(0);

  const fillState = (data) => {
    setNombre(data.nombre);
    setEdad(data.edad);
    setBeneficios(data.beneficios);
    setRut(data.rut);
    setSaldo(data.saldo);
  };

  const value = useMemo(
    () => ({
      auth,
      setAuth,
      saldo,
      setSaldo,
      nombre,
      setNombre,
      edad,
      setEdad,
      beneficios,
      setBeneficios,
      rut,
      setRut,
      fillState,
    }),
    [auth, saldo]
  );

  useEffect(() => {
    getUser().then((res) => {
      fillState(res.usuario);
    });
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
