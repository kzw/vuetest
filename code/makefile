index.html: index.erb root include/layout.pug RELEASE
	VERSION=/`cat RELEASE` erb < index.erb |pug -P -p .> index.html; cp index.html root/

include/layout.pug: include/layout.pug.erb index.erb FORCE RELEASE
	VERSION=/`cat RELEASE` erb < $< > $@

local: index.erb root LOCAL_LAYOUT
	erb < index.erb |pug -P -p .> index.html; cp index.html root/

LOCAL_LAYOUT:
	erb < include/layout.pug.erb > include/layout.pug
FORCE:

root:
	[ -d root ] || mkdir root

clean:
	\rm -f root/index.html

RELEASE: FORCE
	git rev-parse HEAD|sed 's/^\(........\).*/\1/' |tee RELEASE

