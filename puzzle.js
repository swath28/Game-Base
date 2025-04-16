var firebaseConfig = {
 
    apiKey: "AIzaSyDptTWf--nlTNfIOEjn6Bry-hyDZCI-SC0",
      authDomain: "gamebase-2ead4.firebaseapp.com",
      projectId: "gamebase-2ead4",
      storageBucket: "gamebase-2ead4.appspot.com",
      messagingSenderId: "13800363077",
      appId: "1:13800363077:web:7fa39de574402683aebf2c",
      measurementId: "G-5EYF0322F4" 
      };
      
      firebase.initializeApp(firebaseConfig);



function signOut(){
      
    firebase.auth().signOut();
    alert("Signed out");
    window.location.href = "index.html";
    localStorage.removeItem("nowemail");
}
function filternames() {
    const filtervalue = document.getElementById('search').value.toUpperCase();
    
    const ul = document.getElementById('ul');
    const li = ul.querySelectorAll('li.names');
    for(var i=0;i< li.length;i++)
    {
      
      let a = li[i].getElementsByTagName("a")[0];
    
      if(a.innerText.toUpperCase().indexOf(filtervalue)>-1){
        li[i].style.display="block";
      } else  {
        li[i].style.display="none";
      }
      }
      if (filtervalue.length==0) {
      for(var i=0;i<li.length;i++){
      
        li[i].style.display="none";
      } } }


      var db = firebase.firestore();
      db.settings({ timestampsInSnapshots: true });



db.collection('New Game').get().then((snapshot) => {
    snapshot.docs.forEach(doc =>
      {
        addnewgamearcade(doc);
      })
      })
      var newgamearcade = document.querySelector('.row3');
      function addnewgamearcade(doc){
        var gamecategory = doc.data().category;
        if (gamecategory.toUpperCase() == "PUZZLE" ){
            var div = document.createElement('div');
            div.className= 'column';
            let a = document.createElement('a');
            a.className = "gogo";
          
          
           let gamelink = doc.data().gameurl;
           
          
          let  gamename = doc.data().gamename;
          
          
            div.setAttribute('data-id', doc.id);
           
            a.setAttribute("href" , gamelink);
          
           let gameimage =  doc.data().gameimglink;
            
             let img = document.createElement('img');
            img.setAttribute("src", gameimage); 
            a.appendChild(img);

            
           var   link = document.createElement("h3");
           var txt = document.createTextNode(gamename);
           link.appendChild(txt);
            a.appendChild(link);
            div.appendChild(a);
            
          newgamearcade.appendChild(div);
        }
      }