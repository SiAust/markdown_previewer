import RestoreIcon from "../icons/RestoreIcon";
import MaximizeIcon from "../icons/MaximizeIcon";
import MinimizeIcon from "../icons/MinimizeIcon";
import CustomIcon from "../icons/CustomIcon";

function TitleBar({title, icon}) {
    return (
        <div className={"title-bar"}>
            <div className={"title-container"}>
                < CustomIcon icon={icon} />
                <h2>{title}</h2>
            </div>
            <div className={"icon-container"}>
                <MinimizeIcon />
                <RestoreIcon />
                <MaximizeIcon />
            </div>
        </div>
    )
}

export default TitleBar;