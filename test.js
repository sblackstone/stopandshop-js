const getSession = require('./getSession');

(async function() {
  const session = await getSession();
  console.log(JSON.stringify(session, null, 4));
  process.exit(-1);
})();
