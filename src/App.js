import "./App.css";
import "./Questionaire.css"
import HomeScreen from "./page/HomeScreen";
import EnterID from "./page/EnterID";
import Form from "./page/Form";
import ShowInfo from "./page/ShowInfo";
import PageQuestion1 from "./Question/PageQuestion1";
import { BrowserRouter,Routes,Route,} from "react-router-dom";
function App() {
 

  return (
    <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomeScreen />} />
                    <Route exact path="/EnterID" element={<EnterID/>} />
                    <Route exact path="/Form" element={<Form/>} />
                    <Route exact path="/ShowInfo" element={<ShowInfo/>} />
                    <Route exact path="/PageQuestion1" element={<PageQuestion1/>} />
                </Routes>
           </BrowserRouter>
    </>
   );
}

export default App;