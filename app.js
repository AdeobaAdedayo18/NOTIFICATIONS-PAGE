const notiNumber = document.getElementById("noti-number");
const markAll = document.getElementById("mark-all");
const notifications = document.querySelectorAll(".notification");
calculate();
markAll.addEventListener("click", e=>{
    console.log("entered");
    
    const object = document.querySelectorAll(".notification");
    console.log("selected");
    
    object.forEach(element =>{
        console.log("about to remove");
        
        element.classList.remove("read");
        const unread = element.querySelector(".unread");
        unread.classList.remove("open");
        calculate();
    })

})

notifications.forEach(notification => {
    notification.addEventListener("click", () => {
        notification.classList.remove("read");
        const unread = notification.querySelector(".unread");
        if (unread) {  // Check if 'unread' element exists
            unread.classList.remove("open");
        }
        calculate();
    });
});

function calculate(){
    let count = 0; // Initialize count to 0
    const notifications = document.querySelectorAll(".notification");

    notifications.forEach(notification => {
        const unread = notification.querySelector(".unread.open"); // Check for unread notifications
        if (unread) {
            count++; // Increment count if unread notification is found
        }
    });

    notiNumber.innerText = count; // Update the notification number display
}


