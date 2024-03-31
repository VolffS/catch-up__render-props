import mouseSvg from "../../assets/mouse-svgrepo-com.svg";
import {MouseCoordinates} from "../../type/mouse-coordinates.tsx";

export const Mouse = ({mouse}: { mouse: MouseCoordinates }) => {
    return (
        <img src={mouseSvg} alt="" className="pet" style={{top: mouse.y, left: mouse.x}}/>
    );
}