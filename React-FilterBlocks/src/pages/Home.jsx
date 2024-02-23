import { Input, Button } from "@mantine/core";
import style from "./style.module.scss";
import { IconSearch,IconLocation } from "@tabler/icons-react";
import Vacancies from "../components/Vacancies";

function Home() {
  return (
    <div className={style.wrapper}>
      <Input
        placeholder="Введите название вакансии"
        rightSection={<Button variant="filled">Button</Button>}
        leftSection={<IconSearch />}
        rightSectionWidth="100px"
      ></Input>
      <Vacancies></Vacancies>
    </div>
  );
}

export default Home;