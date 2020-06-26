import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import DeConvCam from "./Views/DeConvCam";
import ObjectDetect from "./Views/ObjectDetect";
import ImageSegmentation from "./Views/ImageSegmentation";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/deconvcam">
              <DeConvCam />
            </Route>
            <Route path="/objectdetect">
              <ObjectDetect />
            </Route>
            <Route path="/imagesegmentation">
              <ImageSegmentation />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
