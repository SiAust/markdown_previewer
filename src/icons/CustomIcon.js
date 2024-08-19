import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function CustomIcon({icon}) {
    return (
        <div className={"icon"} id={`${icon}`}>
            <FontAwesomeIcon icon={icon}/>
        </div>
    )
}

export default CustomIcon;