import style from './style.module.scss'
import { IconMapPin } from "@tabler/icons-react";
import { Pagination } from '@mantine/core';
import array from '../../storage/storage.json'
import { Link } from 'react-router-dom';
import { useState } from "react";

function Vacancies() {
    const [currentPage, setCurrentPage] = useState(1);
    const [vacanciesPerPage] = useState(5);

    const lastIndex = vacanciesPerPage * currentPage;
    const firstIndex = lastIndex - vacanciesPerPage;
    const currentVacancies = array.slice(firstIndex, lastIndex);
    return (<>
        <div className={style.vacancies}>
            <div className={style.list}>

                <div>{currentVacancies.map((el) =>
                    <Link key={el.id} to={`/${el.id}`}>
                        <div key={el.id} className={style.content}>
                            <h1>{el.title}</h1>
                            <div className={style.text}>
                                <p>{el.salary}</p>
                                <p className={style.time}>{el.time}</p>
                            </div>
                            <div className={style.flexLocation}>
                                <IconMapPin></IconMapPin>
                                <p>{el.location}</p>
                            </div>
                        </div>
                    </Link>)}
                </div>
            </div>
            <Pagination
                total={Math.ceil(array.length / currentPage)}
                onChange={setCurrentPage} />
        </div>
    </>);
}

export default Vacancies;