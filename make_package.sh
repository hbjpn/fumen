echo "Release versioni (without character v) : "
read ver
mkdir release
cd release
name="fumen-${ver}"
mkdir ${name}
cp ../LICENSE.txt ${name}/
cp ../OFL.txt ${name}/
cp ../README.md ${name}/
cp ../dist/fumen.js ${name}/${name}.js
cp ../dist/fumen.js.map ${name}/${name}.js.map
#tar cvzf ${name}.tar.gz ${name}
zip -r ${name}.zip ${name}
cd ..


