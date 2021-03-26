 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAanZKk1t0ktz9n4k4h4fNviTKar6-lDYM",
    authDomain: "peppacoin-28b2b.firebaseapp.com",
    projectId: "peppacoin-28b2b",
    storageBucket: "peppacoin-28b2b.appspot.com",
    messagingSenderId: "603140205573",
    appId: "1:603140205573:web:a9ae0785444927bc82406c",
    measurementId: "G-2FE3CDKYJ5"
  };
  
src="https://code.jquery.com/jquery-3.5.1.min.js"

function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('.page', true);
    setVisible('#loading', false);
  });

  tempHashes = 0;
  var isMining = false;  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();
  var Auth  = firebase.auth();
  var empty = "";
    window.onload = function() {
        firebase.auth().onAuthStateChanged(user => {
        if(user)
        {
            isMining = false;
            if(window.location.href.indexOf("wallet") > -1)
            {
                InitializeWallet(user);
            }
            else if(window.location.href.indexOf("faucet") > -1)
            {
                InitializeFaucet(user);
            }
            else if(window.location.href.indexOf("referrals") > -1)
            {
                InitializeReferrals();
            }
            else if(window.location.href.indexOf("index") >-1)
            {
                var price = document.getElementById("PeppaPrice");
                var docRef = db.collection("data").doc("data");
                docRef.get().then((doc) => {
                    if (doc.exists) {
                        var data = doc.data();
                        price.innerHTML = "1 PEPPA = " + data.PeppaValue + "USD";
                    }
                })
                        var modal = document.getElementById("GoToWallet");
                        var modal2 = document.getElementById("Loginbtn");
                        modal.style.display = "block";
                        modal2.style.display = "none";
                var towalletbtn = document.getElementById("GoToWallet");
                towalletbtn.onclick = function(){
                    window.location.href = "wallet.html";
            }
            }
            else if(window.location.href.indexOf("trade") > -1)
            {
                InitializeTrade();
                $(document).ready(function(){
                    var btn = document.getElementById("AmazonBtn");
                    var div = document.getElementById("amazon");
                    var div2 = document.getElementById("itunes");
                    var div3 = document.getElementById("microsoft");
                    var div4 = document.getElementById("starbucks");
                    btn.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                                var data = doc.data();
                                var TenGc= document.getElementById("10AGC");
                                var cost = document.getElementById("AmazonCost1");
                    
                                div.style.display="block";
                                div2.style.display="none";
                                div3.style.display="none";
                                div4.style.display="none";
                                TenGc.value ="Cost After Fees: "  + ((10/Number(data.PeppaValue) + (10/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                                cost.innerHTML="10$"
                                itemDisplay.innerHTML="10$ Amazon Gift Card"
                            }
                        })
                    }
                    var btn1 = document.getElementById("AmazonBtn1");
                    btn1.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10AGC");
                            var cost = document.getElementById("AmazonCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((25/Number(data.PeppaValue) + (25/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="25$"
                            itemDisplay.innerHTML="25$ Amazon Gift Card"
                            document.getElementById("myDropdown").classList.toggle("show");
                        }
                        })
                    }
                    var btn2 = document.getElementById("AmazonBtn2");
                    btn2.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10AGC");
                            var cost = document.getElementById("AmazonCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((50/Number(data.PeppaValue) + (50/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="50$"
                            itemDisplay.innerHTML="50$ Amazon Gift Card"
                            document.getElementById("myDropdown").classList.toggle("show");
                        }
                        })
                    }
                    var btn0 = document.getElementById("AmazonBtn0");
                    btn0.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10AGC");
                            var cost = document.getElementById("AmazonCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((10/Number(data.PeppaValue) + (10/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="10$"
                            itemDisplay.innerHTML="10$ Amazon Gift Card"
                            document.getElementById("myDropdown").classList.toggle("show");
                        }
                        })
                    }
                    var btn3 = document.getElementById("AmazonBtn3");
                    btn3.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10AGC");
                            var cost = document.getElementById("AmazonCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((100/Number(data.PeppaValue) + (100/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="100$"
                            itemDisplay.innerHTML="100$ Amazon Gift Card"
                            document.getElementById("myDropdown").classList.toggle("show");
                        }
                        })
                    }
                    var btn4 = document.getElementById("AmazonBtn4");
                    btn4.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10AGC");
                            var cost = document.getElementById("AmazonCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((250/Number(data.PeppaValue) + (250/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="250$"
                            itemDisplay.innerHTML="250$ Amazon Gift Card"
                            document.getElementById("myDropdown").classList.toggle("show");
                        }
                        })
                    }
                    var btn5 = document.getElementById("AmazonBtn5");
                    btn5.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10AGC");
                            var cost = document.getElementById("AmazonCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((500/Number(data.PeppaValue) + (500/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="500$"
                            itemDisplay.innerHTML="500$ Amazon Gift Card"
                            document.getElementById("myDropdown").classList.toggle("show");
                        }
                        })
                    }
                    var btn6 = document.getElementById("AmazonBtn6");
                    btn6.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10AGC");
                            var cost = document.getElementById("AmazonCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((1000/Number(data.PeppaValue) + (1000/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="1000$"
                            itemDisplay.innerHTML="1000$ Amazon Gift Card"
                            document.getElementById("myDropdown").classList.toggle("show");
                        }
                        })
                    }
                    var btn7 = document.getElementById("AmazonBtn7");
                    btn7.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10AGC");
                            var cost = document.getElementById("AmazonCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((2500/Number(data.PeppaValue) + (2500/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="2500$"
                            itemDisplay.innerHTML="2500$ Amazon Gift Card"
                            document.getElementById("myDropdown").classList.toggle("show");
                        }
                        })
                    }


                    var btn = document.getElementById("ItunesBtn");
                    btn.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                                var data = doc.data();
                                var TenGc= document.getElementById("10IGC");
                                var cost = document.getElementById("ItunesCost1");
                    
                                div2.style.display="block";
                                div.style.display="none";
                                div3.style.display="none";
                                div4.style.display="none";
                                TenGc.value ="Cost After Fees: "  + ((10/Number(data.PeppaValue) + (10/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                                cost.innerHTML="10$"
                                itemDisplay1.innerHTML="10$ Itunes Gift Card"
                            }
                        })
                    }
                    var ibtn1 = document.getElementById("ItunesBtn1");
                    ibtn1.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10IGC");
                            var cost = document.getElementById("ItunesCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((25/Number(data.PeppaValue) + (25/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="25$"
                            itemDisplay1.innerHTML="25$ Itunes Gift Card"
                            document.getElementById("myDropdown1").classList.toggle("show");
                        }
                        })
                    }
                    var ibtn2 = document.getElementById("ItunesBtn2");
                    ibtn2.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10IGC");
                            var cost = document.getElementById("ItunesCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((50/Number(data.PeppaValue) + (50/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="50$"
                            itemDisplay1.innerHTML="50$ Itunes Gift Card"
                            document.getElementById("myDropdown1").classList.toggle("show");
                        }
                        })
                    }
                    var ibtn0 = document.getElementById("ItunesBtn0");
                    ibtn0.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10IGC");
                            var cost = document.getElementById("ItunesCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((10/Number(data.PeppaValue) + (10/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="10$"
                            itemDisplay1.innerHTML="10$ Itunes Gift Card"
                            document.getElementById("myDropdown1").classList.toggle("show");
                        }
                        })
                    }
                    var ibtn3 = document.getElementById("ItunesBtn3");
                    ibtn3.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10IGC");
                            var cost = document.getElementById("ItunesCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((100/Number(data.PeppaValue) + (100/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="100$"
                            itemDisplay1.innerHTML="100$ Itunes Gift Card"
                            document.getElementById("myDropdown1").classList.toggle("show");
                        }
                        })
                    }
                    var ibtn4 = document.getElementById("ItunesBtn4");
                    ibtn4.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10IGC");
                            var cost = document.getElementById("ItunesCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((250/Number(data.PeppaValue) + (250/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="250$"
                            itemDisplay1.innerHTML="250$ Itunes Gift Card"
                            document.getElementById("myDropdown1").classList.toggle("show");
                        }
                        })
                    }
                    var ibtn5 = document.getElementById("ItunesBtn5");
                    ibtn5.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10IGC");
                            var cost = document.getElementById("ItunesCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((500/Number(data.PeppaValue) + (500/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="500$"
                            itemDisplay1.innerHTML="500$ Itunes Gift Card"
                            document.getElementById("myDropdown1").classList.toggle("show");
                        }
                        })
                    }
                    var ibtn6 = document.getElementById("ItunesBtn6");
                    ibtn6.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10IGC");
                            var cost = document.getElementById("ItunesCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((1000/Number(data.PeppaValue) + (1000/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="1000$"
                            itemDisplay1.innerHTML="1000$ Itunes Gift Card"
                            document.getElementById("myDropdown1").classList.toggle("show");
                        }
                        })
                    }
                    var ibtn7 = document.getElementById("ItunesBtn7");
                    ibtn7.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10IGC");
                            var cost = document.getElementById("ItunesCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((2500/Number(data.PeppaValue) + (2500/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="2500$"
                            itemDisplay1.innerHTML="2500$ Itunes Gift Card"
                            document.getElementById("myDropdown1").classList.toggle("show");
                        }
                        })
                    }
                    var Mbtn = document.getElementById("MicrosoftBtn");
                    Mbtn.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                                var data = doc.data();
                                var TenGc= document.getElementById("10MGC");
                                var cost = document.getElementById("MicrosoftCost1");
                    
                                div2.style.display="none";
                                div3.style.display="block";
                                div.style.display="none";
                                div4.style.display="none";
                                TenGc.value ="Cost After Fees: "  + ((10/Number(data.PeppaValue) + (10/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                                cost.innerHTML="10$"
                                itemDisplay2.innerHTML="10$ Microsoft Gift Card"
                            }
                        })
                    }
                    var Mbtn1 = document.getElementById("MicrosoftBtn1");
                    Mbtn1.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10MGC");
                            var cost = document.getElementById("MicrosoftCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((25/Number(data.PeppaValue) + (25/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="25$"
                            itemDisplay2.innerHTML="25$ Microsoft Gift Card"
                            document.getElementById("myDropdown2").classList.toggle("show");
                        }
                        })
                    }
                    var Mbtn2 = document.getElementById("MicrosoftBtn2");
                    Mbtn2.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10MGC");
                            var cost = document.getElementById("MicrosoftCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((50/Number(data.PeppaValue) + (50/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="50$"
                            itemDisplay2.innerHTML="50$ Microsoft Gift Card"
                            document.getElementById("myDropdown2").classList.toggle("show");
                        }
                        })
                    }
                    var Mbtn0 = document.getElementById("MicrosoftBtn0");
                    Mbtn0.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10MGC");
                            var cost = document.getElementById("MicrosoftCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((10/Number(data.PeppaValue) + (10/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="10$"
                            itemDisplay2.innerHTML="10$ Microsoft Gift Card"
                            document.getElementById("myDropdown2").classList.toggle("show");
                        }
                        })
                    }
                    var Mbtn3 = document.getElementById("MicrosoftBtn3");
                    Mbtn3.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10MGC");
                            var cost = document.getElementById("MicrosoftCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((100/Number(data.PeppaValue) + (100/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="100$"
                            itemDisplay2.innerHTML="100$ Microsoft Gift Card"
                            document.getElementById("myDropdown2").classList.toggle("show");
                        }
                        })
                    }
                    var Mbtn4 = document.getElementById("MicrosoftBtn4");
                    Mbtn4.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10MGC");
                            var cost = document.getElementById("MicrosoftCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((250/Number(data.PeppaValue) + (250/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="250$"
                            itemDisplay2.innerHTML="250$ Microsoft Gift Card"
                            document.getElementById("myDropdown2").classList.toggle("show");
                        }
                        })
                    }
                    var Mbtn5 = document.getElementById("MicrosoftBtn5");
                    Mbtn5.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10MGC");
                            var cost = document.getElementById("MicrosoftCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((500/Number(data.PeppaValue) + (500/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="500$"
                            itemDisplay2.innerHTML="500$ Microsoft Gift Card"
                            document.getElementById("myDropdown2").classList.toggle("show");
                        }
                        })
                    }
                    var Mbtn6 = document.getElementById("MicrosoftBtn6");
                    Mbtn6.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10MGC");
                            var cost = document.getElementById("MicrosoftCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((1000/Number(data.PeppaValue) + (1000/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="1000$"
                            itemDisplay2.innerHTML="1000$ Microsoft Gift Card"
                            document.getElementById("myDropdown2").classList.toggle("show");
                        }
                        })
                    }
                    var Mbtn7 = document.getElementById("MicrosoftBtn7");
                    Mbtn7.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10MGC");
                            var cost = document.getElementById("MicrosoftCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((2500/Number(data.PeppaValue) + (2500/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="2500$"
                            itemDisplay2.innerHTML="2500$ Microsoft Gift Card"
                            document.getElementById("myDropdown2").classList.toggle("show");
                        }
                        })
                    }
                    var Sbtn = document.getElementById("StarbucksBtn");
                    Sbtn.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                                var data = doc.data();
                                var TenGc= document.getElementById("10SGC");
                                var cost = document.getElementById("StarbucksCost1");
                    
                                div2.style.display="none";
                                div3.style.display="none";
                                div.style.display="none";
                                div4.style.display="block";
                                TenGc.value ="Cost After Fees: "  + ((10/Number(data.PeppaValue) + (10/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                                cost.innerHTML="10$"
                                itemDisplay3.innerHTML="10$ Starbucks Gift Card"
                            }
                        })
                    }
                    var Sbtn1 = document.getElementById("StarbucksBtn1");
                    Sbtn1.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10SGC");
                            var cost = document.getElementById("StarbucksCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((25/Number(data.PeppaValue) + (25/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="25$"
                            itemDisplay3.innerHTML="25$ Starbucks Gift Card"
                            document.getElementById("myDropdown3").classList.toggle("show");
                        }
                        })
                    }
                    var Sbtn2 = document.getElementById("StarbucksBtn2");
                    Sbtn2.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10SGC");
                            var cost = document.getElementById("StarbucksCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((50/Number(data.PeppaValue) + (50/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="50$"
                            itemDisplay3.innerHTML="50$ Starbucks Gift Card"
                            document.getElementById("myDropdown3").classList.toggle("show");
                        }
                        })
                    }
                    var Sbtn0 = document.getElementById("StarbucksBtn0");
                    Sbtn0.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10SGC");
                            var cost = document.getElementById("StarbucksCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((10/Number(data.PeppaValue) + (10/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="10$"
                            itemDisplay3.innerHTML="10$ Starbucks Gift Card"
                            document.getElementById("myDropdown3").classList.toggle("show");
                        }
                        })
                    }
                    var Sbtn3 = document.getElementById("StarbucksBtn3");
                    Sbtn3.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10SGC");
                            var cost = document.getElementById("StarbucksCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((100/Number(data.PeppaValue) + (100/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="100$"
                            itemDisplay3.innerHTML="100$ Starbucks Gift Card"
                            document.getElementById("myDropdown3").classList.toggle("show");
                        }
                        })
                    }
                    var Sbtn4 = document.getElementById("StarbucksBtn4");
                    Sbtn4.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10SGC");
                            var cost = document.getElementById("StarbucksCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((250/Number(data.PeppaValue) + (250/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="250$"
                            itemDisplay3.innerHTML="250$ Starbucks Gift Card"
                            document.getElementById("myDropdown3").classList.toggle("show");
                        }
                        })
                    }
                    var Sbtn5 = document.getElementById("StarbucksBtn5");
                    Sbtn5.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10SGC");
                            var cost = document.getElementById("StarbucksCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((500/Number(data.PeppaValue) + (500/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="500$"
                            itemDisplay3.innerHTML="500$ Starbucks Gift Card"
                            document.getElementById("myDropdown3").classList.toggle("show");
                        }
                        })
                    }
                    var Sbtn6 = document.getElementById("StarbucksBtn6");
                    Sbtn6.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10SGC");
                            var cost = document.getElementById("StarbucksCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((1000/Number(data.PeppaValue) + (1000/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="1000$"
                            itemDisplay3.innerHTML="1000$ Starbucks Gift Card"
                            document.getElementById("myDropdown3").classList.toggle("show");
                        }
                        })
                    }
                    var Sbtn7 = document.getElementById("StarbucksBtn7");
                    Sbtn7.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10SGC");
                            var cost = document.getElementById("StarbucksCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((2500/Number(data.PeppaValue) + (2500/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="2500$"
                            itemDisplay3.innerHTML="2500$ Starbucks Gift Card"
                            document.getElementById("myDropdown3").classList.toggle("show");
                        }
                        })
                    }
                })
            }
            if(!window.location.href.indexOf("index") > -1 && !window.location.href.indexOf("minigame") > -1 && !window.location.href.indexOf("createListing"))
            {
                var price = document.getElementById("PeppaPrice");
                var docRef = db.collection("data").doc("data");
                docRef.get().then((doc) => {
                    if (doc.exists) {
                        var data = doc.data();
                        price.innerHTML = "1 PEPPA = " + data.PeppaValue + "USD";
                    }
                })

            }
        }
        else{
            if(window.location.href.indexOf("index") > -1)
            {
            var price = document.getElementById("PeppaPrice");
            var docRef = db.collection("data").doc("data");
            docRef.get().then((doc) => {
                if (doc.exists) {
                    var data = doc.data();
                    price.innerHTML = "1 PEPPA = " + data.PeppaValue + "USD";
                }
            })

                    var modal = document.getElementById("GoToWallet");
                    var modal2 = document.getElementById("Loginbtn");
                    modal2.style.display = "block";
                    modal.style.display = "none";
            var towalletbtn = document.getElementById("GoToWallet");
            towalletbtn.onclick = function(){
                window.location.href = "wallet.html";
        }
    }
        }
        })
    }

    //document.addEventListener('contextmenu', function(e) {
      //  e.preventDefault();
      //});

    function InitializeReferrals()
    {
        let html = '';
        firebase.auth().onAuthStateChanged(user => {
            var docRef = db.collection("users").doc(user.uid);
            docRef.get().then((doc) => {
                var data = doc.data();
                var referrals = data.Referrals;
                arrayLength = referrals.length;
                document.getElementById("MultiplierValue").innerHTML = "Multiplier: " + data.Multiplier.toFixed(2) + "x";
                document.getElementById("ReferralsCode").innerHTML="Your Referral Code: " + data.ReferralCode;
                var j = 0;
                for (var i = arrayLength - 1; i >= 0; i--) {
                    var list = document.getElementById('referralsList');
                    j++;
                    if (j <= 20)
                    {
                    var docRef1 = db.collection("users").doc(referrals[i]);
                    docRef1.get().then((doc1) => {
                    const li = `
                    <li>
                    <button style="border-radius:10px;width:85%;margin-left:7.5%"class="accordion">Referral Number ${(i+2).toString()}</button>
                    <div style="border-radius:10px;width:82%;margin-left:7.5%"class="panel">
                    <h2 style="text-align:center">Referral Address: </h2>
                    <button onclick="copyToClipboard('#address${doc1.data().Address}')"class="btnTransparent pink" style="z-index: 2;    display: block;
                    width: 30em;
                    line-height: 3em;
                    padding: 0.2em;
                    margin:0.3em;	
                    border: 1px solid  #ccc ;  
                    border-radius: 8px;
                    -webkit-appearance:normal;
                    font-size: 1em;
                    word-wrap: break-word;margin-left:26.5%"><h2 id="address${doc1.data().Address}" style="text-align:center;">${doc1.data().Address}</h2></button>
                    </div>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html;
                    var acc = document.getElementsByClassName("accordion");
                    var p;
                    
                    for (p = 0; p < acc.length; p++) {
                      acc[p].addEventListener("click", function() {
                        this.classList.toggle("active");
                        var panel = this.nextElementSibling;
                        if (panel.style.maxHeight) {
                          panel.style.maxHeight = null;
                        } else {
                          panel.style.maxHeight = panel.scrollHeight + "px";
                        } 
                      });
                    }
                        })
                    }
                }
            })
        })
    }

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
        
    function signUp(){
        var checkBox = document.getElementById("TOSACCESS");
        if (checkBox.checked == true){

        var email = document.getElementById("email");
        var userName = document.getElementById("userName");
        var password = document.getElementById("Password1234");
        var referral = document.getElementById("referral");
        
        var newUser = userName.value
        if(email == "")
        {
            Alert("You need an email to sign up!", "Sign Up Error!", "yellow")
        }
        if(newUser == ""|| newUser == " ")
        {
            Alert("You need a unique username to sign up!", "Sign Up Error!", "yellow")
        }
        else{
        db.collection("users").where("Username", "==", newUser)        .get()
        .then((querySnapshot) => {
        if(!querySnapshot.empty)
            {
                Alert("Your username isn't unique enough! Another pig already took it", "Sign Up Error!", "yellow")
            }
            else{
                

        if(referral.value == "" || referral.value == null)
        {
        Auth.createUserWithEmailAndPassword(email.value, password.innerHTML).then(function (){

            var user = Auth.currentUser;

            var randomString = "Peppa_" + makeid(44);
            var referralcode = makeid(7);
            var docData = {
                Coins: 0.0,
                Notifications:[],
                Address: randomString,
                Transactions: [],
                newFaucetTime: new Date(),
                ReferralCode: referralcode,
                HashesMined:0,
                Referrals: [],
                Username: newUser,
                Referrer: empty,
                Multiplier: 1,
                PreviousTransactions: 0,
                MarketplaceTransactions: [],
                FinishedMarketplaceTransactions: 0,
                IncomingMarketplaceTransactions: []
            }

            db.collection("users").doc(user.uid).set(docData).then(() => {
                var docRef1 = db.collection("data").doc("data");
                docRef1.get().then((doc1) => {
                    var data = doc1.data();
                    var Users = data.users;
                    Users += 1;
                    var tempData1= {
                        BitcoinValue: data.BitcoinValue,
                        MiningRewards: data.MiningRewards,
                        PeppaValue: data.PeppaValue,
                        PeppasTransacted: data.PeppasTransacted,
                        TotalSupply: data.TotalSupply,
                        TransactionsMade: data.TransactionsMade,
                        miningDifficulty: data.miningDifficulty,
                        users: Users
                    }
                    db.collection("data").doc("data").set(tempData1).then(()=>{
                        window.location.href = "wallet.html";
                    })
                })
            })
            .catch((error) => {
                Alert(error, "Internal Error", "red");
            });    
        }).catch((error) => {
            Alert(error, "Internal Error", "red");
        })
    }
    else{
        db.collection("users").where("ReferralCode", "==", referral.value)
        .get()
        .then((querySnapshot) => {
        if(!querySnapshot.empty)
            {
        querySnapshot.forEach((doc) => {
            if(doc.exists)
            {
                Auth.createUserWithEmailAndPassword(email.value, password.value).then(function (){

                    var user = Auth.currentUser;
        
                    var randomString = "Peppa_" + makeid(44);
                    var referralcode = makeid(7);

        
                    var docData = {
                        Coins: 0.0,
                        Address: randomString,
                        Transactions: [],
                        Notifications:[],
                        newFaucetTime: new Date(),
                        HashesMined:0,
                        ReferralCode: referralcode,
                        Referrals: [],
                        Username: newUser,
                        Referrer: doc.id,
                        Multiplier: 1,
                        PreviousTransactions: 0,
                        MarketplaceTransactions: [],
                        FinishedMarketplaceTransactions: 0,
                        IncomingMarketplaceTransactions: []
                    }
                    var data = doc.data();
                    
                    var tempData = {
                        Coins: data.Coins,
                        Address: data.Address,
                        Transactions: data.Transactions,
                        Username: data.Username,
                        newFaucetTime: data.newFaucetTime,
                        ReferralCode: data.ReferralCode,
                        HashesMined:data.HashesMined,
                        Referrals: data.Referrals,
                        Referrer: data.Referrer,
                        Notifications:data.Notifications,
                        Multiplier: data.Multiplier,
                        PreviousTransactions: data.PreviousTransactions,
                        MarketplaceTransactions: data.MarketplaceTransactions,
                        FinishedMarketplaceTransactions: data.FinishedMarketplaceTransactions,
                        IncomingMarketplaceTransactions: data.IncomingMarketplaceTransactions
                    }
                    
        
                    db.collection("users").doc(user.uid).set(docData).then(() => {
                        tempData.Referrals.push(user.uid);
                        tempData.Multiplier += 0.05;
                        db.collection("users").doc(doc.id).set(tempData).then(() => {
                            var docRef1 = db.collection("data").doc("data");
                            docRef1.get().then((doc1) => {
                                var data = doc1.data();
                                var User = data.users;
                                var Users = User + 1;
                                var tempData1= {
                                    BitcoinValue: data.BitcoinValue,
                                    MiningRewards: data.MiningRewards,
                                    PeppaValue: data.PeppaValue,
                                    PeppasTransacted: data.PeppasTransacted,
                                    TotalSupply: data.TotalSupply,
                                    TransactionsMade: data.TransactionsMade,
                                    miningDifficulty: data.miningDifficulty,
                                    users: Users
                                }
                                db.collection("data").doc("data").set(tempData1).then(() =>{
                                    window.location.href = "wallet.html";
                                })
                            })
                        })
                    })    
                }).catch((error) => {
                    Alert(error, "Internal Error", "red");
                })
            }
        });
        
    }
    
    else{
        Alert("The referral code you entered is invalid", "Sign Up Error!", "yellow");
    }
    
    })
    
    .catch((error) => {
        Alert(error, "Internal Error", "red");
    });
    
    }
}
})
        }
}else {
    Alert("Please read and agree to the Terms and Agreements before proceeding.", "Sign Up Error", "yellow")
 }
    }

        
    function SendPeppa(){
        var receiverAddress = document.getElementById("receiverAddress");
        var TransactionAmount = document.getElementById("amount");
        if(TransactionAmount.value >= 250)
        {
        var modal = document.getElementById("sendModal");
        var NetworkFee = (Number(TransactionAmount.value) * 0.01).toFixed(4);
        db.collection("users").where("Address", "==", receiverAddress.value)
        .get()
        .then((querySnapshot) => {
            if(!querySnapshot.empty)
            {
            querySnapshot.forEach((doc) => {
                if(doc.id != Auth.currentUser.uid)
                {
                    var docRef = db.collection("users").doc(Auth.currentUser.uid);
                    docRef.get().then((Senddoc) => {
                        if (Senddoc.exists) {
                            var data = Senddoc.data();
                            var coins = data.Coins;
                            if (coins >= Number(TransactionAmount.value) + Number(NetworkFee)){
                                var tempCoin = Number((coins - (Number(TransactionAmount.value) + Number(NetworkFee))).toFixed(4));  
                                modal.style.display = "none";
                                var TransactionObj = {
                                    userName: doc.data().Username,
                                    ReceiverAddress: receiverAddress.value,
                                    SenderAddress: data.Address,
                                    TransactionDate: new Date(),
                                    Amount: Number(TransactionAmount.value).toFixed(4),
                                    NetworkFee: Number(NetworkFee).toFixed(4),
                                    send: true
                                }


                                var tempData = {
                                    Coins: tempCoin,
                                    Address: data.Address,
                                    HashesMined:data.HashesMined,
                                    Notifications:data.Notifications,
                                    Transactions: data.Transactions,
                                    Username: data.Username,
                                    newFaucetTime: data.newFaucetTime,
                                    ReferralCode: data.ReferralCode,
                                    Referrals: data.Referrals,
                                    Referrer: data.Referrer,
                                    Multiplier: data.Multiplier,
                                    PreviousTransactions: data.PreviousTransactions,
                                    MarketplaceTransactions: data.MarketplaceTransactions,
                                    FinishedMarketplaceTransactions: data.FinishedMarketplaceTransactions,
                                    IncomingMarketplaceTransactions: data.IncomingMarketplaceTransactions
                                }
                                tempData.Transactions.push(TransactionObj);
                                db.collection("users").doc(Auth.currentUser.uid).set(tempData).then(() => {
                                    Alert("You sent " + Number(TransactionAmount.value).toFixed(4) + " PeppaCoins with a Network fee cost of " + Number(NetworkFee).toFixed(4).toString() +  " PEPPAS to the user " + doc.data().Username + " successfully!","Sent Transaction", "blue")
                                    InitializeWallet(Auth.currentUser);
                                })

                                var docRef = db.collection("users").doc(doc.id);
                                docRef.get().then((Receivedoc) => {
                                    if (Receivedoc.exists) {
                                        var Rdata = Receivedoc.data();
                                        var Rcoins = Rdata.Coins;
                                        var ReceivetempCoin = Number(Number(Rcoins) + Number(TransactionAmount.value)); 
                                        var tempReceiveData = {
                                            Coins: ReceivetempCoin,
                                            Address: Rdata.Address,
                                            Notifications:Rdata.Notifications,
                                            Transactions: Rdata.Transactions,
                                            Username: Rdata.Username,
                                            HashesMined:Rdata.HashesMined,
                                            newFaucetTime: Rdata.newFaucetTime,
                                            ReferralCode: Rdata.ReferralCode,
                                            Referrals: Rdata.Referrals,
                                            Referrer: Rdata.Referrer,
                                            Multiplier: Rdata.Multiplier,
                                            PreviousTransactions: Rdata.PreviousTransactions,
                                            MarketplaceTransactions: Rdata.MarketplaceTransactions,
                                            FinishedMarketplaceTransactions: Rdata.FinishedMarketplaceTransactions,
                                            IncomingMarketplaceTransactions: Rdata.IncomingMarketplaceTransactions
                                        }

                                        var ReceiveTransactionObj = {
                                            userName: data.Username,
                                            ReceiverAddress: receiverAddress.value,
                                            SenderAddress: data.Address,
                                            TransactionDate: new Date(),
                                            Amount: Number(TransactionAmount.value).toFixed(4),
                                            send: false
                                        }
                                        var NotificationsObj = {
                                            NotifType: "green",
                                            NotifContent: data.Username + " Has Sent you " + Number(TransactionAmount.value).toFixed(4).toString() + " PEPPAS!",
                                            NotifTitle: "Incoming Transaction!"
                                        }
                                        tempReceiveData.Transactions.push(ReceiveTransactionObj);
                                        tempReceiveData.Notifications.push(NotificationsObj);
                                        db.collection("users").doc(doc.id).set(tempReceiveData).then(() => {
                                                var docRef1 = db.collection("data").doc("data");
                                                docRef1.get().then((doc1) => {
                                                    var data = doc1.data();
                                                    var peppasTransacted = data.PeppasTransacted + Number(TransactionAmount.value);
                                                    var transactionsmade = data.TransactionsMade + 1
                                                    var tempData1= {
                                                        BitcoinValue: data.BitcoinValue,
                                                        MiningRewards: data.MiningRewards,
                                                        PeppaValue: data.PeppaValue,
                                                        PeppasTransacted: peppasTransacted,
                                                        TotalSupply: data.TotalSupply,
                                                        TransactionsMade: transactionsmade,
                                                        miningDifficulty: data.miningDifficulty,
                                                        users: data.users
                                                    }
                                                    db.collection("data").doc("data").set(tempData1).then(() =>{
                                                    })
                                                })
                                        })
                                    }
                                })
                                
                                .catch((error) => {
                                    Alert("there was unfortunately a transaction error...", "Internal Error", "red")
                                }); 
                            }
                            else{
                                Alert("Your balance cannot cover the transaction amount!", "Transaction Error", "yellow")
                            }                            
                        }
                    })
                }
                else{
                    Alert("You cant send peppacoins to yourself...", "Transaction Error", "yellow");
                }
            });
        }
        else{
            Alert("Please input a valid PeppaCoin Address", "Transaction Error", "yellow");
        }
        })
        .catch(() => {
            Alert("The address you inputed is not tied to an account!", "Transaction Error", "yellow");
        });
    }
    else{
        Alert("You need to send at least 250 PEPPAS!", "Transaction Error", "yellow")
    }
    }
      

    function signIn(location){
            
        var email = document.getElementById("email1");
        var password = document.getElementById("password1");
            
        const promise = Auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message)); 

        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            firebase.auth().onAuthStateChanged(user => {
                if(user)
                {
                    window.location.href = location + ".html";
                }
        })
            return firebase.auth().signInWithEmailAndPassword(email, password);
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
  });
}




    function InitializeFaucet(auth){
        var docRef = db.collection("users").doc(auth.uid);
        docRef.get().then((doc) => {
            if (doc.exists) {
                var data = doc.data();
        var date1 = new Date();
        var date2 = data.newFaucetTime.toDate();
        if(Date.parse(date1) > Date.parse(date2)){
            document.getElementById("faucetStatus").innerHTML = "Faucet Ready";
        }
        else{
            document.getElementById("faucetStatus").innerHTML = "Not Ready... Next claim is at: " + date2;
        }
    }
})
    }
        

    function InitializeWallet(auth){
        let html = '';
        let html1='';
        var docRef = db.collection("users").doc(auth.uid);
        docRef.get().then((doc) => {
            if (doc.exists) {
                var data = doc.data();
                var coins = data.Coins;
                var address = data.Address;
                var transactions = data.Transactions;
                var notifications=  data.Notifications;
                document.getElementById("Coins").innerHTML = Number(coins).toFixed(4) + " PEPPAS";
                document.getElementById("Coins2").innerHTML = Number(coins).toFixed(4) + " PEPPAS";
                document.getElementById("UserAddress").innerHTML =  address;
                document.getElementById("UserAddress2").innerHTML =  address;
                document.getElementById("UserAddress3").innerHTML = address;
                document.getElementById("username").innerHTML =  data.Username + "'s wallet";
                document.getElementById("MultiplierValue").innerHTML = "Multiplier: " + data.Multiplier.toFixed(2) + "x";
                var docRef = db.collection("data").doc("data");
                docRef.get().then((Datadoc) => {
                    if (Datadoc.exists) {
                        var data1 = Datadoc.data();
                        document.getElementById("USDValue").innerHTML = "$" + (Number(Number(coins) * Number(data1.PeppaValue))).toFixed(4);
                        document.getElementById("USDValue2").innerHTML = "$" + (Number(Number(coins) * Number(data1.PeppaValue))).toFixed(4);
                        document.getElementById("USDValue3").innerHTML = "$" + (Number(Number(coins) * Number(data1.PeppaValue))).toFixed(4);
                    }
                

                arrayLength = transactions.length;
                arrayLength1 = notifications.length;
                if(arrayLength1 > 0)
                {
                    var list1 = document.getElementById('notifications');
                    for (var i = arrayLength1 - 1; i >= 0; i--) {

                        if(notifications[i].NotifType == "green")
                        {
                            const li = `
                            <div class="alert success" style="pointer-events: auto;">
                            <span class="closebtn">&times;</span>  
                            <strong>${notifications[i].NotifTitle}</strong><br>${notifications[i].NotifContent}
                            </div>
                            `;
                            html1 += li;
                        }
                        else if(notifications[i].NotifType == "yellow"){
                            const li = `
                            <div class="alert" style="pointer-events: auto;">
                            <span class="closebtn">&times;</span>  
                            <strong>${notifications[i].NotifTitle}</strong><Br>${notifications[i].NotifContent}
                            </div>
                            `;
                            html1 += li;
                        }
                        else if(notifications[i].NotifType == "red"){
                            const li = `
                            <div class="alert warning" style="pointer-events: auto;">
                            <span class="closebtn">&times;</span>  
                            <strong>${notifications[i].NotifTitle}</strong><br>${notifications[i].NotifContent}
                            </div>
                            `;
                            html1 += li;
                        }
                        else if(notifications[i].NotifType == "blue"){
                            const li = `
                            <div class="alert info" style="pointer-events: auto;">
                            <span class="closebtn">&times;</span>  
                            <strong>${notifications[i].NotifTitle}</strong><Br>${notifications[i].NotifContent}
                            </div>
                            `;
                            html1 += li;
                        }

                        notifications.splice(i, 1);
                        list1.innerHTML = html1;
                        var close = document.getElementsByClassName("closebtn");
                        var z;

                        for (z = 0; z < close.length; z++) {
                        close[z].onclick = function(){
                            var div = this.parentElement;
                            div.style.opacity = "0";
                            setTimeout(function(){ div.style.display = "none"; }, 600);
                        }
                        }
                    }
                    var tempData3 = {
                        Coins: data.Coins,
                        Address: data.Address,
                        Notifications:notifications,
                        HashesMined:data.HashesMined,
                        Transactions: transactions,
                        Username: data.Username,
                        newFaucetTime: data.newFaucetTime,
                        ReferralCode: data.ReferralCode,
                        Referrals: data.Referrals,
                        Referrer: data.Referrer,
                        Multiplier: data.Multiplier,
                        PreviousTransactions: Number(data.PreviousTransactions),
                        MarketplaceTransactions: data.MarketplaceTransactions,
                        FinishedMarketplaceTransactions: data.FinishedMarketplaceTransactions,
                        IncomingMarketplaceTransactions: data.IncomingMarketplaceTransactions
                    }
                    db.collection("users").doc(auth.uid).set(tempData3)
                }
                var j = 0;
                var tempData = {
                    Coins: data.Coins,
                    Address: data.Address,
                    Notifications:data.Notifications,
                    HashesMined:data.HashesMined,
                    Transactions: transactions,
                    Username: data.Username,
                    newFaucetTime: data.newFaucetTime,
                    ReferralCode: data.ReferralCode,
                    Referrals: data.Referrals,
                    Referrer: data.Referrer,
                    Multiplier: data.Multiplier,
                    PreviousTransactions: Number(data.PreviousTransactions),
                    MarketplaceTransactions: data.MarketplaceTransactions,
                    FinishedMarketplaceTransactions: data.FinishedMarketplaceTransactions,
                    IncomingMarketplaceTransactions: data.IncomingMarketplaceTransactions
                }
                var list = document.getElementById('transactionList');
                if(arrayLength == 0)
                {
                    const li = `
                    <li>
                    
                    <button style="border-radius:10px;" class="accordion">Example Transaction <br> +A lot of PEPPAS</button>
                    <div style="border-radius:10px;"class="panel">
                    <h2 style="text-align:center">Sender Address: </h2>
                    <button onclick="copyToClipboard('#addressexample')"class="btnTransparent pink" style="z-index: 2;    display: block;
                    width: 30em;
                    line-height: 3em;
                    padding: 0.2em;
                    margin:0.3em;	
                    border: 1px solid  #ccc ;  
                    border-radius: 8px;
                    -webkit-appearance:normal;
                    font-size: 1em;
                    word-wrap: break-word;margin-left:14.5%"><h2 id="addressexample" style="text-align:center;">Some random Pig</h2></button>
                    <h5 style="text-align:center;">TransactionTime: A certain time</h5>
                    </div>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html;
                    var acc = document.getElementsByClassName("accordion");
                    var p;
                    
                    for (p = 0; p < acc.length; p++) {
                      acc[p].addEventListener("click", function() {
                        this.classList.toggle("active");
                        var panel = this.nextElementSibling;
                        if (panel.style.maxHeight) {
                          panel.style.maxHeight = null;
                        } else {
                          panel.style.maxHeight = panel.scrollHeight + "px";
                        } 
                      });
                    }
                }
                for (var i = arrayLength - 1; i >= 0; i--) {
                    j++;
                    if (j <= 25)
                    {
                    if(transactions[i].send == true)
                    {
                        const li = `
                        <li>
                        <button style="border-radius:10px;"class="accordion">Transaction Number ${(Number((i+1)) + Number(data.PreviousTransactions)).toString()} <br> -${Number(transactions[i].Amount).toFixed(4).toString()} PEPPA (-$${(Number(transactions[i].Amount) *  Number(data1.PeppaValue)).toFixed(4).toString()})</button>
                        <div style="border-radius:10px;"class="panel">
                        <h2 style="text-align:center">Receiver Address: </h2>
                        <button onclick="copyToClipboard('#address${[i]}')"class="btnTransparent pink" style="z-index: 2;    display: block;
                        width: 30em;
                        line-height: 3em;
                        padding: 0.2em;
                        margin:0.3em;	
                        border: 1px solid  #ccc ;  
                        border-radius: 8px;
                        -webkit-appearance:normal;
                        font-size: 1em;
                        word-wrap: break-word;margin-left:14.5%"><h2 id="address${[i]}" style="text-align:center;">${transactions[i].ReceiverAddress}</h2></button>
                        <h5 style="text-align:center;">TransactionTime: ${transactions[i].TransactionDate.toDate()}</h5>
                        </div>
                        </li>
                        `;
                        html += li;
                    }
                    else{
                        const li = `
                        <li>
                        
                        <button style="border-radius:10px;" class="accordion">Transaction Number ${(Number((i+1)) + Number(data.PreviousTransactions)).toString()} <br> +${Number(transactions[i].Amount).toFixed(4).toString()} PEPPA (+$${(Number(transactions[i].Amount) *  Number(data1.PeppaValue)).toFixed(4).toString()})</button>
                        <div style="border-radius:10px;"class="panel">
                        <h2 style="text-align:center">Sender Address: </h2>
                        <button onclick="copyToClipboard('#address${[i]}')"class="btnTransparent pink" style="z-index: 2;    display: block;
                        width: 30em;
                        line-height: 3em;
                        padding: 0.2em;
                        margin:0.3em;	
                        border: 1px solid  #ccc ;  
                        border-radius: 8px;
                        -webkit-appearance:normal;
                        font-size: 1em;
                        word-wrap: break-word;margin-left:14.5%"><h2 id="address${[i]}" style="text-align:center;">${transactions[i].SenderAddress}</h2></button>
                        <h5 style="text-align:center;">TransactionTime: ${transactions[i].TransactionDate.toDate()}</h5>
                        </div>
                        </li>
                        `;
                        html += li;
                    }
                    
                    list.innerHTML = html;

                   
                    var acc = document.getElementsByClassName("accordion");
                    var p;
                    
                    for (p = 0; p < acc.length; p++) {
                      acc[p].addEventListener("click", function() {
                        this.classList.toggle("active");
                        var panel = this.nextElementSibling;
                        if (panel.style.maxHeight) {
                          panel.style.maxHeight = null;
                        } else {
                          panel.style.maxHeight = panel.scrollHeight + "px";
                        } 
                      });
                    }
                } 
                else{
                    transactions.splice(transactions[i], 1);   
                    tempData.PreviousTransactions = tempData.PreviousTransactions+1;
                } 
                db.collection("users").doc(Auth.currentUser.uid).set(tempData)


            }                
        })

                } else {
                var randomString = "Peppa_" + makeid(44);
               
                var docData = {
                    Coins: 0.0,
                    Address: randomString,
                    Notifications: [],
                    Transactions: [],
                    Username: "",
                    newFaucetTime: new Date(),
                    ReferralCode: makeid(8),
                    HashesMined:0,
                    Referrals: [],
                    Referrer: empty,
                    Multiplier: 1,
                    PreviousTransactions: 0,
                    MarketplaceTransactions: [],
                    FinishedMarketplaceTransactions: 0,
                    IncomingMarketplaceTransactions: []
                }
    
                db.collection("users").doc(Auth.currentUser.uid).set(docData).then(() => {
                    InitializeWallet(Auth.currentUser);
                })
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    function signOut(){
            
        Auth.signOut();
        window.location.href = "index.html";  
    }
        
    function Navigate(navigation){
        switch(navigation){
            case "index":
                window.location.href = "index.html";
                break;
            case "wallet":
                window.location.href = "wallet.html";
                break;
            case "faucet":
                window.location.href = "faucet.html";
                break;
            case "gambling":
                window.location.href = "gambling.html";
                break;
            case "trade":
                window.location.href = "trade.html";
                break;
            case "referrals":
                window.location.href = "referrals.html";
                break;
            case "mining":
                window.location.href = "mining.html";
                break;
            case "minigame":
                window.location.href = "minigame.html";
                break;
            case "marketplace":
                window.location.href = "marketplace.html";
                break;
            case "marketplaceProfile":
                window.location.href = "profile.html"
                break;
        }
        
    }    
    function Alert(Message, title, color)
    {
        rando = makeid(15);
        let html1='';
        var list1 = document.getElementById('notifications');
        if(color == "green")
        {
            const li = `
            <div id=${rando} class="alert success" style="pointer-events: auto;z-index:99;">
            <span class="closebtn">&times;</span>  
            <strong>${title}</strong><br>${Message}
            </div>
            `;
            html1 += li;
        }
        else if(color == "yellow"){
            const li = `
            <div id=${rando} class="alert" style="pointer-events: auto;z-index:99;">
            <span class="closebtn">&times;</span>  
            <strong>${title}</strong><Br>${Message}
            </div>
            `;
            html1 += li;
        }
        else if(color == "red"){
            const li = `
            <div id=${rando} class="alert warning" style="pointer-events: auto;z-index:99;">
            <span class="closebtn">&times;</span>  
            <strong>${title}</strong><br>${Message}
            </div>
            `;
            html1 += li;
        }
        else if(color == "blue"){
            const li = `
            <div id=${rando} class="alert info" style="pointer-events: auto;z-index:99;">
            <span class="closebtn">&times;</span>  
            <strong>${title}</strong><Br>${Message}
            </div>
            `;
            html1 += li;
        }
        list1.innerHTML += html1;
        list1.style.display = "none";
        list1.style.display = "block";
        list1.style.zIndex = "99";
        var close = document.getElementsByClassName("closebtn");
        var InDOMAlert = document.getElementById(rando)
        var z;

        for (z = 0; z < close.length; z++) {
        close[z].onclick = function(){
            var div = this.parentElement;
            div.style.opacity = "0";
            setTimeout(function(){ div.style.display = "none"; div.remove();}, 10);
        }
        }
    }

    function addMinutes(date, minutes) {
        return new Date(date.getTime() + minutes*60000);
    }

    function FaucetSendPeppa(){
        var receiverAddress = document.getElementById("FaucetreceiverAddress");
        db.collection("users").where("Address", "==", receiverAddress.value)
        .get()
        .then((querySnapshot) => {
            if(!querySnapshot.empty)
            {
            querySnapshot.forEach((doc) => {
                var docRef = db.collection("users").doc(doc.id);
                                docRef.get().then((Receivedoc) => {
                                    if (Receivedoc.exists) {
                                        var Rdata = Receivedoc.data();
                                        var Rcoins = Rdata.Coins;
                                        var date1 = new Date();
                                        var date2 = Rdata.newFaucetTime.toDate();
                                        var transactionAmount = ((Math.random() * 50)/2 * Rdata.Multiplier).toFixed(4);
                                        if(Date.parse(date1) > Date.parse(date2)){
                                        var ReceivetempCoin = Number(Rcoins) + Number(transactionAmount);  
                                        var newTime = addMinutes(new Date(), 1440);
                                        var tempReceiveData = {
                                            Coins: ReceivetempCoin,
                                            Address: Rdata.Address,
                                            Notifications:Rdata.Notifications,
                                            Transactions: Rdata.Transactions,
                                            newFaucetTime: newTime,
                                            Username: Rdata.Username,
                                            HashesMined:Rdata.HashesMined,
                                            ReferralCode: Rdata.ReferralCode,
                                            Referrals: Rdata.Referrals,
                                            Referrer: Rdata.Referrer,
                                            Multiplier: Rdata.Multiplier,
                                            PreviousTransactions: Rdata.PreviousTransactions,
                                            MarketplaceTransactions: Rdata.MarketplaceTransactions,
                                            FinishedMarketplaceTransactions: Rdata.FinishedMarketplaceTransactions,
                                            IncomingMarketplaceTransactions: Rdata.IncomingMarketplaceTransactions
                                        }
                                        var ReceiveTransactionObj = {
                                            userName: "Faucet Reward",
                                            ReceiverAddress: receiverAddress.value,
                                            SenderAddress: "Faucet Reward",
                                            TransactionDate: new Date(),
                                            Amount: Number(transactionAmount).toFixed(4),
                                            send: false
                                        }
                                        tempReceiveData.Transactions.push(ReceiveTransactionObj);
                                        db.collection("users").doc(doc.id).set(tempReceiveData).then(() => {
                                            var docRef1 = db.collection("data").doc("data");
                                            docRef1.get().then((doc1) => {
                                                var data = doc1.data();
                                                var supply = Number(data.TotalSupply - Number(transactionAmount)).toFixed(4);
                                                var tempData1= {
                                                    BitcoinValue: data.BitcoinValue,
                                                    MiningRewards: data.MiningRewards,
                                                    PeppaValue: data.PeppaValue,
                                                    PeppasTransacted: data.PeppasTransacted,
                                                    TotalSupply: supply,
                                                    TransactionsMade: data.TransactionsMade,
                                                    miningDifficulty: data.miningDifficulty,
                                                    users: data.users
                                                }
                                                db.collection("data").doc("data").set(tempData1).then(() =>{
                                                    Alert("You have received " + transactionAmount.toString() + " PEPPAS for free!", "Faucet Information", "green");
                                                    InitializeFaucet(Auth.currentUser);
                                                    })
                                            })
                                        })
                                    }
                                    else
                                    {
                                        Alert("Cannot claim Daily faucet yet! Your next claim time is at: " + date2, "Faucet Information", "yellow");
                                    }
                                    }
                                    else{
                                        Alert("Please input a valid peppacoin address to receive the faucet", "Faucet Information", "yellow");
                                    }
                                })
            })
        }
        else{
            Alert("Please input a valid PeppaCoin Address", "Faucet Information", "yellow");
        }

    }).catch(() => {
        Alert("The address you inputed is not tied to an account!", "Faucet Information", "yellow");
    });



    
}

function MinigameSendPeppa(){
            var docRef = db.collection("users").doc(Auth.currentUser.uid);
                            docRef.get().then((Receivedoc) => {
                                if (Receivedoc.exists) {
                                    transactionAmount = Number((Math.random() * 2) + 0.01).toFixed(4);
                                    var Rdata = Receivedoc.data();
                                    var Rcoins = Rdata.Coins;
                                    var ReceivetempCoin = Number(Rcoins) + Number(transactionAmount);  
                                    var tempReceiveData = {
                                        Coins: ReceivetempCoin,
                                        Notifications:Rdata.Notifications,
                                        Address: Rdata.Address,
                                        Transactions: Rdata.Transactions,
                                        newFaucetTime: Rdata.newFaucetTime,
                                        Username: Rdata.Username,
                                        HashesMined:Rdata.HashesMined,
                                        ReferralCode: Rdata.ReferralCode,
                                        Referrals: Rdata.Referrals,
                                        Referrer: Rdata.Referrer,
                                        Multiplier: Rdata.Multiplier,
                                        PreviousTransactions: Rdata.PreviousTransactions,
                                        MarketplaceTransactions: Rdata.MarketplaceTransactions,
                                        FinishedMarketplaceTransactions: Rdata.FinishedMarketplaceTransactions,
                                        IncomingMarketplaceTransactions: Rdata.IncomingMarketplaceTransactions
                                    }
                                    var ReceiveTransactionObj = {
                                        userName: "Minigame Reward",
                                        ReceiverAddress: Rdata.Address,
                                        SenderAddress: "Minigame Reward",
                                        TransactionDate: new Date(),
                                        Amount: Number(transactionAmount).toFixed(4),
                                        send: false
                                    }
                                    tempReceiveData.Transactions.push(ReceiveTransactionObj);
                                    db.collection("users").doc(Auth.currentUser.uid).set(tempReceiveData).then(() => {
                                        var docRef1 = db.collection("data").doc("data");
                                        docRef1.get().then((doc1) => {
                                            var data = doc1.data();
                                            var supply = Number(data.TotalSupply - Number(transactionAmount)).toFixed(4);
                                            var tempData1= {
                                                BitcoinValue: data.BitcoinValue,
                                                MiningRewards: data.MiningRewards,
                                                PeppaValue: data.PeppaValue,
                                                PeppasTransacted: data.PeppasTransacted,
                                                TotalSupply: supply,
                                                TransactionsMade: data.TransactionsMade,
                                                miningDifficulty: data.miningDifficulty,
                                                users: data.users
                                            }
                                            db.collection("data").doc("data").set(tempData1).then(() =>{
                                                Alert("You have received " + transactionAmount.toString() + " PEPPAS for free!", "Minigame Information", "green");
                                                InitializeFaucet(Auth.currentUser);
                                                })
                                        })
                                    })
                                }
                                else
                                {
                                   alert("Cannot claim Daily faucet yet! Your next claim time is at: " + date2);
                                }
                                
                          })
                        }


firebase.auth().onAuthStateChanged((user) =>{
    if(user){
        console.log(user.email);
    }else{
        console.log("not in");
    }
});
function InitializeTrade()
{
    var BitcoinPrice = document.getElementById("BitcoinPrice");
    var BitcoinPeppa = document.getElementById("BitcoinPeppa");
    var docRef = db.collection("data").doc("data");
    docRef.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            var value = data.BitcoinValue.toFixed(4);
            BitcoinPrice.innerHTML = "Bitcoin Price: " + value.toString() + "USD";
            var peppaToBTC = value / data.PeppaValue;
            BitcoinPeppa.innerHTML = "1 Bitcoin ≈ " + peppaToBTC + "PEPPA";
        }
    })
}

function ClaimGiftCard(giftCardType, GiftCardAmount)
{   
    if(giftCardType == "Amazon")
    {
    var regex = /[\d|,|.|\+]+/g;
    GiftCardAmount = Number((document.getElementById("AmazonCost1").innerHTML).match(regex));
    }
    else if(giftCardType =="Itunes")
    {
        var regex = /[\d|,|.|\+]+/g;
        GiftCardAmount = Number((document.getElementById("ItunesCost1").innerHTML).match(regex));
    }
    else if(giftCardType=="Microsoft")
    {
        var regex = /[\d|,|.|\+]+/g;
        GiftCardAmount = Number((document.getElementById("MicrosoftCost1").innerHTML).match(regex));  
    }
    var docRef = db.collection("data").doc("redeemdata");
    docRef.get().then((doc) => {
        if(doc.exists)
        {
            var docRef3 = db.collection("data").doc("data");
            docRef3.get().then((doc2) => {
                if (doc2.exists) {
            var docRef2 = db.collection("users").doc(Auth.currentUser.uid);
            docRef2.get().then((Senddoc) => {
                if (Senddoc.exists) {
                    var data = Senddoc.data();
                    var coins = data.Coins;
                    var data1 = doc2.data();
                    var data2 = doc.data();
                    cost = (Number(Number(Number(GiftCardAmount)/Number(data1.PeppaValue))+ Number((GiftCardAmount/Number(data1.PeppaValue) * 0.075))).toFixed(4));
                    if (coins >= Number(cost)){
                        
                        var tempArrayOBJ= {
                        emailAddress: Auth.currentUser.email,
                        PeppaBeforeTransaction: coins,
                        USERpeppaCoinsTransacted: cost,
                        GiftCardAmount: GiftCardAmount,
                        GiftCardType:giftCardType,
                        USERPeppaAfterTransaction: (Number(coins) - Number(cost)),
                        TransactionDate: new Date()
                    }
                     var tempOBJ = {
                        redeems: data2.redeems
                    }
                    tempOBJ.redeems.push(tempArrayOBJ);

                    var TransactionObj = {
                        ReceiverAddress: "PeppaCoins Exchange",
                        SenderAddress: data.Address,
                        TransactionDate: new Date(),
                        Amount: Number(cost),
                        NetworkFee: "0",
                        send: true
                    }
                    
                    var tempData = {
                        Coins: (data.Coins) - cost,
                        Address: data.Address,
                        Transactions: data.Transactions,
                        Notifications:data.Notifications,
                        newFaucetTime: data.newFaucetTime,
                        HashesMined:data.HashesMined,
                        Username: data.Username,
                        ReferralCode: data.ReferralCode,
                        Referrals: data.Referrals,
                        Referrer: data.Referrer,
                        Multiplier: data.Multiplier,
                        PreviousTransactions: data.PreviousTransactions,
                        MarketplaceTransactions: data.MarketplaceTransactions,
                        FinishedMarketplaceTransactions: data.FinishedMarketplaceTransactions,
                        IncomingMarketplaceTransactions: data.IncomingMarketplaceTransactions
                    }
                    tempData.Transactions.push(TransactionObj);
                    db.collection("users").doc(Auth.currentUser.uid).set(tempData).then(() => {
                        db.collection("data").doc("redeemdata").set(tempOBJ).then(() => {
                            Alert("You have redeemed a " + GiftCardAmount + " dollar " + giftCardType + " Gift Card for " + cost + " PEPPAS! The gift code will be sent to your registered email address. You will be notified when your transaction has been approved or denied. Thank you for your purchase!", "PeppaTrade Information", "green");
                            InitializeTrade();
                        })    
                    }) 

                }else{
                    Alert("Your balance cannot cover the transaction costs!", "PeppaTrade Information", "yellow")
                }
            }
        })
    }
})
    }
})
}


function Redeem(giftType)
{
    switch(giftType){
        case "bitcoin":
            var amountbtc = document.getElementById("BTCPEPPAmount");
            var peppaoutput = document.getElementById("BitcoinPeppaOutput");
            var BitcoinAddress = document.getElementById("BTCADDRESS");
            var BitcoinPrice = document.getElementById("BitcoinPrice");
            var amountAfterFees = document.getElementById("BitcoinPeppaOutputAfterFees");
            var docRef = db.collection("data").doc("redeemdata");
            docRef.get().then((doc) => {
                if(doc.exists)
                {
                    var regex = /[\d|,|.|\+]+/g;
                    var matches = peppaoutput.textContent.match(regex);  
                    var matches1 = amountAfterFees.textContent.match(regex);  
                    var matches2 = BitcoinPrice.textContent.match(regex);  

                    var data = doc.data();
                    var tempArrayOBJ= {
                        BTCaddress: BitcoinAddress.value,
                        BTCRECEIVEamountBeforeFees: matches,
                        USERpeppaCoinsTransacted: amountbtc.value,
                        BTCamountAfterFees: matches1,
                        TradeTimeBTCPrice: matches2,
                        TransactionDate: new Date()
                    }
                    var tempOBJ = {
                        redeems: data.redeems
                    }
                    tempOBJ.redeems.push(tempArrayOBJ);


                    var docRef2 = db.collection("users").doc(Auth.currentUser.uid);
                    docRef2.get().then((Senddoc) => {
                        if (Senddoc.exists) {
                            var data1 = Senddoc.data();
                            var coins = data1.Coins;
                            if(BitcoinAddress.value != "")
                            {
                            if (coins >= Number(amountbtc.value)){
                                var tempCoin = coins - Number(amountbtc.value);  
                                
                                var TransactionObj = {
                                    ReceiverAddress: "Peppa_Xh79XCvDGS2NmO9sKAtzBBZyjldTsroS36sdHXNb4ta7",
                                    SenderAddress: data1.Address,
                                    TransactionDate: new Date(),
                                    Amount: Number(amountbtc.value),
                                    NetworkFee: "0",
                                    send: true
                                }


                                var tempData = {
                                    Coins: tempCoin,
                                    Address: data1.Address,
                                    Transactions: data1.Transactions,
                                    Notifications:data1.Notifications,
                                    Username: data1.Username,
                                    HashesMined:data1.HashesMined,
                                    newFaucetTime: data1.newFaucetTime,
                                    ReferralCode: data1.ReferralCode,
                                    Referrals: data1.Referrals,
                                    Referrer: data1.Referrer,
                                    Multiplier: data1.Multiplier,
                                    PreviousTransactions: data1.PreviousTransactions,
                                    MarketplaceTransactions: data1.MarketplaceTransactions,
                                    FinishedMarketplaceTransactions: data1.FinishedMarketplaceTransactions,
                                    IncomingMarketplaceTransactions: data1.IncomingMarketplaceTransactions
                                }
                                tempData.Transactions.push(TransactionObj);

                                db.collection("users").doc(Auth.currentUser.uid).set(tempData).then(() => {
                                    db.collection("data").doc("redeemdata").set(tempOBJ).then(() => {
                                        Alert("You have redeemed " + matches1 + " BTC for " + amountbtc.value + " PEPPAS with the transaction fee of 0.0004 BTC to the BTC address: " +BitcoinAddress.value + ". Your BTC transaction is being processed. You will be notified once the transaction has been completed or denied. Thank you for your purchase!");
                                        InitializeTrade();
                                    })    
                                }) 
                            }
                            else{
                                alert("Your balance cannot cover the transaction costs!")
                            }
                        }
                        else{
                            alert("You need a withdrawal btc address in order you to claim your bitcoin!")
                        }
                    }
                    })         
                }
            })
        break;
    }
}

function createListing()
{
    var method = null;
    var sellOrBuy = null;
    var amount = null;
    var price = null;
    var description = null;
    
    var paymentMethods = document.getElementsByName('method');

    for (var i = 0, length = paymentMethods.length; i < length; i++) {
    if (paymentMethods[i].checked) {
        method = paymentMethods[i].value;
        break;
    }
    }
    var sellorbuy = document.getElementsByName('sellorbuy');

    for (var i = 0, length = sellorbuy.length; i < length; i++) {
    if (sellorbuy[i].checked) {
        sellOrBuy = sellorbuy[i].value;
        break;
    }
    }
    var amountInput = document.getElementById('amount');
    amount = amountInput.value;
    var priceInput = document.getElementById('price');
    price = priceInput.value;
    var instructions = document.getElementById('instructions');
    description = instructions.value;
    var docRef2 = db.collection("users").doc(Auth.currentUser.uid);
    docRef2.get().then((Senddoc) => {
        var data5 = Senddoc.data();
        var coins = data5.Coins;
        var userName = data5.Username;
        var marketplacelistings = data5.MarketplaceTransactions;
        var completedTransactions = data5.FinishedMarketplaceTransactions;
        if(marketplacelistings.length >= 3)
        {
            Alert("You can't have more than 3 active marketplace listings! Delete some to List more", "Create Listing Information", "red");
        }
        else{
    if(method == null || amount == null || sellOrBuy == null || price == null || description == null)
    {
        Alert("You need to fill out everything in the form!", "Create Listing Information", "yellow");
    }
    else{
    if(Number(amount) < 100000)
    {
        Alert("You need to transact at least 100k PEPPAS to create a listing!", "Create Listing Information", "yellow");
    }
    else{
        if(Number(amount) > Number(coins))
        {
            Alert("You cannot create a listing with more PEPPAS than you currently have in your balance!", "Create Listing Information", "red")
        }
        else{
    if(sellOrBuy == "sell")
    {
        var TransactionObj = {
            ReceiverAddress: "PeppaTrade",
            SenderAddress: data5.Address,
            TransactionDate: new Date(),
            Amount: Number(amount),
            NetworkFee: "0",
            send: true
        }
        var transactions = data5.Transactions;
        transactions.push(TransactionObj);
        coins -= amount;
        docRef2.update({
            Coins: coins,
            Transactions:transactions
        })
    switch(method){
        case "Paypal":
            var listingRef = db.collection("marketplace").doc("Sell listings");
            var userRef = db.collection("users").doc(Auth.currentUser.uid);
            listingRef.get().then((doc) => {
                data = doc.data();
            

            var newSellListingObjPaypal = {
                amount: amount,
                price: price,
                description:description,
                user: Auth.currentUser.uid,
                userName: userName, 
                completedTransactions: completedTransactions,
                listingID: makeid(15)
            }
            var newMarketplaceListingObj = {
                document: "Sell listings",
                array: "paypalListings",
                amount: amount,
                price: price,
                description: description,
                listingId:newSellListingObjPaypal.listingID
            }

            var tempPaypalListObj = data.paypalListings;

            tempPaypalListObj.push(newSellListingObjPaypal);
            marketplacelistings.push(newMarketplaceListingObj);


           return listingRef.update({
                paypalListings: tempPaypalListObj
            })
            .then(() => {
                Alert("listing sucessfully created!", "Create Listing Information", "green");
                userRef.update({
                    MarketplaceTransactions: marketplacelistings
                }).then(() =>{
                    window.location.href = "profile.html";
                })
                
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        break;

        case "GiftCard":
            var listingRef = db.collection("marketplace").doc("Sell listings");
            var userRef = db.collection("users").doc(Auth.currentUser.uid);
            listingRef.get().then((doc) => {
                data = doc.data();
            

            var newSellListingObjPaypal = {
                amount: amount,
                price: price,
                description:description,
                user: Auth.currentUser.uid,
                userName: userName, 
                completedTransactions: completedTransactions,
                listingID: makeid(15)
            }
            var newMarketplaceListingObj = {
                document: "Sell listings",
                array: "giftCardListings",
                amount: amount,
                price: price,
                description: description,
                listingId:newSellListingObjPaypal.listingID
            }

            var tempPaypalListObj = data.giftCardListings;

            tempPaypalListObj.push(newSellListingObjPaypal);
            marketplacelistings.push(newMarketplaceListingObj);

            
           return listingRef.update({
            giftCardListings: tempPaypalListObj
            })
            .then(() => {
                Alert("listing sucessfully created!", "Create Listing Information", "green");
                userRef.update({
                    MarketplaceTransactions: marketplacelistings
                }).then(() =>{
                    window.location.href = "profile.html";
                })
                
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        break;
        case "Bitcoin":
            var listingRef = db.collection("marketplace").doc("Sell listings");
            var userRef = db.collection("users").doc(Auth.currentUser.uid);
            listingRef.get().then((doc) => {
                data = doc.data();
            

            var newSellListingObjPaypal = {
                amount: amount,
                price: price,
                description:description,
                user: Auth.currentUser.uid,
                userName: userName, 
                completedTransactions: completedTransactions,
                listingID: makeid(15)
            }
            var newMarketplaceListingObj = {
                document: "Sell listings",
                array: "bitcoinListings",
                amount: amount,
                price: price,
                description: description,
                listingId:newSellListingObjPaypal.listingID
            }

            var tempPaypalListObj = data.bitcoinListings;

            tempPaypalListObj.push(newSellListingObjPaypal);
            marketplacelistings.push(newMarketplaceListingObj);

           return listingRef.update({
            bitcoinListings: tempPaypalListObj
            })
            .then(() => {
                Alert("listing sucessfully created!", "Create Listing Information", "green");
                userRef.update({
                    MarketplaceTransactions: marketplacelistings
                }).then(() =>{
                    window.location.href = "profile.html";
                })
                
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        case "Ethereum":
            var listingRef = db.collection("marketplace").doc("Sell listings");
            var userRef = db.collection("users").doc(Auth.currentUser.uid);
            listingRef.get().then((doc) => {
                data = doc.data();
            

            var newSellListingObjPaypal = {
                amount: amount,
                price: price,
                description:description,
                user: Auth.currentUser.uid,
                userName: userName, 
                completedTransactions: completedTransactions,
                listingID: makeid(15)
            }
            var newMarketplaceListingObj = {
                document: "Sell listings",
                array: "ethereumListings",
                amount: amount,
                price: price,
                description: description,
                listingId:newSellListingObjPaypal.listingID
            }

            var tempPaypalListObj = data.ethereumListings;

            tempPaypalListObj.push(newSellListingObjPaypal);
            marketplacelistings.push(newMarketplaceListingObj);

           return listingRef.update({
            ethereumListings: tempPaypalListObj
            })
            .then(() => {
                Alert("listing sucessfully created!", "Create Listing Information", "green");
                userRef.update({
                    MarketplaceTransactions: marketplacelistings
                }).then(() =>{
                    window.location.href = "profile.html";
                })
                
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        break;
        case "Dogecoin":
            var listingRef = db.collection("marketplace").doc("Sell listings");
            var userRef = db.collection("users").doc(Auth.currentUser.uid);
            listingRef.get().then((doc) => {
                data = doc.data();
            

            var newSellListingObjPaypal = {
                amount: amount,
                price: price,
                description:description,
                user: Auth.currentUser.uid,
                userName: userName, 
                completedTransactions: completedTransactions,
                listingID: makeid(15)
            }
            var newMarketplaceListingObj = {
                document: "Sell listings",
                array: "dogecoinListings",
                amount: amount,
                price: price,
                description: description,
                listingId:newSellListingObjPaypal.listingID
            }

            var tempPaypalListObj = data.dogecoinListings;

            tempPaypalListObj.push(newSellListingObjPaypal);
            marketplacelistings.push(newMarketplaceListingObj);

           return listingRef.update({
            dogecoinListings: tempPaypalListObj
            })
            .then(() => {
                Alert("listing sucessfully created!", "Create Listing Information", "green");
                userRef.update({
                    MarketplaceTransactions: marketplacelistings
                }).then(() =>{
                    window.location.href = "profile.html";
                })
                
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        break;
        case "Tether":
            var listingRef = db.collection("marketplace").doc("Sell listings");
            var userRef = db.collection("users").doc(Auth.currentUser.uid);
            listingRef.get().then((doc) => {
                data = doc.data();
            

            var newSellListingObjPaypal = {
                amount: amount,
                price: price,
                description:description,
                user: Auth.currentUser.uid,
                userName: userName, 
                completedTransactions: completedTransactions,
                listingID: makeid(15)
            }
            var newMarketplaceListingObj = {
                document: "Sell listings",
                array: "tetherListings",
                amount: amount,
                price: price,
                description: description,
                listingId:newSellListingObjPaypal.listingID
            }

            var tempPaypalListObj = data.tetherListings;

            tempPaypalListObj.push(newSellListingObjPaypal);
            marketplacelistings.push(newMarketplaceListingObj);

           return listingRef.update({
            tetherListings: tempPaypalListObj
            })
            .then(() => {
                Alert("listing sucessfully created!", "Create Listing Information", "green");
                userRef.update({
                    MarketplaceTransactions: marketplacelistings
                }).then(() =>{
                    window.location.href = "profile.html";
                })
                
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        break;
        case "ApplePay":
            var listingRef = db.collection("marketplace").doc("Sell listings");
            var userRef = db.collection("users").doc(Auth.currentUser.uid);
            listingRef.get().then((doc) => {
                data = doc.data();
            

            var newSellListingObjPaypal = {
                amount: amount,
                price: price,
                description:description,
                user: Auth.currentUser.uid,
                userName: userName, 
                completedTransactions: completedTransactions,
                listingID: makeid(15)
            }
            var newMarketplaceListingObj = {
                document: "Sell listings",
                array: "applePayListings",
                amount: amount,
                price: price,
                description: description,
                listingId:newSellListingObjPaypal.listingID
            }

            var tempPaypalListObj = data.applePayListings;

            tempPaypalListObj.push(newSellListingObjPaypal);
            marketplacelistings.push(newMarketplaceListingObj);

           return listingRef.update({
            applePayListings: tempPaypalListObj
            })
            .then(() => {
                Alert("listing sucessfully created!", "Create Listing Information", "green");
                userRef.update({
                    MarketplaceTransactions: marketplacelistings
                })
                .then(() =>{
                    window.location.href = "profile.html";
                })
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        break;
        case "GooglePay":
            var listingRef = db.collection("marketplace").doc("Sell listings");
            var userRef = db.collection("users").doc(Auth.currentUser.uid);
            listingRef.get().then((doc) => {
                data = doc.data();
            

            var newSellListingObjPaypal = {
                amount: amount,
                price: price,
                description:description,
                user: Auth.currentUser.uid,
                userName: userName, 
                completedTransactions: completedTransactions,
                listingID: makeid(15)
            }
            var newMarketplaceListingObj = {
                document: "Sell listings",
                array: "googlePayListings",
                amount: amount,
                price: price,
                description: description,
                listingId:newSellListingObjPaypal.listingID
            }

            var tempPaypalListObj = data.googlePayListings;

            tempPaypalListObj.push(newSellListingObjPaypal);
            marketplacelistings.push(newMarketplaceListingObj);

           return listingRef.update({
            googlePayListings: tempPaypalListObj
            })
            .then(() => {
                Alert("listing sucessfully created!", "Create Listing Information", "green");
                userRef.update({
                    MarketplaceTransactions: marketplacelistings
                })
                .then(() =>{
                    window.location.href = "profile.html";
                })
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        break;
        case "ETransfer":
            var listingRef = db.collection("marketplace").doc("Sell listings");
            var userRef = db.collection("users").doc(Auth.currentUser.uid);
            listingRef.get().then((doc) => {
                data = doc.data();
            

            var newSellListingObjPaypal = {
                amount: amount,
                price: price,
                description:description,
                user: Auth.currentUser.uid,
                userName: userName, 
                completedTransactions: completedTransactions,
                listingID: makeid(15)
            }
            var newMarketplaceListingObj = {
                document: "Sell listings",
                array: "eTransferListings",
                amount: amount,
                price: price,
                description: description,
                listingId:newSellListingObjPaypal.listingID
            }

            var tempPaypalListObj = data.eTransferListings;

            tempPaypalListObj.push(newSellListingObjPaypal);
            marketplacelistings.push(newMarketplaceListingObj);

           return listingRef.update({
            eTransferListings: tempPaypalListObj
            })
            .then(() => {
                Alert("listing sucessfully created!", "Create Listing Information", "green");
                userRef.update({
                    MarketplaceTransactions: marketplacelistings
                }).then(() =>{
                    window.location.href = "profile.html";
                })
                
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        break;
        case "PrepaidVisas":
            var listingRef = db.collection("marketplace").doc("Sell listings");
            var userRef = db.collection("users").doc(Auth.currentUser.uid);
            listingRef.get().then((doc) => {
                data = doc.data();
            

            var newSellListingObjPaypal = {
                amount: amount,
                price: price,
                description:description,
                user: Auth.currentUser.uid,
                userName: userName, 
                completedTransactions: completedTransactions,
                listingID: makeid(15)
            }
            var newMarketplaceListingObj = {
                document: "Sell listings",
                array: "prepaidListings",
                amount: amount,
                price: price,
                description: description,
                listingId:newSellListingObjPaypal.listingID
            }

            var tempPaypalListObj = data.prepaidListings;

            tempPaypalListObj.push(newSellListingObjPaypal);
            marketplacelistings.push(newMarketplaceListingObj);

           return listingRef.update({
            prepaidListings: tempPaypalListObj
            })
            .then(() => {
                Alert("listing sucessfully created!", "Create Listing Information", "green");
                userRef.update({
                    MarketplaceTransactions: marketplacelistings
                }).then(() =>{
                    window.location.href = "profile.html";
                })
                
            })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
        break;
    }
}

        }
    }
}
    }
})
}

function CreateTransaction(sellOrBuy, seller, amount, type, usd,description, user, sellerUser, listingID, maxAmount)
{
    var listingRef = db.collection("marketplace").doc("Sell listings");
    var userRef = db.collection("users").doc(seller);
    userRef.get().then((doc2) => {
        
    listingRef.get().then((doc) => {
        data = doc.data();
    
    
    if(usd > 5)
    {
    if(document.getElementById('amount123').value != null && document.getElementById('amount123').value != ""){
    if(Number(document.getElementById('amount123').value <= Number(maxAmount)))
    {
    if(seller != Auth.currentUser.uid)
    {
    if(sellOrBuy == "sell")
    {
        data2 = doc2.data();
        var userRef = db.collection("users").doc(seller);
        var marketTransaction = data2.MarketplaceTransactions;
        var marketLength = marketTransaction.length;
        for(var i = 0; i < marketLength; i++)
        {
            if(listingID == marketTransaction[i].listingId)
            {
                var g = Number(marketTransaction[i].amount);
                g -= Number(amount);
                marketTransaction[i].amount = g;
            }
        }
        userRef.update({
            MarketplaceTransactions: marketTransaction
        })
        var docData ={
            seller: seller,
            amount: amount,
            receivedTransaction: false,
            type: type,
            usdDue: usd,
            description:description,
            userName: user,
            sellerUser: sellerUser,
            listingId: listingID
        }
        switch (type){
            case "applePay":
                var tempPaypalListObj = data.applePayListings;
                var tempArrayLength = tempPaypalListObj.length;
                for(var i = 0; i < tempArrayLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == listingID)
                    {
                        tempPaypalListObj[i].amount -= amount
                    }
                }
                listingRef.update({
                    applePayListings:tempPaypalListObj
                })
                break;
             case "bitcoin":
                var tempPaypalListObj = data.bitcoinListings;
                var tempArrayLength = tempPaypalListObj.length;
                for(var i = 0; i < tempArrayLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == listingID)
                    {
                        tempPaypalListObj[i].amount -= amount
                    }
                }
                listingRef.update({
                    bitcoinListings:tempPaypalListObj
                })
                break;
             case "dogecoin":
                var tempPaypalListObj = data.dogecoinListings;
                var tempArrayLength = tempPaypalListObj.length;
                for(var i = 0; i < tempArrayLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == listingID)
                    {
                        tempPaypalListObj[i].amount -= amount
                    }
                }
                listingRef.update({
                    dogecoinListings:tempPaypalListObj
                })
                break;
             case "eTransfer":
                var tempPaypalListObj = data.eTransferListings;
                var tempArrayLength = tempPaypalListObj.length;
                for(var i = 0; i < tempArrayLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == listingID)
                    {
                        tempPaypalListObj[i].amount -= amount
                    }
                }
                listingRef.update({
                    eTransferListings:tempPaypalListObj
                })
                break;
             case "ethereum":
                var tempPaypalListObj = data.ethereumListings;
                var tempArrayLength = tempPaypalListObj.length;
                for(var i = 0; i < tempArrayLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == listingID)
                    {
                        tempPaypalListObj[i].amount -= amount
                    }
                }
                listingRef.update({
                    ethereumListings:tempPaypalListObj
                })
                break;
             case "giftCard":
                var tempPaypalListObj = data.giftCardListings;
                var tempArrayLength = tempPaypalListObj.length;
                for(var i = 0; i < tempArrayLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == listingID)
                    {
                        tempPaypalListObj[i].amount -= amount
                    }
                }
                listingRef.update({
                    giftCardListings:tempPaypalListObj
                })
                break;
             case "googlePay":
                var tempPaypalListObj = data.googlePayListings;
                var tempArrayLength = tempPaypalListObj.length;
                for(var i = 0; i < tempArrayLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == listingID)
                    {
                        tempPaypalListObj[i].amount -= amount
                    }
                }
                listingRef.update({
                    googlePayListings:tempPaypalListObj
                })
                break;
             case "paypal":
                var tempPaypalListObj = data.paypalListings;
                var tempArrayLength = tempPaypalListObj.length;
                for(var i = 0; i < tempArrayLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == listingID)
                    {
                        tempPaypalListObj[i].amount -= amount
                    }
                }
                listingRef.update({
                    paypalListings:tempPaypalListObj
                })
                break;
             case "prepaid":
                var tempPaypalListObj = data.prepaidListings;
                var tempArrayLength = tempPaypalListObj.length;
                for(var i = 0; i < tempArrayLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == listingID)
                    {
                        tempPaypalListObj[i].amount -= amount
                    }
                }
                listingRef.update({
                    prepaidListings:tempPaypalListObj
                })
                break
            case "tether":
                var tempPaypalListObj = data.tetherListings;
                var tempArrayLength = tempPaypalListObj.length;
                for(var i = 0; i < tempArrayLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == listingID)
                    {
                        tempPaypalListObj[i].amount -= amount
                    }
                }
                listingRef.update({
                    tetherListings:tempPaypalListObj
                })
                break;
            

            
        }

        if(db.collection("OpenSellTransactions").doc(Auth.currentUser.uid) == null)
        {
            Alert("You can only have one active buy request! Cancel your current one to create a new one!", "Listings Information", "yellow")
        }
        else{
        var userRef = db.collection("users").doc(seller);
        userRef.get().then((doc) => {
            data1 = doc.data();
            if(data.IncomingMarketplaceTransactions != null)
            {
            var marketplacetransactions = data.IncomingMarketplaceTransactions;
            marketplacetransactions.push(seller);
            }
            else{
                var marketplacetransactions= [];
                marketplacetransactions.push(seller);
            }
        var tempData = {
            Coins: data1.Coins,
            Address: data1.Address,
            Transactions: data1.Transactions,
            Notifications:data1.Notifications,
            Username: data1.Username,
            HashesMined:data1.HashesMined,
            newFaucetTime: data1.newFaucetTime,
            ReferralCode: data1.ReferralCode,
            Referrals: data1.Referrals,
            Referrer: data1.Referrer,
            Multiplier: data1.Multiplier,
            PreviousTransactions: data1.PreviousTransactions,
            MarketplaceTransactions: data1.MarketplaceTransactions,
            FinishedMarketplaceTransactions: data1.FinishedMarketplaceTransactions,
            IncomingMarketplaceTransactions: marketplacetransactions
        }
        db.collection("OpenSellTransactions").doc(Auth.currentUser.uid).set(docData).then(() => {
            db.collection("users").doc(seller).set(tempData).then(() => {
                Alert("Order Created! Go to your Orders page to check its status!", "Sell Listings Information", "green");
                location.reload();
            })
        })
    })
    }
}

}
else{
    Alert("You cant click on your own offer!", "Sell Listings Information", "yellow")

}
}
else{
    Alert("You cant order more PEPPAS than the user has in stock!", "Sell Listing Information", "yellow")
}
    }
    else{
        Alert("You need to input how many PEPPAS you would like to buy from this vendor!", "Sell Listings Information", "yellow");
    }
    }
    else{
        Alert("You cant order less than 5 USD worth of PEPPAS!", "Sell Listings Information", "red")
    }
})
    })
}
function openMarketplaceTransactionModal(seller, type, user,sellerUser,listingId, maxAmount, price)
{
    let html = '';


    var modal = document.getElementById("sellModal");
    modal.style.display = "block";
    var Amount = document.getElementById("amount");
    list = document.getElementById("button")
    document.getElementById('maxAmount').innerHTML = 'Transaction Amount(max: ' + maxAmount.toString() + ' PEPPAS )'
    $(".startTransaction").on('click',function () {
        CreateTransaction('sell', seller, Amount.value, type)
        });
    
        $("#amount123").on("change", function(){
            var amount = document.getElementById('amount123').value;
            if(Number(amount) > Number(maxAmount))
            {
                amount = maxAmount;
            var usdDue = Number(price) * Number(amount);
            $('#amount123').val(amount.toString())
            $("#usdDue").text('Total Amount Due: ' + usdDue.toFixed(4).toString()+ 'USD');
            }
            else{
                var usdDue = Number(price) * Number(amount);
            $("#usdDue").text('Total Amount Due: ' + usdDue.toFixed(4).toString()+ 'USD');
  
            }
        })
    const li = `<button style="margin-left:35%;"onClick="CreateTransaction('sell', '${seller}', document.getElementById('amount123').value, '${type}', document.getElementById('amount123').value * ${price}, document.getElementById('description').value, '${user}','${sellerUser}', '${listingId}', '${maxAmount}')
    " class = "button2" id="startTransaction">Order PEPPAS!</button>`
    html += li;
    list.innerHTML = html
}


function loadPage(sellOrBuy, method)
{

    if(sellOrBuy == "sell")
    {
        switch(method)
        {
            case "paypal":
                var listingRef1 = db.collection("marketplace").doc("Sell listings");
                listingRef1.get().then((doc) => {
                    var userRef = db.collection("users").doc(Auth.currentUser.uid);
                    userRef.get().then((doc1) => {
                    data = doc.data();
                    data1 = doc1.data();
                    var paypalListing = data.paypalListings;
                    

                    var paypalListings = paypalListing.sort(
                        function (a, b){
                            return a.price-b.price;
                        });
                    var arrayLength = paypalListings.length;
                var j = 0;
                let html = '';
                var list = document.getElementById('List');
                if(arrayLength <= 0)
                {
                    const li = `
                    <li>
                        <h3 style="color:black">There Are no Listings here yet! Be the first to create a listing in this category by going to the Create Listing Page!</h3>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                }
                for (var i = 0; i < arrayLength; i++) {
                    j++
                    if(j>25)
                    {
                        break;
                    }
                    var percDiff =  100 * Number(paypalListings[i].price)/0.00007023;
                    if(Number(paypalListings[i].price) > 0.00007023)
                    {
                        percDiff -= 100
                    const li = `
                    <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','paypal', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>

                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                    ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> +${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                    }
                    else{
                        percDiff = 100 - percDiff;
                        const li = `
                        <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','paypal', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>
                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                        ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> -${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html;
                    }

                }
                list.innerHTML = html;
                var drop = document.getElementById('dropbtn');
                drop.innerHTML = "Paypal";
            })
        })
            break;
             case "giftCard":
                var listingRef1 = db.collection("marketplace").doc("Sell listings");
                listingRef1.get().then((doc) => {
                    var userRef = db.collection("users").doc(Auth.currentUser.uid);
                    userRef.get().then((doc1) => {
                    data1 = doc1.data();
                    data = doc.data();
                    var paypalListing = data.giftCardListings;
                    

                    var paypalListings = paypalListing.sort(
                        function (a, b){
                            return a.price-b.price;
                        
                        });
                    var arrayLength = paypalListings.length;
                var j = 0;
                let html = '';
                var list = document.getElementById('List');
                if(arrayLength <= 0)
                {
                    const li = `
                    <li>
                        <h3 style="color:black">There Are no Listings here yet! Be the first to create a listing in this category by going to the Create Listing Page!</h3>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                }
                for (var i = 0; i < arrayLength; i++) {
                    j++
                    if(j>25)
                    {
                        break;
                    }
                    var percDiff =  100 * Number(paypalListings[i].price)/0.00007023;
                    if(Number(paypalListings[i].price) > 0.00007023)
                    {
                        percDiff -= 100
                    const li = `
                    <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','giftCards', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>

                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                    ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> +${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                    }
                    else{
                        percDiff = 100 - percDiff;
                        const li = `
                        <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','giftCards', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>

                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                    ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> -${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html;
                    }
                
                }
                list.innerHTML = html;
                var drop = document.getElementById('dropbtn');
                drop.innerHTML = "Gift Card";
            })
        })
            break;
            case "bitcoin":
                var listingRef1 = db.collection("marketplace").doc("Sell listings");
                listingRef1.get().then((doc) => {
                    var userRef = db.collection("users").doc(Auth.currentUser.uid);
                    userRef.get().then((doc1) => {
                    data1 = doc1.data();
                    data = doc.data();
                    var paypalListing = data.bitcoinListings;
                    

                    var paypalListings = paypalListing.sort(
                        function (a, b){
                            return a.price-b.price;
                        
                        });
                    var arrayLength = paypalListings.length;
                var j = 0;
                let html = '';
                var list = document.getElementById('List');
                if(arrayLength <= 0)
                {
                    const li = `
                    <li>
                        <h3 style="color:black">There Are no Listings here yet! Be the first to create a listing in this category by going to the Create Listing Page!</h3>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                }
                for (var i = 0; i < arrayLength; i++) {
                    j++
                    if(j>25)
                    {
                        break;
                    }
                    var percDiff =  100 * Number(paypalListings[i].price)/0.00007023;
                    if(Number(paypalListings[i].price) > 0.00007023)
                    {
                        percDiff -= 100
                    const li = `
                    <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','bitcoin', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                    <h3 style="color:black">${paypalListings[i].userName}</h3>
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>

                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                    ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> +${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                    }
                    else{
                        percDiff = 100 - percDiff;
                        const li = `
                        <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','bitcoin', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>

                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                    ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> -${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html;
                    }
                
                }
                list.innerHTML = html;
                var drop = document.getElementById('dropbtn');
                drop.innerHTML = "Bitcoin";
            })
        })
            break;
            case "ethereum":
                var listingRef1 = db.collection("marketplace").doc("Sell listings");
                listingRef1.get().then((doc) => {
                    var userRef = db.collection("users").doc(Auth.currentUser.uid);
                    userRef.get().then((doc1) => {
                    data = doc.data();
                    data1 = doc1.data();
                    var paypalListing = data.ethereumListings;
                    

                    var paypalListings = paypalListing.sort(
                        function (a, b){
                            return a.price-b.price;
                        });
                    var arrayLength = paypalListings.length;
                var j = 0;
                let html = '';
                var list = document.getElementById('List');
                if(arrayLength <= 0)
                {
                    const li = `
                    <li>
                        <h3 style="color:black">There Are no Listings here yet! Be the first to create a listing in this category by going to the Create Listing Page!</h3>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                }
                for (var i = 0; i < arrayLength; i++) {
                    j++
                    if(j>25)
                    {
                        break;
                    }
                    var percDiff =  100 * Number(paypalListings[i].price)/0.00007023;
                    if(Number(paypalListings[i].price) > 0.00007023)
                    {
                        percDiff -= 100
                    const li = `
                    <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','ethereum', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>

                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                    ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> +${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                    }
                    else{
                        percDiff = 100 - percDiff;
                        const li = `
                        <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','ethereum', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>
                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                        ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> -${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html;
                    }

                }
                list.innerHTML = html;
                var drop = document.getElementById('dropbtn');
                drop.innerHTML = "Ethereum";
            })
        })
            break;
            case "dogecoin":
                var listingRef1 = db.collection("marketplace").doc("Sell listings");
                listingRef1.get().then((doc) => {
                    var userRef = db.collection("users").doc(Auth.currentUser.uid);
                    userRef.get().then((doc1) => {
                    data = doc.data();
                    data1 = doc1.data();
                    var paypalListing = data.dogecoinListings;
                    

                    var paypalListings = paypalListing.sort(
                        function (a, b){
                            return a.price-b.price;
                        });
                    var arrayLength = paypalListings.length;
                var j = 0;
                let html = '';
                var list = document.getElementById('List');
                if(arrayLength <= 0)
                {
                    const li = `
                    <li>
                        <h3 style="color:black">There Are no Listings here yet! Be the first to create a listing in this category by going to the Create Listing Page!</h3>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                }
                for (var i = 0; i < arrayLength; i++) {
                    j++
                    if(j>25)
                    {
                        break;
                    }
                    var percDiff =  100 * Number(paypalListings[i].price)/0.00007023;
                    if(Number(paypalListings[i].price) > 0.00007023)
                    {
                        percDiff -= 100
                    const li = `
                    <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','dogecoin', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>

                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                    ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> +${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                    }
                    else{
                        percDiff = 100 - percDiff;
                        const li = `
                        <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','dogecoin', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>
                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                        ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> -${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html;
                    }

                }
                list.innerHTML = html;
                var drop = document.getElementById('dropbtn');
                drop.innerHTML = "Dogecoin";
            })
        })
            break;
            case "tether":
                var listingRef1 = db.collection("marketplace").doc("Sell listings");
                listingRef1.get().then((doc) => {
                    var userRef = db.collection("users").doc(Auth.currentUser.uid);
                    userRef.get().then((doc1) => {
                    data = doc.data();
                    data1 = doc1.data();
                    var paypalListing = data.tetherListings;
                    

                    var paypalListings = paypalListing.sort(
                        function (a, b){
                            return a.price-b.price;
                        });
                    var arrayLength = paypalListings.length;
                var j = 0;
                let html = '';
                var list = document.getElementById('List');
                if(arrayLength <= 0)
                {
                    const li = `
                    <li>
                        <h3 style="color:black">There Are no Listings here yet! Be the first to create a listing in this category by going to the Create Listing Page!</h3>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                }
                for (var i = 0; i < arrayLength; i++) {
                    j++
                    if(j>25)
                    {
                        break;
                    }
                    var percDiff =  100 * Number(paypalListings[i].price)/0.00007023;
                    if(Number(paypalListings[i].price) > 0.00007023)
                    {
                        percDiff -= 100
                    const li = `
                    <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','tether', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>

                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                    ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> +${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                    }
                    else{
                        percDiff = 100 - percDiff;
                        const li = `
                        <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','tether', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>
                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                        ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> -${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html;
                    }

                }
                list.innerHTML = html;
                var drop = document.getElementById('dropbtn');
                drop.innerHTML = "Tether";
            })
        })
            break;
            case "applePay":
                var listingRef1 = db.collection("marketplace").doc("Sell listings");
                listingRef1.get().then((doc) => {
                    var userRef = db.collection("users").doc(Auth.currentUser.uid);
                    userRef.get().then((doc1) => {
                    data = doc.data();
                    data1 = doc1.data();
                    var paypalListing = data.applePayListings;
                    

                    var paypalListings = paypalListing.sort(
                        function (a, b){
                            return a.price-b.price;
                        });
                    var arrayLength = paypalListings.length;
                var j = 0;
                let html = '';
                var list = document.getElementById('List');
                if(arrayLength <= 0)
                {
                    const li = `
                    <li>
                        <h3 style="color:black">There Are no Listings here yet! Be the first to create a listing in this category by going to the Create Listing Page!</h3>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                }
                for (var i = 0; i < arrayLength; i++) {
                    j++
                    if(j>25)
                    {
                        break;
                    }
                    var percDiff =  100 * Number(paypalListings[i].price)/0.00007023;
                    if(Number(paypalListings[i].price) > 0.00007023)
                    {
                        percDiff -= 100
                    const li = `
                    <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','applePay', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>

                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                    ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> +${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                    }
                    else{
                        percDiff = 100 - percDiff;
                        const li = `
                        <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','applePay', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>
                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                        ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> -${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html;
                    }

                }
                list.innerHTML = html;
                var drop = document.getElementById('dropbtn');
                drop.innerHTML = "Apple Pay";
            })
        })
            break;
            case "googlePay":
                var listingRef1 = db.collection("marketplace").doc("Sell listings");
                listingRef1.get().then((doc) => {
                    var userRef = db.collection("users").doc(Auth.currentUser.uid);
                    userRef.get().then((doc1) => {
                    data = doc.data();
                    data1 = doc1.data();
                    var paypalListing = data.googlePayListings;
                    

                    var paypalListings = paypalListing.sort(
                        function (a, b){
                            return a.price-b.price;
                        });
                    var arrayLength = paypalListings.length;
                var j = 0;
                let html = '';
                var list = document.getElementById('List');
                if(arrayLength <= 0)
                {
                    const li = `
                    <li>
                        <h3 style="color:black">There Are no Listings here yet! Be the first to create a listing in this category by going to the Create Listing Page!</h3>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                }
                for (var i = 0; i < arrayLength; i++) {
                    j++
                    if(j>25)
                    {
                        break;
                    }
                    var percDiff =  100 * Number(paypalListings[i].price)/0.00007023;
                    if(Number(paypalListings[i].price) > 0.00007023)
                    {
                        percDiff -= 100
                    const li = `
                    <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','googlePay', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>

                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                    ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> +${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                    }
                    else{
                        percDiff = 100 - percDiff;
                        const li = `
                        <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','googlePay', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>
                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                        ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> -${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html;
                    }

                }
                list.innerHTML = html;
                var drop = document.getElementById('dropbtn');
                drop.innerHTML = "Google Pay";
            })
        })
            break;
            case "eTransfer":
                var listingRef1 = db.collection("marketplace").doc("Sell listings");
                listingRef1.get().then((doc) => {
                    var userRef = db.collection("users").doc(Auth.currentUser.uid);
                    userRef.get().then((doc1) => {
                    data = doc.data();
                    data1 = doc1.data();
                    var paypalListing = data.eTransferListings;
                    

                    var paypalListings = paypalListing.sort(
                        function (a, b){
                            return a.price-b.price;
                        });
                    var arrayLength = paypalListings.length;
                var j = 0;
                let html = '';
                var list = document.getElementById('List');
                if(arrayLength <= 0)
                {
                    const li = `
                    <li>
                        <h3 style="color:black">There Are no Listings here yet! Be the first to create a listing in this category by going to the Create Listing Page!</h3>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                }
                for (var i = 0; i < arrayLength; i++) {
                    j++
                    if(j>25)
                    {
                        break;
                    }
                    var percDiff =  100 * Number(paypalListings[i].price)/0.00007023;
                    if(Number(paypalListings[i].price) > 0.00007023)
                    {
                        percDiff -= 100
                    const li = `
                    <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','eTransfer', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>

                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                    ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> +${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                    }
                    else{
                        percDiff = 100 - percDiff;
                        const li = `
                        <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','eTransfer', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>
                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                        ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> -${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html;
                    }

                }
                list.innerHTML = html;
                var drop = document.getElementById('dropbtn');
                drop.innerHTML = "E-Transfer";
            })
        })
            break;
            case "prepaid":
                var listingRef1 = db.collection("marketplace").doc("Sell listings");
                listingRef1.get().then((doc) => {
                    var userRef = db.collection("users").doc(Auth.currentUser.uid);
                    userRef.get().then((doc1) => {
                    data = doc.data();
                    data1 = doc1.data();
                    var paypalListing = data.prepaidListings;
                    

                    var paypalListings = paypalListing.sort(
                        function (a, b){
                            return a.price-b.price;
                        });
                    var arrayLength = paypalListings.length;
                var j = 0;
                let html = '';
                var list = document.getElementById('List');
                if(arrayLength <= 0)
                {
                    const li = `
                    <li>
                        <h3 style="color:black">There Are no Listings here yet! Be the first to create a listing in this category by going to the Create Listing Page!</h3>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                }
                for (var i = 0; i < arrayLength; i++) {
                    j++
                    if(j>25)
                    {
                        break;
                    }
                    var percDiff =  100 * Number(paypalListings[i].price)/0.00007023;
                    if(Number(paypalListings[i].price) > 0.00007023)
                    {
                        percDiff -= 100
                    const li = `
                    <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','prepaid', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>

                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                    ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> +${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html
                    }
                    else{
                        percDiff = 100 - percDiff;
                        const li = `
                        <li onclick="openMarketplaceTransactionModal('${paypalListings[i].user}','prepaid', '${data1.Username}','${paypalListings[i].userName}','${paypalListings[i].listingID}','${paypalListings[i].amount}', '${paypalListings[i].price}')">
                        <h3 style="color:black">${paypalListings[i].userName}</h3>
                        <h4 style="color:black">User has completed ${paypalListings[i].completedTransactions} successful Transactions</h4>
                        1 Peppa for ${paypalListings[i].price}USD
                    <br>
                        ${paypalListings[i].amount} PEPPAS left in stock
                        
                        <h2 style="color:black;"> -${percDiff.toFixed(4)}% (compared to current market price)</h2>
    
                        <h5 style="color:black">${paypalListings[i].description}</h5>
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html;
                    }

                }
                list.innerHTML = html;
                var drop = document.getElementById('dropbtn');
                drop.innerHTML = "Prepaids";
            })
        })
            break;
        }
        
        
    }
    else{

    }
}

function openRefill(type, listingId)
{
    var refill = document.getElementById('refillModal');
    refill.style.display = "block";
    let html = '';

    list = document.getElementById("buttonR")

    
    const li = `<button style="margin-left:20%;"onClick="refillPeppas('${type}', '${listingId}',  document.getElementById('amount1234').value)
    " class = "button2" id="startTransaction">Refill PEPPAS!</button>`
    html += li;
    list.innerHTML = html
}

function refillPeppas(type, listingId, refillAmount)
{
    if(refillAmount == " " || refillAmount == null || refillAmount == "")
    {
        Alert("You cant Refill nothing!", "Profile Information", "yellow")
    }
    else{
        if(refillAmount > 49999)
        {
        var listingRef = db.collection("marketplace").doc("Sell listings");
        var userRef = db.collection("users").doc(Auth.currentUser.uid);
        userRef.get().then((doc2) => {
        listingRef.get().then((doc) => {
            data = doc.data();
            data2 = doc2.data();
            var coins = data2.Coins
            if(coins >= refillAmount)
            {
                
            coins -= refillAmount
            var incomTransactions = data2.MarketplaceTransactions;
            var incomLength = incomTransactions.length;
            for(var i = 0;i <incomLength;i++ )
            {
                if(incomTransactions[i].listingId == listingId)
                {
                    var jj = parseFloat(incomTransactions[i].amount);

                    jj += Number(refillAmount);
                    incomTransactions[i].amount = jj;
                }
            }
        

        switch (type){
            case "applePayListings":
                var tempPaypalListObj = data.applePayListings;
                break;
             case "bitcoinListings":
                var tempPaypalListObj = data.bitcoinListings;
                break;
             case "dogecoinListings":
                var tempPaypalListObj = data.dogecoinListings;
                break;
             case "eTransferListings":
                var tempPaypalListObj = data.eTransferListings;
                break;
             case "ethereumListings":
                var tempPaypalListObj = data.ethereumListings;
                break;
             case "giftCardListings":
                var tempPaypalListObj = data.giftCardListings;
                break;
             case "googlePayListings":
                var tempPaypalListObj = data.googlePayListings;
                break;
             case "paypalListings":
                var tempPaypalListObj = data.paypalListings;
                break;
             case "prepaidListings":
                var tempPaypalListObj = data.prepaidListings;
                break;
            case "tetherListings":
                var tempPaypalListObj = data.tetherListings;
                break;
                
        }

            var paypalLength = tempPaypalListObj.length;
            for(var i = 0;i <paypalLength;i++ )
            {
                if(tempPaypalListObj[i].listingID == listingId)
                {
                    var jj = parseFloat(tempPaypalListObj[i].amount);

                    jj += Number(refillAmount);
                    tempPaypalListObj[i].amount = jj;
                }
            }
            var TransactionObj = {
                ReceiverAddress: "PeppaTrade",
                SenderAddress: data2.Address,
                TransactionDate: new Date(),
                Amount: Number(refillAmount),
                NetworkFee: "0",
                send: true
            }
            var transactions = data2.Transactions
            transactions.push(TransactionObj);
            switch (type){
                case "applePayListings":
                    return listingRef.update({
                        applePayListings: tempPaypalListObj
                        })
                        .then(() => {
                            Alert("listing sucessfully updated!", "Profile Information", "green");
                            userRef.update({
                                MarketplaceTransactions: incomTransactions,
                                Coins: coins,
                                Transactions:transactions
                            })
                            .then(() =>{
                                location.reload();
                            })
                            
                        })
                        .catch((error) => {
                            console.error("Error updating document: ", error);
                        });                    
                        break;
                 case "bitcoinListings":
                    return listingRef.update({
                        bitcoinListings: tempPaypalListObj
                        })
                        .then(() => {
                            Alert("listing sucessfully updated!", "Profile Information", "green");
                            userRef.update({
                                MarketplaceTransactions: incomTransactions,
                                Coins: coins,
                                Transactions:transactions
                            }).then(() =>{
                                location.reload();
                            })
                        })
                        .catch((error) => {
                            console.error("Error updating document: ", error);
                        });                    
                        
                        break;
                 case "dogecoinListings":
                    return listingRef.update({
                        dogecoinListings: tempPaypalListObj
                        })
                        .then(() => {
                            Alert("listing sucessfully updated!", "Profile Information", "green");
                            userRef.update({
                                MarketplaceTransactions: incomTransactions,
                                Coins: coins,
                                Transactions:transactions
                            })
                            .then(() =>{
                                location.reload();
                            })
                        })
                        .catch((error) => {
                            console.error("Error updating document: ", error);
                        });                    
                        
                        break;
                 case "eTransferListings":
                    return listingRef.update({
                        eTransferListings: tempPaypalListObj
                        })
                        .then(() => {
                            Alert("listing sucessfully updated!", "Profile Information", "green");
                            userRef.update({
                                MarketplaceTransactions: incomTransactions,
                                Coins: coins,
                                Transactions:transactions
                            }).then(() =>{
                                location.reload();
                            })
                        })
                        .catch((error) => {
                            console.error("Error updating document: ", error);
                        });        
                                            break;
                 case "ethereumListings":
                    return listingRef.update({
                        ethereumListings: tempPaypalListObj
                        })
                        .then(() => {
                            Alert("listing sucessfully updated!", "Profile Information", "green");
                            userRef.update({
                                MarketplaceTransactions: incomTransactions,
                                Coins: coins,
                                Transactions:transactions
                            }).then(() =>{
                                location.reload();
                            })
                        })
                        .catch((error) => {
                            console.error("Error updating document: ", error);
                        });        
                                                  break;
                 case "giftCardListings":
                    return listingRef.update({
                        giftCardListings: tempPaypalListObj
                        })
                        .then(() => {
                            Alert("listing sucessfully updated!", "Profile Information", "green");
                            userRef.update({
                                MarketplaceTransactions: incomTransactions,
                                Coins: coins,
                                Transactions:transactions
                            })
                            .then(() =>{
                                location.reload();
                            })
                        })
                        .catch((error) => {
                            console.error("Error updating document: ", error);
                        });                     break;
                 case "googlePayListings":
                    return listingRef.update({
                        googlePayListings: tempPaypalListObj
                        })
                        .then(() => {
                            Alert("listing sucessfully updated!", "Profile Information", "green");
                            userRef.update({
                                MarketplaceTransactions: incomTransactions,
                                Coins: coins,
                                Transactions:transactions
                            })
                            .then(() =>{
                                location.reload();
                            })
                        })
                        .catch((error) => {
                            console.error("Error updating document: ", error);
                        });                     break;
                 case "paypalListings":
                    return listingRef.update({
                        paypalListings: tempPaypalListObj
                        })
                        .then(() => {
                            Alert("listing sucessfully updated!", "Profile Information", "green");
                            userRef.update({
                                MarketplaceTransactions: incomTransactions,
                                Coins: coins,
                                Transactions:transactions
                            })
                            .then(() =>{
                                location.reload();
                            })
                        })
                        .catch((error) => {
                            console.error("Error updating document: ", error);
                        });                         break;
                 case "prepaidListings":
                    return listingRef.update({
                        prepaidListings: tempPaypalListObj
                        })
                        .then(() => {
                            Alert("listing sucessfully updated!", "Profile Information", "green");
                            userRef.update({
                                MarketplaceTransactions: incomTransactions,
                                Coins: coins,
                                Transactions:transactions
                            }).then(() =>{
                                location.reload();
                            })
                        })
                        .catch((error) => {
                            console.error("Error updating document: ", error);
                        });                       break;
                case "tetherListings":
                    return listingRef.update({
                        tetherListings: tempPaypalListObj
                        })
                        .then(() => {
                            Alert("listing sucessfully updated!", "Profile Information", "green");
                            userRef.update({
                                MarketplaceTransactions: incomTransactions,
                                Coins: coins,
                                Transactions:transactions
                            }).then(() =>{
                                location.reload();
                            })
                        })
                        .catch((error) => {
                            console.error("Error updating document: ", error);
                        });   
                                            
                        break;
                    
            }

    }
    else{
        Alert("You cant refill more than the amount of PEPPAS you have!", "Profile Information!", "yellow")
    }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
                
})
        }else{
            Alert("You need to refill with at least 50k PEPPAS", "Profile Information!", "yellow")
        }
    }
}

function CloseListing(type,listingID)
{
    var refill = document.getElementById('closeModal');
    refill.style.display = "block";
    let html = '';

    list = document.getElementById("buttonC")

    
    const li = `<button style="margin-left:5%;"onClick="CloseListingBackEnd('${type}', '${listingID}')
    " class = "button2" id="startTransaction">Close Transaction!</button>`
    html += li;
    list.innerHTML = html
}



function CloseListingBackEnd(type, listingID)
{
    var listingRef = db.collection("marketplace").doc("Sell listings");
    var userRef = db.collection("users").doc(Auth.currentUser.uid);
    userRef.get().then((doc2) => {
    listingRef.get().then((doc) => {
        data = doc.data();
        data2 = doc2.data();
        var coins = data2.Coins
        var plusAmount = 0;
            
        var incomTransactions = data2.MarketplaceTransactions;
        var incomLength = incomTransactions.length;
    
        for(var i = 0;i <incomLength;i++ )
        {        

            if(incomTransactions[i].listingId == listingID)
            {
                plusAmount = incomTransactions[i].amount;
                incomTransactions.splice(i, 1); 
            }
        }
        db.collection("OpenSellTransactions").where("listingId", "==", listingID)        
        .get()
        .then((querySnapshot) => {
        if(!querySnapshot.empty)
            {
                querySnapshot.forEach((doc5) => {
                    if(doc5.exists)
                    {
                        var incommingTrans = data2.IncomingMarketplaceTransactions;
                        var incommingLength = incommingTrans.length;
                        for(var i = 0; i < incommingLength; i++)
                        {
                            if(doc5.id == incommingTrans[i])
                            {
                                incommingTrans.splice(i, 1);
                            }
                        }
                        userRef.update({
                            IncomingMarketplaceTransactions: incommingTrans
                        })
                        var data = doc5.data();
                        db.collection("OpenSellTransactions").doc(j).delete().then(()=>{
                            var userRef2 = db.collection("users").doc(j);
                            userRef2.get().then((doc6) => {
                                var notifications = data.Notifications
                                var NotificationsObj = {
                                    NotifType: "red",
                                    NotifContent: doc5.data().sellerUser + " Has deleted their listing that you have created an order for! Got scammed or think there was a mistake? Join our discord server and create a ticket or proceed to the report a problem page! Make sure to copy the username of the seller.",
                                    NotifTitle: "Transaction Cancelled!"
                                
                                }
                                notifications.push(NotificationsObj);
                                
                                userRef2.update({
                                    Notifications: notifications,
                                })   
                            })
                        });
                    }
                })
            }

        })
        switch (type){
        case "applePayListings":
            var tempPaypalListObj = data.applePayListings;
            break;
         case "bitcoinListings":
            var tempPaypalListObj = data.bitcoinListings;
            break;
         case "dogecoinListings":
            var tempPaypalListObj = data.dogecoinListings;
            break;
         case "eTransferListings":
            var tempPaypalListObj = data.eTransferListings;
            break;
         case "ethereumListings":
            var tempPaypalListObj = data.ethereumListings;
            break;
         case "giftCardListings":
            var tempPaypalListObj = data.giftCardListings;
            break;
         case "googlePayListings":
            var tempPaypalListObj = data.googlePayListings;
            break;
         case "paypalListings":
            var tempPaypalListObj = data.paypalListings;
            break;
         case "prepaidListings":
            var tempPaypalListObj = data.prepaidListings;
            break;
        case "tetherListings":
            var tempPaypalListObj = data.tetherListings;
            break;
            
    }
    var g = Number(coins);
    g += Number(plusAmount);
    coins = g
        var paypalLength = tempPaypalListObj.length;
        for(var i = 0;i <paypalLength;i++ )
        {
            if(tempPaypalListObj[i].listingID == listingID)
            {
                tempPaypalListObj.splice(i, 1); 
            }
        }

        var TransactionObj = {
            ReceiverAddress: data2.Address,
            SenderAddress: "PeppaTrade",
            TransactionDate: new Date(),
            Amount: Number(plusAmount),
            NetworkFee: "0",
            send: false
        }
        var transactions = data2.Transactions;
        transactions.push(TransactionObj);
        switch (type){
            case "applePayListings":
                return listingRef.update({
                    applePayListings: tempPaypalListObj
                    })
                    .then(() => {
                        Alert("listing sucessfully closed! You have been reimbursed your Peppacoins!", "Profile Information", "green");
                        userRef.update({
                            MarketplaceTransactions: incomTransactions,
                            Coins: coins,
                            Transactions:transactions
                        })                        
                        .then(() =>{
                            location.reload();
                        })
                    })
                    .catch((error) => {
                        console.error("Error updating document: ", error);
                    });                    
                    break;
             case "bitcoinListings":
                return listingRef.update({
                    bitcoinListings: tempPaypalListObj
                    })
                    .then(() => {
                        Alert("listing sucessfully closed! You have been reimbursed your Peppacoins!", "Profile Information", "green");
                        userRef.update({
                            MarketplaceTransactions: incomTransactions,
                            Coins: coins,
                            Transactions:transactions
                        }) .then(() =>{
                            location.reload();
                        })                       
                    })
                    .catch((error) => {
                        console.error("Error updating document: ", error);
                    });                    
                    
                    break;
             case "dogecoinListings":
                return listingRef.update({
                    dogecoinListings: tempPaypalListObj
                    })
                    .then(() => {
                        Alert("listing sucessfully closed! You have been reimbursed your Peppacoins!", "Profile Information", "green");
                        userRef.update({
                            MarketplaceTransactions: incomTransactions,
                            Coins: coins,
                            Transactions:transactions
                        }) .then(() =>{
                            location.reload();
                        })                       
                    })
                    .catch((error) => {
                        console.error("Error updating document: ", error);
                    });                    
                    
                    break;
             case "eTransferListings":
                 listingRef.update({
                    eTransferListings: tempPaypalListObj
                    })
                    .then(() => {
                        Alert("listing sucessfully closed! You have been reimbursed your Peppacoins!", "Profile Information", "green");
                        userRef.update({
                            MarketplaceTransactions: incomTransactions,
                            Coins: coins,
                            Transactions:transactions
                        })                        
                        .then(() =>{
                            location.reload();
                        })
                    })
                    .catch((error) => {
                        console.error("Error updating document: ", error);
                    });        
                                       
                    break;
             case "ethereumListings":
                return listingRef.update({
                    ethereumListings: tempPaypalListObj
                    })
                    .then(() => {
                        Alert("listing sucessfully closed! You have been reimbursed your Peppacoins!", "Profile Information", "green");
                        userRef.update({
                            MarketplaceTransactions: incomTransactions,
                            Coins: coins,
                            Transactions:transactions
                        }).then(() =>{
                            location.reload();
                        })
                    })
                    .catch((error) => {
                        console.error("Error updating document: ", error);
                    });        
                                              break;
             case "giftCardListings":
                return listingRef.update({
                    giftCardListings: tempPaypalListObj
                    })
                    .then(() => {
                        Alert("listing sucessfully closed! You have been reimbursed your Peppacoins!", "Profile Information", "green");
                        userRef.update({
                            MarketplaceTransactions: incomTransactions,
                            Coins: coins,
                            Transactions:transactions
                        }).then(() =>{
                            location.reload();
                        })
                    })
                    .catch((error) => {
                        console.error("Error updating document: ", error);
                    });                     break;
             case "googlePayListings":
                return listingRef.update({
                    googlePayListings: tempPaypalListObj
                    })
                    .then(() => {
                        Alert("listing sucessfully closed! You have been reimbursed your Peppacoins!", "Profile Information", "green");
                        userRef.update({
                            MarketplaceTransactions: incomTransactions,
                            Coins: coins,
                            Transactions:transactions
                        }).then(() =>{
                            location.reload();
                        })
                    })
                    .catch((error) => {
                        console.error("Error updating document: ", error);
                    });                     break;
             case "paypalListings":
                return listingRef.update({
                    paypalListings: tempPaypalListObj
                    })
                    .then(() => {

                        Alert("listing sucessfully closed! You have been reimbursed your Peppacoins!", "Profile Information", "green");
                        userRef.update({
                            MarketplaceTransactions: incomTransactions,
                            Coins: coins,
                            Transactions:transactions
                        })
                        .then(() =>{
                            location.reload();
                        })
                    })
                    .catch((error) => {
                        console.error("Error updating document: ", error);
                    });                         break;
             case "prepaidListings":
                return listingRef.update({
                    prepaidListings: tempPaypalListObj
                    })
                    .then(() => {
                        Alert("listing sucessfully closed! You have been reimbursed your Peppacoins!", "Profile Information", "green");
                        userRef.update({
                            MarketplaceTransactions: incomTransactions,
                            Coins: coins,
                            Transactions:transactions
                        })
                        .then(() =>{
                            location.reload();
                        })
                    })
                    .catch((error) => {
                        console.error("Error updating document: ", error);
                    });                       break;
            case "tetherListings":
                return listingRef.update({
                    tetherListings: tempPaypalListObj
                    })
                    .then(() => {
                        Alert("listing sucessfully closed! You have been reimbursed your Peppacoins!", "Profile Information", "green");
                        userRef.update({
                            MarketplaceTransactions: incomTransactions,
                            Coins: coins,
                            Transactions:transactions
                        })
                        .then(() =>{
                            location.reload();
                        })
                    })
                    .catch((error) => {
                        console.error("Error updating document: ", error);
                    });   
                                        
                    break;
                
        }
    })
})
}

function CloseTransactions(id)
{
    var refill = document.getElementById('closeModal');
    refill.style.display = "block";
    let html = '';

    list = document.getElementById("buttonC")

    
    const li = `<button style="margin-left:5%;"onClick="CloseTransactionBackEnd('${id}')
    " class = "button2" id="startTransaction">Close Transaction!</button>`
    html += li;
    list.innerHTML = html
}
function CloseTransactionBackEnd(id)
{
    var listingRef = db.collection("OpenSellTransactions").doc(id);
    var userRef = db.collection("users").doc(Auth.currentUser.uid);
    var userRef3 = db.collection("users").doc(id);
    var listingRef2 = db.collection("marketplace").doc("Sell listings");
    userRef.get().then((doc2) => {
    listingRef.get().then((doc) => {
        userRef3.get().then((doc3) => {
            listingRef2.get().then((doc4) => {

            data3 = doc3.data();
            data4 = doc4.data();
        data = doc.data();
        data2 = doc2.data();

        if(data.seller == Auth.currentUser.uid)
        {
            var marketplaceArr = data2.IncomingMarketplaceTransactions;
            var marketLength = marketplaceArr.length;

            for(var i = 0;i<marketLength;i++)
            {
                if(marketplaceArr[i] == id)
                {
                    marketplaceArr.splice(i, 1);
                    break;
                }
            }
            switch (data.type){
                case "applePay":
                    var tempPaypalListObj = data4.applePayListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                           g += Number(data.amount);
                           tempPaypalListObj[i].amount = g;
                        }
                    }
                    listingRef2.update({
                        applePayListings:tempPaypalListObj
                    })
                    break;
                 case "bitcoin":
                    var tempPaypalListObj = data4.bitcoinListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;
                        }
                    }
                    listingRef2.update({
                        bitcoinListings:tempPaypalListObj
                    })
                    break;
                 case "dogecoin":
                    var tempPaypalListObj = data4.dogecoinListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;                        }
                    }
                    listingRef2.update({
                        dogecoinListings:tempPaypalListObj
                    })
                    break;
                 case "eTransfer":
                    var tempPaypalListObj = data4.eTransferListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;                        }
                    }
                    listingRef2.update({
                        eTransferListings:tempPaypalListObj
                    })
                    break;
                 case "ethereum":
                    var tempPaypalListObj = data4.ethereumListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;                        }
                    }
                    listingRef2.update({
                        ethereumListings:tempPaypalListObj
                    })
                    break;
                 case "giftCard":
                    var tempPaypalListObj = data4.giftCardListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;                        }
                    }
                    listingRef2.update({
                        giftCardListings:tempPaypalListObj
                    })
                    break;
                 case "googlePay":
                    var tempPaypalListObj = data4.googlePayListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;                        }
                    }
                    listingRef2.update({
                        googlePayListings:tempPaypalListObj
                    })
                    break;
                 case "paypal":
                    var tempPaypalListObj = data4.paypalListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;                        }
                    }
                    listingRef2.update({
                        paypalListings:tempPaypalListObj
                    })
                    break;
                 case "prepaid":
                    var tempPaypalListObj = data4.prepaidListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;                        }
                    }
                    listingRef2.update({
                        prepaidListings:tempPaypalListObj
                    })
                    break
                case "tether":
                    var tempPaypalListObj = data4.tetherListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;                        }
                    }
                    listingRef2.update({
                        tetherListings:tempPaypalListObj
                    })
                    break;
                
    
                
            }
            var marketTransaction = data3.MarketplaceTransactions;
        var marketLength = marketTransaction.length;

        for(var i = 0; i < marketLength; i++)
        {
            if(data.listingId == marketTransaction[i].listingId)
            {
                var g = Number(marketTransaction[i].amount);
               g += Number(data.amount);
               marketTransaction[i].amount = g;
                userRef.update({
                    MarketplaceTransactions: marketTransaction
                })
            }
        }
            var NotificationsObj = {
                NotifType: "red",
                NotifContent: data.sellerUser + " Has cancelled your transaction request! Got scammed or think there was a mistake? Join our discord server and create a ticket or proceed to the report a problem page! Make sure to copy the username of the seller.",
                NotifTitle: "Transaction Cancelled!"
            }
            var notification = data3.Notifications;
            notification.push(NotificationsObj);

            listingRef.delete().then(() => {
                Alert("You have sucessfully denied the transaction request!", "Profile Information", "green");
                userRef.update({
                    IncomingMarketplaceTransactions:marketplaceArr,
                }).then(()=>{
                userRef3.update({
                    Notifications:  notification
                }).then(()=>{
                    location.reload();
                })
            })
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        }
        else{
            Alert("INTERNAL ERROR CODE 69420", "PeppaCoins ERROR", "red");
        }
    })
})
    })
})
}
function CompleteTransactions(id)
{
    var refill = document.getElementById('finishModal');
    refill.style.display = "block";
    let html = '';

    list = document.getElementById("buttonF")

    
    const li = `<button style="margin-left:5%;"onClick="CompleteTrnasactionBackEnd('${id}')
    " class = "button2" id="startTransaction">Finish Transaction!</button>`
    html += li;
    list.innerHTML = html
}

function CompleteTrnasactionBackEnd(id)
{
    var listingRef = db.collection("OpenSellTransactions").doc(id);
    var userRef = db.collection("users").doc(Auth.currentUser.uid);
    var userRef3 = db.collection("users").doc(id);
    var listingRef2 = db.collection("marketplace").doc("Sell listings");

    userRef.get().then((doc2) => {
    listingRef.get().then((doc) => {
        userRef3.get().then((doc3) => {
    listingRef2.get().then((doc4)=>{
        data4 = doc4.data();
            data3 = doc3.data();
        data = doc.data();
        data2 = doc2.data();
        var plusAmount = data.amount;
        var type = data.type;
        switch (type){
            case "applePay":
                var tempPaypalListObj = data4.applePayListings;
                var tempLength = tempPaypalListObj.length;

                for(var i = 0; i < tempLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == data.listingId)
                    {
                        tempPaypalListObj[i].completedTransactions++;
                    }
                }
                listingRef2.update({
                    applePayListings: tempPaypalListObj
                })
                break;
             case "bitcoin":
                var tempPaypalListObj = data4.bitcoinListings;
                var tempLength = tempPaypalListObj.length;

                for(var i = 0; i < tempLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == data.listingId)
                    {
                        tempPaypalListObj[i].completedTransactions++;
                    }
                }
                listingRef2.update({
                    bitcoinListings: tempPaypalListObj
                })
                break;
             case "dogecoin":
                var tempPaypalListObj = data4.dogecoinListings;
                var tempLength = tempPaypalListObj.length;

                for(var i = 0; i < tempLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == data.listingId)
                    {
                        tempPaypalListObj[i].completedTransactions++;
                    }
                }
                listingRef2.update({
                    dogecoinListings: tempPaypalListObj
                })
                break;
             case "eTransfer":
                var tempPaypalListObj = data4.eTransferListings;
                var tempLength = tempPaypalListObj.length;

                for(var i = 0; i < tempLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == data.listingId)
                    {
                        tempPaypalListObj[i].completedTransactions++;
                    }
                }
                listingRef2.update({
                    eTransferListings: tempPaypalListObj
                })
                break;
             case "ethereum":
                var tempPaypalListObj = data4.ethereumListings;
                var tempLength = tempPaypalListObj.length;

                for(var i = 0; i < tempLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == data.listingId)
                    {
                        tempPaypalListObj[i].completedTransactions++;
                    }
                }
                listingRef2.update({
                    ethereumListings: tempPaypalListObj
                })
                break;
             case "giftCard":
                var tempPaypalListObj = data4.giftCardListings;
                var tempLength = tempPaypalListObj.length;

                for(var i = 0; i < tempLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == data.listingId)
                    {
                        tempPaypalListObj[i].completedTransactions++;
                    }
                }
                listingRef2.update({
                    giftCardListings: tempPaypalListObj
                })
                break;
             case "googlePay":
                var tempPaypalListObj = data4.googlePayListings;
                var tempLength = tempPaypalListObj.length;

                for(var i = 0; i < tempLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == data.listingId)
                    {
                        tempPaypalListObj[i].completedTransactions++;
                    }
                }
                listingRef2.update({
                    googlePayListings: tempPaypalListObj
                })
                break;
             case "paypal":
                var tempPaypalListObj = data4.paypalListings;
                var tempLength = tempPaypalListObj.length;

                for(var i = 0; i < tempLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == data.listingId)
                    {
                        tempPaypalListObj[i].completedTransactions++;
                    }
                }
                listingRef2.update({
                    paypalListings: tempPaypalListObj
                })
                break;
             case "prepaid":
                var tempPaypalListObj = data4.prepaidListings;
                var tempLength = tempPaypalListObj.length;

                for(var i = 0; i < tempLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == data.listingId)
                    {
                        tempPaypalListObj[i].completedTransactions++;
                    }
                }
                listingRef2.update({
                    prepaidListings: tempPaypalListObj
                })
                break;
            case "tether":
                var tempPaypalListObj = data4.tetherListings;
                var tempLength = tempPaypalListObj.length;

                for(var i = 0; i < tempLength; i++)
                {
                    if(tempPaypalListObj[i].listingID == data.listingId)
                    {
                        tempPaypalListObj[i].completedTransactions++;
                    }
                }
                listingRef2.update({
                    tetherListings: tempPaypalListObj
                })
                break;
                
        }

        

        var incomingMarket = data2.IncomingMarketplaceTransactions;
        var incomLength = incomingMarket.length;

        for(var i = 0; i < incomLength; i++)
        {
            if(id == incomingMarket[i])
            {
                incomingMarket.splice(i, 1);
            }
        }
        var receiverCoins = data3.Coins

        var receiverTransactionObj = data3.Transactions

        var receiverNotificationsObj = data3.Notifications
        var NotificationsObj = {
            NotifType: "green",
            NotifContent: data2.Username + " has completed your outgoing transaction! Thank you for using PeppaTrade!",
            NotifTitle: "Transaction Accepted!"
        }
        receiverNotificationsObj.push(NotificationsObj);
        var TransactionObj = {
            ReceiverAddress: data3.Address,
            SenderAddress: data2.Address,
            TransactionDate: new Date(),
            Amount: Number(plusAmount),
            NetworkFee: "0",
            send: false
        }

        receiverTransactionObj.push(TransactionObj);

        listingRef.delete().then(() => {
            Alert("You have sucessfully Completed the transaction request! The wanted amount has been paid through your listing Balance.", "Profile Information", "green");
            userRef.update({
                IncomingMarketplaceTransactions:incomingMarket,
            }).then(()=>{
            userRef3.update({
                Transactions:  receiverTransactionObj,
                Coins: receiverCoins,
                Notifications: receiverNotificationsObj
            }).then(()=>{
                location.reload();
            })
        })
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
})
        })
})
    })
}

function CloseOutgoingTransactions(id)
{
    var refill = document.getElementById('closeModal');
    refill.style.display = "block";
    let html = '';

    list = document.getElementById("buttonC")

    
    const li = `<button style="margin-left:5%;"onClick="CloseOutgoingTransactionBackEnd('${id}')
    " class = "button2" id="startTransaction">Close Transaction!</button>`
    html += li;
    list.innerHTML = html
}
function CloseOutgoingTransactionBackEnd(id)
{
    var listingRef = db.collection("OpenSellTransactions").doc(Auth.currentUser.uid);
    var userRef3 = db.collection("users").doc(Auth.currentUser.uid);
    var userRef = db.collection("users").doc(id);
    var listingRef2 = db.collection("marketplace").doc("Sell listings");
    userRef.get().then((doc2) => {
    listingRef.get().then((doc) => {
        userRef3.get().then((doc3) => {
            listingRef2.get().then((doc4) => {

            data3 = doc3.data();
            data4 = doc4.data();
        data = doc.data();
        data2 = doc2.data();

        if(data.seller == id)
        {
            var marketplaceArr = data2.IncomingMarketplaceTransactions;
            var marketLength = marketplaceArr.length;

            for(var i = 0;i<marketLength;i++)
            {
                if(marketplaceArr[i] == id)
                {
                    marketplaceArr.splice(i, 1);
                    break;
                }
            }
            switch (data.type){
                case "applePay":
                    var tempPaypalListObj = data4.applePayListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                           g += Number(data.amount);
                           tempPaypalListObj[i].amount = g;
                        }
                    }
                    listingRef2.update({
                        applePayListings:tempPaypalListObj
                    })
                    break;
                 case "bitcoin":
                    var tempPaypalListObj = data4.bitcoinListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;
                        }
                    }
                    listingRef2.update({
                        bitcoinListings:tempPaypalListObj
                    })
                    break;
                 case "dogecoin":
                    var tempPaypalListObj = data4.dogecoinListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;                        }
                    }
                    listingRef2.update({
                        dogecoinListings:tempPaypalListObj
                    })
                    break;
                 case "eTransfer":
                    var tempPaypalListObj = data4.eTransferListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;                        }
                    }
                    listingRef2.update({
                        eTransferListings:tempPaypalListObj
                    })
                    break;
                 case "ethereum":
                    var tempPaypalListObj = data4.ethereumListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;                        }
                    }
                    listingRef2.update({
                        ethereumListings:tempPaypalListObj
                    })
                    break;
                 case "giftCard":
                    var tempPaypalListObj = data4.giftCardListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;                        }
                    }
                    listingRef2.update({
                        giftCardListings:tempPaypalListObj
                    })
                    break;
                 case "googlePay":
                    var tempPaypalListObj = data4.googlePayListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;                        }
                    }
                    listingRef2.update({
                        googlePayListings:tempPaypalListObj
                    })
                    break;
                 case "paypal":
                    var tempPaypalListObj = data4.paypalListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;                        }
                    }
                    listingRef2.update({
                        paypalListings:tempPaypalListObj
                    })
                    break;
                 case "prepaid":
                    var tempPaypalListObj = data4.prepaidListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;                        }
                    }
                    listingRef2.update({
                        prepaidListings:tempPaypalListObj
                    })
                    break
                case "tether":
                    var tempPaypalListObj = data4.tetherListings;
                    var tempArrayLength = tempPaypalListObj.length;
                    for(var i = 0; i < tempArrayLength; i++)
                    {
                        if(tempPaypalListObj[i].listingID == data.listingId)
                        {
                            var g = Number(tempPaypalListObj[i].amount);
                            g += Number(data.amount);
                            tempPaypalListObj[i].amount = g;                        }
                    }
                    listingRef2.update({
                        tetherListings:tempPaypalListObj
                    })
                    break;
                
    
                
            }
            var marketTransaction = data3.MarketplaceTransactions;
        var marketLength = marketTransaction.length;

        for(var i = 0; i < marketLength; i++)
        {
            if(data.listingId == marketTransaction[i].listingId)
            {
                var g = Number(marketTransaction[i].amount);
               g += Number(data.amount);
               marketTransaction[i].amount = g;
                userRef.update({
                    MarketplaceTransactions: marketTransaction
                })
            }
        }
            var NotificationsObj = {
                NotifType: "red",
                NotifContent: data3.Username + " Has cancelled their transaction request! Got scammed or think there was a mistake? Join our discord server and create a ticket or proceed to the report a problem page! Make sure to copy the username of the seller.",
                NotifTitle: "Transaction Cancelled!"
            }
            var notification = data3.Notifications;
            notification.push(NotificationsObj);

            listingRef.delete().then(() => {
                Alert("You have sucessfully cancelled the transaction request!", "Profile Information", "green");
                userRef.update({
                    IncomingMarketplaceTransactions:marketplaceArr,
                }).then(()=>{
                userRef3.update({
                    Notifications:  notification
                }).then(()=>{
                    location.reload();
                })
            })
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        }
        else{
            Alert("INTERNAL ERROR CODE 69420", "PeppaCoins ERROR", "red");
        }
    })
})
    })
})
}

function ReportUser(id)
{
    db.collection("sellerReports").doc(id).set({
        status: "scammer"
    })
    setTimeout(() => {          CloseOutgoingTransactionBackEnd(id); }, 5000);

          Alert("We are currently putting this user in review. We will let you know if any further developments occur in this case. We will try to return or give to you the PEPPAS lost if we deem the case in your favor. We are sincerely sorry for your loss.", "Profile Information!", "red");


}

function InitializeProfile()
{
    var userRef = db.collection("users").doc(Auth.currentUser.uid);
    userRef.get().then((doc) => {
        var data = doc.data();
        let html = '';
        var list = document.getElementById('userListings');
        var transactions = data.MarketplaceTransactions;
        var arrayLength = transactions.length;
        if(arrayLength >= 1)
        {
        for (var i = 0; i < arrayLength; i++) {
            var transactionObj = transactions[i];
            const li = `
            <li>
                <h1 style="color:black">Transaction ${i +1}</h1>
                <h3 style="color:black">Payment Method: ${transactionObj.array}</h3>
                <h4 style="color:black">Description: ${transactionObj.description}</h4>

                1 Peppa for ${Number(transactionObj.price).toFixed(4)}USD
            <br>
            ${Number(transactionObj.amount).toFixed(4)} PEPPAS left in stock
            <Br><Br>
            <button class="button1"onClick="openRefill('${transactionObj.array}','${transactionObj.listingId}')">Refill PEPPAS</button>
            <button class="button1"onClick="CloseListing('${transactionObj.array}','${transactionObj.listingId}')">Close Listing</button>
                
            </li>
            `;
            var count = document.getElementById('listingsCount');
            count.innerHTML = 'Here are your listings ( ' + (i + 1).toString() + '/3 )'
            html = li;
            list.innerHTML += html
        }

    }
    else{
        const li = `
        <li>
            <h3 style="color:black">You dont have any listings yet! Go create one to sell your PEPPAS at the create listing page!</h3>
            
        </li>
        `;
        html = li;
        list.innerHTML += html
    }
        var Itransactions = data.IncomingMarketplaceTransactions;
        var arrayLength1 = Itransactions.length;
        
        var list2 = document.getElementById('incomingTransactions');
        if(arrayLength1 >= 1)
        {
        for (var i = 0; i < arrayLength1; i++) {
            var transactionObj1 = Itransactions[i];
            var sellRef = db.collection("OpenSellTransactions").doc(transactionObj1);
            sellRef.get().then((doc1) => {
                var refObj = doc1.data();
                    const li = `
                    <li onclick="">
                    <h1 style="color:black">Transaction ${i }</h1>
                    <h3 style="color:black">Request from ${refObj.Username}</h3>
                    <h3 style="color:black">Payment Method: ${refObj.type}</h3>
                    <h4 style="color:black">Incoming Message: ${refObj.description}</h4>
                    
                    <br>
                    ${Number(refObj.amount).toFixed(4)} PEPPAS wanted
                    ${Number(refObj.usdDue).toFixed(4)} USD due
                        <Br><Br>
                        <button class="button1"onClick="CompleteTransactions('${transactionObj1}')">Complete Transaction</button>
                        <button class="button1"onClick="CloseTransactions('${transactionObj1}')">Close Transaction</button>
                        </li> 
                    `;
                    console.log(i);
                    var count1 = document.getElementById('incomingRequeststext');
                    count1.innerHTML = 'Here are your incoming requests ( ' + (i).toString() + '/100 )'
                    html = li;
                    list2.innerHTML += html;
            })
        }
    }else{
        const li = `
        <li>
            <h3 style="color:black">You dont have any incoming transactions yet!</h3>
            
        </li>
        `;
        html = li;
        list2.innerHTML += html
    }
    
        var list3 = document.getElementById('outgoingTransaction');
        var userRef1 = db.collection("OpenSellTransactions").doc(Auth.currentUser.uid);
        if(userRef1 != null)
        {
        userRef1.get().then((doc4) => {
            if(doc4.exists)
            {
            var data2 = doc4.data();
            const li = `
            <li onclick="">
            <h3 style="color:black">Request for ${data2.sellerUser}</h3>
            <h3 style="color:black">Payment Method: ${data2.type}</h3>
            <h4 style="color:black">Your message to seller: ${data2.description}</h4>
            
            <br>
            ${Number(data2.amount).toFixed(4)} PEPPAS wanted
            ${Number(data2.usdDue).toFixed(4)} USD due
                <Br><Br>
                <button class="button1" onClick="ReportUser('${data2.seller}')">Report Seller</button>
                <button class="button1" onClick="CloseOutgoingTransactions('${data2.seller}')">Close Transaction</button>
        </li> 
            `;
            var count2 = document.getElementById('outgoingRequeststext');
            count2.innerHTML = 'Here are your outgoing requests ( 1/1 )'
            html = li;
            list3.innerHTML += html
            console.log(list3);
            }
            else{
                const li = `
                <li>
                    <h3 style="color:black">You dont have any outgoing transactions yet! Go order some PEPPAS at the sell page!</h3>
                    
                </li>
                `;
                html = li;
                list3.innerHTML += html
            }
        })
    }
    })
}