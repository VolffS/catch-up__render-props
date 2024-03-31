import catSvg from "../../assets/cat-halloween-kitty.svg";
import {useEffect, useMemo} from "react";
import {MouseCoordinates} from "../../type/mouse-coordinates.tsx";
import {getCoordinateCat} from "../../helpers/helpers.ts";

let previousCoordinate = {
    x: 0,
    y: 0,
}
export const Cat = ({mouse}: { mouse: MouseCoordinates }) => {

    useEffect(() => {
        previousCoordinate = mouse;
    }, [])

    const coordinateCat = useMemo(() => previousCoordinate, [previousCoordinate])
    previousCoordinate = getCoordinateCat(mouse, coordinateCat);

    return (
        <img src={catSvg} alt="" className="pet" style={{top: coordinateCat.y, left: coordinateCat.x}}/>
    );
}

