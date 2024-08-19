import TitleBar from "./window/TitleBar";
import CopyBtn from "./buttons/CopyBtn";

import Markdown from "marked-react";

import {faMarkdown} from "@fortawesome/free-brands-svg-icons";
function Preview({output}) {

    console.log(output)
    return (
        <div className={"window"} >
            < TitleBar title={"Preview"} icon={faMarkdown}/>
            <div id={"preview"} >
                <Markdown gfm={true} breaks={true}>{output}</Markdown>
            </div>
            < CopyBtn content={output} />
        </div>
    )
}

export default Preview;