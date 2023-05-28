import {Link} from "react-router-dom";
import classes from "./Header.module.scss";

function Header (){
    return(
        <div className={classes.headerMenuCont}>
            <ul>
                <li><Link to={"/"}> Home </Link></li>
                <li><Link to={'/blog'}> Blog</Link></li>
            </ul>
        </div>
    )
}

export default Header;