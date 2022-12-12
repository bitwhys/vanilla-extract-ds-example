import React from "react";

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];

export const createContext = <ContextType>(): CreateContextReturn<
  ContextType
> => {
  const Context = React.createContext<ContextType | undefined>(undefined);

  const useContext = () => {
    const context = React.useContext(Context);

    return context;
  };

  return [Context.Provider, useContext, Context] as CreateContextReturn<
    ContextType
  >;
};
