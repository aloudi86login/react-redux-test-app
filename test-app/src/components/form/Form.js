import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'Required'
  } 
  if (!values.body) {
    errors.body = 'Required'
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} className="form-input" placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const Form = (props) => {
  const { handleSubmit, pristine, submitting} = props;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Field
        label="Title"
        name="title"
        component={renderField}
        type="text"
      />
      <Field
        label='Body'
        name="body"
        component={renderField}
        type="text"
      />
      <button type="submit" className="form-submit-btn" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'postForm',
  validate,
})(Form);