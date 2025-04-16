
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
    

   
    
    function login()
    {
     
      var email = document.getElementById("email_field").value;
      var password = document.getElementById("password_field").value;
     localStorage.setItem("nowemail",email);
      firebase.auth().signInWithEmailAndPassword(email, password)
    
      .then(user => {
        
       console.log(user);
       
        alert("Welcome " +email);
       
      
      window.location.href = "Home.html";
          
          
        
     
 
      }).catch(function(error) {
        
        var errorCode = error.code;
        var errorMessage = error.message;
    
        window.alert("Error : " + errorMessage);
     });
  }


    
    function signUp()
    {
      
      const email = document.getElementById("email_field").value;
      const password = document.getElementById("password_field").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
        
      console.log(user);
      
       alert("Welcome " +email);
      
     
     window.location.href = "Home.html";
         
         
       
    

     })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("ERROR: " +errorCode);
      alert("ERROR: " +errorMessage)
      window.alert("Error : " + errorMessage);
    });
  }
  var db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true });
  db.collection('ADMIN').get().then((snapshot) => {
    snapshot.docs.forEach(doc =>
      {
        newuseradmin(doc);
      })
      })
      function newuseradmin(doc){
        var newuseremail = doc.data().admin;
        var now = localStorage.getItem("nowemail");
  if(now == newuseremail){
    document.getElementById("add-newgame").style.display="block";
    document.getElementById("callingnewuser").style.display = "block";
  }
      }
var newuser = document.querySelector("#callingnewuser");

newuser.addEventListener('submit',(e) =>
    {
        
      e.preventDefault();
      db.collection('ADMIN') .add(
        {
          admin: newuser.useremail.value,
        });
        newuser.useremail.value = '';
      })








   function signOut(){
      
      firebase.auth().signOut().then(() => {
      alert("Signed out");
      window.location.href = "index.html";
      localStorage.removeItem("nowemail");
  })}
  
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
     
     
     
      var form = document.querySelector("#add-newgame");    
    form.addEventListener('submit',(e) =>
    {
        
      e.preventDefault();
      db.collection('New Game') .add(
        {
          gamename: form.Gamename.value,
          gameimglink : form.Gameimgurl.value,
          gameurl: form.Gameurl.value,
          category: form.category.value,
        });
        form.Gamename.value = '';
        form.Gameimgurl.value = '';
        form.Gameurl.value = '';
        form.category.value = '';
    })
    
  
          var newgame = document.querySelector('.row1');
         
         
          var srh = document.getElementById("ul");
          function addnewgame(doc){
            var div = document.createElement('div');
            div.className= 'column';
            let a = document.createElement('a');
            a.className = "gogo";
           let srhn = document.createElement('li');
           srhn.className = "names";
           let lia = document.createElement('a');
           let gamelink = doc.data().gameurl;
           lia.href= gamelink;
           lia.setAttribute("href" , gamelink);
          let  gamename = doc.data().gamename;
           lia.innerHTML = gamename;
           srhn.appendChild(lia);
           srh.appendChild(srhn);
          
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
            newgame.appendChild(div);

           }
           
            db.collection('New Game').get().then((snapshot) => {
            snapshot.docs.forEach(doc =>
              {
                addnewgame(doc);
              })
              })
    
    
    
 
  
  


  
  


