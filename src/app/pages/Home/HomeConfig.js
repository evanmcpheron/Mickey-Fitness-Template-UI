import i18next from "i18next";

import en from "./i18n/en";
import tr from "./i18n/tr";
import ar from "./i18n/ar";
import Home from "./Home";

i18next.addResourceBundle("en", "homePage", en);
i18next.addResourceBundle("tr", "homePage", tr);
i18next.addResourceBundle("ar", "homePage", ar);

const HomeConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: "",
      element: <Home />,
    },
  ],
};

export default HomeConfig;
