import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [authState, setAuth] = useState(false);
  const memoedValue = useMemo(
    () => ({
      authState,
      setAuth,
    }),
    [authState]
  );
  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
};
export default function useAuth() {
  return useContext(AuthContext);
}
