import Home from './pages/Home';
import CompanhiasAereas from './pages/CompanhiasAereas';
import Passageiros from './pages/Passageiros';
import ComoFunciona from './pages/ComoFunciona';
import Tecnologia from './pages/Tecnologia';
import Compliance from './pages/Compliance';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "CompanhiasAereas": CompanhiasAereas,
    "Passageiros": Passageiros,
    "ComoFunciona": ComoFunciona,
    "Tecnologia": Tecnologia,
    "Compliance": Compliance,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};