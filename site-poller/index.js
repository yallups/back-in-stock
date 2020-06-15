import {API, graphqlOperation} from "aws-amplify";

import {createBlog} from "../src/graphql/mutations";


setTimeout(function() {
  console.log("new blog")
  API.graphql(graphqlOperation(createBlog, {
    name: `new Blog ${new Date(Date.now())}`
  }));
}, 1000 * 60)
