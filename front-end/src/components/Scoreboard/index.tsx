import React, { useMemo, useState } from "react";
import { useQuery } from "react-query";
import { getScores, FlatScore } from "service/score";
import ScoreRow from "./components/ScoreRow";
import { Header, HeaderCell, IconWrapper, ListContainer } from "./styles";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Endpoints } from "service/fetcher";
import NewScoreRow from "./components/NewScoreRow";
import AppearFromBelow from "components/AppearFromBelow";
import Loading from "components/Loading";

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
  const { data: scores } = useQuery(Endpoints.SCORES, getScores, {
    suspense: true,
  });
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
      <Header>
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
      </Header>
      <br />
      <ListContainer>
        {!sortedScores.length
          ? <h2>No Scores Available</h2>
          : sortedScores.map(({ id, score, username }, i) => (
              <ScoreRow key={id} username={username} score={score} index={i} />
            ))}
      </ListContainer>
      <AppearFromBelow timeInMs={800}>
        <NewScoreRow />
      </AppearFromBelow>
    </>
  );
}

export default Scoreboard;
