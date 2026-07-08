// ==========================================
// CITY TWIN AI
// DEBUG TOOL
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    alert("✅ Debug Mode Started");

    console.log("Chart object:", typeof Chart);

    const ids = [
        "trafficChart",
        "energyChart",
        "airChart",
        "waterChart"
    ];

    ids.forEach(id => {

        const canvas = document.getElementById(id);

        if (!canvas) {

            alert("❌ Missing canvas: " + id);

        } else {

            alert(
                "✅ " + id +
                "\nWidth: " + canvas.clientWidth +
                "\nHeight: " + canvas.clientHeight
            );

        }

    });

});
