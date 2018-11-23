import { SET_SPACING, SET_THICKNESS, SET_DRAG, SET_EASE } from '../actions/BackgroundCanvas';

const initialState = {
    spacing: 6,
    thickness: 80,
    drag:95,
    ease:35
};

const BackgroundCanvas = (state = initialState, action) => {
    switch (action.type) {
        case SET_SPACING:
            return { ...state, spacing: action.spacing };
        case SET_THICKNESS:
            return { ...state, thickness: action.thickness };
        case SET_DRAG:
            return { ...state, drag: action.drag };
        case SET_EASE:
            return { ...state, ease: action.ease };
        default:
            return state;
    }
}

export default BackgroundCanvas;