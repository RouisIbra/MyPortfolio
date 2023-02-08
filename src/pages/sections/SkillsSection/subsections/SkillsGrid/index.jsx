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
  Prisma,
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
      <SkillCard title="Javascript" icon={Javascript} color="#F7DF1E" />
      <SkillCard title="ReactJS" icon={ReactJs} color="#61DAFB" />
      <SkillCard title="NodeJS" icon={Nodedotjs} color="#339933" />
      <SkillCard title="Express" icon={Express} color="#000000" />
      <SkillCard title="Flutter" icon={Flutter} color="#02569B" />
      <SkillCard title="Linux" icon={Linux} color="#FCC624" />
      <SkillCard title="Git" icon={Git} color="#F05032" />
      <SkillCard title="Github" icon={Github} color="#181717" />
      <SkillCard title="Docker" icon={Docker} color="#2496ED" />
      <SkillCard title="AWS" icon={Amazonaws} color="#FF9900" />
      <SkillCard title="Sqlite" icon={Sqlite} color="#003B57" />
      <SkillCard title="Firebase" icon={Firebase} color="#FFCA28" />
      <SkillCard title="HTML" icon={Html5} color="#E34F26" />
      <SkillCard title="CSS" icon={CssThree} color="#1572B6" />
      <SkillCard title="Redux" icon={Redux} color="#764ABC" />
      <SkillCard title="Dart" icon={Dart} color="#0175C2" />
      <SkillCard title="MySQL" icon={Mysql} color="#4479A1" />
      <SkillCard title="PHP" icon={Php} color="#777BB4" />
      <SkillCard title="Typescript" icon={Typescript} color="#3178C6" />
      <SkillCard title="C++" icon={Cplusplus} color="#00599C" />
      <SkillCard title="Apache" icon={Apache} color="#D22128" />
      <SkillCard title="VScode" icon={Visualstudiocode} color="#007ACC" />
    </>
  );
}

export default SkillsGrid;
