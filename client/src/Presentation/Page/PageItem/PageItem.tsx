
import { Page } from "../../../Domain/Model/Page";
import { BASE_URL } from "../../../Data/DataSource/API/axios";
import { Box } from "@mui/material";
interface PageItemProps {
  page: Page;
}
const onDragStart = (event: any, page: Page) => {
  event.dataTransfer.setData("application/reactflow", JSON.stringify(page));

  event.dataTransfer.effectAllowed = "move";
};
const PageItem = ({ page }: PageItemProps) => (
  <Box
    className={page.form}
    onDragStart={(event) => onDragStart(event, page)}
    draggable
    sx={{
      backgroundColor: page.form === "triangle" ? "" : page.color,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 1,
      margin: 1,
      cursor: "pointer",
      borderBottom: page.form === "triangle" ? `30px solid ${page.color}` : "",
    }}
  >
    <img
      src={BASE_URL + "/uploads/" + `${page.icon}`}
      style={{ width: 30, height: 30 }}
      alt={page.title}
    />
  </Box>
);

export default PageItem;
