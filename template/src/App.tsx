import { Router } from '@/router';
import { ReduxProvider } from '@/provider';

function App(): React.JSX.Element {
  return (
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  );
}

export default App;
