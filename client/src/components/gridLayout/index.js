import React from "react";

function Container({fluid,children}){
    return(
    <div className={`container${fluid ? "-fluid" : ""}`}>{children}
    </div>
    )
};

function Rows({fluid,children}){
    return(
        <div className={`row${fluid ? "-fluid" : ""}`}>{children}
    </div>
    )
};
function Cols({size,children}){
    return(
        <div
        className={size.split(" ")
          .map(size => "col-" + size)
          .join(" ")}
      >
        {children}
      </div>
    )
};
export default (Rows, Container, Cols);



