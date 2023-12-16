import { useEffect } from "react";
import useViewModel from "./PageListViewModel";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function PageListView() {
  const {
    getPages,
    createPage,
    onChangeValue,
    removePage,
    page,
    pages,
  } = useViewModel();

  useEffect(() => {
    getPages();
  }, []);

  return (
    <List>
      <input
        onChange={onChangeValue}
        placeholder="add your page"
        type="text"
       // value={value}
      />
      <button onClick={createPage}>add</button>
      {pages.map((page, i) => {
        return (
          <ListItem key={i}>
            <ListItemIcon>
              {/* <Checkbox
                checked={page.isComplete}
                onChange={() => toggleRead(page.id)}
              /> */}
            </ListItemIcon>
            <ListItemText primary={page.title} />
            <button onClick={() => removePage(page.id)}>remove</button>
          </ListItem>
        );
      })}
    </List>
  );
}
