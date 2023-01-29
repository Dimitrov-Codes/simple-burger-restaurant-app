import {Fragment} from "react";
import classes from "./Header.module.css";
import LandingPageImg from "../../assets/LandingPageImg.png";
import HeaderCartButton from "./HeaderCartButton"
const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Backyard Burgers</h1>
                <HeaderCartButton onClick ={props.onShowCart}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={LandingPageImg}/>
            </div>
        </Fragment>
    );
};
export default Header;