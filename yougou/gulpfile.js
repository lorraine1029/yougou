
var gulp=require("gulp");

gulp.task("copy-html",function(){
    gulp.src("*html").pipe(gulp.dest("D:\\phpStudy\\WWW\\phone"))
})
gulp.task("copy-css",function(){
    gulp.src("css\\*css").pipe(gulp.dest("D:\\phpStudy\\WWW\\phone\\css"))
})
gulp.task("copy-js",function(){
    gulp.src("js\\*js").pipe(gulp.dest("D:\\phpStudy\\WWW\\phone\\js"))
})




gulp.task("watch",function(){
    gulp.watch("*html",["copy-html"]);
    gulp.watch("css/*css",["copy-css"]);
    gulp.watch("js/*js",["copy-js"]);
});