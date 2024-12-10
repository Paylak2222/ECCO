import Labs from "../labs/labs";
import Teams from "../teams/teams";
import Sylvia from "../../assets/images/peoples/Sylvia.png";
import Ford from "../../assets/images/peoples/Ford Smith Headshot.jpg";
import Thomas from "../../assets/images/peoples/Thomas_Martin Headshot .JPG";
import Trent from "../../assets/images/peoples/Trent Overholt Headshot.png";
import Elliot from "../../assets/images/peoples/elliot.jpeg";
import Overholt from "../../assets/images/peoples/Trent Overholt Headshot.png";
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
import logoElliot from "../../assets/images/peoples/Catalyst.jpg";
import logoOverholt from "../../assets/images/peoples/Noble Pacific.png";
import logoKevin from "../../assets/images/peoples/conception nurseries.png";
import logoZach from "../../assets/images/peoples/Anresco.png";
import logoJosh from "../../assets/images/peoples/Infinite Labs.png";
import logoGary from "../../assets/images/peoples/LEEF.png";
import logoKroeger from "../../assets/images/peoples/RawGarden_Logos.png";
import logoSeo from "../../assets/images/peoples/Nabis.jpg";
import logoJorgensen from "../../assets/images/peoples/KSS.png";
import logoFussell from "../../assets/images/peoples/CannaCraft.png";
import logoNate from "../../assets/images/peoples/Jetty-Logo-Black-_1_.png";

import style from "./teamsAndLabs.module.css";

const dataTeams = [
  {
    type: "teams",
    profilImg: Sylvia,
    name: "Sylvia Rzepniewski",
    desc: "Interim Executive Director",
    profilLogo: logoSylvia,
  },
  {
    type: "teams",
    profilImg: Ford,
    name: "Ford Smith",
    desc: "ECCO Founding Member",
    profilLogo: logoFord,
  },
  {
    type: "teams",
    profilImg: Thomas,
    name: "Thomas Martin",
    desc: "ECCO Founding Member",
    profilLogo: logoThomas,
  },
  {
    type: "teams",
    profilImg: Trent,
    name: "Trent Overholt",
    desc: "ECCO Founding Member",
    profilLogo: logoTrent,
  },
  {
    type: "teams",
    profilImg: Elliot,
    name: "Elliot Lewis",
    desc: "ECCO Founding Member",
    profilLogo: logoElliot,
  },
  {
    type: "teams",
    profilImg: Overholt,
    name: "Trent Overholt",
    desc: "ECCO Technical Advisory Committee",
    profilLogo: logoOverholt,
  },
  {
    type: "teams",
    profilImg: Kevin,
    name: "Kevin Brooks",
    desc: "ECCO Technical Advisory Committee",
    profilLogo: logoKevin,
  },
  {
    type: "teams",
    profilImg: Zach,
    name: "Zach Eisenberg",
    desc: "ECCO Technical Advisory Committee",
    profilLogo: logoZach,
  },
  {
    type: "teams",
    profilImg: Josh,
    name: "Josh Swider",
    desc: "ECCO Technical Advisory Committee",
    profilLogo: logoJosh,
  },
  {
    type: "teams",
    profilImg: Gary,
    name: "Gary Vandenberghe",
    desc: "ECCO Technical Advisory Committee",
    profilLogo: logoGary,
  },

  {
    type: "teams",
    profilImg: Kroeger,
    name: "Kevin Kroeger",
    desc: "ECCO Technical Advisory Committee",
    profilLogo: logoKroeger,
  },
  {
    type: "teams",
    profilImg: Seo,
    name: "Jen Seo",
    desc: "ECCO Advisory Board",
    profilLogo: logoSeo,
  },
  {
    type: "teams",
    profilImg: Jorgensen,
    name: "Brooks Jorgensen",
    desc: "ECCO Advisory Board",
    profilLogo: logoJorgensen,
  },
  {
    type: "teams",
    profilImg: Fussell,
    name: "Ned Fussell",
    desc: "ECCO Advisory Board",
    profilLogo: logoFussell,
  },
  {
    type: "teams",
    profilImg: Nate,
    name: "Nate Ferguson",
    desc: "ECCO Advisory Board",
    profilLogo: logoNate,
  },
];
const dataLabs = [
  {
    type: "labs",
    profilImg: "",
    name: "Anresco Laboratories",
    desc: "LAB 1",
    profilLogo: logoZach,
  },
  {
    type: "labs",
    profilImg: "",
    name: "Infinite Chemical Analysis Labs",
    desc: "LAB 2",
    profilLogo: logoJosh,
  },
];

export default function TeamsAndLabs({ type }) {
  return (
    <>
      {type === "teams" ? (
        <Teams data={dataTeams} />
      ) : type === "labs" ? (
        <Labs data={dataLabs} />
      ) : null}
    </>
  );
}
