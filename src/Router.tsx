import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import LoadingScreen from "./Components/Home/LoadingScreen";
const Home = React.lazy(() => import("./Routes/Home"));

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 2;
`;

function Router() {
  return (
    <Wrapper>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <React.Suspense fallback={<LoadingScreen />}>
              <Home />
            </React.Suspense>
          </Route>
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
}

export default Router;
