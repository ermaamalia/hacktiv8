var buatNama = function (nama) {
    return function () {
        if(nama === ''){
          alert("Please insert your name!");
          console.log("Please insert your name!")
        }
        else{
          alert("Welcome "+ nama + " to singervote.com");
          console.log("Welcome "+ nama + " to singervote.com");
        }
    }
};


function artist() { 
      var buah = ["Bruno Mars", "Taylor Swift", "Justin Bieber", "Maroon5"];
      var teks = "";
      var i;
      for (i=0; i<buah.length; i++) {
         teks += buah[i]+ ", ";
      }

      alert("Choose 1 of those artist: "+ teks);
      console.log(teks);
   }


var buatVote = function (vote) {
    return function () {
        if(vote === ''){
          alert("Please insert your artist name to vote!");
          console.log("Please insert your artist name to vote!");
        }
        else{
          alert("You vote "+ vote + " .Thank you for the vote.");
          console.log("You vote "+ vote + " .Thank you for the vote.");
        }
    }
};

function main(){
  var sapaanPertama = buatNama(prompt("What is your name?"));
  sapaanPertama();
  
  artist();
  
  var hasilVote = buatVote(prompt("Input your favorite Singer"));
  hasilVote();
  

}
main();
