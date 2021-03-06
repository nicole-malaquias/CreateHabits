import ContainerHabit from "./style";
import api from "../../services";
import Button from "../Button";
import { useHabit } from "../../Providers/Habits";

const Habits = ({
  habit,
  addHabits,
  setAddHabits,

  honor,
  index,
}) => {
  const { handleHabit, getHabits } = useHabit();
  const { title, how_much_achieved, id } = habit;

  const handleAchieved = () => {
    const token = localStorage.getItem("@gestao:token");
    setAddHabits(addHabits + 1);
    let body = {
      how_much_achieved: 24,
      achieved: true,
    };
    if (how_much_achieved === 23) {
      body = { how_much_achieved: how_much_achieved + 1, achieved: true };
      const total = how_much_achieved + 1;
      const newhabit = { title, how_much_achieved: total };
      api
        .patch(`habits/${id}/`, body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((item) => handleHabit(newhabit));
    } else {
      body = { how_much_achieved: how_much_achieved + 1, achieved: false };
      const total = how_much_achieved + 1;
      const newhabit = { title, how_much_achieved: total };
      api
        .patch(`habits/${id}/`, body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((item) => handleHabit(newhabit));
    }

    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        getHabits();
      });
  };
  const handleProgress = () => {
    localStorage.setItem("@gestao:atual_habit", JSON.stringify(habit));
    handleHabit(habit);
  };

  return (
    <>
      <ContainerHabit onClick={handleProgress}>
        <div className="title" key={index}>
          <p>{title}</p>
        </div>
        <span>{habit.how_much_achieved}</span>
        {honor === false && (
          <Button handleClick={handleAchieved}>Checkin</Button>
        )}
        {honor === true && (
          <i className="fas fa-award fa-2x" style={{ color: "#f1af09" }}></i>
        )}
      </ContainerHabit>
    </>
  );
};

export default Habits;
