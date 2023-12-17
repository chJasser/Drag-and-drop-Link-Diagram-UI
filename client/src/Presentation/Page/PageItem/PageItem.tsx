import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
interface PageItemProps {
  text: string;
  index: number;
  icon: string;
}
const onDragStart = (event: any, nodeType: any) => {
  event.dataTransfer.setData("application/reactflow", nodeType);
  event.dataTransfer.effectAllowed = "move";
};
const PageItem = ({ text, index, icon }: PageItemProps) => (
  <ListItem
    onDragStart={(event) => onDragStart(event, "default")}
    draggable
    key={text}
    disablePadding
    sx={{ display: "block" }}
  >
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: "center",
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
        }}
      >
        <img src={`${icon}`} alt="icon" />
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: 0 }} />
    </ListItemButton>
  </ListItem>
);

export default PageItem;
