import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {router} from "./Routes/Router.jsx";
import {RouterProvider} from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider.jsx";
import {HelmetProvider} from "react-helmet-async";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ThemeContext, ThemeProvider} from "./Provider/ThemeProvider.jsx";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            <div className="bg-[#FAFAFB]">
              <RouterProvider router={router} />
            </div>
          </ThemeProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
