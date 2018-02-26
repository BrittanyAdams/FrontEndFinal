$(".ico").hover(function(){
    $(this).css("transform", "scale(1.25)");
    }, function(){
        $(this).css("transform", "scale(1)");
});

var toast="";

function loadRepo(url, callback) {
    const gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        callback(this);
      }
    };
    gitHubRequest.open("GET", url, true);
    gitHubRequest.send();
  }
  
  function loadRepoCallback(gitHubRequest) {
    //document.getElementById("githubProfile").innerHTML = gitHubRequest.responseText;
    parsed=JSON.parse(gitHubRequest.responseText);

    var x;
    for(x in parsed){
      document.getElementById('gitItems').innerHTML+="<li class='col-md-4 text-center'> <a target='_blank' href='"+parsed[x].html_url+"'> "+parsed[x].name+"</li>";
    }
  }

loadRepo('https://api.github.com/users/BrittanyAdams/repos',loadRepoCallback);




  //   // Plug in the .html_url and .name from the parsed object.  To make this a link you'll need 
  //   // Append the new list items to the element you retrieved from HTML
  // }