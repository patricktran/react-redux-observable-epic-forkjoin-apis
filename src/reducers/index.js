import types from "../types";

const initialDataState = {
    jedi: null,
    planet: null,
    starship: null
}

const data = (state = initialDataState, action) => {
    switch (action.type) {
        case types.SET_DATA: {
            return action.payload;
        }
        default:
            return state;
    }
}

export default data;