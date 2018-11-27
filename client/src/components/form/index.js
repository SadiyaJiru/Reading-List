import React from "react";

function Input(props){
    return(
         <div className ="form-group">
         <input className = "form-control" {...props} >
        
    </input>
    </div>
    )
};
function textArea(props){
    return(
         <div className ="form-group">
         <textArea className = "form-control " rows="25" {...props}>
         </textArea>
        
    </div>
    )
};
function submitBtn(props){
    return(
        <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-success">
        {props.children}
      </button>
    )
};

export default (Input, textArea, submitBtn)
