import React from 'react';
import Router from './router/Router.tsx';
import ReduxProvider from './redux/ReduxProvider.tsx';

function App(): React.JSX.Element {
  return (
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  );
}

export default App;
