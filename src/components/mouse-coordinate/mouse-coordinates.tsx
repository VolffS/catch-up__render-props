import {MouseEvent, useState} from "react";
import {MouseCoordinates} from "../../type/mouse-coordinates.tsx";

export const MouseCoordinate = ({renderContent}:{renderContent: (mouse: MouseCoordinates) =>  JSX.Element }) => {
    const [mouse, setMouse] = useState<MouseCoordinates>(
        {
            x: 0,
            y: 0
        });

    const handleMouseEvent = (event:MouseEvent) => {
        setMouse({
            x: event.clientX,
            y: event.clientY
        });
    }

    return (
      <div className="mouse-container" onMouseMove={handleMouseEvent}>
          {renderContent(mouse)}
      </div>
    );
}