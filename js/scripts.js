// what is the path to the JSON file?
const apiURL = "hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

for (i = 0; i < myList.length; i++) {


    let myImageTag = document.createElement("img");
    myImageTag.src = myList[i].photo;

    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[i].name;

    let myAddressTag = document.createElement("address");
    myAddressTag.textContent = myList[i].address;

    let myPhoneTag = document.createElement("phone");
    myPhoneTag.textContent = myList[i].phone;

    let myFigureTag = document.createElement("figure");

    let theIconLeftTag = document.createElement("i");
    theIconLeftTag.className = "icon ion-md-car";

    let theAddress1Tag = document.createElement("p");
    theAddress1Tag.textContent = myList[i].address[0];
    console.log(myList[i].address[0]);

    let theAddress2Tag = document.createElement("p");
    theAddress2Tag.textContent = myList[i].address[1];
    console.log(myList[i].address[1]);
    let theIconRightTag = document.createElement("i");
    theIconRightTag.innerHTML = `<ion-icon name="logo-model-s"></ion-icon>`;
    theAddress2Tag.innerHTML = myList[i].address;

    theIconRightTag.className = "icon ion-md-call";

  //create span elements
  let theSpanLeftTag = document.createElement("span");
  theSpanLeftTag.appendChild(theIconLeftTag);
  theSpanLeftTag.appendChild(theAddress1Tag);
  theSpanLeftTag.appendChild(theAddress2Tag);

  let theSpanRightTag = document.createElement("span");
  theSpanRightTag.appendChild(theIconRightTag);
  theSpanRightTag.appendChild(myPhoneTag);

    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);
    myFigureTag.appendChild(myPhoneTag);
    myFigureTag.appendChild(myAddressTag);
    myFigureTag.className = "happyCamper"
    
    
    document.getElementById('myCards').appendChild(myFigureTag);
}
}); //end of "then" fat arrow function