import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyles from "../styles/global";
import * as Styled from "./styles";

import "./styles.tsx";

const App = (): JSX.Element => {
  return (
    <Styled.AppContainer>
      <GlobalStyles />
      <Header room="aabc" />
      <main>
        <nav>ff</nav>
        <div>fd</div>
      </main>
      <Footer />
    </Styled.AppContainer>
  );
};

export default App;
