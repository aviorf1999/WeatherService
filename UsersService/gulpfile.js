var gulp = require('gulp');
var clean = require('gulp-clean');

var paths = {
    scripts: ["src/*.ts", "src/**/*.ts", "test/**/*.ts"],
    dist: "dist",
    src:["src/*.js", "src/**/*.js","src/*.map", "src/**/*.map"]
}

gulp.task("clean",function () {
    return gulp.src(paths.src, {read: false})
        .pipe(clean());
});

gulp.task("scripts",function() {
    return gulp.src(paths.src,{allowEmpty:true})
    .pipe(gulp.dest(paths.dist));
});

gulp.task("default", gulp.series(["scripts","clean"]));
// gulp.task("watch",(async function () {
   
//     gulp.watch(paths.scripts,{events:'all'}).on("change",()=>{
        
// gulp.series(["scripts","clean"])
    
//     });
// }));




