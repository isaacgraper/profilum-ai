### Non-functional Requirements

1. Desempenho

   RNF-01: O sistema deve ser capaz de processar e analisar até 500 arquivos Markdown em menos de 5 segundos.

   RNF-02: A busca por notas e a exibição de flashcards deve ter um tempo de resposta inferior a 1 segundo.

2. Segurança

   RNF-03: O sistema deve garantir que as notas do usuário não sejam armazenadas permanentemente no servidor.

   RNF-04: Se houver autenticação, o sistema deve utilizar OAuth 2.0 ou autenticação segura via e-mail/senha.

3. Escalabilidade e Portabilidade

   RNF-05: O sistema deve ser compatível com Windows, macOS e Linux.

   RNF-06: O sistema deve ser implementado de forma modular, permitindo futuras integrações com outras ferramentas (ex: GPT para geração automática de resumos).

4. Usabilidade

   RNF-07: A interface do sistema deve ser intuitiva e fácil de usar, mesmo para usuários sem conhecimento técnico.

   RNF-08: O sistema deve oferecer um modo offline para revisão dos flashcards.

