import React from "react";
import Header from "./_components/Header";

const DashboardLayout = ({children}) =>{
return(
    <div>
        <Header/>
     <div className="mx-5 md:mx-12 lg:mx-36">
     {children}
     </div>
    </div>
)
}

export default DashboardLayout;
