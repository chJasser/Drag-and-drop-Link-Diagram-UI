import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageListView from "./Presentation/Page/PageList/PageListView";
import SideBarView from "./Presentation/SideBar/SideBarView";
import { Box, CssBaseline } from "@mui/material";
import TopBar from "./Presentation/TopBar/TopBar";
import DnDFlow from "./Presentation/Page/Dndflow";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <TopBar />
      <SideBarView />
      <Box className="dndflow-wrapper" ml={8} mt={8}>
        {/* <PageListView /> */}
        <DnDFlow />
      </Box>
      <ToastContainer />
    </div>
  );
}

export default App;
