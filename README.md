# Email-form
    Portfólio da disciplina "Desenvolvimento Com React".


Documentação de Funcionalidades

Validação de Email
    Descrição: O formulário contém um campo dedicado para inserção do endereço de e-mail do usuário.
    Biblioteca Utilizada: A validação do campo de e-mail é implementada utilizando a biblioteca Yup.

Regras de Validação:
    Campo Obrigatório: O campo de e-mail é obrigatório, ou seja, não pode ser deixado em branco.
    Formato Válido: O valor inserido deve seguir o padrão de um endereço de e-mail válido (por exemplo, usuario@dominio.com).

Mensagens de Erro:
    Campo Vazio: Se o campo de e-mail estiver vazio, a seguinte mensagem de erro será exibida: "O campo de e-mail é obrigatório."
    Formato Inválido: Se o e-mail inserido não for válido, a mensagem exibida será: "Por favor, insira um endereço de e-mail válido."

Envio do Formulário
    Condições para Envio: O formulário só será enviado se o e-mail estiver válido, conforme as regras estabelecidas.
    Feedback ao Usuário: Caso o usuário tente enviar o formulário com um e-mail inválido, um alerta será exibido, informando-o para corrigir os erros antes de prosseguir.

   Opções de Melhoria

Validação adicional para outros campos: Poderíamos adicionar mais campos ao formulário, como nome e senha, e aplicar validações específicas para cada um.
Melhorias de usabilidade: A adição de animações ou feedback visual mais claro poderia melhorar a experiência do usuário.
Validação ao vivo: Implementar validações em tempo real (à medida que o usuário digita) em vez de esperar que o campo perca o foco.
