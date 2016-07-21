build:
	- rm -rf css js
	mkdir css js
	jspm bundle-sfx app/main.js js/app.js
	./node_modules/.bin/stylus -c -o css styl/main.styl
	./node_modules/.bin/uglifyjs js/app.js -o js/app.min.js
	./node_modules/.bin/html-dist --config html-dist.config.js --input app.html
