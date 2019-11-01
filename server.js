const express = require('express');
const fs = require('fs');
const history = require('connect-history-api-fallback');
const app = express();

app.use(history());
app.use('/', express.static('./dist/semaforce-workout'));

app.listen(80, () => console.log('HTTP server running on port 80'));
