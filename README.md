# React Typescript BoilerPlate
Boilerplate that includes everything you need to develop a beautiful web app out of the box.

## Technological Stack

- **Framework**:
  - [React](https://github.com/facebook/react)
- **UI Framework**:
  - [Material-UI](https://github.com/mui-org/material-ui)
- **State Management**
  - [Redux](https://github.com/reduxjs/redux)
  - [Reselect](https://github.com/reduxjs/reselect) - to optimize perfomance
  - [Redux-Thunk](https://github.com/reduxjs/redux-thunk) - for async actions
  - [Autodux](https://github.com/ericelliott/autodux) - to minimize boilerplate
- **Router**
  - [React Router DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- **Working with forms**
  - [React Final Form](https://github.com/final-form/react-final-form)
- **Testing**
  - [Enzyme](https://github.com/airbnb/enzyme) - for snapshot testing and shallow renders
  - [Enzyme-Adapter-React-16](https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16)
  - [Jest](https://github.com/facebook/jest) - test runner and assertions
  - [SinonJS](https://github.com/sinonjs/) - test fakes
- **Bundler**
  - [Webpack](https://github.com/webpack/webpack)
- **Other**
  - [Prettier]() - code formatter
  - [Commitizen]() - to enforce consistent commit style
  - [TSLint]() - linter
  - [Husky]() - precommit hooks
  - [I18next](https://github.com/i18next/i18next) - translation
  - [Moment](https://github.com/moment/moment) - date and time manipulation
  - [Recompose](https://github.com/acdlite/recompose) - HOC utility
  - Configured support for mapped paths, read more at http://www.typescriptlang.org/docs/handbook/module-resolution.html

## Scripts

`yarn run dev-server` - start dev-server

`yarn run test-watch` - run jest in watch mode

`yarn run lint` - run tslint

`yarn run build` - generate build

`yarn run build-prod` - generate production build
