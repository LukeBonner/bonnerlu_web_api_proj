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
console.log(thebutton);
thebutton?.addEventListener("click", () => {
  const inputLen = theInput?.value.length ?? 0;
  if (inputLen > 0)  
    console.log("You entered", theInput?.value);
  else
    console.log("Please enter some text");
});

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
