// voca.js
import {db} from '../../firebase'
import { collection,getDocs, doc, updateDoc, deleteDoc, getState } from 'firebase/firestore';
import { async } from '@firebase/util';

// Actions
const LOAD = 'voca/LOAD';
const CREATE = 'voca/CREATE';
const UPDATE = 'voca/UPDATE';
const REMOVE = 'voca/REMOVE';

const init_state = {
    list : []
}

// Action Creators
export function loadVoca(voca_list) {
return { type: LOAD, voca_list };
}

export function createVoca(voca) {
    console.log('createVoca :성공'+ voca)
    console.log({ type: CREATE, voca })
return { type: CREATE, voca };
}

export function updateVoca(voca) {
return { type: UPDATE, voca };
}

export function removeVoca(remove_index) {
return { type: REMOVE, remove_index };
}

// Reducer
export default function reducer(state = init_state, action = {}) {
    switch (action.type) {
        case 'voca/LOAD':
            console.log( 'reducer에서 호출 :' +  action.voca_list);
            return {list : action.voca_list};
        case "voca/CREATE":
            console.log('reducer 진입 :성공' )
            const new_dir_list = [...state.list,action.voca];
            console.log('create :성공' +  new_dir_list)
            return {list : new_dir_list};
        case 'voca/REMOVE' :
            console.log('삭제 액션');
            const delete_list = [...state.list];
            delete_list.splice(action.remove_index,1);
            console.log(delete_list);
            return {list : delete_list};
        default: 
        return state;
    }
}

//middlewares
export const loadvoca_fb = () =>{
    return async function (dispatch) {
        const voca_data = getDocs(collection(db,'my_dictionary'));
        let voca_list = [];
        let dir_voca = {};
        (await voca_data).forEach((doc) => {
            
            console.log('loadvoca_fb foreach');
            console.log(doc.id+ '>' + doc.data());
            dir_voca = {
                id : doc.id,
                data : doc.data()
            };
            console.log('dirvoca set');
            console.log(dir_voca);
            voca_list.push({...dir_voca});
        });
        console.log('loadvoca_fb voca_list');
            console.log(voca_list);
        dispatch(loadVoca(voca_list));
    }
}

export const updatevoca_fb = (update_id,update_data) => {
    return async function (dispatch) {
        console.log(update_id);
        console.log(update_data);
        const docref = doc(db,'my_dictionary',update_id);
        await updateDoc(docref, {DATA : update_data});
    }
}
export const deletevoca_fb = (delete_id) => {
    return async function (dispatch, getState) {
        const docref = doc(db,'my_dictionary',delete_id);
        await deleteDoc(docref);
        const _voca_list = getState().voca.list;
        const _voca_index = _voca_list.findIndex((el)=> el.id === delete_id);

        dispatch(removeVoca(_voca_index));
        
    }
}