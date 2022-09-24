
import { Provider } from 'react-redux';
import { store } from './redux';
import { Counter, Divider, Users } from './screens';

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Divider />
      {/* <Users /> */}
    </Provider>
  );
}

export default App;
