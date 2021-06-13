import { useState } from "react";
import { useHistory } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { CardItem, ButtonDiv } from "./styles";

const CardGroup = ({ groups }) => {
  const [chosenGroup] = useState(localStorage.getItem("@gestao:groupId") || []);
  const history = useHistory();

  const handleGroupChoice = (groupId) => {
    if (chosenGroup !== groupId)
      localStorage.setItem("@gestao:groupId", groupId);
    history.push("/specificgroup");
  };

  return (
    <div>
      {groups.map((item, index) => (
        <CardItem key={index}>
          <ButtonDiv onClick={() => handleGroupChoice(item.id)}>
            <div>
              <p>{item.name}</p>
            </div>
            <div>
              <p>
                <IoIosPeople size={20} />
                {item.users_on_group.length}
              </p>
            </div>
          </ButtonDiv>
        </CardItem>
      ))}
    </div>
  );
};

export default CardGroup;
