import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Weather from "./components/weather";

function App() {
  return (
    <main className=" w-full min-h-[100vh] flex flex-col md:grid md:grid-cols-[250px_auto] " >
      <Header />
      <div className=" px-12 col-span-full md:col-start-2 md:col-span-1 " >
        <Outlet />
      </div>
    </main>
      
  );
}

export default App;
