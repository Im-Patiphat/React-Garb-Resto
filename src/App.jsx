import { useState } from "react";
import "./App.css";

import { Search } from "./components/Search";
import { Shop } from "./components/Shop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container flex flex-col items-center mx-auto space-y-4">
      <div className="font-bold text-2xl text-center mt-5">Grab Restaurant</div>
      <Search></Search>
      <Shop></Shop>
    </div>
  );
}

export default App;
