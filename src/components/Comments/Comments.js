import { Card, CardContent, Grid, Paper, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { commentsContext } from "../../contexts/CommentsContext";
import "./Comments.css";
import ClearIcon from "@material-ui/icons/Clear";
import { useParams } from "react-router";

const Comments = () => {
  const { comments, fetchComments, deleteComment } =
    useContext(commentsContext);
  // const { id } = useParams();
  // console.log(id, "comment id");

  useEffect(() => {
    fetchComments();
  }, []);
  const handleDelete = async (id) => {
    console.log(id);
    await deleteComment(id);
  };
  return (
    <>
      {comments.length > 0
        ? comments.map((comment) => (
            <Grid container>
              <Grid item md={6}>
                <Card key={comment.id} className="card">
                  <CardContent>
                    <h4>{comment.user}</h4>
                    <Typography className="content">
                      <p>{comment.comment}</p>
                      <ClearIcon onClick={() => handleDelete(comment.id)} />
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
