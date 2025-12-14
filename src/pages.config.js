import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';
import InvestorRelations from './pages/InvestorRelations';
import Leadership from './pages/Leadership';
import Newsroom from './pages/Newsroom';
import AgenticAI from './pages/AgenticAI';
import EnterpriseSuite from './pages/EnterpriseSuite';
import CloudPlatform from './pages/CloudPlatform';
import DeveloperTools from './pages/DeveloperTools';
import Pricing from './pages/Pricing';
import Documentation from './pages/Documentation';
import APIReference from './pages/APIReference';
import Community from './pages/Community';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "AboutUs": AboutUs,
    "Careers": Careers,
    "InvestorRelations": InvestorRelations,
    "Leadership": Leadership,
    "Newsroom": Newsroom,
    "AgenticAI": AgenticAI,
    "EnterpriseSuite": EnterpriseSuite,
    "CloudPlatform": CloudPlatform,
    "DeveloperTools": DeveloperTools,
    "Pricing": Pricing,
    "Documentation": Documentation,
    "APIReference": APIReference,
    "Community": Community,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};