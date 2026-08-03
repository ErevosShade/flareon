import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { markets, rtlLocales, strings } from "./data/markets";

const MarketContext = createContext(null);
const STORAGE_KEY = "flareon.market";

export function MarketProvider({ children }) {
  const [code, setCode] = useState(
    () => localStorage.getItem(STORAGE_KEY) || "EN"
  );

  // Only markets flagged `ready` can be selected; an unknown code falls back to
  // the default market rather than rendering an empty locale.
  const market = useMemo(() => {
    const found = markets.find((m) => m.code === code);
    return found?.ready ? found : markets[0];
  }, [code]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, market.code);
    document.documentElement.lang = market.locale;
    document.documentElement.dir = rtlLocales.includes(market.locale)
      ? "rtl"
      : "ltr";
  }, [market]);

  const value = useMemo(() => {
    const t = (key) => strings[market.locale]?.[key] ?? strings.en[key] ?? key;
    return {
      market,
      setMarket: setCode,
      t,
      isRTL: rtlLocales.includes(market.locale),
    };
  }, [market]);

  return (
    <MarketContext.Provider value={value}>{children}</MarketContext.Provider>
  );
}

export function useMarket() {
  const ctx = useContext(MarketContext);
  if (!ctx) throw new Error("useMarket must be used inside <MarketProvider>");
  return ctx;
}
