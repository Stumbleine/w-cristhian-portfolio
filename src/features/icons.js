import { ReactComponent as Angular } from "../icons/angular-brands.svg";
import { ReactComponent as Figma } from "../icons/figma-brands.svg";
import { ReactComponent as Git } from "../icons/git-alt-brands.svg";
import { ReactComponent as Java } from "../icons/java-brands.svg";
import { ReactComponent as Jira } from "../icons/jira-brands.svg";
import { ReactComponent as Javascript } from "../icons/js-square-brands.svg";
import { ReactComponent as Reactjs } from "../icons/react-brands.svg";
import { ReactComponent as Vue } from "../icons/vuejs-brands.svg";
import { ReactComponent as Csharp } from "../icons/csharp-brands.svg";
import { ReactComponent as Netcore } from "../icons/net-core-brands.svg";
import { ReactComponent as Postgresql } from "../icons/postgresql.svg";
import { ReactComponent as MUI } from "../icons/MUI-brands.svg";
import { ReactComponent as Taiga } from "../icons/taiga-brands.svg";
import { ReactComponent as SpringBoot } from "../icons/spring-boot.svg";

export const iconsList = {
  line1: [
    "React",
    "Angular",
    "Vue",
    "Javascript",
    "Material UI",
    "Java",
    "Spring Boot",
  ],
  line2: ["C#", ".NET core", "Postgresql", "Figma", "Git", "Jira", "Taiga"],
};
export const iconsComponents = {
  rowTech1: [
    { name: "React", icon: <Reactjs></Reactjs> },
    { name: "Angular", icon: <Angular></Angular> },
    { name: "Vue", icon: <Vue></Vue> },
    { name: "Javascript", icon: <Javascript></Javascript> },
    { name: "Material UI", icon: <MUI></MUI> },
  ],
  rowTech2: [
    { name: "Java", icon: <Java></Java> },
    { name: "Spring Boot", icon: <SpringBoot></SpringBoot> },
    { name: "C#", icon: <Csharp></Csharp> },
    { name: ".NET core", icon: <Netcore></Netcore> },
    { name: "Postgresql", icon: <Postgresql></Postgresql> },
  ],
  rowTools: [
    { name: "Figma", icon: <Figma></Figma> },
    { name: "Git", icon: <Git></Git> },
    { name: "Jira", icon: <Jira></Jira> },
    { name: "Taiga", icon: <Taiga></Taiga> },
  ],
};
