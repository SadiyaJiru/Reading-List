import React from "react";

function DeleteBtn(props){
    return(
        <button {...props} style={{ float: "left"}} className="btn btn-success"> X
        {props.children}
      </button>

    )
}
export default DeleteBtn;