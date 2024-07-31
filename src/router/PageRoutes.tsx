import { Home } from "@/app/home";
import { NavBar } from "@/components/custom/nav_bar";
import { Error404, ErrorRouteHandler } from "@/error/error_pages";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProjectDUCSWebsite } from "@/app/projects/ducs_website";
import { ProjectDUCSApp } from "@/app/projects/ducs_app";

export function PageRoutes() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                {/* The 404 page is the default page is a page isnt found */}
                <Route path="*" element={<Error404 />}></Route>
                {/* The error path is for additional error codes direct access */}
                <Route path="/error/:ErrorID" element={<ErrorRouteHandler />} />
                <Route path="/projects/" element={<Error404 />}>
                    <Route path="ducs-app" element={<ProjectDUCSApp />} />
                    <Route path="ducs-website" element={<ProjectDUCSWebsite />} />
                </Route>
                <Route path="/" element={<Home />}></Route>

            </Routes>
        </BrowserRouter>
    )
}