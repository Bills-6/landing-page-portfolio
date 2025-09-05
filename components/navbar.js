const hamburgerButton = document.getElementById("hamburger-button");
const navbar = document.getElementById("navbar");

hamburgerButton.addEventListener("click", () => {
	if (navbar.dataset.status === "closed") {
		navbarDoor("open");
	} else navbarDoor("close");
});

// [< close navbar if click is not in the target >]
document.addEventListener("click", (isClick)=> {
	if (!navbar.contains(isClick.target) &&
	!hamburgerButton.contains(isClick.target)
) navbarDoor("close");
});

// [< close navbar if user click escaoe >]
document.addEventListener("keydown", (isKey)=> {
	if (isKey.key === "Escape") navbarDoor("close");
	if (isKey.key === "b" || isKey.key === "B") {
		if (navbar.dataset.status === "closed") {
			navbarDoor("open");
		} else navbarDoor("close");
	}
})

function navbarDoor(forWhat) {
	if (forWhat === "open") {
		navbar.dataset.status = "opened";
		navbar.classList.remove("h-0", "p-0");
		navbar.classList.add("p-10");
	} else { 
		navbar.classList.add("h-0", "p-0"); 
		navbar.classList.remove("p-10");
		navbar.dataset.status = "closed";
	}
}