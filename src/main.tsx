import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FilterContexProvider } from "./contexts/filter-context/filterContext.tsx";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./queryClient.ts";
import { ReactQueryDevtools } from "react-query/devtools";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <FilterContexProvider>
            <App />
            <ReactQueryDevtools initialIsOpen={false} />
          </FilterContexProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </SkeletonTheme>
  </React.StrictMode>
);
