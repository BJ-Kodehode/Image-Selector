const imageSelect = document.getElementById("imageSelect");
const displayImage = document.getElementById("displayImage");

imageSelect.addEventListener("change", function () {
    const selectedValue = imageSelect.value;
    let imageUrl = "";

    // IF-ELSE METODE
    if (selectedValue === "rust") {
        imageUrl = "https://xxboxnews.blob.core.windows.net/prod/sites/2/2021/11/DevastationUnleashed_HeroImage_1920x1080.jpg";
    } else if (selectedValue === "raft") {
        imageUrl = "https://www.marinersmuseum.org/wp-content/uploads/2022/08/steamboat2.jpg?w=1024";
    } else if (selectedValue === "factorio") {
        imageUrl = "https://miro.medium.com/v2/resize:fit:1400/1*AlLnuBxAF8qOtHTggYDH7g.jpeg";
    } else if (selectedValue === "skyblivion") {
        imageUrl = "https://skyblivion.com/wp-content/uploads/2025/01/LwUibq6wBn4-HD-1080x608.jpg";
    } else if (selectedValue === "rayman") {
        imageUrl = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/207490/ss_f8985b35ffba2cbaf1b3e1e1b241246222bcf4ec.1920x1080.jpg?t=1727212848";
    }

    displayImage.src = imageUrl;
});

// imageSelect.addEventListener("change", function () {
//     const selectedValue = imageSelect.value;
//     let imageUrl = "";

   
//      // SWITCH-CASE METODE
//     switch (selectedValue) {
//         case "rust":
//             imageUrl = "https://xxboxnews.blob.core.windows.net/prod/sites/2/2021/11/DevastationUnleashed_HeroImage_1920x1080.jpg";
//             break;
//         case "raft":
//             imageUrl = "https://www.marinersmuseum.org/wp-content/uploads/2022/08/steamboat2.jpg?w=1024";
//             break;
//         case "factorio":
//             imageUrl = "https://miro.medium.com/v2/resize:fit:1400/1*AlLnuBxAF8qOtHTggYDH7g.jpeg";
//             break;
//         case "skyblivion":
//             imageUrl = "https://skyblivion.com/wp-content/uploads/2025/01/LwUibq6wBn4-HD-1080x608.jpg";
//             break;
//         case "rayman":
//             imageUrl = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/207490/ss_f8985b35ffba2cbaf1b3e1e1b241246222bcf4ec.1920x1080.jpg?t=1727212848";
//             break;
//     }

//     displayImage.src = imageUrl;
// });

// const imageMap = {
//     rust: "https://xxboxnews.blob.core.windows.net/prod/sites/2/2021/11/DevastationUnleashed_HeroImage_1920x1080.jpg",
//     raft: "https://www.marinersmuseum.org/wp-content/uploads/2022/08/steamboat2.jpg?w=1024",
//     factorio: "https://miro.medium.com/v2/resize:fit:1400/1*AlLnuBxAF8qOtHTggYDH7g.jpeg",
//     skyblivion: "https://skyblivion.com/wp-content/uploads/2025/01/LwUibq6wBn4-HD-1080x608.jpg",
//     rayman: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/207490/ss_f8985b35ffba2cbaf1b3e1e1b241246222bcf4ec.1920x1080.jpg?t=1727212848"
// };

// imageSelect.addEventListener("change", (event) => {
//     displayImage.src = imageMap[event.target.value] || "";
// });