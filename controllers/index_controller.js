const products = [
  {
    name: "Apex 3 TKL",
    category: "keyboard"
  },
  {
    name: "Keychron C3 Pro",
    category: "keyboard"
  },
  {
    name: "Akko 3098 B/N",
    category: "keyboard"
  },
  {
    name: "Razer Viper V2 Pro",
    category: "mouse"
  },
  {
    name: "Pulsar X2V2",
    category: "mouse"
  },
  {
    name: "fantech Aria XD7",
    category: "mouse"
  },
  {
    name: "Dell XPS 15",
    category: "laptop"
  },
  {
    name: "Macbook Air M3",
    category: "laptop"
  },
  {
    name: "Acer Swift Go 14",
    category: "laptop"
  }
];

exports.homePage = (req, res) => {
  res.locals.products = products;
  res.render("index");
};
