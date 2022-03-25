import React, { useEffect } from "react";
import {Card} from 'react-bootstrap'
import styled from "styled-components";
import {useSelector} from 'react-redux'
import {BsPlusSquare} from 'react-icons/bs'
import {BsXCircle} from 'react-icons/bs'


const Dir_list = () => {
    const dir_list = useSelector((state) => state.voca.list);
    console.log(dir_list);

    const update_btn = () => {
        window.alert('수정클릭!');
    }

    const delete_btn = () => {
        window.alert('삭제클릭!');
    }

    return (
        <List_Design>
            <div className="list_box">
            {dir_list.map((el,idx) => {
                    console.log(el)
                    const voca_name = el[0];
                    const voca_read = el[1];
                    const voca_sementic = el[2];
                    const voca_example = el[3];
                    return (
                        <div key={idx}>
                           <div className="card_box">
                                <article>
                                    <h5><strong>{voca_name}</strong></h5>
                                    <article className="btn_group">
                                        <article className="update_voca">
                                            <BsPlusSquare size={30} onClick={update_btn} color='black'/>
                                        </article>
                                        <article className="delete_voca">
                                            <BsXCircle size={30}  onClick={delete_btn} color='black'/>
                                        </article>
                                    </article>
                                </article>
                                <h6>{voca_read}</h6>
                                <p className="sementic">{voca_sementic}</p>
                                <p className="example">{voca_example}</p>
                            </div>     
                        </div>
                    );
                })}
            </div>
        </List_Design>
    );
}
const List_Design = styled.div`
    background-color: #E0F8EC;
    width: 100vw;
    display: flex;
    .list_box {
        margin : auto;
        overflow:scroll;
        display : grid;
        grid-template-columns: repeat(3,minmax(16rem, auto));
        row-gap : 30px;
        column-gap : 30px;
    }
    .card_box{
        margin-top : 30px;
        margin-bottom : 30px;
        width : 40rem;
        height : 18rem;
        border : 3px solid black;
        border-radius : 10px;
    }
    
    article{
        display : flex;
        flex-direction : row;
        justify-content : space-between ;
    }
    .update_voca{
        margin : auto;
    }
    .delete_voca{
        margin : auto;
    }
    .btn_group{
        width : 15%;
        margin-right : 20px;
        margin-top : 20px;
        display : flex;
        flex-direction : row;
        justify-content : center;
        align-items : center;
    }
    
    h5{
        margin-top : 20px;
        margin-left : 20px;
        font-size : 40px;
        
    }
    h6{
        width : 50%;
        margin-left : 20px;
        font-size : 20px;
    }
    .sementic {
        margin-top : 20px;
        width : 80%;
        margin-left : 20px;
        font-size : 20px;
    }
    .example{
        width : 80%;
        margin-left : 20px;
        font-size : 20px;
        color : #81BEF7
    }
`;

export default Dir_list;