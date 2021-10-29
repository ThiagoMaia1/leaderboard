import React from 'react';
import AppearFromBelow from 'components/AppearFromBelow';
import Scoreboard from 'components/Scoreboard';
import { Wrapper } from './styles';
import Loading from 'components/Loading';
import SuspenseWrapper from 'components/SuspenseWrapper';

const Home = () => (
  <Wrapper>
    <SuspenseWrapper fallback={<Loading />}>
      <AppearFromBelow>
        <h1>Scoreboard</h1>
      </AppearFromBelow>
      <AppearFromBelow timeInMs={700}>
        <Scoreboard />{' '}
      </AppearFromBelow>
    </SuspenseWrapper>
  </Wrapper>
);

export default Home;
