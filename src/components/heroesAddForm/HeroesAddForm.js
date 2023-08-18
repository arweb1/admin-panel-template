import { useFormik } from 'formik'
import * as Yup from 'yup'

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            text: '',
            element: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Name must be longer than 2 symbols")
                .required('Name is Required'),
            text: Yup.string()
                .min(10, 'description must be longer than 10 symbols')
                .required('Description is required'),
            element: Yup.string().required('Required')
        }),
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    })

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={formik.handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Как меня зовут?"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name} />
            </div>
            {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text"
                    className="form-control"
                    id="text"
                    placeholder="Что я умею?"
                    style={{ "height": '130px' }}
                    value={formik.values.text}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
            </div>
            {formik.errors.text && formik.touched.text ? <div className="error">{formik.errors.text}</div> : null}
            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    required
                    className="form-select"
                    id="element"
                    name="element"
                    value={formik.values.element}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}>
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>
            {formik.errors.element && formik.touched.element ? <div className="error">{formik.errors.element}</div> : null}
            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;