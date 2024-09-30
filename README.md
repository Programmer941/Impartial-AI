# Impartial AI

A chrome extension with the goal of bringing to light the subtle biases that affect our everyday thinking. Specifically, this extension's main impact is improving critical thinking, and it tries to do this in 2 ways:

1) Highlighting biases on webpages
2) Summarizing cumulative biases over time

The extension can also find uses in other ways, like analyzing different types of content. For example: maybe best selling books have the perfect amount of bias... you never know. Also, not all the bias highlighted is inherently negative.

Now I'll present the user interface before finally showing some examples:

![General User Interface](https://media.discordapp.net/attachments/806981912538513428/1290345000496009247/image.png?ex=66fc1eed&is=66facd6d&hm=1e26b5a5196639559f0a8d472faff0c9a4ba01209d03e64a81b688e5649461ee&=&format=webp&quality=lossless&width=918&height=909)![Summary of all seen biases](https://cdn.discordapp.com/attachments/806981912538513428/1290345552231399597/image.png?ex=66fc1f71&is=66facdf1&hm=83134e56a5defc516bd21433735980d088a22bfff3cfdef639c072abb577533b&=)


# Settings

There are a few key settings:

**Always on**: well, it runs for each new page you go to (will probably cost a lot of $)

**Highlight page**: Highlights just the page you're on

**Min, Max characters**: the amount of required characters on a page to run. For example you don't need this to run on example.com so you can require more than 1000 characters, but you also don't want to pass 100,000 characters into your OpenAI Api Key.

**API Key**: Any valid OpenAI Key

This extension relies on openai for analysis and is the only prerequisite to use this extension (other than chrome).


## Examples
Oh, it also works in other languages by the way!
![Highlight Ex1](https://media.discordapp.net/attachments/806981912538513428/1290340601870553089/multilanguage.png?ex=66fc1ad4&is=66fac954&hm=8029193dea6ed54de0f15642c08880d0fe6de6b3cba147ce7ed8a8d6cef32622&=&format=webp&quality=lossless&width=1430&height=825)
![Highlight Ex2](https://media.discordapp.net/attachments/806981912538513428/1290340602218676316/example2.png?ex=66fc1ad4&is=66fac954&hm=2e2d86a18369cc6c40110e19d9c710d33719ecf7894f6e3e865fdb262570aaac&=&format=webp&quality=lossless&width=1554&height=816)
![Highlight Ex3](https://media.discordapp.net/attachments/806981912538513428/1290340601371299923/lastexample.png?ex=66fc1ad4&is=66fac954&hm=0225febe6b3d7a33afea137fa80c1941e656130927dd5f366a937f685cd97538&=&format=webp&quality=lossless&width=1102&height=565)
![Highlight Ex4](https://media.discordapp.net/attachments/806981912538513428/1290340602562482229/example.png?ex=66fc1ad5&is=66fac955&hm=c36dc2fc328357a5c1638ffce534e3cf342b41565933db4407b55c257bbbc7dc&=&format=webp&quality=lossless&width=1496&height=717)
If you want to try it out for yourself I used the following links:
https://weekly.chosun.com/news/articleView.html?idxno=37338
https://medium.com/@jackrossdixon/sugar-sick-45f68b185f52

# Due Notes
In the code there are more biases. I decided to comment those out, as I felt this extension is more joyous with the broader aspects of bias.

**This was made in only 2 days for a hackathon**

This was made possible with my great team: Tawanda, Joseph, and Yashas.

# Credits and Util
* Solid State by HTML5 UP: CSS
*  Markjs: highlighting util
* Openai

# Future Improvement
There are a few ways this can be improved that were discussed when finishing this application:
* Popups after every _ consecutive specific biases on a subject
* Categorizing biases based on subject / other factors
	* Ex: Hershey's says chocolate and sweets are good for you a lot. You make this a category and add new biases to existing categories.
* Probably some more things I'm forgetting!
