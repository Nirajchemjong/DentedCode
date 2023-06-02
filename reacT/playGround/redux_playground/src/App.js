// to use redux we need to connect redux with react using Provider import it from redux. it has store with file name you can give any file name

import { Provider } from "react-redux";
import "./App.css";
import { Form } from "./Form";
import store from "./Store";
import { Results } from "./Results";

function App() {
  return (
    <Provider store={store}>
      <>
        <Form />
        <Results />
      </>
    </Provider>
  );
}

export default App;
