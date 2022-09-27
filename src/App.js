import "./App.css";
import React, { lazy, Suspense } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { FullPageSpinner } from "components/Spinner";
const UnauthenticatedApp = lazy(() => import("app/unauthenticatedApp"));

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Suspense fallback={<FullPageSpinner />}>
          <UnauthenticatedApp />
        </Suspense>
      </div>
    </ChakraProvider>
  );
}

export default App;
