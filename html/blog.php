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
				<form class="comment-area" name="answer-<?php echo $donnees['id'];?>">
				</form>
			</p>
		</div>
		<?php
		}
		$req2->closeCursor();
		$req->closeCursor();
		?>
		
		<input type="submit" class="btn btn-primary" id="newcomment" value="Nouveau commentaire"/>
		<form name="newcomment"></form>
	</div>
</section>
