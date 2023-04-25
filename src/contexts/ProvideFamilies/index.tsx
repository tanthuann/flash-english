// libs
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
// types
import type { WordInfo } from "../../types";
import type { PropsWithChildren } from "react";
// data
import families from "./families.json";

export const ProvideFamiliesContext = createContext<{
  families: string[][];
  randomWord: () => string;
  wordInfo?: WordInfo;
}>({
  families,
  randomWord: () => "",
  wordInfo: undefined
});

export const ProvideFamilies = ({ children }: PropsWithChildren) => {
  const [wordInfo, setWordInfo] = useState();

  const randomWord = () => {
    const familiesWord = families[Math.floor(Math.random() * families.length)];

    const word = familiesWord[Math.floor(Math.random() * familiesWord.length)];

    return word;
  };

  const crawlData = async () => {
    try {
      const word = randomWord();
      const res = await axios.get(`https://fidbsd-8080.csb.app/api/${word}`);
      setWordInfo(res.data);
    } catch (error: any) {
      // await crawlData();
      console.error(error.message);
    }
  };

  useEffect(() => {
    crawlData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProvideFamiliesContext.Provider value={{ families, randomWord, wordInfo }}>
      {children}
    </ProvideFamiliesContext.Provider>
  );
};

export const useFamilies = () => useContext(ProvideFamiliesContext);
