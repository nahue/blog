import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Disqus from 'disqus-react';
require("core-js/fn/array/find");

import config from "../../../content/meta/config";

const styles = theme => ({
  postComments: {
    margin: "3em 0 0",
    padding: "3em 0 0",
    borderTop: "1px solid #ddd"
  }
});

const PostComments = props => {
  const { classes, slug } = props;
  const disqusShortname = 'nahue-github-com';
  const disqusConfig = {
      url: `${config.siteUrl}${slug}`,
      identifier: slug
  };
  return (
    <div id="post-comments" className={classes.postComments}>
      <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

PostComments.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default injectSheet(styles)(PostComments);
