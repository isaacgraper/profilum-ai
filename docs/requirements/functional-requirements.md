### Functional Requirements

1. Integração com o Obsidian

   RF-01: O sistema deve permitir ao usuário definir a pasta raiz do Obsidian onde as notas (arquivos .md) estão armazenadas.

   RF-02: O sistema deve ser capaz de ler e processar os arquivos Markdown armazenados na pasta selecionada.

2. Processamento de Notas

   RF-03: O sistema deve identificar automaticamente títulos, subtítulos e trechos importantes dentro dos arquivos Markdown.

   RF-04: O sistema deve ser capaz de sugerir perguntas e respostas com base no conteúdo das notas.

   RF-05: O usuário deve poder editar e confirmar as perguntas e respostas geradas antes da criação dos flashcards.

3. Geração e Gestão de Flashcards

   RF-06: O sistema deve gerar flashcards a partir das perguntas e respostas extraídas das notas do Obsidian.

   RF-07: O usuário deve poder visualizar, revisar e classificar os flashcards gerados como:

        "Aprendi" (intervalo de revisão aumentado).

        "Preciso revisar" (flashcard será repetido em um intervalo menor).

   RF-08: O sistema deve permitir a exportação dos flashcards em formatos compatíveis com Anki (.apkg) e JSON/CSV.

4. Interface de Usuário

   RF-09: O sistema deve oferecer uma interface web simples para revisão dos flashcards.

   RF-10: O sistema deve exibir um painel de estatísticas mostrando o progresso do usuário na memorização.

   RF-11: O sistema deve permitir que o usuário configure intervalos de revisão conforme sua necessidade.

5. Sincronização e Backup

   RF-12: O sistema deve permitir que o usuário faça backup e restauração dos flashcards e progresso de revisão.

   RF-13: O sistema deve permitir importar flashcards previamente criados.

