export function closeNav() {
   const x = document.getElementById("main_nav");
   if (x.classList.contains("show")) {
    x.classList.remove("show"); 
   }
}
