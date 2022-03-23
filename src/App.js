import { Outlet } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <main className=" w-full min-h-[100vh] flex flex-col md:grid md:grid-cols-[250px_auto] " >
      <Header />
      <div className=" px-8 py-6 col-span-full md:col-start-2 md:col-span-1 " >
        <Outlet />
      </div>
    </main>
      
  );
}

export default App;
