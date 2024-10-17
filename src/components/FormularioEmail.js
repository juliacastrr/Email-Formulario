import React from 'react';
// Importa a biblioteca Formik para gerenciamento de estado e a Yup para validação de schema
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../EmailForm.css';

// Definição do componente do formulário de email
const EmailForm = () => {
    // Configuração do Formik com estado inicial, validação e função de submissão
  const formik = useFormik({
    initialValues: {
      email: '', // Campo de email inicial vazio
    },
    validationSchema: Yup.object({
      // Validação do campo de email: obrigatório e formato de email válido
      email: Yup.string()
        .email('Por favor, insira um email válido')
        .required('O campo de email é obrigatório'),
    }),
    // Função a ser chamada quando o formulário for enviado
    onSubmit: values => {
      alert('Formulário enviado com sucesso: ' + JSON.stringify(values, null, 2));    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form-container">
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          // Aplica classes para exibir erros visuais se houver validação falha
          className={formik.touched.email && formik.errors.email ? 'input-error' : ''}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}ik
          value={formik.values.email}
        />
        {/* Exibe mensagem de erro se o email estiver inválido */}
        {formik.touched.email && formik.errors.email ? (
          <div className="error-message">{formik.errors.email}</div>
        ) : null}
      </div>
      <button type="submit" className="submit-button">Enviar</button>
    </form>
  );
};

export default EmailForm;