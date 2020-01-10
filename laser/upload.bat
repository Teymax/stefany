set ERRORLEVEL=1
mkdir uploadBuild
mkdir uploadBuild\ua
cd lib\gulp
start gulp build
echo 'Done'
cd ..\..\ua\lib\gulp
start gulp build
cd ..\..\
move build\ ..\uploadBuild\ua
cd ..\
move build\ uploadBuild\
rem taskkill /IM "cmd.exe" /F
