import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageListView from "./Presentation/Page/PageList/PageListView";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PageListView />
    </div>
  );
}

export default App;
