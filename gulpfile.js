'use strict';

// Select necessary icons from https://ux-react-design-portal.k8s-apps.openshift.sdntest.netcracker.com/design-system/library/iconography/icons
// and copy as "Paths from node_modules"
const uxAssetsIconPaths = [
    'node_modules/@netcracker/ux-assets/icons/logo-netcracker/logo-netcracker-32.svg',
    'node_modules/@netcracker/ux-assets/icons/sparks/sparks-outline-24.svg',
];

const gulp = require('gulp'),
    path = require('path'),
    svgmin = require('gulp-svgmin'),
    rename = require('gulp-rename'),
    inject = require('gulp-inject'),
    svgstore = require('gulp-svgstore');

gulp.task('svg', () => {
    let svgs = gulp
        .src(['./src/assets/images/icons/*.svg', ...uxAssetsIconPaths])
        .pipe(
            svgmin(function (file) {
                let prefix = path.basename(file.relative, path.extname(file.relative));

                return {
                    plugins: [
                        {
                            removeViewBox: false,
                        },
                        {
                            removeTitle: true,
                        },
                        {
                            removeAttrs: {
                                attrs: '(fill|stroke)',
                            },
                        },
                        {
                            removeStyleElement: true,
                        },
                        {
                            cleanupIDs: {
                                prefix: prefix + '-',
                                minify: true,
                            },
                        },
                    ],
                };
            })
        )
        .pipe(rename({ prefix: 'icon-' }))
        .pipe(svgstore({ inlineSvg: true }));

    console.log(svgs.contents);

    function fileContents(filePath, file) {
        return file.contents.toString();
    }

    return gulp
        .src('./src/index.html')
        .pipe(inject(svgs, { transform: fileContents }))
        .pipe(gulp.dest('src'));
});

/*HELPERS*/
process.on('uncaughtException', err => {
    console.error(err.message, err.stack, err.errors);
    process.exit(255);
});

gulp.on('err', gulpErr => {
    if (gulpErr.err) {
        console.error(
            'Gulp error details',
            [gulpErr.err.message, gulpErr.err.stack, gulpErr.err.errors].filter(Boolean)
        );
    }
});
