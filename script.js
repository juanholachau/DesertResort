let natureList = ["Hardy","Lonely","Brave","Adamant","Naughty",
"Bold","Docile","Relaxed","Impish","Lax","Timid","Hasty","Serious",
"Jolly","Naive","Modest","Mild","Quiet","Bashful","Rash","Calm","Gentle",
"Sassy","Careful","Quirky"];
let abilityList = ["Hustle","Moxie","Intimidate","Sturdy",
"Shell Armor","Wonder Skin","Magic Guard","Water Absorb","Chlorophyll","Shed Skin","Mummy"];

function generarPKMN(){
	var shiny_root = Math.round(Math.random()*100);
	if (shiny_root == 1) { var shinyStar = "<img class='cry' src='img/star.png'>"}
		else { var shinyStar = "" }
	var dexNumber = Math.round(Math.random()*6);

	//Generar DARUMAKA
	if (dexNumber == 0) {
		var espName = "Darumaka";
		var tipo1 = "<img class='typeSprite' src='img/firetype.png'>"
		var tipo2 = ""
		var abilityName = abilityList[0];
		var abilityDesc = "Boosts ATK, but decreases accuracy.";
		var espIcon = "<img class='secc1_a_icon' src='img/darumaka_icon.gif'>";
			if (shiny_root == 1) {
				var espSprite = "<img class='PKMNsprite' src='img/darumaka_shiny.gif'>";
			}
			else {
				var espSprite = "<img class='PKMNsprite' src='img/darumaka.gif'>"
			}
		}
	//Generar SANDILE
	else if (dexNumber == 1) {
		var espName = "Sandile";
		var espIcon = "<img class='secc1_a_icon' src='img/sandile_icon.gif'>";
		var tipo1 = "<img class='typeSprite' src='img/groundtype.png'>";
		var tipo2 = "<img class='typeSprite' src='img/darktype.png'>";
		var abilityName = abilityList[Math.round(Math.random()*(2-1)+1)];
			if (abilityName == abilityList[1]) {
				var abilityDesc = "Boosts ATK every time the user defeats a foe."
			}
			else if (abilityName == abilityList[2]) {
				var abilityDesc = "Lowers foe´s ATK by half."
			}

			if (shiny_root == 1) {
				var espSprite = "<img class='PKMNsprite' src='img/sandile_shiny.gif'>";
			}
			else {
				var espSprite = "<img class='PKMNsprite' src='img/sandile.gif'>"
			}
	}
	//Generar DWEBBLE
	else if (dexNumber == 2) {
		var espName = "Dwebble";
		var espIcon = "<img class='secc1_a_icon' src='img/dwebble_icon.gif'>";
		var tipo1 = "<img class='typeSprite' src='img/bugtype.png'>"
		var tipo2 = "<img class='typeSprite' src='img/rocktype.png'>"
		var abilityName = abilityList[Math.round(Math.random()*(4-3)+3)];
			if (abilityName == abilityList[3]) {
				var abilityDesc = "Protects the user against a 1 hit K.O, leaving at least 1 hp."
			}
			if (abilityName == abilityList[4]) {
				var abilityDesc = "Protects the user against any critical hit."
			}

			if (shiny_root == 1) {
				var espSprite = "<img class='PKMNsprite' src='img/dwebble_shiny.gif'>";
			}
			else {
				var espSprite = "<img class='PKMNsprite' src='img/dwebble.gif'>"
			}
	}
	//Generar SIGILYPH
	else if (dexNumber == 3) {
		var espName = "Sigilyph";
		var espIcon = "<img class='secc1_a_icon' src='img/sigilyph_icon.gif'>";
		var tipo1 = "<img class='typeSprite' src='img/psychictype.png'>"
		var tipo2 = "<img class='typeSprite' src='img/flyingtype.png'>"
		var abilityName = abilityList[Math.round(Math.random()*(6-5)+5)];
			if (abilityName == abilityList[5]) {
				var abilityDesc = "Makes the foe´s status changing moves more likely to miss."
			}
			if (abilityName == abilityList[6]) {
				var abilityDesc = "Makes the user immune to any remaining damage."
			}

			if (shiny_root == 1) {
				var espSprite = "<img class='PKMNsprite' src='img/sigilyph_shiny.gif'>";
			}
			else {
				var espSprite = "<img class='PKMNsprite' src='img/sigilyph.gif'>"
			}	
	}
	//Generar MARACTUS
	else if (dexNumber == 4) {
		var espName = "Maractus";
		var espIcon = "<img class='secc1_a_icon' src='img/maractus_icon.gif'>";
		var tipo1 = "<img class='typeSprite' src='img/grasstype.png'>"
		var tipo2 = ""
		var abilityName = abilityList[Math.round(Math.random()*(8-7)+7)];
			if (abilityName == abilityList[7]) {
				var abilityDesc = "Makes the user regains HP if a Water-type move hits on it."
			}
			if (abilityName == abilityList[8]) {
				var abilityDesc = "Boosts VEL if there´s sunshine in combat."
			}

			if (shiny_root == 1) {
				var espSprite = "<img class='PKMNsprite' src='img/maractus_shiny.gif'>";
			}
			else {
				var espSprite = "<img class='PKMNsprite' src='img/maractus.gif'>"
			}	
	}
	//Generar SCRAGGY
	else if (dexNumber == 5) {
		var espName = "Scraggy";
		var espIcon = "<img class='secc1_a_icon' src='img/scraggy_icon.gif'>";
		var tipo1 = "<img class='typeSprite' src='img/darktype.png'>";
		var tipo2 = "<img class='typeSprite' src='img/fightingtype.png'>";
		if (Math.round(Math.random()*1) == 0) {
			var abilityName = abilityList[9];
			var abilityDesc = "Heals any status change after a few turns.";
		}else{ 	var abilityName = abilityList[1]
				var abilityDesc = "Boosts ATK every time the user defeats a foe."
		}

			if (shiny_root == 1) {
				var espSprite = "<img class='PKMNsprite' src='img/scraggy_shiny.gif'>";
			}
			else {
				var espSprite = "<img class='PKMNsprite' src='img/scraggy.gif'>"
			}
	}
	//Generar YAMASK
	else if (dexNumber == 6) {
		var espName = "Yamask";
		var espIcon = "<img class='secc1_a_icon' src='img/yamask_icon.gif'>";
		var tipo1 = "<img class='typeSprite' src='img/ghosttype.png'>"
		var tipo2 = ""
		var abilityName = abilityList[10];
		var abilityDesc = "Contact with the user makes the ability spread on the foe.";
			if (shiny_root == 1) {
				var espSprite = "<img class='PKMNsprite' src='img/yamask_shiny.gif'>";
			}
			else {
				var espSprite = "<img class='PKMNsprite' src='img/yamask.gif'>"
			}	
	}
	//Comprobar GRUPOS HUEVO
	if (dexNumber == 0) {
			var eggDisplay = "Terreno";
	}
	else if (dexNumber == 1) {
			var eggDisplay = "Terreno";
	}
	else if (dexNumber == 2) {
			var eggDisplay = "Bicho";
	}
	else if (dexNumber == 3) {
			var eggDisplay = "Aereo";
	}
	else if (dexNumber == 4) {
			var eggDisplay = "Planta";
	}

	//Comprobar SEXOS
	var sexo_root = Math.round(Math.random()*1);
	if (sexo_root == 1) {
			var sexoDisplay = "<img class='sexo_icon' src='img/macho.png'>";
		}else {
			var sexoDisplay = "<img class='sexo_icon' src='img/hembra.png'>";
		}

	//Mostrar datos generados en pantalla
 	document.write(
		`


		<!DOCTYPE html>
<html>
<head>
	<title>Desert Resort</title>
	<link rel="stylesheet" type="text/css" href="styles.css">
	<script type="text/javascript" src="script.js"></script>
	<meta charset="utf-8">
</head>
<body>
		<content>
			<div class='seccion1'>	
				<div class='secc1_a'>
					${sexoDisplay} ${espName} <br>
				</div>
				HPS: ${Math.round(Math.random()*31)} <br>
				ATK: ${Math.round(Math.random()*31)} <br>
				DEF: ${Math.round(Math.random()*31)} <br>
				ASP: ${Math.round(Math.random()*31)} <br>
				DSP: ${Math.round(Math.random()*31)} <br>
				VEL: ${Math.round(Math.random()*31)} <br><br>
				Altura: ${Math.round(Math.random()*(100 - 25) + 25)}cm <br>
				Peso: ${Math.round(Math.random()*(100 - 25) + 25)}kgs <br><br>
				<div class='secc1_natu'>
					<b>${natureList[Math.round(Math.random()*23)]}</b> ${espIcon}
				</div>
				<button onclick='location.reload()'>Generar Nuevo</button>
			</div>
			<div class='seccion2'>
				<div class='secc2_sprite'>
					<div class='secc2_back'></div>
					${shinyStar}
					${espSprite}  <br>
				</div>
				<div class='secc2_a'>
					${tipo1}${tipo2}
				</div>
				<div class='secc2_b'>
					<div class='abil_name'>${abilityName}</div>
					<div class='abil_desc'>${abilityDesc}</div>
				</div>
			</div>
		</content>
</body>
</html>
		`
		)
}

generarPKMN();