import { createContext } from "react";

const SettingsContext = createContext({
  useLiveData: false,
});

export default SettingsContext;
