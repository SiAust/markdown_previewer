import TitleBar from "./window/TitleBar";
import CopyBtn from "./buttons/CopyBtn";

import {faTent} from "@fortawesome/free-solid-svg-icons";
function Editor({handleInput, initialState, inputVal = initialState}) {

    return (
        <div className={"window"}>
            < TitleBar title={"Editor"} icon={faTent}/>
            <textarea
                id={"editor"}
                onChange={handleInput}
                value={inputVal}
                placeholder={initialState}
            >
            </textarea>
            <CopyBtn content={inputVal}/>
        </div>

    )
}

export default Editor;