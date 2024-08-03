import { configureStore } from "@reduxjs/toolkit";
import { rootReducer, RootState } from "../../store/rootReducer";
import { PropsWithChildren, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";

type AppStore = ReturnType<typeof setupStore>;

interface ExtendedRenderOptions
  extends Omit<RenderOptions, "wrapper" | "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

type MainWrapperProps = {
  children: React.ReactNode;
  routes?: string[];
  store: AppStore;
};

function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }),
  });
}

export const renderWithProviders = (
  ui: ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
  mainWrapperOptions?: Omit<MainWrapperProps, "children" | "store">
) => {
  const {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};
