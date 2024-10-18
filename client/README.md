<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
``` -->

The Carousel component is a React-based multi-step questionnaire that cycles through an array of questions. Each question can be answered by selecting from a predefined set of answers, represented by icons and text. Once all questions have been answered, the component displays a summary of the user's responses.

The component also features the ability to restart the questionnaire.

Features

Icon-based Answers: Users can answer each question by selecting from a set of icons (thumbs up, thumbs down, etc.).

Question Navigation: Automatically moves to the next question after selecting an answer.

Summary Page: At the end, it displays a summary of all questions and their corresponding answers.

Reset Functionality: Users can reset and restart the questionnaire from the beginning.

Dependencies

React: The component is built using the useState hook for managing the current question index and answers.

react-icons: Icons are provided by the react-icons package, specifically FiBookOpen, FaThumbsUp, FaThumbsDown, and FaArrowLeft.
