import { Route, Routes } from "react-router-dom";
import ListCountriesPage from "../Pages/ListPage/ListCountriesPage";
import CountryPage from "../Pages/CountryPage/CountryPage";
import ErrPage from "../Pages/ErrorPage/ErrPage";
import { propsInterface } from "../types/types";


export default function AppRoutes ({setError}:propsInterface) {
  return (
    <Routes>
      <Route path="/" element={<ListCountriesPage setError={setError} />} />
      <Route path="/country/:id" element={<CountryPage setError={setError}/>} />
      <Route path="*" element={<ErrPage/>}/>
    </Routes>
  );
}
