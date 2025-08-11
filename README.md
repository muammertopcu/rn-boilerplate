# 🚀 React Native Boilerplate Template

[![NPM Version](https://img.shields.io/npm/v/@mtopcu/rn-boilerplate)](https://www.npmjs.com/package/@mtopcu/rn-boilerplate)
[![Downloads](https://img.shields.io/npm/dm/@mtopcu/rn-boilerplate)](https://www.npmjs.com/package/@mtopcu/rn-boilerplate)
[![License](https://img.shields.io/npm/l/@mtopcu/rn-boilerplate)](https://github.com/muammertopcu/rn-boilerplate/blob/main/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/muammertopcu/rn-boilerplate)](https://github.com/muammertopcu/rn-boilerplate)

A modern, production-ready React Native template that provides a solid foundation for your mobile app development. Built with industry best practices and the latest tools.

<div align="center">

### 🛠️ Built With

![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![React Navigation](https://img.shields.io/badge/React_Navigation-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![Metro](https://img.shields.io/badge/Metro-EF4242?style=for-the-badge&logo=metro&logoColor=white)
![iOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

</div>

## ⚡ Quick Start

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

## 🎯 Features

- 🏗️ **Modern Architecture**: Built with Redux Toolkit and RTK Query
- 🧭 **Navigation**: React Navigation v6 with type safety
- 🎨 **TypeScript**: Full TypeScript support for better development experience
- 🧪 **Testing**: Jest and React Native Testing Library setup
- 📱 **Cross-platform**: iOS and Android support
- 🔧 **Developer Tools**: ESLint, Prettier, and pre-commit hooks
- 🚀 **Production Ready**: Optimized for deployment
- 📦 **State Management**: Redux Toolkit with async thunks
- 🌐 **API Integration**: RTK Query for efficient data fetching
- 🔒 **Type Safety**: Comprehensive TypeScript configuration

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
