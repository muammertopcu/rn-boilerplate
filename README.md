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

3. Set up environment configuration:

```sh
cp .env-example .env
```

4. Update the `.env` file with your configuration values.

5. Start the Metro server:

```sh
npx react-native start
```

6. Run the project on an emulator or a physical device:

```sh
npx react-native run-android
# or
npx react-native run-ios
```

## Usage

This boilerplate allows you to quickly add new features and extend the existing structure. The main file structure is described below:

## Project Structure

```
src/
├── App.tsx
├── components/
│   └── index.ts
├── provider/
│   ├── ReduxProvider.tsx
│   └── index.ts
├── router/
│   ├── Router.tsx
│   ├── index.ts
│   └── Navigators/
│       ├── MainNavigator.tsx
│       └── index.ts
├── screens/
│   ├── HomeScreen/
│   │   ├── HomeScreen.tsx
│   │   ├── HomeScreen.test.ts
│   │   └── index.tsx
│   └── index.ts
├── services/
│   ├── api.ts
│   ├── baseQuery.ts
│   └── index.ts
├── store/
│   ├── store.ts
│   ├── index.ts
│   └── slices/
│       ├── authSlice.ts
│       └── index.ts
└── ...
```

## 📚 Libraries & Tools

### Core Dependencies

- **[React Navigation](https://reactnavigation.org/)** - Type-safe navigation for React Native
- **[Redux Toolkit](https://redux-toolkit.js.org/)** - Modern Redux state management
- **[RTK Query](https://redux-toolkit.js.org/rtk-query/overview)** - Powerful data fetching and caching

### Development Tools

- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking for JavaScript
- **[ESLint](https://eslint.org/)** - Code linting and formatting rules
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Jest](https://jestjs.io/)** - JavaScript testing framework
- **[React Native Testing Library](https://callstack.github.io/react-native-testing-library/)** - Simple testing utilities

### Configuration

- **[React Native Config](https://www.npmjs.com/package/react-native-config)** - Environment variable management
- **[Metro](https://metrobundler.dev/)** - JavaScript bundler for React Native
- **[Yarn](https://yarnpkg.com/)** - Package manager with workspaces support

## API Configuration

The API configuration is managed through RTK Query and stored in the `src/services/api.ts` file. You can:

- Change the API base URL in your environment configuration
- Add new endpoints to the API slice
- Configure custom base queries in `src/services/baseQuery.ts`
  For more information, visit the [RTK Query documentation](https://redux-toolkit.js.org/rtk-query/overview).

## Roadmap & Future Features

- 🔄 **Redux Persist** - State persistence for better user experience
- 📚 **Storybook** - Component development and testing environment
- 🧪 **E2E Testing** - End-to-end testing with Detox or Appium
- 🤖 **Code Generation** - Scripts to generate components, screens, and slices
- 🌙 **Dark Mode** - Theme switching support
- 🌍 **Internationalization** - Multi-language support
- 📱 **Push Notifications** - Firebase/native push notification setup

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any improvements or new features to add.
