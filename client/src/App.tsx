import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageListView from "./Presentation/Page/PageList/PageListView";
import SideBarView from "./Presentation/SideBar/SideBarView";
import { Box, CssBaseline } from "@mui/material";
import TopBar from "./Presentation/TopBar/TopBar";


function App() {
  return (
    <div className="App">
      <CssBaseline />
      <TopBar />
      <SideBarView />
      <Box className="dndflow-wrapper" ml={10} mt={8}>
        <PageListView />
      </Box>
      <ToastContainer />
    </div>
  );
}

export default App;
