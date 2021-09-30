const generatePage = (names, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${names}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

module.exports = generatePage;


//With template literals, we can wrap the string in backticks and interpolate the variables with the ${<variable>} syntax.
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;



    //Template literals allow us to do easily something,
    // that would be difficult with regular strings: multi-line text.
    
    // const generatePage = (userName, githubName) => {
    //     return `
    //         Name: ${userName}
    //         Github: ${githubName}
    //     `;
        
    // };

    // recoding generate page to html layout