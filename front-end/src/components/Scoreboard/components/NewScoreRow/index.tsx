import Loading from "components/Loading";
import React, { FormEventHandler, useCallback, useState } from "react";
import { useQueryClient } from "react-query";
import { Endpoints } from "service/fetcher";
import { createScore } from "service/score";
import { Cell } from "../ScoreRow/styles";
import { Button, ButtonContainer, Form, H3, LoadingContainer, Wrapper, Grid } from "./styles";

function NewScoreRow() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryClient = useQueryClient();

  const handleSubmit: FormEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      const { target } = event;
      if (!target) {
        return;
      }
      const typeSafeTarget = target as typeof target & {
        username: { value: string };
        score: { value: string };
      };
      setIsSubmitting(true);
      const {username, score} = typeSafeTarget;
      createScore(Number(score.value), username.value)
        .then(() => {
          queryClient.refetchQueries(Endpoints.SCORES)
          username.value = ''; 
          score.value = ''; 
        })
        .finally(() => setIsSubmitting(false));
      return false;
    },
    [queryClient]
  );

  return (
    <Wrapper>
      <H3>New Score</H3>
      <br />
      <Form onSubmit={handleSubmit}>
        <Grid>
          <Cell>
            <input name="username" type="text" maxLength={60} />
          </Cell>
          <Cell>
            <input name="score" type="number" />
          </Cell>
        </Grid>
        <ButtonContainer>
          <Button>Send</Button>
          {isSubmitting && <LoadingContainer>
            <Loading />
          </LoadingContainer>}
        </ButtonContainer>
      </Form>
    </Wrapper>
  );
}

export default NewScoreRow;
