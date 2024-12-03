// export default function toggle() {
//   const lightToggle = document.getElementById("light");
//   const darkToggle = document.getElementById("dark");
//   const body = document.querySelector("body");
//   const font = document.querySelectorAll("div");
//   const navfont = document.querySelectorAll(".c-nav__link");

//   const topAbout = document.getElementById("topAbout");
//   const skillsWorks = document.getElementById("skillsWorks");
//   const worksContact = document.getElementById("worksContact");

//   const arrowNext = document.getElementsByClassName("swiper-button-next");
//   const arrowPrev = document.getElementsByClassName("swiper-button-prev");
//   // const bulletActive = document.getElementsByClassName("swiper-pagination-bullet-active");

//   const resume = document.getElementById("resume");

//   if (lightToggle.style.display === "block") {
//     darkToggle.style.display = "block";
//     lightToggle.style.display = "none";

//     for (let i = 0; i < font.length; i++) {
//       font[i].style.color = "var(--white)";
//     }

//     for (let i = 0; i < navfont.length; i++) {
//       navfont[i].style.color = "var(--white)";
//     }

//     body.style.backgroundImage = "none";
//     topAbout.style.backgroundImage = "none";
//     skillsWorks.style.backgroundImage = "none";
//     worksContact.style.backgroundImage = "none";

//     resume.style.color = "var(--yellow)";

//     console.log("first time click");
//     // for (let i = 0; i < bullet.length; i++) {
//     //   bullet[i].style.backgroundColor = "var(--white)";
//     // }

//     // bulletActive.style.backgroundColor = "var(--yellow)";
//     // arrowNext.style.color = "var(--yellow) !important";
//     // arrowPrev.style.color = "var(--yellow) !important";
//   } else {
//     lightToggle.style.display = "block";
//     darkToggle.style.display = "none";

//     for (let i = 0; i < font.length; i++) {
//       font[i].style.color = "var(--dark)";
//     }

//     for (let i = 0; i < navfont.length; i++) {
//       navfont[i].style.color = "var(--dark)";
//     }

//     body.style.backgroundImage =
//       "url(assets/img/pc/blurry-gradient-haikei.png)";
//     topAbout.style.backgroundImage =
//       "url(assets/img/pc/stacked-waves-haikei2.svg)";
//     skillsWorks.style.backgroundImage =
//       "url(assets/img/pc/polygon-scatter-haikei.svg)";
//     worksContact.style.backgroundImage = "url(assets/img/pc/wave-haikeib.svg)";

//     resume.style.color = "var(--dark)";

//     // arrowNext.style.color = "var(--yellow) !important";
//     // arrowPrev.style.color = "var(--yellow) !important";

//     // for (let i = 0; i < bullet.length; i++) {
//     //   bullet[i].style.backgroundColor = "var(--dark)";
//     // }

//     //     bulletActive.style.backgroundColor = "var(--yellow)";
//   }
// }
// console.log("script .js is loaded");
// console.log(toggle);
