import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import useViewModel from "../PageViewModel";
import { useFormik } from "formik";
import { Page } from "../../../Domain/Model/Page";
import * as Yup from "yup";
const pageFormvalidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  icon: Yup.string().required("Icon is required"),
  color: Yup.string().required("Color is required"),
  form: Yup.string().required("Form is required"),
  link: Yup.string().required("Link is required"),
});
const PageForm = () => {
  const { createPage } = useViewModel();
  const pageForm = useFormik<Page>({
    initialValues: {
      title: "",
      icon: "",
      color: "",
      form: "",
      link: "",
    },
    validationSchema: pageFormvalidationSchema,
    onSubmit: (values) => {
     
      createPage(values);
    },
  });
  return (
    <form onSubmit={pageForm.handleSubmit}>
      <Box
        p={1}
        display="grid"
        gap="20px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{
          gridColumn: "span 4",
        }}
      >
        <TextField
          onChange={pageForm.handleChange}
          label="Add Title"
          type="text"
          name="title"
          size="small"
          error={!!pageForm.touched.title && !!pageForm.errors.title}
          helperText={pageForm.touched.title && pageForm.errors.title}
          value={pageForm.values.title}
          sx={{ gridColumn: "span 2" }}
        />
        <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
          <label
            htmlFor="icon-input"
            style={{
              display: "inline-block",
              cursor: "pointer",
              padding: "8px 16px",
              border: `1px solid ${
                pageForm.touched.icon && pageForm.errors.icon
                  ? "#D32F2F"
                  : "#ccc"
              }`,
              color: `${
                pageForm.touched.icon && pageForm.errors.icon
                  ? "#D32F2F"
                  : "#121212"
              }`,
              borderRadius: "4px",
            }}
          >
            Icon Input
          </label>
          <Input
            error={!!pageForm.touched.icon && !!pageForm.errors.icon}
            type="file"
            id="icon-input"
            onChange={(event) => {
              const inputElement = event.target as HTMLInputElement;
              const selectedFile = inputElement.files?.[0] || null;
              pageForm.setFieldValue("icon", selectedFile);
            }}
            name="icon"
            sx={{
              display: "none",
            }}
            inputProps={{
              accept: ".jpg, .jpeg, .png",
            }}
          />
          <Typography
            variant="caption"
            color="error"
            sx={{
              marginTop: "5px",
              marginLeft: "12px",
            }}
          >
            {pageForm.touched.icon && pageForm.errors.icon}
          </Typography>
        </FormControl>
        <FormControl
          error={!!pageForm.touched.form && !!pageForm.errors.form}
          size="small"
          fullWidth
          sx={{ gridColumn: "span 2" }}
        >
          <InputLabel id="form-label">Add Form</InputLabel>
          <Select
            labelId="form-label"
            onChange={pageForm.handleChange}
            name="form"
            value={pageForm.values.form}
            label="Add Form"
          >
            <MenuItem value="circle">Circle</MenuItem>
            <MenuItem value="rect">Rectangle</MenuItem>
            <MenuItem value="triangle">Triangle</MenuItem>
            <MenuItem value="star">Star</MenuItem>
          </Select>
          <Typography
            variant="caption"
            color="error"
            sx={{
              marginTop: "5px",
              marginLeft: "12px",
            }}
          >
            {pageForm.touched.form && pageForm.errors.form}
          </Typography>
        </FormControl>
        <TextField
          onChange={pageForm.handleChange}
          label="Add Link"
          type="text"
          name="link"
          size="small"
          error={!!pageForm.touched.link && !!pageForm.errors.link}
          helperText={pageForm.touched.link && pageForm.errors.link}
          value={pageForm.values.link}
          sx={{ gridColumn: "span 2" }}
        />
        <Input onChange={pageForm.handleChange} type="color" name="color" />
        <Typography variant="caption" color="error">
          {pageForm.touched.color && pageForm.errors.color}
        </Typography>
        <Button sx={{ gridColumn: "span 4" }} variant="contained" type="submit">
          Add or update
        </Button>
      </Box>
    </form>
  );
};

export default PageForm;
