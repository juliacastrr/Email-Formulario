import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './EmailForm.css';
import EmailForm from './components/FormularioEmail';

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Por favor, insira um email válido')
        .required('O campo de email é obrigatório'),
    }),
    onSubmit: values => {
      alert('Formulário enviado com sucesso: ' + JSON.stringify(values, null, 2));
    },
  });

  return (
    <main>
      <EmailForm/>
    </main>
  );
};

export default App;