import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { MdOutlinePostAdd } from "react-icons/md";
import {useHistory} from "react-router-dom"

const Dir_add_btns = (props) => {
    const click_ref = React.useRef(null);
    const history = useHistory();

    const regi_move = () => {
        history.push('/registration');
    }

    React.useEffect (() => {
        click_ref.current.addEventListener('click',() => {regi_move()});
        return () => {
            click_ref.current.removeEventListener('click',() => {regi_move()});
        };
    },[])

    return (
        <Btn_design>
            <div className="circle">
                <div ref={click_ref} className="btns"><MdOutlinePostAdd size={80}/></div>
            </div>
        </Btn_design>
    );
}

const Btn_design = styled.div`
.circle {
    margin: 10px;
    width: 150px;
    background: gray;
    height: 150px;
    border-Radius:250px;
    position : fixed;
    right : 12%;
    bottom : 5%; 
}
.btns {
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%,-50%);
}
`;

export default Dir_add_btns;