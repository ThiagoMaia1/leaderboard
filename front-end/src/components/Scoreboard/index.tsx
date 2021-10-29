import React, { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { getScores, FlatScore } from "service/score";
import ScoreRow from "./components/ScoreRow";
import { HeaderCell, IconWrapper, Wrapper } from "./styles";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Endpoints } from "service/fetcher";
import NewScoreRow from "./components/NewScoreRow";

type HeaderConfig = {
  displayName: string;
  key: keyof FlatScore;
  defaultDescending: boolean;
};

const headers: HeaderConfig[] = [
  { displayName: "Username", key: "username", defaultDescending: false },
  { displayName: "Score", key: "score", defaultDescending: true },
];

function Scoreboard() {
  const { data: scores } = useQuery(Endpoints.SCORES, getScores);
  const [sortKey, setSortKey] = useState<keyof FlatScore>("score");
  const [shouldSortDescending, setShouldSortDescending] = useState(true);

  const sortedScores = [...(scores ?? [])].sort((a, b) => {
    const comparison = shouldSortDescending
      ? b[sortKey] > a[sortKey]
      : a[sortKey] > b[sortKey];
    return comparison ? 1 : -1;
  });

  return (
    <>
      <NewScoreRow />
      <Wrapper>
        {headers.map(({ displayName, key, defaultDescending }) => (
          <HeaderCell
            key={key}
            onClick={() => {
              if (sortKey !== key) {
                setSortKey(key);
                setShouldSortDescending(defaultDescending);
              } else {
                setShouldSortDescending(
                  (shouldSortDescending) => !shouldSortDescending
                );
              }
            }}
          >
            <div>
              {displayName}
              {sortKey === key && (
                <IconWrapper>
                  {shouldSortDescending ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </IconWrapper>
              )}
            </div>
          </HeaderCell>
        ))}
        {sortedScores.map(({ id, score, username }) => (
          <ScoreRow key={id} username={username} score={score} />
        ))}
      </Wrapper>
    </>
  );
}

export default Scoreboard;
