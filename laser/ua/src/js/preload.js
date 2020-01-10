function preloadFunc() {
  let links = {
    "rv": [
      "epilation",
      "nano-epilyatsiya",
      "shugaring",
      "about",
      "salon",
      "contact",
      "complex",
      "voskovaya-epilyatsiya",
      "policy"


    ],
    "lt": [
      "epilation",
      "nano-epilyatsiya",
      "about",
      "salon",
      "contact",
      "complex",
      "policy"

    ],
    "if": [
      "epilation",
      "about",
      "salon",
      "contact",
      "complex"
    ],
    "lv": [
      "epilation",
      "about",
      "salon",
      "contact",
      "complex",
      "policy"

    ]
  };
  let path = location.pathname.split("/");
  let pathArr = path.slice(2);
  console.log(pathArr);
  if (pathArr.length > 1 && links[pathArr[0]] && pathArr[1] !== "" && pathArr[1] !== "ua" && !links[pathArr[0]].includes(pathArr[1])) {
    let a = path.slice(0, -1).join("/");
    console.log(a);
    window.location.href = a + "/";
  }
  if (pathArr.length > 1 && links[pathArr[0]] && pathArr[1] !== "" && pathArr[1] === "ua" && pathArr[2] !== "" && !links[pathArr[0]].includes(pathArr[2])) {
    console.log("2");
    let a = path.slice(0, -1).join("/");
    console.log(a);

    window.location.href = a + "/";
  }
}

window.onpaint = preloadFunc();
