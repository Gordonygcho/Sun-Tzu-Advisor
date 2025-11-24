document.addEventListener('DOMContentLoaded', () => {
    const situationInput = document.getElementById('situation-input');
    const getAdviceButton = document.getElementById('get-advice-button');
    const adviceOutput = document.getElementById('advice-output');

    getAdviceButton.addEventListener('click', async () => {
        const situation = situationInput.value.trim();

        if (situation === '') {
            adviceOutput.textContent = 'Please enter your situation.';
            return;
        }

        adviceOutput.textContent = 'Analyzing... Please wait.';

        try {
            const advice = await getAdviceFromAI(situation);
            adviceOutput.innerHTML = `<p>${advice}</p>`; 

        } catch (error) {
            console.error('Error fetching advice:', error);
            adviceOutput.textContent = 'An error occurred while fetching advice. Please try again later.';
        }
    });

    async function getAdviceFromAI(situation) {
        

        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                
                let advice = "Focus on deception and maneuverability.  Assess your enemy's strengths and weaknesses.";

                if (situation.toLowerCase().includes("attack")) {
                    advice = "Attack when your enemy is unprepared, and appear where you are not expected.";
                } else if (situation.toLowerCase().includes("defense")) {
                    advice = "In defense, secure all possible advantages, and be prepared for any eventuality.";
                } else if (situation.toLowerCase().includes("planning")) {
                    advice = "Every battle is won before it is ever fought. Plan carefully and thoroughly.";
                } else if (situation.toLowerCase().includes("weakness")) {
                   advice = "Exploit the enemy's weaknesses; attack their undefended places. Create opportunities by understanding their vulnerabilities.";
                } else if (situation.toLowerCase().includes("strength")) {
                    advice = "Avoid attacking a well-defended enemy. Wait for opportunities and exploit weaknesses.";
                } else if (situation.toLowerCase().includes("surprise")) {
                   advice = "Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt.";
                }
                else {
                    advice = "Know your enemy and know yourself, and you will not fear the result of a hundred battles. Adopt a flexible approach based on the current situation."
                }

                resolve(advice); 
            }, 1500); 
        });
    }
});