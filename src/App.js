import { Header, List, Map } from "./components";
// //styles
import { Content } from "./App.style";
import Split from "react-split";
import { GlobalStyle } from "./GlobalStyle";
function App() {
  return (
    <>
      <Header />
      <Split sizes={[40, 60]} style={{ display: "flex" }}>
        <Content>
          <List />
        </Content>
        <Content>
          <Map />
        </Content>
      </Split>
      <GlobalStyle />
    </>
  );
}
export default App;
