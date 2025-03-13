import css from './SearchBar.module.css'
import { Formik, Field, Form } from "formik"

export default function SearchBar ({onSearch}) {
    return (
        <div>
            <h2>SearchBar</h2>
            <Formik
            initialValues={{
                topic: '',
            }}
            onSubmit={(values, actions) => {
                onSearch(values.topic);
                actions.resetForm();
            }}
        >
            <Form className={css.form}>
                <Field className={css.input} type="text" name="topic" />
                <button className={css.button} type="submit">
                    Search
                </button>
            </Form>
        </Formik>
        </div>
    
    )
}