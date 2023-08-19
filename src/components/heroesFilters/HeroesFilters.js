import { useDispatch } from "react-redux";
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!

import { useHttp } from "../../hooks/http.hook";
import { useEffect } from "react";

// Представьте, что вы попросили бэкенд-разработчика об этом
const HeroesFilters = () => {
<<<<<<< HEAD
    const { request } = useHttp()
    
    useEffect(() => {
        request('http://localhost:3001/filters')
            .then(res => console.log(res))
    }, [])

=======

    //Filter started
>>>>>>> b1988e24746fae7df827cc843d98534a64251d66
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    <button className="btn btn-outline-dark active">Все</button>
                    <button className="btn btn-danger">Огонь</button>
                    <button className="btn btn-primary">Вода</button>
                    <button className="btn btn-success">Ветер</button>
                    <button className="btn btn-secondary">Земля</button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;