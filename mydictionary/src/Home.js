import React from 'react';
import Dir_header from './Dir_header';
import Dir_list from './Dir_list';
import Dir_add_btns from './Dir_add_btn';
import styled from 'styled-components';


const Home = () => {
    
    return (
        <div>
            <Dir_header title = {'나만의 사전'} sub_title = {'등록한 단어'} />
            <Dir_list />
            <Dir_add_btns/>
        </div>
    );
}

const HomeStyle = styled.div`
    background-color : #fff;
`;

export default Home;