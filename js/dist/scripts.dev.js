"use strict";

// what is the path to the JSON file?
var apiURL = "../hoteldata.json"; //Go fetch it and then wait for a response.

fetch(apiURL).then(function (response) {
  return response.json();
}).then(function (myList) {
  //Once it comes back, display it to the console.
  console.log(myList);

  for (i = 0; i < myList.length; i++) {
    var myImageTag = document.createElement("img");
    myImageTag.src = myList[i].photo;
    var myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[i].name;
    var myAddressTag = document.createElement("address");
    myAddressTag.textContent = myList[i].address;
    var myPhoneTag = document.createElement("phone");
    myPhoneTag.textContent = myList[i].phone;
    var myFigureTag = document.createElement("figure");
    var theIconLeftTag = document.createElement("i");
    theIconLeftTag.className = "icon ion-md-car";
    var theAddress1Tag = document.createElement("p");
    theAddress1Tag.textContent = myList[i].address[0];
    console.log(myList[i].address[0]);
    var theAddress2Tag = document.createElement("p");
    theAddress2Tag.textContent = myList[i].address[1];
    console.log(myList[i].address[1]);
    var theIconRightTag = document.createElement("i");
    theIconRightTag.className = "icon ion-md-call"; //create span elements

    var theSpanLeftTag = document.createElement("span");
    theSpanLeftTag.appendChild(theIconLeftTag);
    theSpanLeftTag.appendChild(theAddress1Tag);
    theSpanLeftTag.appendChild(theAddress2Tag);
    var theSpanRightTag = document.createElement("span");
    theSpanRightTag.appendChild(theIconRightTag);
    theSpanRightTag.appendChild(myPhoneTag);
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);
    myFigureTag.appendChild(myPhoneTag);
    myFigureTag.appendChild(myAddressTag);
    myFigureTag.className = "happyCamper";
    document.getElementById('myCards').appendChild(myFigureTag);
  }
}); //end of "then" fat arrow function