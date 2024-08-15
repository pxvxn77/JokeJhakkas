fetch('https://icanhazdadjoke.com/slack')
  .then(data => data.json())
  .then(data => {  // Use the original 'data' variable here
     const jokeText = data.attachments[0].text;
     const jokeElement = document.getElementById('jokeElement');

     jokeElement.innerHTML = jokeText;
  });

