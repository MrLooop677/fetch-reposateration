let theInput = document.querySelector(".get-repose input"),
  getButton = document.querySelector(".get-repose .get-button"),
  reposeData = document.querySelector(".show-data");

getButton.onclick = GetData;

//   function Get Data
function GetData() {
  if (theInput.value == "") {
    reposeData.innerHTML = "<span>PLease Write Githup UserName</span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => response.json())

      .then((repositories) => {
        // Empty container
        reposeData.innerHTML = "";

        // Loop In repositories
        repositories.forEach((repo) => {
          // Craete Main Div
          let MainDiv = document.createElement("div");

          // add Class to Main div
          MainDiv.className = "repo-box";

          // Craete Text Main Div
          let reponame = document.createTextNode(repo.name);

          //add text to main div
          MainDiv.appendChild(reponame);

          // craete the Url
          let theUrl = document.createElement("a");

          // create text to the URL
          let txturl = document.createTextNode("visit");

          // add text to the URL
          theUrl.appendChild(txturl);

          // crete link
          theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

          // append attripute target
          theUrl.setAttribute("target", "_blank");

          // add the Url to div main
          MainDiv.appendChild(theUrl);

          // create starspan count
          let starspan = document.createElement("span");

          // create starspan text count
          let txtstart = document.createTextNode(
            `stars ${repo.stargazers_count}`
          );

          // add text span to span stars
          starspan.appendChild(txtstart);

          // add start span to main div
          MainDiv.appendChild(starspan);

          // add maindiv to body
          reposeData.appendChild(MainDiv);
        });
      });
  }
}
