
# Projeto de Testes Automatizados Mobile com WebdriverIO + Appium

Este repositório contém a automação de testes para o aplicativo de demonstração `com.wdiodemoapp`, utilizando **WebdriverIO**, **Appium**, e **Allure Reports**. Os testes validam funcionalidades essenciais como login, cadastro, formulários, drag & drop e swipe em dispositivos Android.  
Os testes são executados no **BrowserStack**, tanto localmente quanto via pipeline CI/CD, com geração de artefatos ao final da execução.

---

## Funcionalidades Automatizadas

Os seguintes fluxos do aplicativo foram mapeados e validados:

### Tela de Login e Cadastro

- Cadastro de novo usuário com sucesso  
- Validação de e-mail inválido no cadastro  
- Login com credenciais válidas  
- Validação de e-mail inválido no login  

### Tela de Formulários

- Preenchimento de campo de texto  
- Alteração de estado do botão switch (ON/OFF)  
- Seleção no dropdown  
- Validação de alerta ao clicar em botão ativo  

### Tela de Drag & Drop

- Arraste de todos os elementos até suas respectivas posições  
- Validação da mensagem de sucesso  

### Tela de Swipe

- Swipe horizontal até o último card do carrossel ("COMPATIBLE")  
- Swipe vertical até encontrar o texto "You found me!!!"  

---

## Estrutura do Projeto

```
.
├── .github/
│   └── workflows/
│       └── ciBrowserstack.yaml
├── allure-results/
│   └── 1c9c094c-8e4f-4d6e-8e24-80b0ec0c28b3-result.json
├── test/
│   ├── pageobjects/
│   │   ├── DragPage.js
│   │   ├── FormsPage.js
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   └── SwipePage.js
│   └── specs/
│       ├── drag.spec.js
│       ├── form.spec.js
│       ├── login.spec.js
│       └── swipe.spec.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── wdio.conf.js
```

---

## Pré-requisitos

Para executar os testes em sua máquina local, é necessário:

- [Node.js](https://nodejs.org/) (v18 ou superior)  
- [Appium](https://appium.io/) (`npm install -g appium`)  
- [Android Studio](https://developer.android.com/studio)  
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)  
- **APK do aplicativo de testes:** [com.wdiodemoapp - Download](https://github.com/webdriverio/native-demo-app/releases)  

Além disso, é essencial configurar as variáveis de ambiente do sistema:

- `JAVA_HOME`  
- `ANDROID_HOME`  
- Adicionar os diretórios `platform-tools` e `emulator` à variável `PATH`  

---

## Como Executar os Testes

1. Inicie o Appium na porta padrão:

   ```bash
   appium
   ```

2. Em outro terminal, execute os testes:

   ```bash
   npm test
   ```


---

## Estratégia de Seletores

A identificação dos elementos na automação seguiu a seguinte hierarquia, priorizando estabilidade e performance:

1. **Accessibility ID** (`content-desc`) — mais performático e confiável  
2. **resource-id** com `android=new UiSelector()`  
3. **Xpath** — utilizado apenas como último recurso, por ser menos performático e mais instável  

Exemplos:

```js
// Accessibility ID
$("~Login");

// resource-id via UiSelector
$('android=new UiSelector().resourceId("input-email")');

// XPath (quando necessário)
$('//android.widget.TextView[@text="You found me!!!"]');
```

---

## Integração Contínua

Os testes são executados automaticamente via **pipeline CI/CD** a cada `push`, utilizando o **BrowserStack** para execução em nuvem.  
A configuração da pipeline está em `.github/workflows/ciBrowserstack.yaml`.

---

## Relatórios e Evidências

Ao final da execução dos testes, o artefato abaixo é gerado:

- **Relatório interativo do Allure**, armazenado na pasta `artifacts/allure-report/`  

---

## Autor

**Jhonatan Koska**  
[GitHub](https://github.com/Jhonatankoska)
