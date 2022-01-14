import React from 'react';
import {Container, ContainerLoad, Text} from './styles';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native';

const Loading: React.FC = () => {
  const loading = useSelector(state => state.load.loading);

  if (!loading) {
    return null;
  }

  return (
    <Container
      blurType="light"
      blurAmount={10}
      reducedTransparencyFallbackColor="white">
      <ContainerLoad>
        <Text>Pesquisando</Text>
        <ActivityIndicator size="large" color="#8db0f4" />
      </ContainerLoad>
    </Container>
  );
};

export default Loading;
