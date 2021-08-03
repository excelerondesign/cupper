var exec = require('child_process').exec;
var path = require('path');

console.log('Building...');
exec(
	'rm -rfv ' +
		path.join(path.resolve('.'), 'docs', '*') +
		' && hugo -b $HUGO_BASE_URL && sw-precache --root=docs && git add -A',
	function (error, stdout, stderr) {
		if (error !== null) {
			console.error(error);
			return;
		}
		console.log('Site built at /docs.');
	},
);
