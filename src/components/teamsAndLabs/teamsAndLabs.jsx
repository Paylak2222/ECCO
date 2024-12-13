import Labs from "../labs/labs";
import Teams from "../teams/teams";
import Sylvia from "../../assets/images/peoples/Sylvia.jpg";
import Ford from "../../assets/images/peoples/Ford Smith Headshot.jpg";
import Thomas from "../../assets/images/peoples/Thomas_Martin Headshot .jpg";
import Trent from "../../assets/images/peoples/Trent Overholt Headshot.jpg";
import Elliot from "../../assets/images/peoples/elliot.jpg";
import Overholt from "../../assets/images/peoples/Trent Overholt Headshot.jpg";
import Kevin from "../../assets/images/peoples/KevinBrooks-Headshot.png";
import Zach from "../../assets/images/peoples/Zachary Eisenberg Headshot.jpg";
import Josh from "../../assets/images/peoples/Josh-Swider-Headshot-scaled.jpg";
import Gary from "../../assets/images/peoples/Gary Vandenberghe Headshot.jpeg";
import Kroeger from "../../assets/images/peoples/Kevin Kroeger.jpg";
import Seo from "../../assets/images/peoples/Jen Seo.png";
import Jorgensen from "../../assets/images/peoples/Brooks Jorgensen Headshot.jpeg";
import Fussell from "../../assets/images/peoples/Ned Fussel Headshot.jpeg";
import Nate from "../../assets/images/peoples/Nate Ferguson, Chief Product Officer, Headshot.jpeg";

import logoSylvia from "../../assets/images/peoples/ECCO.png";
import logoFord from "../../assets/images/peoples/Ultranative Logo Black.png";
import logoThomas from "../../assets/images/peoples/RawGarden_Logos.png";
import logoTrent from "../../assets/images/peoples/Noble Pacific.png";
import logoElliot from "../../assets/images/peoples/Catalyst.png";
import logoOverholt from "../../assets/images/peoples/Noble Pacific.png";
import logoKevin from "../../assets/images/peoples/conception nurseries.png";
import logoZach from "../../assets/images/peoples/Anresco.png";
import logoJosh from "../../assets/images/peoples/Infinite Labs.png";
import logoGary from "../../assets/images/peoples/LEEF.png";
import logoKroeger from "../../assets/images/peoples/RawGarden_Logos.png";
import logoSeo from "../../assets/images/peoples/Nabis.png";
import logoJorgensen from "../../assets/images/peoples/KSS.png";
import logoFussell from "../../assets/images/peoples/CannaCraft.png";
import logoNate from "../../assets/images/peoples/Jetty-Logo-Black-_1_.png";

import style from "./teamsAndLabs.module.css";

