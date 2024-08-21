import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCopy} from "@fortawesome/free-solid-svg-icons"
/**
 * This button copies the text to clipboard of the parent components
 * innerHTML.
 * */
function CopyBtn({content}) {
    async function handleClick(event) {
        console.log("Copy button clicked");
        navigator.clipboard.writeText(content).then(
            (resolve) => console.log("copied"),
            (reject) => console.log("failed to copy")
        );
    }

    return (
        <div className={"copy-btn"} onClick={handleClick}>
            <FontAwesomeIcon icon={faCopy}/>
        </div>
    )
}

export default CopyBtn;