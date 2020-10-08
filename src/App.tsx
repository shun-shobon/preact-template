import { h, FunctionComponent } from "preact";

import styles from "./App.module.scss";

const App: FunctionComponent = () => (
  <div>
    <h1 class={styles.title}>Hello, world!</h1>
  </div>
);

export default App;
