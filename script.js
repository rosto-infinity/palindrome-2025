function estPalindrome(mot) {
  // Convertir le mot en minuscules et supprimer les espaces
  const motNettoye = mot.toLowerCase().replace(/\s+/g, '');
  
  // Inverser le mot
  const motInverse = motNettoye.split('').reverse().join('');
  
  // Vérifier si le mot est égal à son inverse
  return motNettoye === motInverse;
}

// Exemple d'utilisation
// const mot = prompt("Entrez un mot :");
const mot = "Engage le jeu que je le gagne";
if (estPalindrome(mot)) {
  document.write(`${mot} est un palindrome.`);
} else {
  document.write(`${mot} n'est pas un palindrome.`);
}
// La méthode replace(/\s+/g, '') en JavaScript utilise une expression régulière (regex) pour supprimer tous les espaces d'une chaîne de caractères. Voici une explication détaillée de chaque partie :

// Détails de l'Expression Régulière
// replace() :

// C'est une méthode de chaîne qui permet de remplacer une partie d'une chaîne par une autre.
// La syntaxe est : string.replace(regexp|substr, newSubstr|function).
// /\s+/g :

// / : Les barres obliques délimitent le début et la fin de l'expression régulière.
// \s : Correspond à tout caractère d'espace blanc. Cela inclut :
// Espaces ( )
// Tabulations (\t)
// Sauts de ligne (\n)
// Retour chariot (\r)
// Espaces insécables et d'autres types d'espaces.
// + : Indique "un ou plusieurs" de l'élément précédent. Donc, \s+ correspond à une séquence d'un ou plusieurs espaces consécutifs.
// g : C'est un modificateur qui signifie "global". Cela signifie que la recherche doit être effectuée dans toute la chaîne, pas seulement la première occurrence.
// '' :

// C'est la chaîne de remplacement. Dans ce cas, il s'agit d'une chaîne vide, ce qui signifie que les espaces trouvés seront supprimés.