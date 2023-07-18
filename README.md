## NodeJS - Queue

 Desenvolvi um sistema de cadastro simples utilizando MongoDB com envio de emails, utilizando o Nodemailer,
 para exemplificar o uso de filas no Node. O cadastro é feito normalmente e o cliente recebe uma resposta, 
 enquanto, no background, ocorre o processo de envio de email. 
 Utilizei a biblioteca Bull para processar as filas.

 ## Utilização

 Para testar esta aplicação em usa máquina, é necessário criar um arquivo .env na raiz do seu projeto. O mesmo
 deve conter as seguintes informações: 

 - DB_URI: "url do mongodb atlas",
 - MAIL_HOST: "host smtp",
 - MAIL_PORT: "porta do servidor smtp",
 - MAIL_USER: "user do servidor smtp",
 - MAIL_PASS: "senha do servidor smtp",
 - REDIS_HOST: "host do redis",
 - REDIS_PORT: "port do redis"

Após configurar as variáveis de ambiente, abra o terminal e execute "npm run dev". Agora, faça uma requisição
utilizando o Insomnia ou Postman (de sua preferência) na rota "http://localhost:3000/register" enviando, no corpo
da requisição, um json:

{
  "name": "seu_nome",
  "email": "seu_email",
  "password": "sua_senha"
}

## Considerações finais

- Este projeto foi feito para fins de estudo.

Caso queira entrar em contato, fique a vontade para me enviar um email: ruyteraraujo992@gmail.com
