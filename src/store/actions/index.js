export const OPEN_AC = "OPEN_AC";
export const CLOSE_AC = "CLOSE_AC";


export function openAC() {
    return {
        type: OPEN_AC,
    };
}

export function closeAC() {
    return {
        type: CLOSE_AC,
    };
}
