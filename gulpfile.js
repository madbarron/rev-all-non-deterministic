var gulp = require('gulp');
var RevAll = require('gulp-rev-all');

gulp.task('default', function ()
{
	var revAll = new RevAll();

	gulp.src('src/**')
		.pipe(revAll.revision())
		.pipe(gulp.dest('public'));
});
