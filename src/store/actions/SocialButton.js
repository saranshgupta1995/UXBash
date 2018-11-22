export const PLAY_AROUND = "PLAY_AROUND";

export function playAround(gameIndex) {
    console.log("gameIndex", gameIndex);
    return {
        type: PLAY_AROUND,
        ...gameIndex
    };
}

