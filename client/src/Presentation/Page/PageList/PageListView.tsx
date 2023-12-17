import { useEffect } from "react";
import useViewModel from "./PageListViewModel";
import { Checkbox, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

export default function PageListView() {
  const { getPages, createPage, onChangeValue, removePage, page, pages } =
    useViewModel();

  useEffect(() => {
    getPages();
  }, []);

  return (
    <List>
      <input
        onChange={onChangeValue}
        placeholder="add title"
        type="text"
        name="title"
        value={page.title}
      />
      <input
        onChange={onChangeValue}
        placeholder="add icon"
        type="icon"
        name="icon"
        value={page.icon}
      />
      <input
        onChange={onChangeValue}
        placeholder="add color"
        type="text"
        name="color"
        value={page.color}
      />
      <input
        onChange={onChangeValue}
        placeholder="add form"
        type="text"
        name="form"
        value={page.form}
      />
      <input
        onChange={onChangeValue}
        placeholder="add link"
        type="text"
        name="link"
        value={page.link}
      />

      <button onClick={createPage}>add</button>
      {pages.map((page, i) => {
        return (
          <ListItem key={i}>
            <ListItemIcon>
              <Checkbox
                checked={true}
              />
            </ListItemIcon>
            <ListItemText primary={page.title} />
            <ListItemText primary={page.icon} />
            <ListItemText primary={page.color} />
            <ListItemText primary={page.form} />
            <ListItemText primary={page.link} />
            <button onClick={() => removePage(page.id)}>remove</button>
          </ListItem>
        );
      })}
    </List>
  );
}
