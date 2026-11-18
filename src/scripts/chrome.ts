// Page chrome: closes the mobile menu after an anchor is chosen (or on Escape),
// and shows the bottom call bar once the reception card has left the viewport.
// Without JS the menu still opens (<details>) and the call bar stays visible.
const menu = document.querySelector<HTMLDetailsElement>("[data-menu]");
if (menu) {
  menu.addEventListener("click", (e) => {
    const t = e.target as HTMLElement;
    if (t.closest(".menu__list a")) menu.open = false;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary")?.focus();
    }
  });
}

const bar = document.querySelector<HTMLElement>("[data-callbar]");
const card = document.getElementById("reception");
if (bar && card && "IntersectionObserver" in window) {
  bar.classList.add("is-armed");
  const io = new IntersectionObserver(([entry]) => {
    const passed = !entry.isIntersecting && entry.boundingClientRect.top < 0;
    bar.classList.toggle("is-shown", passed);
  });
  io.observe(card);
}
