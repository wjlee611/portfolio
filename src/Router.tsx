import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { loadedAsset } from "./atoms";
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

const ImgAsset = styled.div`
  position: fixed;
  height: 0;
  opacity: 0;
  pointer-events: none;
`;

function Router() {
  const [loaded, setLoaded] = useRecoilState(loadedAsset);

  return (
    <>
      <ImgAsset className="Image_Assets_Preload">
        <img
          src={InfoImg}
          alt="InfoImg"
          onLoad={() => setLoaded((prev) => prev + 1)}
        />
        <img
          src={ContactImg}
          alt="ContactImg"
          onLoad={() => setLoaded((prev) => prev + 1)}
        />
        <img
          src={GitHubImg}
          alt="GitHubImg"
          onLoad={() => setLoaded((prev) => prev + 1)}
        />
        <img
          src={BlogImg}
          alt="BlogImg"
          onLoad={() => setLoaded((prev) => prev + 1)}
        />
        <img
          src={YoutubeImg}
          alt="YoutubeImg"
          onLoad={() => setLoaded((prev) => prev + 1)}
        />
      </ImgAsset>
      {loaded >= 6 ? (
        <Header
          assets={[InfoImg, ContactImg, GitHubImg, BlogImg, YoutubeImg]}
        />
      ) : null}
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
