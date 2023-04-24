// libs
import { createContext, useContext } from "react";
// types
import type { PropsWithChildren } from "react";
// data
import families from "./families.json";

export const ProvideFamiliesContext = createContext<{
  families: string[][];
  randomWord: () => string;
}>({
  families,
  randomWord: () => ""
});

export const ProvideFamilies = ({ children }: PropsWithChildren) => {
  const randomWord = () => {
    const familiesWord = families[Math.floor(Math.random() * families.length)];

    const word = familiesWord[Math.floor(Math.random() * familiesWord.length)];

    return word;
  };

  return (
    <ProvideFamiliesContext.Provider value={{ families, randomWord }}>
      {children}
    </ProvideFamiliesContext.Provider>
  );
};

export const useFamilies = () => useContext(ProvideFamiliesContext);
