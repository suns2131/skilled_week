// voca.js

// Actions
const LOAD = 'voca/LOAD';
const CREATE = 'voca/CREATE';
const UPDATE = 'voca/UPDATE';
const REMOVE = 'voca/REMOVE';

const init_state = {
    list : [['hello','헬로우','안녕,인사','Hello John, how are you?'],
    ['now','나우','지금,이제','Where are you living now?'],
    ['now','나우','지금,이제','Where are you living now?'],
    ['now','나우','지금,이제','Where are you living now?'],
    ['now','나우','지금,이제','Where are you living now?'],
    ['now','나우','지금,이제','Where are you living now?'],
    ['now','나우','지금,이제','Where are you living now?'],
    ['now','나우','지금,이제','Where are you living now?'],
    ['now','나우','지금,이제','Where are you living now?'],
    ['now','나우','지금,이제','Where are you living now?'],
    ['now','나우','지금,이제','Where are you living now?'],
    ['now','나우','지금,이제','Where are you living now?'],
    ['now','나우','지금,이제','Where are you living now?'],
    ['now','나우','지금,이제','Where are you living now?'],
    ['now','나우','지금,이제','Where are you living now?'],
    ['now','나우','지금,이제','Where are you living now?'],
    ['now','나우','지금,이제','Where are you living now?'],
    ['now','나우','지금,이제','Where are you living now?']]
}

// Action Creators
export function loadVoca() {
return { type: LOAD };
}

export function createVoca(voca) {
return { type: CREATE, voca };
}

export function updateVoca(voca) {
return { type: UPDATE, voca };
}

export function removeVoca(voca) {
return { type: REMOVE, voca };
}

// Reducer
export default function reducer(state = init_state, action = {}) {
    switch (action.type) {
        case "voca/LOAD":
            {
                const new_dir_list = [...state.dir_list,action.voca];
                return {list : [new_dir_list]};
            }
        default: return state;
    }
    }