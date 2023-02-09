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
import React from "react";
import SkillCard from "../../../../../components/SkillCard";

function SkillsGrid() {
  return (
    <>
      <SkillCard
        title="Javascript"
        icon={Javascript}
        color="#F7DF1E"
        animeOrder={1}
      />
      <SkillCard
        title="ReactJS"
        icon={ReactJs}
        color="#61DAFB"
        animeOrder={4}
      />
      <SkillCard
        title="NodeJS"
        icon={Nodedotjs}
        color="#339933"
        animeOrder={20}
      />
      <SkillCard
        title="Express"
        icon={Express}
        color="#000000"
        animeOrder={15}
      />
      <SkillCard
        title="Flutter"
        icon={Flutter}
        color="#02569B"
        animeOrder={5}
      />
      <SkillCard title="Linux" icon={Linux} color="#FCC624" animeOrder={13} />
      <SkillCard title="Git" icon={Git} color="#F05032" animeOrder={7} />
      <SkillCard title="Github" icon={Github} color="#181717" animeOrder={14} />
      <SkillCard title="Docker" icon={Docker} color="#2496ED" animeOrder={3} />
      <SkillCard title="AWS" icon={Amazonaws} color="#FF9900" animeOrder={18} />
      <SkillCard title="Sqlite" icon={Sqlite} color="#003B57" animeOrder={6} />
      <SkillCard
        title="Firebase"
        icon={Firebase}
        color="#FFCA28"
        animeOrder={21}
      />
      <SkillCard title="HTML" icon={Html5} color="#E34F26" animeOrder={2} />
      <SkillCard title="CSS" icon={CssThree} color="#1572B6" animeOrder={12} />
      <SkillCard title="MUI" icon={Mui} color="#007FFF" animeOrder={3} />
      <SkillCard title="Redux" icon={Redux} color="#764ABC" animeOrder={17} />
      <SkillCard title="Dart" icon={Dart} color="#0175C2" animeOrder={8} />
      <SkillCard title="MySQL" icon={Mysql} color="#4479A1" animeOrder={11} />
      <SkillCard title="PHP" icon={Php} color="#777BB4" animeOrder={9} />
      <SkillCard
        title="Typescript"
        icon={Typescript}
        color="#3178C6"
        animeOrder={22}
      />
      <SkillCard title="C++" icon={Cplusplus} color="#00599C" animeOrder={10} />
      <SkillCard title="Apache" icon={Apache} color="#D22128" animeOrder={16} />
      <SkillCard
        title="VScode"
        icon={Visualstudiocode}
        color="#007ACC"
        animeOrder={19}
      />
    </>
  );
}

export default SkillsGrid;
