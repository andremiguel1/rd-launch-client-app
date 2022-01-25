import React from "react";
import TagManager from "react-gtm-module";
import ReactGA from "react-ga";
import useGoogleOptimize from "@react-hook/google-optimize";
import useScript from "./hooks/useScript";
import DafaultPage from "./components/organisms/DafaultPage";

const App = () => {
  useScript("https://www.googleoptimize.com/optimize.js?id=OPT-TP3D78F");
  const tagManagerArgs = {
    gtmId: "OPT-TP3D78F",
  };

  TagManager.initialize(tagManagerArgs);
  ReactGA.initialize("UA-78521583-3");

  window.dataLayer.push({
    event: "pageview",
  });

  TagManager.dataLayer({ dataLayer: window.dataLayer });

  ReactGA.pageview(window.location.pathname + window.location.search);

  const variant = useGoogleOptimize("jSW5iwE4QwuZEPPiwHwizA", [0, 1], 1000);
  // let variant = 0;
  window.dataLayer.push({
    event: "optimize.callback",
    eventModel: {
      callback: (value, name) => {
        console.log("Experiment with ID: " + name + " is on variant: " + value);
      },
    },
  });

  console.log(variant);

  if (variant === null) {
    return (
      <div>
        <span>LOADING . . .</span>
      </div>
    );
  } else {
    return variant ? <DafaultPage mode="light" /> : <DafaultPage mode="dark" />;
  }
};

export default App;
