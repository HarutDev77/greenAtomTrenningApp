import {Outlet} from "react-router-dom";
import Header from "../components/Templates/Header";

function MainLayout (){
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}
export default MainLayout;