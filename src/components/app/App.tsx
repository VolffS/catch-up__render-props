import './App.scss'
import {Cat} from "../pet/cat.tsx";
import {Mouse} from "../pet/mouse.tsx";
import {MouseCoordinates} from "../../type/mouse-coordinates.tsx";
import {MouseCoordinate} from "../mouse-coordinate/mouse-coordinates.tsx";

function App() {

    const renderThePet = (mouse: MouseCoordinates) => {
        return (
            <>
                <Mouse mouse={mouse}/>
                <Cat mouse={mouse}/>
            </>
        )
    }

    return (
        <>
            <h1>Догонялки</h1>
            <MouseCoordinate renderContent={renderThePet}/>
        </>
    )
}

export default App

