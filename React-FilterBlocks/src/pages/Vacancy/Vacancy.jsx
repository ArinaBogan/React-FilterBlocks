import { useParams } from "react-router-dom";
import array from '../../storage/storage.json'
import { useEffect, useState } from "react";
import { IconMapPin } from "@tabler/icons-react";
import style from './style.module.scss'

function Vacancy() {
    const { id } = useParams();
    const [foundVacancy, setFoundVacancy] = useState({})

    useEffect(() => {
        const found = array.filter(el => el.id === +id)

        setFoundVacancy(found[0])
    }, [])

    return (<>
        <div className={style.header}>
            <h1>{foundVacancy?.title}</h1>
            <div className={style.flex}>
                <p>{foundVacancy?.salary}</p>
                <p>{foundVacancy?.time}</p>
            </div>
            <div className={style.flex}>
                <IconMapPin></IconMapPin>
                <p>{foundVacancy?.location}</p>
            </div>
        </div>

        <div className={style.content}>
            <h2>Обязанности</h2>
            <ul>{foundVacancy.responsibilities?.map((el) => <li>{el}</li>)}</ul>

            <h2>Требования</h2>
            <ul>{foundVacancy.requirements?.map((el) => <li>{el}</li>)}</ul>

            <h2>Условия</h2>
            <ul>{foundVacancy.conditions?.map((el) => <li>{el}</li>)}</ul>
        </div>


    </>);
}

export default Vacancy;