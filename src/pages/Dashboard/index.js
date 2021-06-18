import MyHabits from "../../components/MyHabits";
import MyProgress from "../../components/MyProgress";
import { useHistory } from "react-router-dom";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Honor from "../../components/Honor";
import * as S from "./styled";
const Dashboard = () => {
  const localToken = localStorage.getItem("@gestao:token") || "";

  const history = useHistory();
  if (localToken === "") {
    history.push("/");
  }
  return (
    <S.Container>
      <Menu />
      <S.ContainerDash>
        <S.Box1>
          <MyHabits />
        </S.Box1>
        <MyProgress />
        <Honor />
      </S.ContainerDash>
      <Footer />
    </S.Container>
  );
};
export default Dashboard;
