import { PLAY_AROUND, ACT_SERIOUS } from '../actions/SocialButton';

const initialState = {
    gameIndex: 0
};

const SocialButton=(state = initialState, action)=> {
    switch (action.type) {
        case PLAY_AROUND:
            return { ...state, gameIndex: action.gameIndex };
        case ACT_SERIOUS:
            return { ...state, gameIndex: 0 };
        default:
            return state;
    }
}

export default SocialButton;