import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
export const Layout=({children})=>{
    return (
        <div className="layout">
          <Navbar />
          <div className="content-container flex">
            <Sidebar/>
            <div className=" ml-40 mt-8 ">
              {children}  
            </div>
          </div>
        </div>
      );
}