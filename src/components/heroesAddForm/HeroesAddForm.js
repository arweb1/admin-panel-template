import {Field, Formik, Form, ErrorMessage} from 'formik'
import { useDispatch } from 'react-redux'
import { addHero } from '../../actions'
import * as Yup from 'yup'
import {v4 as uuidv4} from 'uuid'

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
    const dispatch = useDispatch()

    const handleFormSubmit = values => {
        const newHero = {
            id: uuidv4(),
            name: values.name,
            description: values.text,
            element: values.element
        }

        dispatch(addHero(newHero))
    }
    return (
        <Formik
        initialValues ={{
            name: '',
            text: '',
            element: ''
        }}
        validationSchema = {Yup.object({
            name: Yup.string()
                .min(2, "Name must be longer than 2 symbols")
                .required('Name is Required'),
            text: Yup.string()
                .min(10, 'description must be longer than 10 symbols')
                .required('Description is required'),
            element: Yup.string().required('Required')
        })}
        onSubmit = {handleFormSubmit}
        >
            <Form className="border p-4 shadow-lg rounded" >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                    <Field
                        required
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Как меня зовут?" />
                </div>
                <ErrorMessage className='error' name="name" component="div"/>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label fs-4">Описание</label>
                    <Field
                        required
                        name="text"
                        className="form-control"
                        id="text"
                        placeholder="Что я умею?"
                        as="textarea"
                        style={{ "height": '130px' }}
                    />
                </div>
                <ErrorMessage className='error' name="text" component="div"/>
                <div className="mb-3">
                    <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                    <Field
                        required
                        className="form-select"
                        id="element"
                        name="element"
                        as="select">
                        <option >Я владею элементом...</option>
                        <option value="fire">Огонь</option>
                        <option value="water">Вода</option>
                        <option value="wind">Ветер</option>
                        <option value="earth">Земля</option>
                    </Field>
                </div>
                <ErrorMessage className='error' name="element" component="div"/>
                <button type="submit" className="btn btn-primary">Создать</button>
            </Form>
        </Formik>
    )
}

export default HeroesAddForm;