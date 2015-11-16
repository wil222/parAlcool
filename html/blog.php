<section id="comments" class="slide9">
	<div class="parallax"></div>
	<div class="container wrapper">
		<div class="page-header">
			<h1>Commentaires</h1>
		</div>
	</div>
	<div class="container wrapper">
	
		<?php
		try {
		    $bdd = new PDO('mysql:host=mysql1.alwaysdata.com;dbname=paralcool_comments;charset=utf8', 'paralcool', 'onvousaime');
		}
		catch(Exception $e) {
			die('Erreur : '.$e->getMessage());
		}
		
		// define variables and set to empty values
		$pseudo = $comment = $nb = "";
		$pseudoErr = $commentErr = $nbErr = "";

		if ($_SERVER["REQUEST_METHOD"] == "POST") {
			$nb = test_input($_POST["nb"]);
			if (empty($_POST["pseudo"])) {
				$pseudoErr = "Name is required";
			} 
			else {
				$pseudo = test_input($_POST["pseudo"]);
				// check if name only contains letters and whitespace
				if (!preg_match("/^[a-zA-Z ]*$/",$pseudo)) {
					$pseudoErr = "Only letters and white space allowed";
				}
			}
			if (empty($_POST["comment"])) {
				$commentErr = "Comment is required";
			} 
			else {
				$comment = test_input($_POST["comment"]);
			}
			
			if (!empty($_POST["comment"]) && !empty($_POST["pseudo"])) {
				$date = date("Y-m-j H:i:s");
				$prep = $bdd->prepare("INSERT INTO `commentaires` (`id_billet`, `auteur`, `commentaire`, `date_commentaire`) VALUES (:id_billet, :auteur, :commentaire, :date_commentaire)");
				$prep->bindParam(':id_billet', $nb);
				$prep->bindParam(':auteur', $pseudo);
				$prep->bindParam(':commentaire', $comment);
				$prep->bindParam(':date_commentaire', $date);
				/*if ($prep->execute() === TRUE) {
					echo "New record created successfully";
				} else {
					echo "Error: " ."<br>" . $bdd->errorInfo();
				}*/
		?>
				<script>alert("<?php echo $comment." posté le ".$date;?> ");</script>
		<?php
			} else {
		?>
				<script>alert("<?php echo "Le message n'a pas été envoyé : ".$pseudoErr.$commentErr?>");</script>
		<?php		
			}
		}

		function test_input($data) {
			$data = trim($data);
			$data = stripslashes($data);
			$data = htmlspecialchars($data);
			return $data;
		}
		?>

		<?php

		$req = $bdd->query('SELECT id, titre, contenu, DATE_FORMAT(date_creation, \'%d/%m/%Y à %Hh%imin%ss\') AS date_creation_fr FROM billets ORDER BY date_creation DESC LIMIT 0, 5');
		$req2 = $bdd->prepare('SELECT auteur, commentaire, DATE_FORMAT(date_commentaire, \'%d/%m/%Y à %Hh%imin%ss\') AS date_commentaire_fr FROM commentaires WHERE id_billet = ? ORDER BY date_commentaire');

		while ($donnees = $req->fetch())
		{
		?>
		<div class="comment-container">
			<h3><?php echo htmlspecialchars($donnees['titre']); ?> <span class="date">le <?php echo $donnees['date_creation_fr']; ?></span></h3>
		    
			<p>
				<?php echo nl2br(htmlspecialchars($donnees['contenu']));?>
			<br />
				<?php
					$req2->execute(array($donnees['id']));

					while ($donnees2 = $req2->fetch())
					{
				?>
						<div class="comment-answer">
							<p><span class="author"><?php echo htmlspecialchars($donnees2['auteur']); ?></span> <span class="date">le <?php echo $donnees2['date_commentaire_fr']; ?></span></p>
							<p><?php echo nl2br(htmlspecialchars($donnees2['commentaire'])); ?></p>
						</div>
				<?php
					}
				?>
				
				<a class="comment-btn" href="javascript: void(0)" id="answer-<?php echo $donnees['id'];?>">Répondre</a>
				<form class="comment-area" name="answer-<?php echo $donnees['id'];?>" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"></form>
			</p>
		</div>
		<?php
		}
		$req2->closeCursor();
		$req->closeCursor();
		?>
		
		<input type="submit" class="btn btn-primary" id="newcomment" value="Nouveau commentaire"/>
		<form class="comment-area" name="newcomment"method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"></form>
	</div>
</section>
