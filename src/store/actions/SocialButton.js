export const PLAY_AROUND = "PLAY_AROUND";
export const ACT_SERIOUS = "ACT_SERIOUS";

export function playAround(gameIndex) {
    return {
        type: PLAY_AROUND,
        ...gameIndex
    };
}

export function actSerious() {
    return {
        type: ACT_SERIOUS
    };
}

