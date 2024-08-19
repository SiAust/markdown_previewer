import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowMaximize} from "@fortawesome/free-solid-svg-icons";
function MaximizeIcon() {
    return (
        <div className={"window-icon"} id={"maximizeIcon"}>
            <FontAwesomeIcon icon={faWindowMaximize}/>
        </div>
    )
}

export default MaximizeIcon;