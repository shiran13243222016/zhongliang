const gulp = require("gulp");
//connect;
// 开启一个服务器，让代码在服务器中运行;

// 反向代理;
const connect = require("gulp-connect");
const Proxy = require("gulp-connect-proxy");
const uglyfly = require("gulp-uglyfly");
const concat = require("gulp-concat");
const sass = require("gulp-sass-china")

gulp.task('server',function(){
    connect.server({
        root: "dist", //以谁为服务器，根目录
        port: 8888, //端口号
        livereload: true,
        middleware: function (connect, options) {
            options.route = '/proxy';
            var proxy = new Proxy(options);
            return [proxy];
        }
    });
});

gulp.task("script",()=>{
    return gulp.src(["scripts/*.js"])//找到数据源;
           .pipe(concat("main.js")) //用插件操作数据源 (合并)
           .pipe(uglyfly()) // 用插件 压缩插件;
           .pipe(gulp.dest("dist/scripts"));
})
// json 文件 上传线上
gulp.task("json",()=>{
	return gulp.src("jsons/*.json")
			.pipe(gulp.dest("dist/jsons"));
})
gulp.task('index',function(){
    return gulp.src('index.html').pipe(gulp.dest('dist')).pipe(connect.reload());
});

gulp.task("watch",function(){
    gulp.watch("index.html",["index"])
    gulp.watch("scss/*.scss",["sass"])
})

gulp.task("sass",function(){
    return gulp.src("scss/*.scss")
           .pipe(sass().on('error', sass.logError))
           .pipe(gulp.dest("dist/style"))
           .pipe(connect.reload())
})

gulp.task('default',['watch','server']);