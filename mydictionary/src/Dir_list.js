import React, { useEffect } from "react";
import {Card} from 'react-bootstrap'
import styled from "styled-components";
import {useSelector,useDispatch} from 'react-redux'
import {BsPlusSquare} from 'react-icons/bs'
import {BsXCircle} from 'react-icons/bs'
import {db} from './firebase'
import {collection, getDoc, getDocs} from 'firebase/firestore'
import {loadvoca_fb,updatevoca_fb,deletevoca_fb } from './redux/modules/voca'
import { Link, useHistory, useParams } from "react-router-dom";

const Dir_list = () => {
    const dispatch = useDispatch();
    const dir_list = useSelector((state) => state.voca.list);
    const history = useHistory();
    console.log('dir_list');
    console.log(dir_list);
    
    const update_btn = (id , u_data) => {
        window.alert('수정클릭! id는' + id);
    }

    const delete_btn = (id) => {
        window.alert('삭제클릭! id는' + id) ;
        dispatch(deletevoca_fb(id));
    }

    React.useEffect(async() => {
        dispatch(loadvoca_fb());
        
        return {

        };
    },[])


    return (
        <List_Design>
            <div className="list_box">
            {dir_list.map((el,idx) => {
                    return (
                        <div key={el.id}>
                           <div className="card_box">
                                <article>
                                    <h5><strong>{el.data.DATA.name}</strong></h5>
                                    <article className="btn_group">
                                        <article className="update_voca">
                                            <Link to = {
                                                {
                                                    pathname: '/registration',
                                                    search : '',
                                                    hash : '',
                                                    state : {data : el}
                                                }}>
                                                <BsPlusSquare size={30} onClick={() => {update_btn(el.id,el.data.DATA)}} color='black'/>
                                            </Link>
                                        </article>
                                        <article className="delete_voca">
                                            <BsXCircle size={30}  onClick={() => {delete_btn(el.id)}} color='black'/>
                                        </article>
                                    </article>
                                </article>
                                <h6>{el.data.DATA.read}</h6>
                                <p className="sementic">{el.data.DATA.sementic}</p>
                                <p className="example">{el.data.DATA.example}</p>
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
    margin : auto;
    width: 80vw;
    min-width : 40vw;
    display: flex;
    .list_box {
        display : flex;
        flex-flow : row wrap;
        justify-content : center;
        align-items: center;
        align-content: stretch;
    }
    .card_box{
        margin : 30px;
        width : 33rem;
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