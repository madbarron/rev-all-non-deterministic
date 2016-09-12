This repository showcases a bug in gulp-rev-all where hash computation is non-deterministic.

Steps to reproduce
------------------

1. Clone repository
2. `npm install`
3. `node_modules/.bin/gulp`
4. Observe the hashed index file in the public folder.
5. `node_modules/.bin/gulp` a few more times.

Expected behavior
-----------------

After multiple runs of gulp, the output index.html file should have the same hash, because the inputs have not changed

Observed behavior
-----------------

The index file has two possible results, produced randomly. More complex projects have more than two possibilities.
- index.fab70fbb.html
- index.41b654de.html
