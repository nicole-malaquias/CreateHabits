import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    width: 50vw;
    justify-content: space-evenly;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 3rem;
  background: var(--white);
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-right: 2rem;

  border-radius: 0.7rem;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Category = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-right: 1rem;
    label {
      font-size: 1.5rem;
      font-family: Montserrat;
    }

    > div {
      display: flex;
      flex-direction: row;
    }
  }
`;
export const ContainerGroups = styled.div`
  display: flex;
  justify-content: space-between; ;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
