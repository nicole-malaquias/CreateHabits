import styled from "styled-components";

const ContainerMyHabits = styled.div`
  /* overflow-y: scroll; */

  margin-top: 150px;
  margin-left: 50px;
  min-height: 250px;
  min-width: 300px;
  width: 400px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: first baseline;
  align-items: center;
  background: #a6b8f3;
  border-radius: 10px;
  .habits {
    overflow-y: scroll;
    scroll-behavior: smooth;
    width: 350px;
    height: 350px;
    ::-webkit-scrollbar-thumb {
      background: red;
      border-radius: 10px;
    }
  }
  h1 {
    color: white;
    margin: 15px;
  }
  .Add-new-Habit {
    background: var(--purplePink);
    width: 300px;
    padding: 5px;

    h4 {
      text-align: center;
      font-weight: lighter;
      color: var(--back);
    }
  }
`;

export default ContainerMyHabits;
