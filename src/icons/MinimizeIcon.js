import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowMinimize} from "@fortawesome/free-solid-svg-icons";
function MinimizeIcon() {
    return (
        <div className={"window-icon"} id={"maximizeIcon"}>
            <FontAwesomeIcon icon={faWindowMinimize}/>
        </div>
    )
}

export default MinimizeIcon;