const btn = new Button(100, 50, "#e2e2e2", "test button");
document.querySelector(".out-1").appendChild(btn.render());

const btnRound = new ModernButton(200, 100, "#fafafa", "test round button", 25);
document.querySelector(".out-2").appendChild(btnRound.render());
