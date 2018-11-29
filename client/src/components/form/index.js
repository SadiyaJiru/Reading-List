import React from "react";

export function Input(props){
    return(
         <div className ="form-group">
         <input className = "form-control" {...props} />
    </div>
    );
}
export function TextArea(props){
    return(
         <div className ="form-group">
         <textarea className = "form-control " rows="25" {...props}/>
        
    </div>
    );
}
export function SubmitBtn(props){
    return(
        <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-success">
        {props.children}
      </button>
    );
}

// export default (Input, textArea, submitBtn)
