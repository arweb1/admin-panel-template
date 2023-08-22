
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!

import { useHttp } from "../../hooks/http.hook";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from 'classnames'
import { filtersFetching, filtersFetched, filtersFetchError, filterActiveChange } from "../../actions";
import Spinner from '../spinner/Spinner'
// Представьте, что вы попросили бэкенд-разработчика об этом
const HeroesFilters = () => {
    const dispatch = useDispatch()
    const { request } = useHttp()
    const { filters, filterLoadingItems, activeFilter } = useSelector(state => state.filters)
    useEffect(() => {
        dispatch(filtersFetching())
        request('http://localhost:3001/filters')
            .then(data => dispatch(filtersFetched(data)))
            .catch(filtersFetchError())
    }, [])
    if (filterLoadingItems === 'loading') {
        return <Spinner />
    } else if (filterLoadingItems === 'error') {
        return <h5>Ошибка загрузки данных о фильтре</h5>
    }
    const renderItems = (arr) => {
        return arr.map(({ name, className, label }) => {
            const btnClass = classNames('btn', className, {
                'active': name === activeFilter
            });

            return <button
                className={btnClass}
                key={name}
                id={name}
                onClick={() => dispatch(filterActiveChange(name))}
            >{label}</button>
        })
    }

    const items = renderItems(filters)
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {items}
                </div>
            </div>
        </div>
    )
}
//some code added
export default HeroesFilters;