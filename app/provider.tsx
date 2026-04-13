// app/providers.tsx
"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps): React.ReactNode {
  return <Provider store={store}>{children}</Provider>;
}