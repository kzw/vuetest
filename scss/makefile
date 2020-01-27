all: ../css/site.css ../code/src/css/custom.css
	@true

../css/site.css: site.scss
	sass site.scss ../css/site.css
../code/src/css/custom.css: custom.scss
	sass -I.. custom.scss ../code/src/css/custom.css

clean:
	\rm -f ../code/src/css/custom.css
