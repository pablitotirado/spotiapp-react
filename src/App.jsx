import React, { Suspense } from "react";
import { BrowserRouter,  Route } from "react-router-dom";
import routes from "./routes";
import Nav from "./components/nav";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav>
          <Suspense fallback={<div>cargando...</div>}>
            {routes.map((route, i) => (
              <Route {...route} key={i} />
            ))}
          </Suspense>
        </Nav>
      </BrowserRouter>
    </>
  );
};

export default App;
