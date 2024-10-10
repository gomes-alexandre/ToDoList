Lista de tarefas com Persistência de Dados
Este projeto é uma lista de tarefas simples, onde o usuário pode adicionar, remover e marcar tarefas como concluídas. Além disso, a lista é salva no localStorage do navegador, permitindo a persistência dos dados entre sessões.

Recursos
Adicionar novas tarefas à lista.
Marcar tarefas como concluídas ou pendentes.
Remover tarefas da lista.
As tarefas são salvas no localStorage do navegador para que não se percam ao recarregar a página.
Interface amigável e design responsivo para todos os dispositivos.
Demonstração
Aqui está uma visualização do aplicativo de lista de tarefas:

![image](https://github.com/user-attachments/assets/263fed8a-2695-4a85-8dfc-df372daf8d23)


Tecnologias Utilizadas
HTML5: Estrutura do conteúdo.
CSS3: Estilização e layout, incluindo responsividade.
JavaScript: Lógica da aplicação e persistência de dados com localStorage.
Funcionalidades
Adicionar Tarefas: O usuário pode digitar uma tarefa e adicioná-la à lista pressionando Enter ou clicando no botão "Adicionar".
Remover Tarefas: Cada tarefa possui um botão para removê-la da lista.
Marcar Tarefas como Concluídas: O usuário pode marcar e desmarcar tarefas como concluídas clicando sobre elas.
Persistência de Dados: As tarefas são salvas no localStorage e permanecem disponíveis ao recarregar a página.
Como Usar
Requisitos
Navegador moderno: O projeto foi desenvolvido para funcionar em navegadores atuais com suporte a localStorage.
Passos para Execução
Clonar o Repositório: Clone o repositório em sua máquina local usando o comando abaixo:

bash
Copiar código
git clone https://github.com/seu-usuario/nome-repositorio.git
Abrir o Projeto: Navegue até a pasta do projeto e abra o arquivo index.html em um navegador para visualizar e interagir com a aplicação.

Estrutura do Projeto
plaintext
Copiar código
📂 lista-de-tarefas/
├── 📂 css/
│   └── style.css
├── 📂 js/
│   └── script.js
├── index.html
└── README.md
index.html: Contém a estrutura HTML da página da lista de tarefas.
style.css: Responsável pela estilização da interface.
script.js: Contém toda a lógica de manipulação de tarefas e persistência no localStorage.
Detalhes do Funcionamento
Adicionando uma Tarefa
No campo de entrada, digite o nome da tarefa e pressione "Enter" ou clique no botão "Adicionar". A nova tarefa será exibida na lista e salva automaticamente no localStorage.

Marcando uma Tarefa como Concluída
Clique em uma tarefa para marcá-la como concluída. Tarefas concluídas aparecem com um estilo diferente (riscadas ou com cor diferente). Clique novamente para desmarcá-la.

Removendo uma Tarefa
Clique no ícone de lixeira ao lado de uma tarefa para removê-la. A tarefa será excluída da lista e também removida do localStorage.

Persistência de Dados
Toda vez que uma tarefa é adicionada, removida ou marcada como concluída, a lista completa de tarefas é atualizada no localStorage do navegador. Isso significa que, mesmo que o usuário feche ou recarregue a página, as tarefas permanecem salvas e reaparecem quando a página é aberta novamente.

Melhorias Futuras
Filtros de Tarefas: Implementar filtros para exibir apenas tarefas concluídas, pendentes ou todas.
Edição de Tarefas: Adicionar a capacidade de editar uma tarefa existente.
Suporte a Múltiplas Listas: Permitir a criação de várias listas de tarefas independentes.
Sincronização em Nuvem: Implementar sincronização com banco de dados online para acessar as tarefas em diferentes dispositivos.
Como Contribuir
Faça um fork deste repositório.
Crie uma branch para sua modificação: git checkout -b minha-modificacao.
Commit suas mudanças: git commit -m 'Adiciona nova funcionalidade'.
Envie para a branch original: git push origin minha-modificacao.
Crie um Pull Request.
Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Autor
Alexandre Gomes

GitHub: github.com/gomes-alexandre
LinkedIn: https://www.linkedin.com/in/alegsouza/
