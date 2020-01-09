set ERRORLEVEL=1
mkdir uploadBuild
mkdir uploadBuild\ua
cd lib\gulp
gulp build
echo 'Done'
cd ..\..\ua\lib\gulp
gulp build
cd ..\..\
move build\** ..\uploadBuild\ua
cd ..\
move build\** uploadBuild\
