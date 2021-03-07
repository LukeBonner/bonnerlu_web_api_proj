import axios, {AxiosResponse} from "axios";


/*axios.get("https://dog.ceo/api/breeds/list/all").then((r: AxiosResponse) => r.data).then((dogData: any) => {
    console.log(dogData.message)
    console.log(dogData.message.poodle)
    console.log(dogData.message.terrier)
    console.log(dogData.message.terrier[2])
});
*/
interface meowPic{
  url: string;
}

interface Meow{
  name: string;
  description: string;
  image: meowPic
}

let theInput: HTMLInputElement | null;
let thebutton: HTMLButtonElement | null;
theInput = document.querySelector("#userInput > input[type=text]");
thebutton = document.querySelector("#userInput > button");
let breedLimit = Number(theInput?.value);
let tableBody: HTMLTableSectionElement | null;
  tableBody = document.querySelector("#progOutput table > tbody");
console.log(thebutton);
thebutton?.addEventListener("click", () => {
  let oldRows: NodeListOf<HTMLTableRowElement> | undefined;
  oldRows = tableBody?.querySelectorAll("tr");
  if (oldRows) {
    for (let k = 0; k < oldRows?.length; k++) {
      const oldOne = oldRows[k];
      tableBody?.removeChild(oldOne);
    }
  }

  axios
.get(catURL, {
  params: {
    limit: breedLimit,
  },
})
.then((r: AxiosResponse) => r.data)
.then((breeds: any[]) => {
  const meowArr = breeds.map(
    (b: any): Meow =>{
      return{
        name: b.name,
        description: b.description,
        image: b.image,

      };
    }
  );
  return meowArr;
})
.then((meows: Meow[]) => {
  let tableBody: HTMLTableSectionElement | null;
  tableBody = document.querySelector("#progOutput table > tbody");
  for(let i = 0;i<breedLimit;i++){
    const catImage: HTMLImageElement = document.createElement("img");
    catImage.setAttribute("src",meows[i].image.url);
    const tr = document.createElement("tr");
    const meowNameCell = document.createElement("td");
    meowNameCell.appendChild(document.createTextNode(meows[i].name))
    const meowDescCell = document.createElement("td");
    meowDescCell.appendChild(document.createTextNode(meows[i].description))
    const meowImagCell = document.createElement("td");
    meowImagCell.appendChild(catImage)
    tr.appendChild(meowNameCell);
    tr.appendChild(meowDescCell);
    tr.appendChild(meowImagCell);

    tableBody?.appendChild(tr);


  }

  })
  
})


if(isNaN(breedLimit)) breedLimit = 10;
const catURL = "https://api.thecatapi.com/v1/breeds";
axios
.get(catURL, {
  params: {
    limit: breedLimit,
  },
})
.then((r: AxiosResponse) => r.data)
.then((breeds: any[]) => {
  const meowArr = breeds.map(
    (b: any): Meow =>{
      return{
        name: b.name,
        description: b.description,
        image: b.image,

      };
    }
  );
  return meowArr;
})
.then((meows: Meow[]) => {
  let tableBody: HTMLTableSectionElement | null;
  tableBody = document.querySelector("#progOutput table > tbody");
  meows.forEach((m:Meow)=>{
    const catImage: HTMLImageElement = document.createElement("img");
    catImage.setAttribute("src",m.image.url);
    const tr = document.createElement("tr");
    const meowNameCell = document.createElement("td");
    meowNameCell.appendChild(document.createTextNode(m.name))
    const meowDescCell = document.createElement("td");
    meowDescCell.appendChild(document.createTextNode(m.description))
    const meowImagCell = document.createElement("td");
    meowImagCell.appendChild(catImage)
    tr.appendChild(meowNameCell);
    tr.appendChild(meowDescCell);
    tr.appendChild(meowImagCell);

    tableBody?.appendChild(tr);




  })
  
})

axios.get("https://dog.ceo/api/breed/hound/images")
.then((r: AxiosResponse) => r.data)
.then((dogPics: any)=>{
  let tableBody: HTMLTableSectionElement | null;
  tableBody = document.querySelector("#progOutputDog table > tbody");
  for(let i = 0;i<10;i++){
  const dogImage: HTMLImageElement = document.createElement("img");
  
  dogImage.setAttribute("src",dogPics.message[i]);
  tableBody?.appendChild(dogImage);
  }
  
})



