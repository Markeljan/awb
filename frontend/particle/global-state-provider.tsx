"use client";

import { Account, SmartAccount } from "@particle-network/aa";
import { createContext, useContext, useReducer } from "react";

type GlobalState = {
  smartAccount: SmartAccount | null;
  smartAccountInfo: Account | null;
};

const initialState: GlobalState = {
  smartAccount: null,
  smartAccountInfo: null,
};

const GlobalStateContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer((state: GlobalState, action: any) => {
    switch (action.type) {
      case "SET_SMART_ACCOUNT":
        return { ...state, smartAccount: action.payload };
      case "SET_SMART_ACCOUNT_INFO":
        return { ...state, smartAccountInfo: action.payload };
      default:
        return state;
    }
  }, initialState);

  return (
    <GlobalStateContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
