import ScreencaptureWeather from '../components/images/ScreencaptureWeather.png'
import ScreencaptureCutiePies from '../components/images/ScreencaptureCutiePies.png'
import ScreencaptureWorkDay from '../components/images/ScreencaptureWorkDay.png'
import ScreencaptureLWMT from '../components/images/ScreencaptureLWMT.png'
import ScreencaptureIdeaKeeper from '../components/images/ScreencaptureIdeaKeeper.png'
import ScreencaptureTeamRoster from '../components/images/ScreencaptureTeamRoster.png'

export const projectArray = [

    {
        name: "Five Day Forecast",
        description: "Using the Open Weather API, this app displays weather data about a city of your choosing. Enter your city name into the cloud search bar and the current weather + five day forecast will display. At the bottom, your recent searches are listed which allows you to easily switch between cities. Google Fonts, Bootstrap, and JQuery are utilized in this project.",
        image: ScreencaptureWeather,
        app: "https://rucatues.github.io/Five-Day-Forecast-/",
        github: "https://github.com/Rucatues/Five-Day-Forecast-"
    },
    {
        name: "Cutie Pies",
        description: "This web app is intended to display the capabilities of everything short of the transaction property of an online sale! This was inspired by a previous pie saleswoman located in Texas. She had a passion for selling pies but lacked an internet point of sales. This web app was designed to fullfill her needs. This website will allow you to select between your favorite and most delectible pie flavors, add them to the cart for checkout, and grant you a total for shipping. You will also be able to learn about the company history and review direct contact information for any feedback you wish to submit.",
        image: ScreencaptureCutiePies,
        app: "https://jdalfaro4.github.io/Cutie-Pies/",
        github: "https://github.com/jdalfaro4/Cutie-Pies"
    },
    {
        name: "Work Planner",
        description: "This is a simple work planner that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.",
        image: ScreencaptureWorkDay,
        app: "https://rucatues.github.io/Work-Planner/",
        github: "https://github.com/Rucatues/Work-Planner"
    },
    {
        name: "Less Waste More Taste",
        description: "Have you ever had expiring ingredients that you need to use up before they go bad? Have you ever lost all creativity at the end of the day and need to know what you can make for dinner with what you have? Take that bag of spinach that you put off eating for too long and enter your ingredients into the Less Waste, More Taste search engine. A list of recipes will populate to inspire your next meal.This app follows the MVC paradigm, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
        image: ScreencaptureLWMT,
        app: "https://less-waste-more-taste7.herokuapp.com/",
        github: "https://github.com/jdalfaro4/Less_Waste_More_Taste"
    },
    {
        name: "IdeaKeeper",
        description: "The IdeaKeeper is a simple application that allows you to type and save your notes and ideas. Using Express.js, your data is saved and retrieved from the backend.Id.",
        image: ScreencaptureIdeaKeeper,
        app: "https://ideakeeper.herokuapp.com/notes",
        github: "https://github.com/Rucatues/IdeaKeeper-App"
    },
    {
        name: "Team Roster",
        description: "This application generates a HTML file based off of information received by the user in the terminal. A series of questions determine information about a team member that will be displayed on the page with specific details depending on the type of role.",
        image: ScreencaptureTeamRoster,
        app: "https://github.com/Rucatues/Team-Roster",
        github: "https://github.com/Rucatues/Team-Roster"
    }
];


export default projectArray; 