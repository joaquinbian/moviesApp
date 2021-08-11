import React, {createContext, useState} from 'react';

interface ColorsState {
  primary: string;
  secondary: string;
}

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface ContextProps {
  colors: ColorsState;
  prevColors: ColorsState;
  setMainColors: (colors: ColorsState) => void;
  setPreviousColors: (colors: ColorsState) => void;
}
export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: ProviderProps) => {
  const [colors, setColors] = useState<ColorsState>({
    primary: 'transparent',
    secondary: 'transparent',
  });
  const [prevColors, setPrevColors] = useState<ColorsState>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colors: ColorsState) => {
    setColors(colors);
  };
  const setPreviousColors = (colors: ColorsState) => {
    setPrevColors(colors);
  };

  const data: ContextProps = {
    colors,
    prevColors,
    setMainColors,
    setPreviousColors,
  };
  return <GradientContext.Provider value={data}>{children}</GradientContext.Provider>;
};
