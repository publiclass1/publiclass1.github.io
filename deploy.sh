#!/usr/bin/env sh
# abort on errors
set -e

yarn run build

# navigate into the build output directory


cd dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:publiclass1/publiclass1.github.io.git master:gh-pages
cd -