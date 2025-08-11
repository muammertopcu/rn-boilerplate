# React Native Boilerplate Template

This project is a React Native template for creating new projects with a solid boilerplate structure. It includes modern development practices and commonly used libraries.

## Quick Start

Create a new React Native project using this template:

```bash
npx @react-native-community/cli init MyApp --template @mtopcu/rn-boilerplate
```

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Libraries](#libraries)
- [Contributing](#contributing)

## Features

- Navigation with **React Navigation**
- State management with **Redux**
- HTTP requests with **RTK Query**
- Unit testing with **Jest**

## Installation

### Prerequisites

Make sure you have the following tools installed on your system before running the project:

- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) (optional, npm can also be used)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

### Steps

1. Create a new React Native project using the following command:

```sh
npx @react-native-community/cli init MyApp --template @mtopcu/rn-boilerplate
```

2. Navigate to the project directory:

```sh
cd MyApp
```

3. Start the Metro server:

```sh
npx react-native start
```

4. Run the project on an emulator or a physical device:

```sh
npx react-native run-android
# or
npx react-native run-ios
```

## Usage

This boilerplate allows you to quickly add new features and extend the existing structure. The main file structure is described below:

## Project Structure

```
src
├── components
│   ├── Screen
│   │   ├── Screen.tsx
│   │   └── ...
│   └── ...
├── redux
│   ├── api
│   │   ├── api.ts
│   │   └── ...
│   ├── slices
│   │   ├── authSlice.ts
│   │   └── ...
│   └── store.ts
├── router
│   ├── Router.tsx
│   └── ...
├── screens
│   ├── Home
│   │   ├── Home.tsx
│   │   └── ...
│   └── ...
└── App.tsx
```

## Libraries

This boilerplate uses the following libraries:

- [React Navigation](https://reactnavigation.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [Jest](https://jestjs.io/)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [React Native Config](https://www.npmjs.com/package/react-native-config)

## API Configuration

The API configuration is stored in the `src/redux/api/api.ts` file. You can change the API URL in .env and add new endpoints to the configuration. https://redux-toolkit.js.org/rtk-query/overview for more information.

## Features to Add

- Redux persist for storing the state
- Storybook for component development and testing
- Add e2e testing with Detox or Appium
- add a script to generate new components, screens etc. with a single command (e.g. `yarn create:component NewComponent`)

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any improvements or new features to add.
