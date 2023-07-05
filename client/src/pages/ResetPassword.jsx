import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { useFormik } from "formik";
import { paperStyle } from "./Auth/AuthStyles";
import { resetValidations } from "./Auth/validations";
import axios from "axios";
import { useContext } from "react";

function ResetPassword() {
    const { handleSubmit, handleChange, touched, values, errors } = useFormik({
        initialValues: {
            email: ""
          },
          validationSchema: resetValidations,
          onSubmit: ({ email }, bag) => {}
    });
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid textAlign="center" marginBottom={2}>
          <Typography variant="h5" fontWeight="bold">
            Reset Password
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
        <TextField
            fullWidth
            name="email"
            label="Email"
            variant="standard"
            placeholder="Enter you email"
            onChange={handleChange}
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <Grid marginTop={3}>
            <Button
              fullWidth
              textAlign="center"
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}

export default ResetPassword;
