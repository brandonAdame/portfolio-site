import "./App.css";
import Header from "./components/header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import clsx from "clsx";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={clsx(isDark ? "dark" : "")}>
      <div className="dark:bg-slate-500 ">
        <section>
          <div className="">
            <Header isDark={isDark} setIsDark={setIsDark} />
          </div>
        </section>

        <section>
          <div className="">
            <Body />
          </div>
        </section>

        <section>
          <div className="">
            <Footer />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
