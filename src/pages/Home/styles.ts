import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#8db0f4', '#8db0f4', '#8db0f4', '#7099e8'],
})`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const Card = styled.View`
  flex: 1;
  background-color: white;

  margin-top: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const ContainerButton = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 20px;
`;

export const List = styled.FlatList`
  padding-left: 10px;
  padding-right: 10px;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 0;
`;
