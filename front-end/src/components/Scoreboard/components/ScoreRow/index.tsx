import { Cell } from './styles';

interface Props {
  username: string;
  score: number;
  index: number;
}

function ScoreRow({ username, score, index }: Props) {
  const values = [username, score];

  return (
    <>
      {values.map((value, i) => (
        <Cell key={i} isOdd={index % 2 === 1}>
          <div>{value}</div>
        </Cell>
      ))}
    </>
  );
}

export default ScoreRow;
