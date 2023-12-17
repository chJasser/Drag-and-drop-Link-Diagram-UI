import { useEffect } from "react";
import useViewModel from "../PageViewModel";
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function PageListView() {
  const { getPages, removePage, pages } =
    useViewModel();

  useEffect(() => {
    getPages();
  }, []);

  return (
    <List>
      {pages.map((page, i) => {
        return (
          <ListItem key={i}>
            <ListItemIcon>
              <Checkbox checked={true} />
            </ListItemIcon>
            <ListItemText primary={page.title} />
            <ListItemText primary={page.icon} />
            <ListItemText primary={page.color} />
            <ListItemText primary={page.form} />
            <ListItemText primary={page.link} />
            <button onClick={() => removePage(page?.id)}>remove</button>
          </ListItem>
        );
      })}
    </List>
  );
}
