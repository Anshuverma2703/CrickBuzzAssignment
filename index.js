let data = {
  puzzle: [
    {
      find_words: [
        "BOWLING",
        "STUMPED",
        "FIELDER",
        "BATSMAN",
        "RUN OUT",
        "CATCH",
        "UMPIRE",
        "APPEAL",
        "BATTING",
        "SPIN",
        "TEA",
        "RUNS",
        "STUMPS",
        "BOUNDARY",
      ],
      Alphabet_grid: [
        "OUMBAMRUNOUTFHWNT",
        "SZIKQRWHZZTMATITE",
        "THERUNSHXILNNHGUA",
        "UDWZMQFBYWRPOSNFO",
        "MTIYICENJGBOWLING",
        "PUGBNAOCRRAXAYEPQ",
        "EYBONNPSPPTQWFUJR",
        "DLTCICZTPISTGKKCE",
        "KQSONZAUVIMSJBFAI",
        "LNFQGUYMIPASFAFTE",
        "OISQSKSPFHNYZTNCV",
        "QHHKASVSYXUHBTHHB",
        "HCMXJCXAMIVHOIPSJ",
        "SUMPIREWOTVEVNTPH",
        "SQHTYSVNOQSYFGJOZ",
        "HBOUNDARYAZWRIFYO",
        "QSGEDMKSLNOVDEJED",
        "TDCJEFIELDERJHDDM",
        "YARWXAFYNQSMZHDDV",
        "URJLWZGXZWSVFUXAH",
        "HSPINTAGVCVISDZUJ",
        "VNHUEVFRVAPPEALHE",
      ],
    },
    {
      find_words: [
        "HOCKEY",
        "RACE",
        "PLAYER",
        "STADIUM",
        "RUGBY",
        "TENNIS",
        "JUDO",
        "ATHLETICS",
        "FENCING",
        "SWIMMING",
        "FOOTBALL",
        "MARATHON",
        "VOLLEYBALL",
        "BASEBALL",
        "CHAMPION",
      ],
      Alphabet_grid: [
        "NNAREYALPNBWKTXL",
        "VOIXAWGYOHFOFFLK",
        "FBIZVNEHBJRZJAIE",
        "TUKPIGTABASEBALL",
        "PJCCMAXCCKXYLRRG",
        "KSNQRAQESIETGSDY",
        "VEWAYDHFTLJOQOAW",
        "FYMIUAOCLPPPNXBI",
        "FXWHMOTOYSTADIUM",
        "ATZRTMVHTZHJSIKC",
        "DQQBPTIHLYDUUEHR",
        "YIANERONQEADFJHD",
        "ZLQNUCXVGMTOFRYM",
        "LNNGKAYGYGDIXRDS",
        "TIBEZRGVQMNBCHME",
        "SYYIDVXJDTFYLSSU",
      ],
    },
  ],
};
//  let str = data.puzzle[0].Alphabet_grid[0];
//  console.log(str)

let getplay = document.getElementById("play");
let getvalue = 0;

// let options = document.querySelector("#option1");
getplay.addEventListener("click", (e) => {
  console.log("hellow");
  console.log(e.target.value);
  if (e.target.value == 0 || e.target.value == 1) {
    getvalue = e.target.value;
  }
});

let changeplayer = "puzzle";
if (getvalue == 1) {
  changeplayer = "find_words";
}

let grid = document.querySelector(".right_down");
var table = document.createElement("table");
table.setAttribute("class", "table");
var div = document.createElement("div");
div.setAttribute("class", "center");
// let length = data.puzzle[getvalue].Alphabet_grid.length;
console.log("lenght" + length);
for (let i = 0; i < 22; i++) {
  let tr = document.createElement("tr");
  let str = data.puzzle[0].Alphabet_grid[i];
  let index = 17;
  if (getvalue == 1) {
    index = 16;
  }
  for (let j = 0; j < index; j++) {
    let char = str.charAt(j);
    let td = document.createElement("td");
    td.innerHTML = char;

    td.setAttribute("class", "cell");

    tr.appendChild(td);
  }
  table.appendChild(tr);
}
div.appendChild(table);
grid.appendChild(div);

let search = document.querySelector(".left2");

for (let i = 0; i < 14; i++) {
  let para = document.createElement("p");
  let str = data.puzzle[0].find_words[i];
  para.innerHTML = str;
  search.appendChild(para);
}

let input = document.getElementById("in");
let btn = document.getElementById("btn");
let element = document.querySelectorAll(".cell");
let result;
btn.addEventListener("click", () => {
  result = input.value.toUpperCase();
  // console.log(result)
  searching(result);
});

function searching(res) {
  let j = 0;
  let verticleDirflag = true;
  // let flag;
  // console.log("hell")
  for (let i = 0; i < element.length; i++) {
    if (
      element[i].innerText === res[j] &&
      element[i].style.backgroundColor != "yellow"
    ) {
      // console.log(res[j]);
      // let temp = i;
      let flag = horizontaldirectionSearch(i, j, res);

      // console.log("sd"+flag)
      if (flag == false) {
        console.log(res);
        continue;

        // return true;
        // break;
      } else if (flag === true) {
        verticleDirflag = false;
      }
    }
  }
  if (verticleDirflag == true) {
    for (let i = 0; i < element.length; i++) {
      if (
        element[i].innerText === res[j] &&
        element[i].style.backgroundColor != "yellow"
      ) {
        // console.log(res[j]);
        let flag = verticleSearch(i, j, res);

        // console.log("sd"+flag)
        if (flag == false) {
          console.log(res);
          continue;
        } else if (flag === true) {
          verticleDirflag = false;
          break;
        }
      }
    }
  }
}
function verticleSearch(i, j, res) {
  let k;
  let flag = true;
  let indexArray = [];
  indexArray.push(i);
  if (element[i + 17].innerText === res[++j]) {
    let temp = 0;

    for (k = 1; k < res.length; k++) {
      // console.log("verti"+element[i+temp].innerText)
      temp += 17;
      if (element[i + temp].innerText != res[k]) {
        flag = false;
        break;
      }
      indexArray.push(i + temp);
    }
    console.log(indexArray)
    console.log(flag)

    if (flag == true) {
      for (let l = 0; l < indexArray.length; l++) {
        // console.log("hellow")

        element[indexArray[l]].style.backgroundColor = "yellow";
      }
    }
    return flag
   
  }
}
function horizontaldirectionSearch(i, j, res) {
  let flag = true;
  let k;
  if (
    element[i + 1].innerText === res[++j] &&
    element[i + 1].style.backgroundColor != "yellow"
  ) {
    // to change the row
    for (k = 1; k < res.length; k++) {
      console.log("akjbk");
      if (element[i + k].innerText != res[k]) {
        flag = false;
        break;
      }
    }
    console.log(k + res.length);
    if (flag == true) {
      for (let l = i; l < res.length + i; l++) {
        // console.log(k);
        console.log("hellow");
        console.log(element[l].innerText);
        element[l].style.backgroundColor = "yellow";
      }
    }

    return flag;
  }
}
