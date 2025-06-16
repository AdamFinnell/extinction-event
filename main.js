     document.querySelectorAll("ol li").forEach(item => {
        item.addEventListener("click", (event) => {
            event.target.style.textDecoration = "line-through"
        })
    })

   
    document.querySelectorAll("ul li").forEach(item => {
        item.addEventListener("click", (event) => {
            event.target.style.opacity = "0"
        })
    })

 
    document.querySelectorAll("div img").forEach(img => {
        img.addEventListener("click", (event) => {
            event.target.style.width = "0"
        })
    })

    
    document.querySelector("#destroy-all").addEventListener("click", () => {
        document.querySelectorAll("ol li").forEach(item => {
            item.style.textDecoration = "line-through"
        })

        document.querySelectorAll("ul li").forEach(item => {
            item.style.opacity = "0"
        })

        document.querySelectorAll("div img").forEach(img => {
            img.style.width = "0"
        })
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    })









//  ========================= for fun  comment out the top, uncomment out the bottom=================================







// document.querySelectorAll("ol li").forEach(item => {
//     item.addEventListener("click", (event) => {
//         event.target.style.textDecoration = "line-through"
//     })
// });

// document.querySelectorAll("ul li").forEach(item => {
//     item.addEventListener("click", (event) => {
//         event.target.style.opacity = "0"
//     })
// });

// document.querySelectorAll("div img").forEach(img => {
//     img.addEventListener("click", (event) => {
//         event.target.style.width = "0px"
//     })
// });

// const meteorCount = 30;
// const meteorDuration = 6000;
// let destructionActive = false;

// function summonMeteorShower(count = 30, duration = 6000) {
//     for (let i = 0; i < count; i++) {
//         const meteor = document.createElement("div");
//         meteor.classList.add("meteor");
//         meteor.style.left = `${Math.random() * (window.innerWidth - 150)}px`;
//         meteor.style.animationDelay = `${Math.random() * 3}s`;
//         document.body.appendChild(meteor);
//         setTimeout(() => meteor.remove(), duration + 1000);
//     }
// }

// document.getElementById("destroy-all").addEventListener("click", (e) => {
//     if (!destructionActive) {
       
//         document.querySelectorAll("ol li").forEach(item => {
//             item.style.textDecoration = "line-through";
//         });

//         document.querySelectorAll("ul li").forEach(item => {
//             item.style.opacity = "0";
//         });

//         document.querySelectorAll("div img").forEach(img => {
//             img.style.width = "0px";
//         });

//         document.body.classList.remove("wasteland");
//         document.body.classList.add("lush");

//         setTimeout(() => {
//             document.body.classList.replace("lush", "wasteland");
//         }, 2000);

//         const explosion = document.createElement("div");
//         explosion.classList.add("explosion");
//         const rect = e.target.getBoundingClientRect();
//         explosion.style.left = `${rect.left + rect.width / 2 - 50}px`;
//         explosion.style.top = `${rect.top + rect.height / 2 - 50 + window.scrollY}px`;
//         document.body.appendChild(explosion);
//         setTimeout(() => explosion.remove(), 600);

//         summonMeteorShower(meteorCount, meteorDuration);
//         destructionActive = true;
//     } else {
//         document.querySelectorAll("ol li").forEach(item => {
//             item.style.textDecoration = "none";
//         });

//         document.querySelectorAll("ul li").forEach(item => {
//             item.style.opacity = "1";
//         });

//         document.querySelectorAll("div img").forEach(img => {
//             img.style.width = "";
//         });

//         document.body.classList.remove(".wasteland"); 
//         document.querySelectorAll(".meteor").forEach(meteor => meteor.remove())

//         destructionActive = false
//     } setTimeout(() => {
//             window.location.reload()
//         }, 9000)
// })


//     document.getElementById("destroy-all").addEventListener("click", (e) => {
//     document.querySelectorAll("ol li").forEach(item => item.style.textDecoration = "line-through")
//     document.querySelectorAll("ul li").forEach(item => item.style.opacity = "0")
//     document.querySelectorAll("div img").forEach(img => img.style.width = "0px")

//     const explosion = document.createElement("div")
//     explosion.classList.add("explosion")

   
//     const rect = e.target.getBoundingClientRect()
//     explosion.style.left = ${rect.left + rect.width / 2 - 50}px
//     explosion.style.top = ${rect.top + rect.height / 2 - 50 + window.scrollY}px
//     document.body.appendChild(explosion)

//     setTimeout(() => {
//         explosion.remove()
//     }, 600)
// })

