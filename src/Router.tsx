import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./css/transition.css";
import LoadingScreen from "./Components/Home/LoadingScreen";
import Project from "./Routes/Project";
import Header from "./Components/Header/Header";

import InfoImg from "./images/linode-brands.svg";
import ContactImg from "./images/circle-nodes-solid.svg";
import GitHubImg from "./images/github.svg";
import BlogImg from "./images/blog.svg";
import YoutubeImg from "./images/youtube.svg";

const Home = React.lazy(() => import("./Routes/Home"));

function Router() {
  return (
    <>
      <Header assets={[InfoImg, ContactImg, GitHubImg, BlogImg, YoutubeImg]} />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route
          render={({ location }) => {
            return (
              <TransitionGroup className="transition-group">
                <CSSTransition
                  key={location.key}
                  timeout={500}
                  classNames="scale_fade"
                  unmountOnExit
                >
                  <Switch location={location}>
                    <Route exact path="/">
                      <React.Suspense fallback={<LoadingScreen status={10} />}>
                        <div
                          style={{
                            width: "100vw",
                            height: "100vh",
                            position: "fixed",
                            top: 0,
                            overflow: "hidden",
                          }}
                        >
                          <Home />
                        </div>
                      </React.Suspense>
                    </Route>
                    <Route path="/:project">
                      <div
                        style={{
                          width: "100vw",
                          height: "100vh",
                          position: "fixed",
                          top: 0,
                          overflow: "hidden",
                        }}
                      >
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
    </>
  );
}

export default Router;
