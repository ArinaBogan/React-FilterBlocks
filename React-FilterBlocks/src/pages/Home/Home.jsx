import { Input, Button } from "@mantine/core";
import style from "./style.module.scss";
import { IconSearch} from "@tabler/icons-react";
import Vacancies from "../../components/Vacancies/Vacancies";

function Home() {
  return (
    <div className={style.wrapper}>
      <Input
        placeholder="Введите название вакансии"
        rightSection={<Button variant="filled">Поиск</Button>}
        leftSection={<IconSearch />}
        rightSectionWidth="100px"
      ></Input>
      <Vacancies></Vacancies>
    </div>
  );
}

export default Home;