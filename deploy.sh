#!/usr/bin/env sh

# abort on errors
set -e

# build main site
npm run build

# cp static assets
rm -r build/static || true
cp -r static build

# build solarpunk site
cd solarpunk
npm run build

# cp static assets
rm -r build/static || true
cp -r static build

# cp solarpunk build into main build
cd ..
rm -r build/solarpunk || true
cp -r solarpunk/build build/solarpunk

# navigate into the main site build output directory
cd build

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
echo 'makewheeling.com' > CNAME

git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:emhoracek/makewheeling.git main:gh-pages

cd -