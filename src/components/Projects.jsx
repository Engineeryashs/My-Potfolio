import { ProjectCard } from "./ProjectCard"
export function Projects() {
    let arrayProject = [{

        title: "Payment app",
        image: "/Payment app.png",
        description: "A Payment App built with the MERN stack uses JWT authentication for secure user access. React.js powers the frontend, interacting with the backend via APIs to handle transactions and account management. MongoDB stores user data, while LocalStorage maintains JWT tokens for session persistence, ensuring a secure and efficient payment experience",
        viewCodeLink:"https://github.com/Engineeryashs/Paymentapp-backend-repo",
        liveCodeLink:"https://paymentapp-frontend-murex.vercel.app/#/signup"
    },
    {
        title: "Car Racing Game",
        image: "/Car-Race.png",
        description: "A Car Racing Game developed with HTML, CSS, and Vanilla JavaScript, offering smooth animations and responsive controls. Players navigate a race track, avoiding obstacles and competing for the best time. HTML structures the game, CSS styles it, and JavaScript handles game mechanics like input, collision detection, and scoring.",
        viewCodeLink:"https://github.com/Engineeryashs/car-race-repo",
        liveCodeLink:"https://car-racing-gamesy123.netlify.app/"
    },
    {
        title: "Tic-Tac-Toe",
        image: "/Tic-Tac-Toe.png",
        description: "Tic-Tac-Toe game built using Vanilla JavaScript, offering a simple and interactive gameplay experience. HTML structures the game board, CSS adds visual appeal, and JavaScript manages game logic, player turns, win conditions,score calculation. The game runs smoothly in any modern browser, providing a fun, classic gaming experience ",
        viewCodeLink:"https://github.com/Engineeryashs/tic-tac-toe-repo",
        liveCodeLink:"https://tic-tac-toe-sy143.netlify.app/"
    },
    {
        title: "Typing Speed Tester",
        image: "/Typing-Speed-Tester.png",
        description: "Developed a A Typing Speed Tester built with HTML, CSS, and Vanilla JavaScript allows users to measure and improve their typing speed and accuracy. HTML structures the interface, CSS provides a clean design, and JavaScript handles real-time tracking of words per minute (WPM) and accuracy, offering a responsive and user-friendly experience.",
        viewCodeLink:"https://github.com/Engineeryashs/typing-speed-test-repo",
        liveCodeLink:"https://main--typing-tester-sy143.netlify.app/"
    },
    {
        title: "Love Calculator",
        image: "/Love Calculator.png",
        description: "Developed a Love Calculator using HTML, CSS, and Vanilla JavaScript, which assesses compatibility based on user input. HTML structures the form and results display, CSS enhances visual appeal, and JavaScript calculates and shows compatibility scores. The project delivers an engaging and interactive experience, running smoothly",
        viewCodeLink:"https://github.com/Engineeryashs/love-calculator-repo",
        liveCodeLink:"https://love-calculator-radhekanhaji143.netlify.app/"
    }]
    return (
        <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <h1 className="text-2xl md:text-3xl font-bold my-4">Projects</h1>
            <span className="text-xl md:text-2xl font-bold underline my-2">Featured Projects</span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 grid gap-8 my-4">
                {
                    arrayProject.map(function (ele,index) {
                        return <div key={index}><ProjectCard title={ele.title} image={ele.image} description={ele.description} viewCodeLink={ele.viewCodeLink} liveCodeLink={ele.liveCodeLink} /></div>
                    })
                }
            </div>
        </div>
    )
}