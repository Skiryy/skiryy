document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".square");
    const projectDetails = document.getElementById("project-details");

    const projectData = {
        1: {
            title: "A simulated ecosystem",
            images: ["Images/Projects/PWS1.jpeg", "Images/Projects/PWS2.jpeg", "Images/Projects/PWS3.jpeg"],
            texts: [
                "For my last school project me and a classmate made a simulated digital ecosystem using AI. We made the project in Unity using the Machine Learning agents package. This project taught me a lot about training AIs and how machine learning works. ",
                "Our ecosystem constisted of predators and prey, who reacted dynamically to eachother. We also had several water and food source to test how the scarcity of resources would affect the populations of predators and prey. The creatures could also evolve, they could for example get faster children. We experimented with these factors and then wrote a research paper on it.",
                "Look at the project here: https://github.com/Skiryy/PWS"
            ]
        },
        2: {
            title: "Ascendants",
            images: ["Images/Projects/Ascendants1.png", "Images/Projects/Ascendants2.png", "Images/Projects/Ascendants3.png"],
            texts: [
                "Ascendants is a 2D roguelike bossrush game. This means a game where you are faced with several bosses in a row, whenever you die, you have to start back at the first one again. The game also features a basic story about collecting a flower from the top of the mountain to make tea. I liked the absurd idea of fighting all these complex bosses for such a simple task. ",
                "Developing Ascendants taught me a lot about 2D animations and sprites, both of which I'd never worked with before, only having made 3D games. I also learned about managing a game's difficulty and creating fun and engaging boss fights.",
                "You can download & play Ascendants over here: https://skiryy.itch.io/ "
            ]
        },
        3: {
            title: "Minor Miner Mine Escape",
            images: ["Images/Projects/MMMescape1.jpeg", "Images/Projects/MMMescape2.jpeg", "Images/Projects/MMMescape3.jpeg"],
            texts: [
                "Minor Miner Mine Escape is a horror game about a mineworker stuck in a mine because of rubble at the exit. The player has to walk around the tight and dark corridors of the mine gathering materials needed to create an explosive to clear the rubble, all while being chased by the ghost of a past worker that also got stuck, and is out to kill you, and while managing the flashlight's battery level.",
                "The enemy in this game was created with Machine Learning, this was my first dabble into AI and where I discovered my passion. I also learned a lot about creating atmosphere in this game.",
                "Minor Miner Mine Escape is not currently publicly accessible."
            ]
        },
        4: {
            title: "Pest Control",
            images: ["Images/Projects/PestControl1.png", "Images/Projects/PestControl2.png", "Images/Projects/PestControl3.png"],
            texts: [
                "Pest Control is a virtual reality game. The player is a very small person who has been tasked to clear out a classroom of rats. The player has a jetpack to fly around the classroom and a weapon to shoot the rats with. The rats come in waves and attack the player, the waves get increasingly difficult and the goal is to reach as a high of a wave you can.",
                "This was my first full fledged game and taught me a lot about the basics of Unity and also how VR worked. The project also taught me a lot about optimization, having to work on limited hardware.",
                "Pest Control is not currently publicly accessible."
            ]
        },
        5: {
            title: "C++",
            images: ["Images/Projects/CPP1.png", "project5_img2.jpg", "project5_img3.jpg"],
            texts: [
                "Last year I participated in a pre-university programme from the Vrije Universiteit in Amsterdam. This programme focussed on the basics of C++ and code optimization. It was a 3 month programme with weekly assignments all focussing on a different part of the language such as optimization, data structuring and recursion.",
                "The final assignments focussed on recursion. The first was the classic N Queens, where you have an variable N and then a N by N chessboard was created with N amount of queens, but none of the queens should be able to hit eachother in one move.",
                "The last assignent had you generate a random maze with a customizable size. The maze had to have a solution and a seed system and had to be very optimized. These assignments were all very fun to do and taught me a lot about structuring data and organizing code, and how the C++ language worked."
            ]
        }
    };

    squares.forEach(square => {
        square.addEventListener("click", function () {
            const projectId = this.getAttribute("data-project");
            const project = projectData[projectId];

            if (project) {
                projectDetails.innerHTML = `
                    <h1>${project.title}</h1>
                    <div class="project-section">
                        <img src="${project.images[0]}" alt="${project.title} Image 1">
                        <p>${project.texts[0]}</p>
                    </div>
                    <div class="project-section reverse">
                        <p>${project.texts[1]}</p>
                        <img src="${project.images[1]}" alt="${project.title} Image 2">
                    </div>
                    <div class="project-section">
                        <img src="${project.images[2]}" alt="${project.title} Image 3">
                        <p>${project.texts[2]}</p>
                    </div>
                `;

                projectDetails.classList.add("show");
            }
        });
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".square") && !event.target.closest("#project-details")) {
            projectDetails.classList.remove("show");
        }
    });
});
