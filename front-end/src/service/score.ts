import { Endpoints, fetcher, Methods } from './fetcher';
import { User } from './user';

export interface Score {
  id: number;
  value: number;
  user: User;
}

export interface FlatScore {
  id: number;
  score: number;
  username: string;
}

export const getScores = (): Promise<FlatScore[]> => {
  return fetcher<Score[]>(Endpoints.SCORES).then((data) =>
    data.map((score) => ({
      id: score.id,
      score: score.value,
      username: score.user.name,
    })),
  );
};

export const createScore = (value: number, username: string) => {
  return fetcher<Score>(Endpoints.SCORES, Methods.POST, {
    value,
    username,
  });
};
