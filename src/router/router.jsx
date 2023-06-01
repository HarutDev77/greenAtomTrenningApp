import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Blog from "../pages/Blog";
import App from "../App.js";

function AppRouter() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path={'/'} element={<MainLayout/>}>
                        <Route index element={<App />}/>
                        <Route path={'/Blog'} element={<Blog/>}/>
                        {/*<Route path={'/contact'} element={<Contact/>}/>*/}
                        {/*<Route path={'/user/:id'} element={<User/>}/>*/}
                        {/*<Route path={'/users'} element={<Users/>}/>*/}
                    </Route>
                    <Route path="*" element={<h1>404 - Not Found</h1>}/>
                </Routes>
            </Router>
        </>
    )
}

export default AppRouter;