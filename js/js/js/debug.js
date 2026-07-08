document.addEventListener("DOMContentLoaded", () => {

    document.body.insertAdjacentHTML(
        "afterbegin",
        `
        <div style="
            position:fixed;
            top:10px;
            left:10px;
            background:#111;
            color:#0f0;
            padding:15px;
            z-index:99999;
            font-size:16px;
        ">
            Debug Loaded ✅
        </div>
        `
    );

});
