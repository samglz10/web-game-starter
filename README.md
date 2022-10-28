# Getting started #

# Fly Game Starter #
    A game developed by me to show basic knowledge of vanilla Javascript and TypeScript. 
    Basis of the game includes clicking on flies before they reach your steak!
# Description #
    main.ts
        This is the main file that will create the HealthBar. The moveFly function will decided if the fly has exited the window and it if has it will clear the img. 

    fly.ts
        the createFly function will do just that. Creates an img HTML Element and will set the starting position. Then an it will move the fly right and left. It will function as moving right, left on the X-axis. Math random will then assign a number and make the img element go towards the bottom of the screen. The event listener is set to remove fly object on click. 

    restartButton.ts
        Restart Button will reload the webpage and reload the score as well. 


# Demo #
    Switch over to the main branch to see a demo of how the game functions and runs!
    Fly Game starter is a simple point and click game. 

# Technology
    Fly Game Starter uses npm vite to create the project. It runs vanilla HTML, CSS and Javascript. 
    More instructions on how to install typescript for this project in the Prerequesites portion.

# Technical Information #
    Not much is needed to be able to run this game. All you will need to test it out is clone the main respository and install npm. 
    # Contributions #
        Any feedback and contributions are welcomed. If used for teaching or commercial purposes, please provide credit/attributions to my github profile. 

## Prerequesites

Install eslint vscode extension

-----

Fork, clone then cd into the folder and 

```bash
npm install
```

to install eslint and vite live server.

```bash
npm run dev
```

Ready for deployment. Run 
```bash
npm run build
```

