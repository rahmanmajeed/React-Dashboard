import Content from './components/shared/Content';
import Header from "./components/shared/Header";
import Sidebar from "./components/shared/Sidebar";

function App() {
  return (
    <>
     <div className="grid gap-1 grid-cols-12 min-w-full min-h-screen">
       <div className="bg-gray-darkest hidden min-h-screen md:block md:col-span-2 md:sticky md:top-0 md:self-start"><Sidebar/></div>
       <div className="col-span-full md:col-start-3 md:col-end-13">
         <div className="md:sticky md:top-0 md:self-start"><Header/></div>
         <div><Content/></div>
       </div>
     </div>
    </>
  );
}

export default App;
