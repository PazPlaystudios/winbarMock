const spinButton = document.getElementById("spin-button");
const progressFill = document.getElementById("progress-fill");

spinButton.addEventListener("click", () => {
    const betAmount = parseInt(document.getElementById("bet-amount").value);
    const winMultiplier = Math.random() * 10; // Simulated random win multiplier (e.g., x2, x8)

    // Calculate progress bar fill percentage
    const progressPercentage = Math.min((winMultiplier / 8) * 100, 100);

    // Update progress bar
    progressFill.style.width = `${progressPercentage}%`;

    // Reset progress after a few seconds
    setTimeout(() => {
        progressFill.style.width = "0";
    }, 2000);

    console.log(`Bet: ${betAmount}, Multiplier: x${winMultiplier.toFixed(2)}`);
});
