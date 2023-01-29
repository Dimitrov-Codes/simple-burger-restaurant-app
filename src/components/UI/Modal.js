import classes from "./Modal.module.css"
import ReactDOM from "react-dom";
const BackDrop = props => {
    return <div className={classes.backdrop}></div>
}
const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>)
}

const Modal = props => {
    const portal = document.getElementById("overlays");
    return (
        // <>
        //     <BackDrop />
        //     <ModalOverlay
        // </>
        <>
            {ReactDOM.createPortal(<BackDrop/>, portal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
        </>
    )
}
export default Modal;