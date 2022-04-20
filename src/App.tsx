import { Provider } from "react-redux";
import TodoContainer from "./modules/TodoContainer";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";


function App() {
  return (
    <Provider store={store} >
      <TodoContainer />
      {/* <PersistGate loading={null} persistor={persistor}>
      </PersistGate> */}
    </Provider>
  );
}

export default App;
