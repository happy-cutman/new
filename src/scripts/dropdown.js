/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
export function toggleShow() {
    document.getElementById("sellingDrop").classList.toggle("show");
}

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(e) {
//     if (!e.target.matches('.dropbtn')) {
//         let myDropdown = document.getElementById("myDropdown");
//         if (myDropdown.classList.contains('show')) {
//             myDropdown.classList.remove('show');
//         }
//     }
// }