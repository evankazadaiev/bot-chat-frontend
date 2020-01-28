// const express = require('express');
// const history = require('connect-history-api-fallback');
//
// const app = express();
//
//
// const staticFileMiddleware = express.static('dist');
//
// app.use(staticFileMiddleware);
//
// app.use(history({
//   index: '/dist/index.html',
// }));
//
// app.use(staticFileMiddleware);
// app.listen(port, () => {
//   console.log(`listening on port: ${port}`);
// });
const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
// ^ middleware to redirect all URLs to index.html

const app = express();
const staticFileMiddleware = express.static(path.join(__dirname));
const port = process.env.PORT || 8080;

app.use(staticFileMiddleware);
app.use(history());
app.use(staticFileMiddleware);
// ^ `app.use(staticFileMiddleware)` is included twice as per https://github.com/bripkens/connect-history-api-fallback/blob/master/examples/static-files-and-index-rewrite/README.md#configuring-the-middleware

app.get('/', (req, res) => {
  res.render(path.join(`${__dirname}/index.html`));
});

app.listen(port, () => {
  console.log(`Express serving on ${port}!`);
});
