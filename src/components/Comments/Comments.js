import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { commentsContext } from "../../contexts/CommentsContext";

const Comments = () => {
  const { comments, fetchComments } = useContext(commentsContext);
  console.log(comments);

  useEffect(() => {
    fetchComments();
  }, []);
  return (
    <>
      {comments && comments.length > 0
        ? comments.map((comment) => (
            <Grid container>
              <Grid item={8}>
                <Card>
                  <CardContent>
                    <h4>{comment.user}</h4>
                    <Typography>
                      <p>{comment.comment}</p>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          ))
        : null}
    </>
  );
};

export default Comments;
