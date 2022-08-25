import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./css/transition.css";
import LoadingScreen from "./Components/Home/LoadingScreen";
import Project from "./Routes/Project";
const Home = React.lazy(() => import("./Routes/Home"));

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route
        render={({ location }) => {
          return (
            <TransitionGroup className="transition-group">
              <CSSTransition
                key={location.key}
                timeout={500}
                classNames="scale_fade"
              >
                <Switch location={location}>
                  <Route exact path="/">
                    <React.Suspense fallback={<LoadingScreen status={10} />}>
                      <div style={{ position: "fixed", top: 0 }}>
                        <Home />
                      </div>
                    </React.Suspense>
                  </Route>
                  <Route path="/:project">
                    <div style={{ position: "fixed", top: 0 }}>
                      <Project />
                    </div>
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      ></Route>
    </BrowserRouter>
  );
}

export default Router;
