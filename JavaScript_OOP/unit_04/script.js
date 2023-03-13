const list = new List(["one", "two", "three", "four"]);
document.querySelector("body").appendChild(list.render());

const list2 = new List2(["one", "two", "three", "four"], "active");
document.querySelector("body").appendChild(list2.render());

const list3 = new List3(
  ["one", "two", "three", "four"],
  ["text-center", "bold", "text-red"]
);
document.querySelector("body").appendChild(list3.render());
