import { Route, Routes } from "react-router-dom";
import { Index } from "./Screens";
import { CreateEmployee } from "./Screens/CreateEmployee";
import { EditEmployee } from "./Screens/EditEmployee";
import { DetailsEmployee } from "./Screens/DetailsEmployee";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/createEmployee" element={<CreateEmployee />} />
            <Route path="/editEmployee" element={<EditEmployee />} />
            <Route path="/detailsEmployee" element={<DetailsEmployee />} />
        </Routes>
    )
}