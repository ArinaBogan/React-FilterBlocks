import style from './style.module.scss'
import { IconMapPin } from "@tabler/icons-react";
import { Pagination } from '@mantine/core';
import array from '../../storage/storage.json'
import { Link } from 'react-router-dom';

function Vacancies() {
    return (<>
        <div className={style.vacancies}>
            <div className={style.list}>

                <div>{array.map((el) =>
                    <Link to={`/${el.id}`}>
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
            <Pagination total={10} />
        </div>
    </>);
}

export default Vacancies;