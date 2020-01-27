.build: Dockerfile package.json package-lock.json webpack.config.js
	docker build . -t webpack|tee .build && docker tag webpack \
		482806540763.dkr.ecr.us-east-1.amazonaws.com/nodejs:loyal && \
		docker push  482806540763.dkr.ecr.us-east-1.amazonaws.com/nodejs:loyal


all: .build

stg: code/src/css/custom.css code/src/css/site.css
	make -C code/src && PATH=./node_modules/.bin/:/usr/local/bin webpack --mode production --hide-modules

local: code/src/css/custom.css code/src/css/site.css code/root/css code/root/ico/manifest.json
	cp css/site.css* code/root/css

code/root/css:
	mkdir -p code/root/css

code/src/css/custom.css:
	make -C scss

code/src/css/site.css:
	make -C scss

clean:
	\rm -rf dist/* css/* code/src/css/custom.css
