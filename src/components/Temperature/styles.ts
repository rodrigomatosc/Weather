import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const ContainerText = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Text = styled.Text`
  color: white;
  font-family: 'Poppins-semibold';
  font-size: 88px;
`;

export const TextCelsius = styled.Text`
  color: white;
  font-family: 'Poppins';
  font-size: 32px;
  margin-top: 20px;
`;

export const ImageWeather = styled.Image`
  width: 150px;
  height: 150px;
  margin-right: 20px;
`;
