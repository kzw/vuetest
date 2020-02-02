all: ../code/src/css/custom.css
	@true

../code/src/css/custom.css: custom.scss
	sass -I.. custom.scss > ../code/src/css/custom.css

clean:
	\rm -f ../code/src/css/custom.css
