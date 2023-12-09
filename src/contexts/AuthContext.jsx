import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext({
  auth: null,
  setAuth: () => {},
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  const value = useMemo(() => ({ auth, setAuth }), [auth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
