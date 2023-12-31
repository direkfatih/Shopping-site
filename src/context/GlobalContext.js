import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [favoriler, setFavoriler] = useState([]);
  const [sepet, setSepet] = useState([]);

  const favorilereEkle = (product) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.concat(product);

    setFavoriler(yeniFavoriler);
  };

  const favorilerdenCikar = (id) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.filter((urun) => urun.id !== id);

    setFavoriler(yeniFavoriler);
  };

  const sepeteEkle = (product) => {
    const eskiSepet = [...sepet];
    const yeniSepet = eskiSepet.concat(product);

    setSepet(yeniSepet);
  };

  const sepettenCikar = (id) => {
    const eskiSepet = [...sepet];
    const yeniSepet = eskiSepet.filter((products) => products.id !== id);

    setSepet(yeniSepet);
  };

  const toplam = sepet.reduce((acc, products) => acc + products.price, 0);

  

  return (
    <AppContext.Provider
      value={{
        favoriler,
        favorilereEkle,
        favorilerdenCikar,
        sepet,
        sepeteEkle,
        sepettenCikar,
        toplam,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
