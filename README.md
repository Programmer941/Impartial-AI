# Impartial AI

A chrome extension with the goal of bringing to light the subtle biases that affect our everyday thinking. Specifically, this extension's main impact is improving critical thinking, and it tries to do this in 2 ways:

1) Highlighting biases on webpages
2) Summarizing cumulative biases over time

The extension can also find uses in other ways, like analyzing different types of content. For example: maybe best selling books have the perfect amount of bias... you never know. Also, not all the bias highlighted is inherently negative.

Now I'll present the user interface before finally showing some examples:

![image5](https://github.com/user-attachments/assets/40b2a354-8bf1-42f9-b7c2-cdd7464de35e)
![image6](https://github.com/user-attachments/assets/987ce8b2-7669-4a5d-83b4-6cb95cc9b26d)


# Settings

There are a few key settings:

**Always on**: Well, it runs for each new page you go to (will probably cost a lot of $).

**Highlight page**: Highlights just the page you're on.

**Min, Max characters**: The amount of required characters on a page to run. For example you don't need this to run on example.com so you can require more than 1000 characters, but you also don't want to pass 100,000 characters into your OpenAI Api Key.

**API Key**: Any valid OpenAI Key.

This extension relies on openai for analysis and is the only prerequisite to use this extension (other than chrome).


## Examples

<img width="501" alt="image1" src="https://github.com/user-attachments/assets/5be1d8a3-cabf-4cb8-bdc0-e125db5b0f88">
<img width="707" alt="image2" src="https://github.com/user-attachments/assets/3c66fba3-16ab-4cde-bf6d-aaf6cb796ce2">
<img width="650" alt="image3" src="https://github.com/user-attachments/assets/615023b0-a6a8-4ec8-b70a-9c93970f44e4">
<img width="680" alt="image4" src="https://github.com/user-attachments/assets/569922af-2ce3-45e3-a828-f8a5312fb76a">

Oh, it also works in other languages by the way!

If you want to try it out for yourself I used the following links:
https://weekly.chosun.com/news/articleView.html?idxno=37338
https://medium.com/@jackrossdixon/sugar-sick-45f68b185f52

# Due Notes
In the code there are more biases. I decided to comment those out, as I felt this extension is more joyous with the broader aspects of bias.

**This was made in only 2 days for a hackathon.**

This was made possible with my great team: Tawanda, Joseph, and Yashas.

# Credits and Util
* Solid State by HTML5 UP: CSS
*  Markjs: highlighting util
* Openai

# Future Improvement
There are a few ways this can be improved that were discussed when finishing this application:
* Popups after every _ consecutive specific biases on a subject.
* Categorizing biases based on subject / other factors.
	* Ex: Hershey's says chocolate and sweets are good for you a lot. You make this a category and add new biases to existing categories.
* Probably some more things I'm forgetting!
