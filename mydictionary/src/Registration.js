import React from "react";
import Dir_header from "./Dir_header";
import Dir_regi from "./Dir_regi";
const Registration = () =>{
    return (
        <div>
            <Dir_header title = {'나만의 사전'}/>
            <Dir_regi/>
            <Dir_regi/>
            <Dir_regi/>
            <button>버튼</button>
        </div>
    );
}

export default Registration;