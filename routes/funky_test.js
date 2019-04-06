var express = require('express');
var router = express.Router();

var funkiness = `Alright, dig it\n \
Cold coolin at a bar, and I\'m lookin for some action\n \
But like Mike Jagger said, I can\'t get no satisfaction\n\
The girls are all around, but none of them want to get with me\n\
My threads are fresh and I\'m lookin def, yo, what\'s up with L-o-see?\n\
The girls is all jockin at the other end of the bar\n\
Havin drinks with some no-name chump, when they know that I\'m the star\n\
So I got up and strolled over to the other side of the cantina\n\
I asked the guy, "Why you so fly?" he said, "Funky Cold Medina"\n\
Funky Cold Medina\n \
This brother told me a secret on how to get more chicks\n\
Put a little Medina in your glass, and the girls\'ll come real quick\n\
It\'s better than any alcohol or aphrodisiac\n\
A couple of sips of this love potion, and she\'ll be on your lap\n\
So I gave some to my dog when he began to beg\n\
Then he licked his bowl and he looked at me and did the wild thing on my leg\n\
He used to scratch and bite me, before he was much much meaner\n\
But now all the poodles run to my house for the Funky Cold Medina\n\
You know what I\'m sayin?\n\
I got every dog in my neighborhood breakin down my door\n\
I got Spuds McKenzie\n\
Alex from Stroh\'s\n\
They won\'t leave my dog alone with that Medina, pal\n\
I went up to this girl, she said, "Hi, my name is Sheena"\n\
I thought she\'d be good to go with a little Funky Cold Medina\n\
She said, "I\'d like a drink, " I said, "Ehm - ok, I\'ll go get it"\n\
Then a couple sips she cold licked her lips, and I knew that she was with it\n\
So I took her to my crib, and everything went well as planned\n\
But when she got undressed, it was a big old mess, Sheena was a man\n\
So I threw him out, I don\'t fool around with no Oscar Meyer wiener\n\
You must be sure that the girl is pure for the Funky Cold Medina\n\
You know, ain\'t no plans with a man\n\
This is the 80\'s, and I\'m down with the ladies\n\
Ya know?\n\
Break it down\n\
Back in the saddle, lookin for a little affection\n\
I took a shot as a contestant on _The Love Connection_\n\
The audience voted, and you know they picked a winner\n\
I took my date to the Hilton for Medina and some dinner\n\
She had a few drinks, I\'m thinkin soon what I\'ll be gettin\n\
Instead she started talkin \'bout plans for our weddin\n\
I said, "Wait, slow down, love, not so fast says, I\'ll be seein ya"\n\
That\'s why I found you don\'t play around with the Funky Cold Medina\n\
Ya know what I\'m sayin\n\
That Medina\'s a monster, y\'all\n\
Funky Cold Medina\n `

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('funky', { title: 'FUNKY COLD MEDINA', body: funkiness});
});

module.exports = router;