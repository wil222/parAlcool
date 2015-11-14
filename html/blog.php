<section id="comments" class="slide9">
	<div class="parallax"></div>
	<div class="container wrapper">
		<div class="page-header">
			<h1>Commentaires</h1>
		</div>
	</div>
	<div class="container wrapper">
	
	<em><a href="#">Nouveau commentaire</a></em>

	<?php

	// Connexion à la base de données

	try
	{
	    $bdd = new PDO('mysql:host=mysql1.alwaysdata.com;dbname=paralcool_comments;charset=utf8', 'paralcool', 'onvousaime');
	}
	catch(Exception $e)
	{
		die('Erreur : '.$e->getMessage());
	}

	// On récupère les 5 derniers billets
	$req = $bdd->query('SELECT id, titre, contenu, DATE_FORMAT(date_creation, \'%d/%m/%Y à %Hh%imin%ss\') AS date_creation_fr FROM billets ORDER BY date_creation DESC LIMIT 0, 5');

	while ($donnees = $req->fetch())
	{
	?>
	<div class="news">
	    <h3>
		<?php echo htmlspecialchars($donnees['titre']); ?>
	    </h3>
	    
		<em>le <?php echo $donnees['date_creation_fr']; ?></em>
	    
	    <p>
		    <?php
		    // On affiche le contenu du billet
		    echo nl2br(htmlspecialchars($donnees['contenu']));
		    ?>
		    <br />
			<?php
				// Récupération des réponses
				$req2 = $bdd->prepare('SELECT auteur, commentaire, DATE_FORMAT(date_commentaire, \'%d/%m/%Y à %Hh%imin%ss\') AS date_commentaire_fr FROM commentaires WHERE id_billet = ? ORDER BY date_commentaire');
				$req2->execute(array($donnees['id']));

				while ($donnees2 = $req2->fetch())
				{
			?>
					<p><strong><?php echo htmlspecialchars($donnees2['auteur']); ?></strong> le <?php echo $donnees2['date_commentaire_fr']; ?></p>
					<p><?php echo nl2br(htmlspecialchars($donnees2['commentaire'])); ?></p>
			<?php
				} // Fin de la boucle des réponses
				$req2->closeCursor();
			?>
		    <em><a href="#">Répondre</a></em>
	    </p>
	</div>
	<?php
	} // Fin de la boucle des billets
	$req->closeCursor();
	?>
	</div>
</section>
