import React from "react";
import styled from "styled-components";
const Dir_header = (props) => {
    const title_nm = props.title;
    const sub_title_nm = props.sub_title;
    console.log(title_nm);
    return (
        <Header_design>
         <section>
            <header>
                <h1>{title_nm}</h1>
                <h3>{sub_title_nm}</h3>
                <hr/>
            </header>
        </section>
        </Header_design>
    );
}

const Header_design = styled.section`
    background-color : #5173EF;
    h1{
        margin : auto;
        text-align : center;
        font-size : 50px;
        color : white;
    }
    h3{
        text-align : center;
        font-size : 30px;
        color : white;
    }
`;

export default Dir_header