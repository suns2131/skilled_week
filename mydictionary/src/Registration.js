import React from "react";
import Dir_header from "./Dir_header";
import {useDispatch} from 'react-redux'
import styled from "styled-components";
import {createVoca, updatevoca_fb} from './redux/modules/voca'
import {addDoc, collection, updateDoc,doc} from 'firebase/firestore'
import { useHistory, useParams,useLocation } from "react-router-dom";
import { db } from "./firebase";

const Registration = (props) =>{
    const par =  useParams();
    const par2 = useLocation();
    const voca_nm = React.useRef(null);
    const voca_reading = React.useRef(null);
    const voca_sementics = React.useRef(null);
    const voca_exam = React.useRef(null);
    const buttons = React.useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();
    console.log(par2);
    const btn_click = () => {
        if(par2.state === null)
        {
            let input_data = {
                name : voca_nm.current.value,
                read : voca_reading.current.value,
                sementic : voca_sementics.current.value,
                example : voca_exam.current.value
            }
            addDoc(collection(db,"my_dictionary"),{DATA : input_data , completed : false});
            history.push('/');
        }
        else 
        {
            const update_id = par2.state.data.id;
            const input_data = {
                name : voca_nm.current.value,
                read : voca_reading.current.value,
                sementic : voca_sementics.current.value,
                example : voca_exam.current.value
            }    
            dispatch(updatevoca_fb(update_id,input_data));
            history.push('/');
        }
    }

    const update_setting = (datas) => 
    {
        console.log(datas.state);
        if(par2.state === null)
            return;
        else
        {
            voca_nm.current.value = par2.state.data.data.DATA.name;
            voca_reading.current.value = par2.state.data.data.DATA.read;
            voca_sementics.current.value = par2.state.data.data.DATA.sementic;
            voca_exam.current.value = par2.state.data.data.DATA.example;
        }
    }

    React.useEffect(() =>{
        buttons.current.addEventListener('click',() => {btn_click()});
        update_setting(par2)
        return () => {
            buttons.current.removeEventListener('click',() => {btn_click()});
        };
    },[])

    return (
        <div>
            <Dir_header title = {'나만의 사전'}/>
            <Registration_design>
            <div className="input_area">
                <div className="card_area">
                    <h6>단어</h6>
                    <input ref={voca_nm} type='text'/>
                </div>
                <div className="card_area">
                    <h6>읽는법</h6>
                    <input ref={voca_reading} type='text'/>
                </div>
                <div className="card_area">
                    <h6>의미</h6>
                    <input ref={voca_sementics} type='text'/>
                </div>
                <div className="card_area">
                    <h6>예시</h6>
                    <input ref={voca_exam} type='text'/>
                </div>
                <button ref={buttons}>추가하기</button>
            </div>
            </Registration_design>
            
        </div>
    );
}

const Registration_design = styled.div`
    background-color: #eee;
    height: 100vh; /*vh : 화면기준*/
    width: 100vw;
    display: flex;

    .input_area {
    background-color: #fff;
    width: 70vw;
    max-width: 450px;
    height: 80vh;
    margin: auto;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 16px;
    }

    .card_area{
        margin: 10px;
    }

    input{
        width : 100%;
    }
    button {
        margin-top : 30px;
        width : 100%;
        height : 50px;
        border-radius : 10px;
    }
`;

export default Registration;