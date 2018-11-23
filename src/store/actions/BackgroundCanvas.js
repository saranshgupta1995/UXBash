export const SET_SPACING = "SET_SPACING";
export const SET_THICKNESS = "SET_THICKNESS";
export const SET_DRAG = "SET_DRAG";
export const SET_EASE = "SET_EASE";

export function setSpacing(spacing) {
    return {
        type: SET_SPACING,
        ...spacing
    };
}

export function setThickness(thickness) {
    return {
        type: SET_THICKNESS,
        ...thickness
    };
}

export function setDrag(drag) {
    return {
        type: SET_DRAG,
        ...drag
    };
}

export function setEase(ease) {
    return {
        type: SET_EASE,
        ...ease
    };
}

