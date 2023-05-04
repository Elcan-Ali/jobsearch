import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Vacancies from "../pages/Vacancies";
import Job from "../pages/Job";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
        <Route path=":category" element={<Vacancies />} >
            <Route path=":job" element={<Job />} />
        </Route>
    </Route>
))