import React, { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../queryClient";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";
import { FilterContexProvider } from "../../contexts/filter-context/filterContext";
import { ReactQueryDevtools } from "react-query/devtools";

const theme = {
  desktopBreakPoint: "968px",
  tabletBreakPoint: "768px",
};

const DefaultProviders = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <BrowserRouter>
          <FilterContexProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </FilterContexProvider>
        </BrowserRouter>
      </SkeletonTheme>
    </QueryClientProvider>
  );
};

export default DefaultProviders;