const dataTeams = [
  {
    type: "Founders",
    profilImg: Sylvia,
    name: "Sylvia Rzepniewski",
    desc: "Interim Executive Director",
    profilLogo: logoSylvia,
    site: "https://www.eccocert.org/",
    linkedin:"https://www.linkedin.com/in/sylvia-rzepniewski-17304541/"
  },
  {
    type: "Founders",
    profilImg: Elliot,
    name: "Elliot Lewis",
    desc: "ECCO Founding Member",
    profilLogo: logoElliot,
    site:"https://catalyst-cannabis.com/",
    linkedin:"https://www.linkedin.com/in/elliotlewisceo/"
  },
  {
    type: "Founders",
    profilImg: Ford,
    name: "Ford Smith",
    desc: "ECCO Founding Member",
    profilLogo: logoFord,
    site:"https://www.ultranative.com/",
    linkedin:"https://www.linkedin.com/in/ford-smith-austin/"
  },
  {
    type: "Founders",
    profilImg: Thomas,
    name: "Thomas Martin",
    desc: "ECCO Founding Member",
    profilLogo: logoThomas,
    site:"https://rawgarden.farm/",
    linkedin:"https://www.linkedin.com/in/thomas-martin-8ab772115/"
  },
  {
    type: "Founders",
    profilImg: Trent,
    name: "Trent Overholt",
    desc: "ECCO Founding Member",
    profilLogo: logoTrent,
    site:"https://www.noble-pacific.com/",
    linkedin:"https://www.linkedin.com/in/trentoverholtlosangeles/"
  },
  
  {
    type: "Technical Advisers",
    profilImg: Overholt,
    name: "Trent Overholt",
    desc: "ECCO Technical Advisory Committee",
    profilLogo: logoOverholt,
    site:"https://www.noble-pacific.com/",
    linkedin:"https://www.linkedin.com/in/trentoverholtlosangeles/"
  },
  {
    type: "Technical Advisers",
    profilImg: Kevin,
    name: "Kevin Brooks",
    desc: "ECCO Technical Advisory Committee",
    profilLogo: logoKevin,
    site:"https://conceptionnurseries.com/",
    linkedin:"https://www.linkedin.com/in/kevinbrookssv/"
  },
  {
    type: "Technical Advisers",
    profilImg: Zach,
    name: "Zach Eisenberg",
    desc: "ECCO Technical Advisory Committee",
    profilLogo: logoZach,
    site:"http://www.anresco.com/",
    linkedin:"https://www.linkedin.com/in/zachary-eisenberg-78a00639/"
  },
  {
    type: "Technical Advisers",
    profilImg: Josh,
    name: "Josh Swider",
    desc: "ECCO Technical Advisory Committee",
    profilLogo: logoJosh,
    site:"https://infinitecal.com/",
    linkedin:"https://www.linkedin.com/in/joshua-swider/"
  },
  {
    type: "Technical Advisers",
    profilImg: Gary,
    name: "Gary Vandenberghe",
    desc: "ECCO Technical Advisory Committee",
    profilLogo: logoGary,
    site:"https://leefbrands.com/",
    linkedin:"https://www.linkedin.com/in/r-gary-vandenberghe-600676140/"
  },

  {
    type: "Technical Advisers",
    profilImg: Kroeger,
    name: "Kevin Kroeger",
    desc: "ECCO Technical Advisory Committee",
    profilLogo: logoKroeger,
    site:"https://rawgarden.farm/",
    linkedin:"https://www.linkedin.com/in/kevin-kroeger-757554a3/"
  },
  {
    type: "Advisory Board",
    profilImg: Seo,
    name: "Jen Seo",
    desc: "ECCO Advisory Board",
    profilLogo: logoSeo,
    site:"https://www.nabis.com/",
    linkedin:"https://www.linkedin.com/in/jennifer-seo-198694188/"
  },
  {
    type: "Advisory Board",
    profilImg: Jorgensen,
    name: "Brooks Jorgensen",
    desc: "ECCO Advisory Board",
    profilLogo: logoJorgensen,
    site:"https://www.kivasales.com/",
    linkedin:"https://www.linkedin.com/in/brooks-jorgensen-82a0ba44/"
  },
  {
    type: "Advisory Board",
    profilImg: Fussell,
    name: "Ned Fussell",
    desc: "ECCO Advisory Board",
    profilLogo: logoFussell,
    site:"https://cannacraft.com/",
    linkedin:"https://www.linkedin.com/in/ned-fussell-66714a133/"
  },
  {
    type: "Advisory Board",
    profilImg: Nate,
    name: "Nate Ferguson",
    desc: "ECCO Advisory Board",
    profilLogo: logoNate,
    site:"http://www.jettyextracts.com/",
    linkedin:"https://www.linkedin.com/in/nate-ferguson-758135221/"
  },
];
const dataLabs = [
  {
    type: "labs",
    profilImg: "",
    name: "Anresco Laboratories",
    desc: "Lab Partner",
    profilLogo: logoZach,
    site:"http://www.anresco.com/"
  },
  {
    type: "labs",
    profilImg: "",
    name: "Infinite Chemical Analysis Labs",
    desc: "Lab Partner",
    profilLogo: logoJosh,
    site:"https://infinitecal.com/"
  },
];

export default function TeamsAndLabs({ type }) {
  return (
    <>
      <Teams data={dataTeams} />
      <Labs data={dataLabs} />
    </>
  );
}
