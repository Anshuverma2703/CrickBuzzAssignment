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

let switchbtn = document.getElementById("play");
let switchplayer = 0;
let wordcol = data.puzzle[switchplayer].find_words.length;
let gridindex = data.puzzle[switchplayer].Alphabet_grid.length;
let findworlcol = new Map();
let check = new Map();
let element;
let SearchElement;
let str;
let Array_2d;
let count = 0;

switchbtn.addEventListener("click", (e) => {
  // console.log(e.target.value);
  if (e.target.value == 0) {
    switchplayer = e.target.value;
    Array_2d = [];
    findworlcol.clear();
    count++;
    check.clear();
    wordcol = data.puzzle[switchplayer].find_words.length;
    gridindex = data.puzzle[switchplayer].Alphabet_grid.length;
    displaygrid(wordcol, gridindex, switchplayer);
  } else {
    Array_2d = [];
    count++;
    findworlcol.clear();
    check.clear();
    switchplayer = e.target.value;
    wordcol = data.puzzle[switchplayer].find_words.length;
    gridindex = data.puzzle[switchplayer].Alphabet_grid.length;
    displaygrid(wordcol, gridindex, switchplayer);
  }
});

// calling display grid function to dispaly grid
if (count == 0) {
  displaygrid(wordcol, gridindex, switchplayer);
}

// declaring display grid function
function displaygrid(wordcol, gridindex, switchplayer) {
  let grid = document.querySelector(".right_down");
  grid.innerHTML = "";
  var table = document.createElement("table");
  table.setAttribute("class", "table");
  var div = document.createElement("div");
  div.setAttribute("class", "center");
  Array_2d = [];

  //   to making a grid
  for (let i = 0; i < gridindex; i++) {
    let array = [];
    let tr = document.createElement("tr");
    tr.setAttribute("class", "row");
    str = data.puzzle[switchplayer].Alphabet_grid[i];

    for (let j = 0; j < str.length; j++) {
      let char = str.charAt(j);
      array.push(char);
      let td = document.createElement("td");
      td.innerText = char;

      td.setAttribute("class", "cell");

      tr.appendChild(td);
    }
    table.appendChild(tr);
    Array_2d.push(array);
  }
  div.appendChild(table);
  grid.appendChild(div);

  // to make a searching world column
  let search = document.querySelector(".left2");
  search.innerHTML = "";
  for (let i = 0; i < wordcol; i++) {
    let para = document.createElement("p");
    para.setAttribute("class", "para");
    let strword = data.puzzle[switchplayer].find_words[i];

    strword = strword.split(" ").join("");

    if (findworlcol.has(strword)) {
      findworlcol.set(strword, findworlcol.get(strword) + 1);
    } else {
      findworlcol.set(strword, 1);
    }
    // console.log( "str "+str.length)
    para.innerText = strword;
    search.appendChild(para);
  }

  //   to take input from the input field on click submit button
  let input = document.getElementById("in");
  let btn = document.getElementById("btn");
  element = document.querySelectorAll(".cell");
  SearchElement = document.querySelectorAll(".para");
  let result;
  btn.addEventListener("click", () => {
    result = input.value.toUpperCase();
    // console.log(result)
    patternSearch(Array_2d, result);
  });
}
// console.log(Array_2d);
let x = [-1, -1, -1, 0, 0, 1, 1, 1];

let y = [-1, 0, 1, -1, 1, -1, 0, 1];

let maprow = new Map();
let mapcol = new Map();

function patternSearch(grid, word) {
  // Consider every point as starting
  // point and search given word

  let notfoundflag = false;
  for (let row = 0; row < gridindex; row++) {
    for (let col = 0; col < str.length; col++) {
      if (findworlcol.has(word) && search2D(grid, row, col, word)) {
        console.log(mapcol);
        console.log(maprow);
        ColorGrid(word);
        notfoundflag = true;
      } else {
        mapcol.clear();
        maprow.clear();
      }
    }
  }
  if (notfoundflag == false) {
    popupDiv("Element not found here", "red");
  }
}

function search2D(grid, row, col, word) {
  // If first character of word
  // doesn't match with
  // given starting point in grid.
  if (grid[row][col] != word[0]) {
    return false;
  } else {
    mapcol.set(0, col);
    maprow.set(0, row);
    // alert("Your input is not found")
  }

  let len = word.length;

  // Search word in all 8 directions
  // starting from (row, col)
  for (let dir = 0; dir < 8; dir++) {
    // Initialize starting point
    // for current direction
    let k,
      rd = row + x[dir],
      cd = col + y[dir];

    // First character is already checked,
    // match remaining characters
    for (k = 1; k < len; k++) {
      // If out of bound break
      if (rd >= gridindex || rd < 0 || cd >= str.length || cd < 0) break;

      // If not matched, break
      if (grid[rd][cd] != word[k]) break;

      // Moving in particular direction
      maprow.set(k, rd);
      rd += x[dir];
      mapcol.set(k, cd);
      cd += y[dir];
    }

    // If all character matched,
    // then value of must
    // be equal to length of word
    if (k == len) return true;
  }
  return false;
}

function ColorGrid(word) {
  let size = mapcol.size;
  let posarr = [];
  for (let i = 0; i < size; i++) {
    let col = mapcol.get(i);
    let row = maprow.get(i);
    posarr.push(col + row * str.length);
  }

  if (findworlcol.has(word) && !check.has(word)) {
    check.set(word, 1);
  }
  if (findworlcol.size == check.size) {
    popupDiv("Congratulation , Brother", "Green");
  }
  console.log(posarr);
  for (let i = 0; i < posarr.length; i++) {
    element[posarr[i]].style.backgroundColor = "yellow";
  }

  if (findworlcol.has(word)) {
    for (let i = 0; i < SearchElement.length; i++) {
      // console.log("iside Search")
      if (SearchElement[i].innerText == word) {
        SearchElement[i].style.textDecoration = "line-through";
      }
    }
  }
}

function popupDiv(data, color) {
  let div = document.querySelector(".popupMsg");
  let popup = document.createElement("div");
  popup.setAttribute("class", "popupDiv");
  popup.innerText = data;
  popup.style.backgroundColor = color;
  div.appendChild(popup);

  setTimeout(() => {
    popup.style.display = "none";
    popup.remove();
    console.log("closed");
  }, 3000);
}
