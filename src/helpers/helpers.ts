import {MouseCoordinates} from "../type/mouse-coordinates.tsx";

export const getCoordinateCat = (mouse: MouseCoordinates, coordinatePet: MouseCoordinates): MouseCoordinates => {
    const gap: number = 90;
    let x = null, y = null;

    // Движение
    if ((coordinatePet.x - gap) >= mouse.x) {
        x = mouse.x + gap
    } else {
        x = mouse.x - gap
    }

    if ((coordinatePet.y - gap) >= mouse.y) {
        y = mouse.y + gap
    } else {
        y = mouse.y - gap-40
    }

    // Просмотр диапазона в котором можно двигаться без движения питомца
    if (coordinatePet.x >= mouse.x && coordinatePet.x <= mouse.x + gap) {
        x = coordinatePet.x
    }
    if (coordinatePet.x <= mouse.x && coordinatePet.x >= mouse.x - gap) {
        x = coordinatePet.x
    }

    if (coordinatePet.y >= mouse.y && coordinatePet.y <= mouse.y + gap) {
        y = coordinatePet.y
    }
    if (coordinatePet.y <= mouse.y && coordinatePet.y >= mouse.y - gap-40) {
        y = coordinatePet.y
    }

    return {
        x: x,
        y: y,
    }
}