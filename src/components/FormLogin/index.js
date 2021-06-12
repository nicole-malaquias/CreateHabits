import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import jwt_decode from "jwt-decode";
import { toastLogin } from "../../utils";
import api from "../../services";
const FormLogin = ({ logado, setLogado }) => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(4, "Mínimo de 4 dígitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const token = response.data.access;
        const decoded = jwt_decode(token);
        localStorage.clear();
        localStorage.setItem("@gestao:token", token);
        localStorage.setItem("@gestao:user_Id", JSON.stringify(decoded.userid));
        reset();
      })
      .catch(() => toastLogin());
  };

  return (
    <div>
      <h1> Login</h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="username">Name</label>
        <input type="text" id="username" {...register("username")} />
        <p>
          {!!errors.username}
          {errors.username?.message}
        </p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />
        <p>
          {!!errors.password}
          {errors.password?.message}
        </p>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormLogin;
