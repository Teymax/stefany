rm -rf uploadBuild
mkdir uploadBuild && mkdir uploadBuild/ua
cd lib/gulp
gulp build
cd ../../ua/lib/gulp
gulp build
cd ../../
mv build/** ../uploadBuild/ua
cd ../
mv build/** uploadBuild/
