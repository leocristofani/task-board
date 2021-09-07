import queryString from "query-string";
import { useLocation } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";

interface URLContextValue {
  withoutParam: (key: string) => string;
  withParam: (key: string, value: string) => string;
  hasParam: (key: string, value: string) => boolean;
}

const defaultValue: URLContextValue = {
  withoutParam: (_: string) => "",
  withParam: (_: string, __: string) => "",
  hasParam: (_: string, __: string) => false,
};

const URLContext = React.createContext(defaultValue);

export interface URLProviderProps {
  children: React.ReactNode;
}

export function URLProvider(props: URLProviderProps) {
  const location = useLocation();
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    setState({
      withoutParam: (key: string) => {
        const parsedParams = queryString.parse(location.search);

        delete parsedParams[key];

        return `${location.pathname}?${queryString.stringify(parsedParams)}`;
      },
      withParam: (key: string, value: string) => {
        const parsedParams = queryString.parse(location.search);

        parsedParams[key] = value;

        return `${location.pathname}?${queryString.stringify(parsedParams)}`;
      },
      hasParam: (key: string, value: string) => {
        const parsedParams = queryString.parse(location.search);

        return parsedParams[key] === value;
      },
    });
  }, [location]);

  return (
    <URLContext.Provider value={state}>{props.children}</URLContext.Provider>
  );
}

export function useURL() {
  return useContext(URLContext);
}
