import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowRestore} from "@fortawesome/free-solid-svg-icons";
function RestoreIcon() {
    return (
        <div className={"window-icon"} id={"restoreIcon"}>
            <FontAwesomeIcon icon={faWindowRestore}/>
        </div>
    )
}

export default RestoreIcon;