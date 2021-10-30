/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "../../routes";
import Header from "../shared/Header";
import Sidebar from "../shared/Sidebar";

function Container() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <Router>
        <div className="grid grid-cols-12 min-w-full min-h-screen">
        
            <Sidebar sidebar={sidebar}/>
      
          <div className={`${sidebar ? 'col-span-full md:col-start-3 md:col-end-13' : 'col-span-full'}`}>
         
              <Header handleSidebar={setSidebar}/>
          
            <div>
              {routes.map((route, index) => (
                <div key={index}>
                <Route
                  exact
                  path={route.path}
                  component={route.component}
                />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Container;
