'use strict';
const fkill = require('fkill');

fkill(Number.parseInt(process.argv[2], 10), {
	force: Boolean(process.env.force)
});
