import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) =>
    props.colorButton === "purple"
      ? `var(--purple)`
      : props.colorButton === "purplePink"
      ? `var(--purplePink)`
      : `var(--pink)`};

  color: var(--white);
  border: none;
  font-size: 20px;
  border-radius: 8px;
  margin-top: 16px;
  transition: 0.5s;
  padding: 0 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.height ? props.height : "50px")};
  width: ${(props) => (props.width ? props.width : "200px")};

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
