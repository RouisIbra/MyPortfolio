import {
  Amazonaws,
  Apache,
  Cplusplus,
  CssThree,
  Dart,
  Docker,
  Express,
  Firebase,
  Flutter,
  Git,
  Github,
  Html5,
  Javascript,
  Linux,
  Mui,
  Mysql,
  Nodedotjs,
  Php,
  ReactJs,
  Redux,
  Sqlite,
  Typescript,
  Visualstudiocode,
} from "@icons-pack/react-simple-icons";
import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import SkillCard from "../../../../../components/SkillCard";

function SkillsGrid() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <SkillCard
        title="Javascript"
        icon={Javascript}
        color="#F7DF1E"
        animeOrder={matches ? 1 : 1}
      />
      <SkillCard
        title="ReactJS"
        icon={ReactJs}
        color="#61DAFB"
        animeOrder={matches ? 2 : 4}
      />
      <SkillCard
        title="NodeJS"
        icon={Nodedotjs}
        color="#339933"
        animeOrder={matches ? 3 : 20}
      />
      <SkillCard
        title="Express"
        icon={Express}
        color="#000000"
        animeOrder={matches ? 4 : 15}
      />
      <SkillCard
        title="Flutter"
        icon={Flutter}
        color="#02569B"
        animeOrder={matches ? 5 : 5}
      />
      <SkillCard
        title="Linux"
        icon={Linux}
        color="#FCC624"
        animeOrder={matches ? 6 : 13}
      />
      <SkillCard
        title="Git"
        icon={Git}
        color="#F05032"
        animeOrder={matches ? 7 : 21}
      />
      <SkillCard
        title="Github"
        icon={Github}
        color="#181717"
        animeOrder={matches ? 8 : 14}
      />
      <SkillCard
        title="Docker"
        icon={Docker}
        color="#2496ED"
        animeOrder={matches ? 9 : 3}
      />
      <SkillCard
        title="AWS"
        icon={Amazonaws}
        color="#FF9900"
        animeOrder={matches ? 10 : 18}
      />
      <SkillCard
        title="Sqlite"
        icon={Sqlite}
        color="#003B57"
        animeOrder={matches ? 11 : 6}
      />
      <SkillCard
        title="Firebase"
        icon={Firebase}
        color="#FFCA28"
        animeOrder={matches ? 12 : 7}
      />
      <SkillCard
        title="HTML"
        icon={Html5}
        color="#E34F26"
        animeOrder={matches ? 13 : 2}
      />
      <SkillCard
        title="CSS"
        icon={CssThree}
        color="#1572B6"
        animeOrder={matches ? 14 : 12}
      />
      <SkillCard
        title="MUI"
        icon={Mui}
        color="#007FFF"
        animeOrder={matches ? 15 : 3}
      />
      <SkillCard
        title="Redux"
        icon={Redux}
        color="#764ABC"
        animeOrder={matches ? 16 : 17}
      />
      <SkillCard
        title="Dart"
        icon={Dart}
        color="#0175C2"
        animeOrder={matches ? 17 : 8}
      />
      <SkillCard
        title="MySQL"
        icon={Mysql}
        color="#4479A1"
        animeOrder={matches ? 18 : 11}
      />
      <SkillCard
        title="PHP"
        icon={Php}
        color="#777BB4"
        animeOrder={matches ? 19 : 9}
      />
      <SkillCard
        title="Typescript"
        icon={Typescript}
        color="#3178C6"
        animeOrder={matches ? 20 : 22}
      />
      <SkillCard
        title="C++"
        icon={Cplusplus}
        color="#00599C"
        animeOrder={matches ? 21 : 10}
      />
      <SkillCard
        title="Apache"
        icon={Apache}
        color="#D22128"
        animeOrder={matches ? 22 : 16}
      />
      <SkillCard
        title="VScode"
        icon={Visualstudiocode}
        color="#007ACC"
        animeOrder={matches ? 23 : 19}
      />
    </>
  );
}

export default SkillsGrid;
