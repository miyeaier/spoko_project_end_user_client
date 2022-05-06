import React, { useEffect } from "react";
import { Container, Card} from "semantic-ui-react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ArticlesAPI from "../modules/ArticlesAPI";

const SingleArticle = () => {
  let navigate = useNavigate();
  const params = useParams();
  const { activeArticle } = useSelector((state) => state);
  let article = activeArticle;

  useEffect(() => {
    ArticlesAPI.show(parseInt(params.id));
  }, []);
  

  return (
    <Container text>
      <Card
        sx={{ width: "100%", maxWidth: 700 }}
        header={article?.title}
        meta={`By: ${article?.author}`}
        image={article?.image}
        description={() => (
          <>
            <h2>{article?.headline}</h2>
            <p data-cy="article-body">{article?.body}</p>
          </>
        )}
      ></Card>
    </Container>
  );
};

export default SingleArticle;
