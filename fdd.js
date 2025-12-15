const quotes = [
  `<a title="Caroline Polachek, 'On the Beach'"
      href="https://www.youtube.com/watch?v=pilme9tCBJw" target="_blank">
      Songline of sorrow
   </a>`,

  `<a title="Raymond Pettibon"
      href="https://www.moma.org/collection/works/191041" target="_blank">
      WHIRLWIND, HEAT AND FLASH
   </a>`,
  `<a title="Patti Smith, 'Piss Factory'"
      href="https://www.youtube.com/watch?v=y6aUbrZYjYE" target="_blank">
      I got nothin' to hide here save desire
   </a>`,
  `<a title="Caroline Polachek, 'Pretty in Possible'"
      href="https://www.youtube.com/watch?v=JmnZHQNN5cc" target="_blank">
      Oracle and Odyssey with the bloody nose
   </a>`,
  `<a title="Caroline Polachek, 'Pretty in Possible'"
      href="https://www.youtube.com/watch?v=JmnZHQNN5cc" target="_blank">
      Pity the mayflies in the swimming pool at dawn
   </a>`,
  `<a title="Gregório de Matos, 'A um Passarinho Cantando'"
      href="http://poesiacontraaguerra.blogspot.com/2014/08/a-um-passarinho-cantando.html" target="_blank">
       Como cantas, se és flor de Alexandria? Como cheiras, se és pássaro de arminho?
   </a>`,
  `<a title="Ethel Cain, 'Pulldrone'"
      href="https://www.youtube.com/watch?v=KeX6d2LdZUU" target="_blank">
       It is no good speaking of fairness, the fools errand
   </a>`,
   `<a title="Joni Mitchell, 'The Last Time I Saw Richard'"
      href="https://www.youtube.com/watch?v=y4WVZncHaLo" target="_blank">
       Only a phase these dark café days
   </a>`,
   `<a title="Adriana Calcanhotto 'Esquadros'"
      href="https://www.youtube.com/watch?v=Ngu8kYgRH_o" target="_blank">
       Exponho o meu modo, me mostro, eu canto para quem?
   </a>`,
   `<a title="Caroline Polachek, 'Door'"
      href="https://www.youtube.com/watch?v=7w6R4I7I3wA" target="_blank">
       Who is the you who I sing to when the house is empty?
   </a>`,
   `<a title="J.R.R. Tolkien"
      href="https://tolkiengateway.net/wiki/In_the_House_of_Tom_Bombadil" target="_blank">
       Hey dol! merry dol! ring a dong dillo!
   </a>`,
   `<a title="Horatius, 'Carmina'"
      href="https://la.wikisource.org/wiki/Carmina_(Horatius)/Liber_III/Carmen_XXX" target="_blank">
       Non omnis moriar
   </a>`,
];


const random = Math.floor(Math.random() * quotes.length);
document.getElementById("fdd").innerHTML = quotes[random];