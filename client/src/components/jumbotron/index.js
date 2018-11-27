import React from "react";
import "./style"
function Jumbotron({ children }){
    return (
        <div className="jumbotron">
        {children}
        </div>
    )
};

export default Jumbotron;
