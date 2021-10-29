import React, { FormEventHandler, useCallback, useState } from "react";
import { useQueryClient } from "react-query";
import { Endpoints } from "service/fetcher";
import { createScore } from "service/score";
import { createUser } from "service/user";
import { Cell } from "../ScoreRow/styles";
import { Form } from "./styles";

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
        score: { value: number };
      };
      setIsSubmitting(true);
      const username = typeSafeTarget.username.value;
      const score = typeSafeTarget.score.value;
      createUser(username).finally(() =>
        createScore(score, username)
          .then(() => queryClient.refetchQueries(Endpoints.SCORES))
          .finally(() => setIsSubmitting(false))
      );
      return false;
    },
    [queryClient]
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Cell>
        <input name="username" type="text" maxLength={60} />
      </Cell>
      <Cell>
        <input name="score" type="number" />
      </Cell>
      <button>Send</button>
    </Form>
  );
}

export default NewScoreRow;
