import React from 'react';
import Form from './Form';
import './FormComponent.css';

const FormComponent = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

export default FormComponent;