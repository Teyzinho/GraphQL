# GrahpQL

## O que é o GraphQL?

O GraphQL é uma linguagem de consulta para APIs, bem como um tempo de execução para executar essas consultas contra os seus dados. Diferentemente das APIs REST, que geralmente têm endpoints predefinidos para cada recurso, o GraphQL permite que os clientes especifiquem exatamente quais dados eles precisam. Isso evita o problema de overfetching (quando você recebe mais dados do que precisa) e underfetching (quando não recebe dados suficientes) de informações.

Em vez de fazer várias solicitações a diferentes endpoints para obter diferentes partes de dados, com o GraphQL, você pode enviar uma única consulta complexa que recupera todos os dados necessários de uma vez. Isso torna as APIs mais eficientes em termos de uso de rede e permite que os clientes tenham maior controle sobre os dados que recebem.

## Por que usar o GrapgQL?

1. **Necessidade de Flexibilidade de Dados:** Se sua aplicação precisa buscar dados de várias fontes diferentes ou se os requisitos de dados dos clientes variam amplamente, o GraphQL permite que você busque todos os dados necessários em uma única consulta, evitando múltiplas solicitações para diferentes pontos de extremidade.

2. **Overfetching e Underfetching:** Em APIs REST tradicionais, pode ocorrer overfetching (quando mais dados são recuperados do que o necessário) ou underfetching (quando os dados disponíveis não são suficientes). O GraphQL resolve esse problema, permitindo que o cliente especifique exatamente quais campos e relacionamentos ele precisa.

3. **Múltiplos Clientes com Requisitos Diferentes:** Se você está construindo um sistema que é consumido por diferentes clientes, como um aplicativo móvel, um site e uma API para terceiros, o GraphQL pode ser útil. Cada cliente pode solicitar apenas os dados necessários para sua própria interface.

4. **Evitar Overhead de Redes:** Em sistemas REST tradicionais, várias solicitações podem ser necessárias para buscar dados relacionados. O GraphQL permite que você defina as relações entre os tipos de dados e busca-los em uma única consulta, minimizando o overhead de redes.

5. **Desenvolvimento Frontend Mais Ágil:** Equipes de frontend frequentemente precisam esperar que as APIs forneçam os dados de que precisam. Com o GraphQL, os desenvolvedores frontend podem buscar os dados exatos necessários para suas interfaces, sem depender de atualizações no backend.

6. **Versionamento Simplificado:** O GraphQL elimina a necessidade de versionar endpoints da API, uma vez que os clientes solicitam exatamente os campos que desejam. Isso facilita a evolução da API sem quebrar as versões anteriores.

7. **Recursos Gráficos ou Rich Data:** Se você está construindo um aplicativo que precisa exibir gráficos, tabelas ou outros tipos de dados complexos, o GraphQL pode ser mais eficiente para buscar e apresentar esses dados de maneira otimizada.

## Principais Características

- **Consulta Precisa:** Os clientes podem especificar exatamente quais campos e dados eles precisam, evitando dados desnecessários.

- **Tipagem Forte:** O GraphQL usa um sistema de tipagem para definir a estrutura dos dados, o que ajuda a evitar erros em tempo de execução.

- **Múltiplas Fontes de Dados:** O GraphQL permite combinar dados de diferentes fontes, como bancos de dados, serviços externos, etc.

- **Versátil:** Pode ser usado em diferentes tipos de aplicativos, desde aplicativos móveis até aplicações web e serviços backend.

- **Introspecção:** Os esquemas GraphQL podem ser introspectados, o que significa que os clientes podem descobrir os tipos de dados e operações suportadas.


## Documentação Oficial do GraphQL

- Documentação Oficial do GraphQL: https://graphql.org/

- Como Usar o GraphQL: https://www.howtographql.com/

- GitHub GraphQL API: https://developer.github.com/v4/

