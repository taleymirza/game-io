import styled from "styled-components";
import { colors } from "../../../styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 269px;
  padding: 0 16px 0 0;
  height: 100%;
`;

const Label = styled.label`
  padding: 20px 0 16px;
`;

const Input = styled.input`
  padding: 5px;
  margin: 0 0 10px 0;
  border: 1px solid ${colors.coldDark};
`;

const Button = styled.button`
  padding: 5px;
  background-color: ${colors.coldDark};
  color: ${colors.white};
  border: none;
  margin-bottom: 16px;
`;

const CenterAligned = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: calc(100vh - 450px);
`;

export { Label, Input, Button, CenterAligned, Container };
