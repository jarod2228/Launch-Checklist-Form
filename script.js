// Write your JavaScript code here!
window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json")
   .then(function(response) {
      return response.json()
}).then(function(json) {
   let targetDiv = document.getElementById("missionTarget");
   let theList = document.createElement("OL");
   let planetName = document.createElement("LI");
   let nameText = document.createTextNode(`Name: ${json[0].name}`);
   planetName.appendChild(nameText);
   theList.appendChild(planetName);
   let planetDiameter = document.createElement("LI");
   let diameterText = document.createTextNode(`Diameter: ${json[0].diameter}`);
   planetDiameter.appendChild(diameterText);
   theList.appendChild(planetDiameter);
   let planetStar = document.createElement("LI");
   let starText = document.createTextNode(`Star: ${json[0].star}`);
   planetStar.appendChild(starText);
   theList.appendChild(planetStar);
   let distanceFromEarth = document.createElement("LI");
   let coreDistance = document.createTextNode(`Distance from Galactic Core: ${json[0].distance}`);
   distanceFromEarth.appendChild(coreDistance);
   theList.appendChild(distanceFromEarth);
   let numberOfMoons = document.createElement("LI");
   let moonNumber = document.createTextNode(`Number of Moons: ${json[0].moons}`);
   numberOfMoons.appendChild(moonNumber);
   theList.appendChild(numberOfMoons);
   let planetImage = document.createElement("img");
   planetImage.src = `${json[0].image}`;
   targetDiv.appendChild(theList);
   targetDiv.appendChild(planetImage);
})
   document.getElementById("missionTarget").innerHTML = "Mission Destination";
   document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      document.getElementById("fuelStatus").style.visibility = "hidden";
      document.getElementById("cargoStatus").style.visibility = "hidden";
      fuelLevelValue = Number(fuelLevel.value);
      pilotNameInputValue = Number(pilotNameInput.value);
      copilotNameInputValue = Number(copilotNameInput.value);
      cargoMassValue = Number(cargoMass.value);
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("Cannot enter empty values.");
      } else if (!isNaN(pilotNameInputValue) || !isNaN(copilotNameInputValue) || isNaN(fuelLevelValue) || isNaN(cargoMassValue)) {
         alert("Invalid input. Pilot Name and Co-pilot Name must use alphabetical letters only. Fuel Level (L) and Cargo Mass (kg) must use numerical format.");
      } else {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotNameInput.value} is ready for launch`;
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
         let fuelNumber = document.getElementById("fuelStatus");
         if (fuelLevelValue < 10000) {
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            fuelNumber.innerHTML = `Fuel level is too low for launch`;
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("fuelStatus").style.visibility = "visible";
        } else {
           fuelNumber.style.visibility = "visible";
        }
         if (cargoMassValue > 10000) {
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("cargoStatus").innerHTML = `Cargo mass too high for launch`;
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("cargoStatus").style.visibility = "visible";
        } else {
           document.getElementById("cargoStatus").style.visibility = "visible";
        }
        if (cargoMassValue < 10000 && fuelLevelValue > 10000 && pilotNameInput.value !== "" && copilotNameInput.value !== "") {
         document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
         document.getElementById("launchStatus").style.color = "green";
        }
      }
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/