import React from "react";
import styled from "styled-components";
import { MdOutlinePostAdd } from "react-icons/md";

const Dir_add_btns = () => {
    return (
        <Btn_design>
            <div className="btns">
                <nav>
                    <div></div>
                    <div className="btns"><MdOutlinePostAdd size={80}/></div>
                </nav>
                
            </div>
        </Btn_design>
    );
}

const Btn_design = styled.div`
.btns{
    position: fixed;
    background: red;
    left: 0;
    right: 0;
    bottom: 0;
    height: 6rem;
}
nav{
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr;
}

.btns {
    margin-right : 100px;
}
`;

export default Dir_add_btns;