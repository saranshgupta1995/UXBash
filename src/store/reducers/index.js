import { OPEN_AC, CLOSE_AC } from "../actions/index";
const initialState = {
    isOpen: false
};

export function test(state = initialState, action) {
    switch (action.type) {
        case OPEN_AC:
            return { ...state, isOpen: true };
        case CLOSE_AC:
            return { ...state, isOpen: false };
        default:
            return state;
    }
}
