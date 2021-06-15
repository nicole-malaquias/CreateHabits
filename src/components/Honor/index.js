import { useState } from "react";
import Habits from "../Habits";
import * as S from "./styled";
import api from "../../services";
import { useHabit } from "../../Providers/Habits";

const Honor = () => {
  const { habits } = useHabit();
  return (
    <S.ContainerHonor>
      <h1> Honor</h1>
      {console.log("habitos", habits)}
      {habits !== "" &&
        habits.map((habit) =>
          habit.achieved === true ? (
            <Habits habit={habit} honor={true} />
          ) : (
            <> </>
          )
        )}
    </S.ContainerHonor>
  );
};

export default Honor;
