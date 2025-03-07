document.addEventListener("mousemove", (e) => {
    let trail = document.createElement("div");
    trail.classList.add("trail");
    document.body.appendChild(trail);

    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;

    // Remove the trail after animation
    setTimeout(() => {
        trail.remove();
    }, 400);
});
