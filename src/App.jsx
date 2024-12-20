import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import Layout from "./components/layout/Layout";
import "./font.css"


function App(){
  return(
    <>
      <BrowserRouter>
        <Layout>
          <Router/>
        </Layout>
      </BrowserRouter>
    </>
  );

}
export default App;
