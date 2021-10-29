import { Cell } from './styles';

interface Props {
  username: string;
  score: number;
}

function ScoreRow({ username, score }: Props) {
  return (
    <>
      <Cell>
        <div>{username}</div>
      </Cell>
      <Cell>
        <div>{score}</div>
      </Cell>
    </>
  );
}

export default ScoreRow;
