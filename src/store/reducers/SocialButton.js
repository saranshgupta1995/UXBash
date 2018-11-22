import { PLAY_AROUND } from '../actions/SocialButton';
const initialState = {
    gameIndex: 0
};

const SocialButton=(state = initialState, action)=> {
    switch (action.type) {
        case PLAY_AROUND:
            return { ...state, gameIndex: action.gameIndex };
        default:
            return state;
    }
}

export default SocialButton;