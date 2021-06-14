import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services";
import { useHistory } from "react-router";
import { toastErrorRegister, toastSuccessRegister } from "../../utils";
import { TextField } from "@material-ui/core";
import { Container, Terms } from "./styles";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
const useStyles = makeStyles({
  field: {
    "& .Mui-error": {
      color: "var(--white)",
    },
    marginTop: "2px",
  },
});
const theme = createMuiTheme({
  palette: {
    primary: { main: "#F5F5F5" },
  },
});

const FormRegister = () => {
  const classes = useStyles();
  const history = useHistory();
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Campo obrigatório")
      .min(4, "Mínimo 4 caracteres"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Senha mínima de 6 dígitos")
      .required("Campo obrigatório")
      .matches(
        "(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])",
        "A senha deve contar ao menos uma letra maiúscula, uma minúscula, um caractere especial e ao menos um dígito"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha incorreta")
      .required("Campo obrigatório"),
    agree: yup
      .boolean()
      .oneOf([true], "You need to accept the terms")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = ({ username, email, password }) => {
    const necessaryDatas = { username, email, password };
    api
      .post("/users/", necessaryDatas)
      .then((_) => {
        toastSuccessRegister();
        history.push("/login");
      })
      .catch((_) => toastErrorRegister());
    reset();
  };
  return (
    <>
      <Container>
        <h2>Register</h2>
        <ThemeProvider theme={theme}>
          <form onSubmit={handleSubmit(handleForm)}>
            <TextField
              className={classes.field}
              color="primary"
              variant="outlined"
              label="Username"
              name="Username"
              type="text"
              {...(errors.username?.message && {
                error: true,
                helperText: errors.username.message,
              })}
              {...register("username")}
            />
            <TextField
              className={classes.field}
              color="primary"
              variant="outlined"
              label="Email"
              name="Email"
              type="email"
              {...(errors.email?.message && {
                error: true,
                helperText: errors.email.message,
              })}
              {...register("email")}
            />
            <TextField
              className={classes.field}
              color="primary"
              variant="outlined"
              label="password"
              name="password"
              type="password"
              {...(errors.password?.message && {
                error: true,
                helperText: errors.password.message,
              })}
              {...register("password")}
            />
            <TextField
              className={classes.field}
              color="primary"
              variant="outlined"
              label="confirm your password"
              name="passwordConfirm"
              type="password"
              {...(errors.passwordConfirm?.message && {
                error: true,
                helperText: errors.passwordConfirm.message,
              })}
              {...register("passwordConfirm")}
            />
            <Terms>
              <input id="terms" type="checkbox" {...register("agree")} />
              <label htmlFor="terms">I agree with the terms</label>
              {errors.agree?.message && <p>{errors.agree?.message}</p>}
            </Terms>

            <Button type="submit">Send</Button>
          </form>
        </ThemeProvider>

        <p>
          Already registered? <Link to="/login">login</Link>
        </p>
      </Container>
    </>
  );
};
export default FormRegister;
