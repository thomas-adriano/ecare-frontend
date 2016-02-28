### ANATOMIA DO PROJETO
* Dist: local onde todos os fontes transpilados residem. Equivalente a pasta Bin no mundo java-eclipse;
* Partials: Local onde cada componente do projeto é armazenado. Segue o padrão [...]/partials/%nome_do_componente%/%elementos_que_o_compoem%. Entenda que cada componente deve possuir sua view (html), controller (js), estilo (scss), servicos (js) e diretivas (js) sob o mesmo diretorio do componente em sí.
* node_modules: Pasta onde todos os modulos instalados através do Node Package Manager (npm) com o comando "npm install --save / --save-dev %nome_do_pacote%" são armazenados.
* Gruntfile.js: Arquivo de definição do task manager Grunt (explicado abaixo);
* package.json: Arquivo de definição do npm;

### DICAS
Aprendam Angular:
  * Entendam (mesmo) o conceito de desenvolvimento MVC e enxerguem ele no Angular. [Site exemplo. Revirem os fontes. ;D](http://todomvc.com/examples/angularjs/#/);
  * Enxergando claramente o conceito MVC no angular, entenda a [injecao de dependencias](https://docs.angularjs.org/guide/di);
  * Opcionalmente: [Aprendam serviços](https://docs.angularjs.org/guide/services). [Aprendam Diretivas](https://docs.angularjs.org/guide/directive), [Aprendam ui-router](https://github.com/angular-ui/ui-router/wiki);

Aprendam Bootstrap: 
 * Conceito basico de [grid](http://getbootstrap.com/css/#grid);
 * [Componentes](http://getbootstrap.com/components/);

### Ferramentas & Frameworks utilizados
* [Grunt](http://gruntjs.com/): Executor de tarefas (tipo o ANT no java);
* [Node-CommonsJs](https://nodejs.org/docs/latest/api/modules.html): Carregador de modulos do Node. Ele nos habilita a importar fontes js usando a sintaxe "var jquery = require('jquery')";
* [SASS](http://sass-lang.com/): Framework CSS. Resumindo: nos permite escrever css de forma mais fácil e com mais recursos. Se nao quiser usar nada especifico do SASS, basta programar CSS puro, a unica restricao é que todos os fontes de estilo deste projeto tenham a extensao SASS;
* [Angular](https://angularjs.org/): Framework MVC;
* [angular-ui-router](https://github.com/angular-ui/ui-router): Biblioteca utilizada para fazer as rotas;
* [Bootstrap](http://getbootstrap.com/): Framework HTML, CSS  e JS;


### Inicializando ambiente de desenvolvimento:
#### executados apenas uma vez
0. [Instale o npm](https://nodejs.org/en/), que é obtido através do pacote de instalacao do node;
0. Instale o grunt-cli (se ainda nao tiver) com o comando (a partir de qualquer diretorio) "npm install -g grunt-cli". Isso irá habilitar o grunt para ser executado a partir da linha de comando;
0. Abra o prompt de comando (CMD) (se ja estiver aberto, reinicie) e navegue (cd) até o diretorio root  deste projeto (o que possui o arquivo index.html);
0. Execute o comando "npm install";

#### executados toda a vez que você comecar a programar
0. Após o termino do passo 3 anterior, ainda no mesmo prompt de comando (ou em um novo, mas deve estar ainda no mesmo diretorio raiz do projeto) execute o comando "grunt browserSync";
  * Este comando serve para inicializar a tarefa de livereload. Com este plugin ativo, todas as alterações feitas nos arquivos e recursos irão ser automaticamente atualizadas no browser;
0. Deixe o processo iniciado no passo anterior executando e abra um novo cmd, navegue até o diretorio root do projeto e execute o comando "grunt" (é, só isso.);
  * Isso irá inicializar o processo compilação dos js e scss a cada alteração dos arquivos;
0. PROGRAME THE HELL OUT OF IT!! 
