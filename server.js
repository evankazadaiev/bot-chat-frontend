const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();


const staticFileMiddleware = express.static('dist');

app.use(staticFileMiddleware);

app.use(history({
  index: '/dist/index.html',
}));

app.use(staticFileMiddleware);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
