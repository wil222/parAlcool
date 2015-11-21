all: edit nemo start
	
edit:
	gedit html/parAlcool.php html/blog.php html/header.html html/slide_accueil.html html/slide_test.html html/slide_idea.html html/slide_dynamique.html html/slide_problem.html html/slide_circle.html html/slide_illustrations.html html/slide_aide.html css/*.css javascript/*.js &

nemo:
	nemo ./ &

start:
	sudo ../.././xampp start
