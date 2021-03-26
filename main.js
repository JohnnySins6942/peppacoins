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
        //localStorage.setItem('name','Chris');
        let saveTime = localStorage.getItem('saveTime');
        if(saveTime == null)
        {
            saveTime = new Date();
            console.log(saveTime);
        }
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
                var docRef4 = db.collection("data").doc("PeppaPrice");
                docRef4.get().then((DataDoc3) => {
                    if(DataDoc3.exists)
                    {
                        var data4 = DataDoc3.data();
                        var gg = Number(data4.peppaPriceYesterday);
                        var percDiff =  100 * gg/Number(data1.PeppaValue);
                    if(data1.PeppaValue >= gg)
                    {
                        percDiff = 100 - percDiff
                        document.getElementById("priceChange").innerHTML = "+" + percDiff.toFixed(5) + "% (" + data4.peppaPriceYesterday.toFixed(8)+" 24 HR change)";
                    }
                    else{
                        percDiff -= 100
                        document.getElementById("priceChange").innerHTML = "-" + percDiff.toFixed(5) + "% (" + data4.peppaPriceYesterday.toFixed(8)+" 24 HR change)";
                    }

                    }
                })

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
            marketplacetransactions.push(Auth.currentUser.uid);
            }
            else{
                var marketplacetransactions= [];
                marketplacetransactions.push(Auth.currentUser.uid);
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
    var docRef69 = db.collection("data").doc("data");
    docRef69.get().then((doc) =>{
        var data = doc.data();
        var value = data.PeppaValue;
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
                    var percDiff =  100 * Number(paypalListings[i].price)/value;
                    if(Number(paypalListings[i].price) > value)
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
                    var percDiff =  100 * Number(paypalListings[i].price)/value;
                    if(Number(paypalListings[i].price) > value)
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
                    var percDiff =  100 * Number(paypalListings[i].price)/value;
                    if(Number(paypalListings[i].price) > value)
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
                    var percDiff =  100 * Number(paypalListings[i].price)/value;
                    if(Number(paypalListings[i].price) > value)
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
                    var percDiff =  100 * Number(paypalListings[i].price)/value;
                    if(Number(paypalListings[i].price) > value)
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
                    var percDiff =  100 * Number(paypalListings[i].price)/value;
                    if(Number(paypalListings[i].price) > value)
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
                    var percDiff =  100 * Number(paypalListings[i].price)/value;
                    if(Number(paypalListings[i].price) > value)
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
                    var percDiff =  100 * Number(paypalListings[i].price)/value;
                    if(Number(paypalListings[i].price) > value)
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
                    var percDiff =  100 * Number(paypalListings[i].price)/value;
                    if(Number(paypalListings[i].price) > value)
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
                    var percDiff =  100 * Number(paypalListings[i].price)/value;
                    if(Number(paypalListings[i].price) > value)
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
})
}

function openRefill(type, listingId)
{
    var refill = document.getElementById('refillModal');
    refill.style.display = "block";
    let html = '';

    list = document.getElementById("buttonR")

    
    const li = `<button style=" width: 50%;
    display: table;
  margin: 0 auto;"onClick="refillPeppas('${type}', '${listingId}',  document.getElementById('amount1234').value)
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

    
    const li = `<button style=" display: table;
    margin: 0 auto;"onClick="CloseListingBackEnd('${type}', '${listingID}')
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

function CloseTransactions(id, sellerid)
{
    var refill = document.getElementById('closeModal');
    refill.style.display = "block";
    let html = '';

    list = document.getElementById("buttonC")

    
    const li = `<button style=" width: 50%;
    display: table;
  margin: 0 auto;"onClick="CloseTransactionBackEnd('${id}', '${sellerid}')
    " class = "button2" id="startTransaction">Close Transaction!</button>`
    html += li;
    list.innerHTML = html
}

function CloseTransactionBackEnd(id, sellerid)
{
    var listingRef = db.collection("OpenSellTransactions").doc(id);
    var userRef = db.collection("users").doc(Auth.currentUser.uid);
    var userRef3 = db.collection("users").doc(sellerid);
    var listingRef2 = db.collection("marketplace").doc("Sell listings");
    userRef.get().then((doc2) => {
    listingRef.get().then((doc) => {
        userRef3.get().then((doc3) => {
            listingRef2.get().then((doc4) => {
                console.log(sellerid);
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
            console.log(marketTransaction);
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

    
    const li = `<button style=" width: 50%;
    display: table;
    margin: 0 auto;"onClick="CompleteTrnasactionBackEnd('${id}')
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

    
    const li = `<button style=" width: 50%;
    display: table;
    margin: 0 auto;"onClick="CloseOutgoingTransactionBackEnd('${id}')
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
                    <h3 style="color:black">Request from ${refObj.userName}</h3>
                    <h3 style="color:black">Payment Method: ${refObj.type}</h3>
                    <h4 style="color:black">Incoming Message: ${refObj.description}</h4>
                    
                    <br>
                    ${Number(refObj.amount).toFixed(4)} PEPPAS wanted
                    ${Number(refObj.usdDue).toFixed(4)} USD due
                        <Br><Br>
                        <button class="button1"onClick="CompleteTransactions('${transactionObj1}')">Complete Transaction</button>
                        <button class="button1"onClick="CloseTransactions('${transactionObj1}', '${refObj.seller}')">Close Transaction</button>
                        </li> 
                    `;
                    console.log(refObj.seller);
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
//var _0x5b01=['You\x20have\x20received\x20','OpenSellTransactions','innerHTML','AmazonBtn2','\x27,\x20document.getElementById(\x27amount123\x27).value\x20*\x20','mining.html','style','AmazonBtn1','Cannot\x20claim\x20Daily\x20faucet\x20yet!\x20Your\x20next\x20claim\x20time\x20is\x20at:\x20','MicrosoftBtn3','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20onclick=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>Request\x20for\x20',',\x20document.getElementById(\x27description\x27).value,\x20\x27','bitcoinListings','AmazonBtn3','G-2FE3CDKYJ5','myDropdown','catch','gambling','checked','You\x20cannot\x20create\x20a\x20listing\x20with\x20more\x20PEPPAS\x20than\x20you\x20currently\x20have\x20in\x20your\x20balance!','25$\x20Amazon\x20Gift\x20Card','prepaidListings','.\x20Your\x20BTC\x20transaction\x20is\x20being\x20processed.\x20You\x20will\x20be\x20notified\x20once\x20the\x20transaction\x20has\x20been\x20completed\x20or\x20denied.\x20Thank\x20you\x20for\x20your\x20purchase!','\x20Gift\x20Card\x20for\x20','2500$\x20Starbucks\x20Gift\x20Card','Cost\x20After\x20Fees:\x20','\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>','100$\x20Microsoft\x20Gift\x20Card','\x27)\x22class=\x22btnTransparent\x20pink\x22\x20style=\x22z-index:\x202;\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2030em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x203em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200.2em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:0.3em;\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20\x20#ccc\x20;\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-appearance:normal;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x201em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20word-wrap:\x20break-word;margin-left:26.5%\x22><h2\x20id=\x22address','charAt','\x20PEPPA\x20(-$','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>Payment\x20Method:\x20','We\x20are\x20currently\x20putting\x20this\x20user\x20in\x20review.\x20We\x20will\x20let\x20you\x20know\x20if\x20any\x20further\x20developments\x20occur\x20in\x20this\x20case.\x20We\x20will\x20try\x20to\x20return\x20or\x20give\x20to\x20you\x20the\x20PEPPAS\x20lost\x20if\x20we\x20deem\x20the\x20case\x20in\x20your\x20favor.\x20We\x20are\x20sincerely\x20sorry\x20for\x20your\x20loss.','NotifType','\x20<br>\x20+','yellow','StarbucksBtn5','Profile\x20Information!','</strong><Br>','\x20PEPPAS\x20)','setInterval','\x20successful\x20Transactions</h4>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201\x20Peppa\x20for\x20','Sign\x20Up\x20Error!','notifications','https://code.jquery.com/jquery-3.5.1.min.js','\x20<br>\x20-','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>There\x20Are\x20no\x20Listings\x20here\x20yet!\x20Be\x20the\x20first\x20to\x20create\x20a\x20listing\x20in\x20this\x20category\x20by\x20going\x20to\x20the\x20Create\x20Listing\x20Page!</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','MicrosoftCost1','block','1JGIwtV','495447jaDNhK','Internal\x20Error','call','\x27,\x27tether\x27,\x20\x27','createListing','USDValue3','referral','\x20PEPPAS\x20for\x20free!','random','<button\x20style=\x22margin-left:5%;\x22onClick=\x22CloseTransactionBackEnd(\x27','referralsList','USD\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','You\x20have\x20sucessfully\x20denied\x20the\x20transaction\x20request!','AmazonBtn7','prepaid','ItunesBtn2','Username','250$','getElementById','Faucet\x20Reward','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>You\x20dont\x20have\x20any\x20outgoing\x20transactions\x20yet!\x20Go\x20order\x20some\x20PEPPAS\x20at\x20the\x20sell\x20page!</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','maxAmount','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>Payment\x20Method:\x20','StarbucksBtn7','MicrosoftBtn0','Dogecoin','Loginbtn',')</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border-radius:10px;\x22class=\x22panel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22text-align:center\x22>Receiver\x20Address:\x20</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22copyToClipboard(\x27#address','\x20USD\x20due\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<Br><Br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22button1\x22onClick=\x22CompleteTransactions(\x27','floor','BitcoinPeppaOutputAfterFees','Profile\x20Information','\x27,\x27giftCards\x27,\x20\x27','\x20dollar\x20','<button\x20style=\x22margin-left:20%;\x22onClick=\x22refillPeppas(\x27','amazon','500$\x20Starbucks\x20Gift\x20Card','nextElementSibling','receiverAddress','<button\x20style=\x22margin-left:35%;\x22onClick=\x22CreateTransaction(\x27sell\x27,\x20\x27','%\x20(compared\x20to\x20current\x20market\x20price)</h2>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20style=\x22color:black\x22>','seller','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20onclick=\x22openMarketplaceTransactionModal(\x27','doc','500$','toFixed','MicrosoftBtn2','val','PeppaCoins\x20ERROR','buttonR','textContent','MiningRewards','peppacoin-28b2b','Auth','amount123','500$\x20Amazon\x20Gift\x20Card','show','ethereum','none','250$\x20Amazon\x20Gift\x20Card','Minigame\x20Reward','Error\x20updating\x20document:\x20','StarbucksBtn0','MicrosoftBtn4','accordion','Password1234','Notifications','peppacoin-28b2b.appspot.com','outgoingRequeststext','10$','clearInterval','\x27,\x27','ItunesBtn1','tether','listing\x20sucessfully\x20closed!\x20You\x20have\x20been\x20reimbursed\x20your\x20Peppacoins!','StarbucksBtn1','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20warning\x22\x20style=\x22pointer-events:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22closebtn\x22>&times;</span>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>','GiftCard','StarbucksBtn2','\x27,\x27bitcoin\x27,\x20\x27','ItunesBtn','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20style=\x22border-radius:10px;\x22\x20class=\x22accordion\x22>Example\x20Transaction\x20<br>\x20+A\x20lot\x20of\x20PEPPAS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border-radius:10px;\x22class=\x22panel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22text-align:center\x22>Sender\x20Address:\x20</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22copyToClipboard(\x27#addressexample\x27)\x22class=\x22btnTransparent\x20pink\x22\x20style=\x22z-index:\x202;\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2030em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x203em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200.2em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:0.3em;\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20\x20#ccc\x20;\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-appearance:normal;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x201em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20word-wrap:\x20break-word;margin-left:14.5%\x22><h2\x20id=\x22addressexample\x22\x20style=\x22text-align:center;\x22>Some\x20random\x20Pig</h2></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20style=\x22text-align:center;\x22>TransactionTime:\x20A\x20certain\x20time</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','#amount123','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=','display','buttonC','Order\x20Created!\x20Go\x20to\x20your\x20Orders\x20page\x20to\x20check\x20its\x20status!','PeppasTransacted','GooglePay','myDropdown1','eTransferListings','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>You\x20dont\x20have\x20any\x20listings\x20yet!\x20Go\x20create\x20one\x20to\x20sell\x20your\x20PEPPAS\x20at\x20the\x20create\x20listing\x20page!</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','signInWithEmailAndPassword','.page','10IGC','href','603140205573','Ethereum','BitcoinPeppa','#loading','addEventListener','PEPPA','update','\x27,\x27ethereum\x27,\x20\x27','listingID','\x20PEPPAS\x20wanted\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','11rPJETp','MicrosoftBtn1','listing\x20sucessfully\x20updated!','25$\x20Itunes\x20Gift\x20Card','myDropdown2','StarbucksBtn3','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20style=\x22border-radius:10px;width:85%;margin-left:7.5%\x22class=\x22accordion\x22>Referral\x20Number\x20','You\x20need\x20to\x20input\x20how\x20many\x20PEPPAS\x20you\x20would\x20like\x20to\x20buy\x20from\x20this\x20vendor!','Your\x20balance\x20cannot\x20cover\x20the\x20transaction\x20amount!','You\x20need\x20to\x20refill\x20with\x20at\x20least\x2050k\x20PEPPAS','You\x20have\x20redeemed\x20','referrals','INTERNAL\x20ERROR\x20CODE\x2069420','10$\x20Starbucks\x20Gift\x20Card','Amount','Coins','price','forEach','Faucet\x20Information','10AGC','NotifTitle','Sell\x20Listing\x20Information','50$\x20Starbucks\x20Gift\x20Card','\x20PEPPAS\x20left\x20in\x20stock\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22color:black;\x22>\x20+','Transaction\x20Cancelled!','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20info\x22\x20style=\x22pointer-events:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22closebtn\x22>&times;</span>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>','MultiplierValue','toString','USD\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','BitcoinValue','StarbucksBtn4','1\x20Bitcoin\x20≈\x20','MicrosoftBtn5','</h2></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','<button\x20style=\x22margin-left:5%;\x22onClick=\x22CompleteTrnasactionBackEnd(\x27','peppacoin-28b2b.firebaseapp.com','firestore','delete','match','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22color:black\x22>Incoming\x20Message:\x20','You\x20have\x20sucessfully\x20cancelled\x20the\x20transaction\x20request!','\x20PEPPAS','listingId','\x27)\x0a\x20\x20\x20\x20\x22\x20class\x20=\x20\x22button2\x22\x20id=\x22startTransaction\x22>Close\x20Transaction!</button>','You\x20cant\x20Refill\x20nothing!','AmazonBtn0','Sign\x20Up\x20Error','onload','Here\x20are\x20your\x20outgoing\x20requests\x20(\x201/1\x20)','change','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20style=\x22color:black\x22>Transaction\x20','500$\x20Itunes\x20Gift\x20Card','Bitcoin\x20Price:\x20','toggle','AmazonBtn6','\x27)\x0a\x20\x20\x20\x20\x22\x20class\x20=\x20\x22button2\x22\x20id=\x22startTransaction\x22>Order\x20PEPPAS!</button>','body','TransactionDate','Error\x20removing\x20document:\x20','NotifContent','Error\x20getting\x20document:','Bitcoin','</strong><br>','50$\x20Amazon\x20Gift\x20Card','blue','ReceiverAddress','tetherListings','scrollHeight','transactionList','50766oghRaV','click','onAuthStateChanged','MicrosoftBtn7','USDValue','Peppa_','\x27)\x22>Close\x20Transaction</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x27,\x27paypal\x27,\x20\x27','method','email1','ReferralCode','userName','text','there\x20was\x20unfortunately\x20a\x20transaction\x20error...','googlePay','opacity','myDropdown3','MarketplaceTransactions','MicrosoftBtn6','500$\x20Microsoft\x20Gift\x20Card','Transaction\x20Accepted!','getElementsByClassName','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22color:black\x22>User\x20has\x20completed\x20','25$\x20Microsoft\x20Gift\x20Card','PreviousTransactions','\x20PEPPAS\x20to\x20the\x20user\x20','miningDifficulty','\x27)\x22>Report\x20Seller</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22button1\x22\x20onClick=\x22CloseOutgoingTransactions(\x27','Referrals','\x20PEPPA\x20(+$','Please\x20read\x20and\x20agree\x20to\x20the\x20Terms\x20and\x20Agreements\x20before\x20proceeding.','AmazonBtn5','Sell\x20listings','\x20Has\x20Sent\x20you\x20','\x27,\x20\x27','paypalListings','You\x20cant\x20click\x20on\x20your\x20own\x20offer!','<button\x20style=\x22margin-left:5%;\x22onClick=\x22CloseOutgoingTransactionBackEnd(\x27','USD\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','sellorbuy','indexOf','index','.startTransaction','sort','\x20PEPPAS\x20wanted\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','Please\x20input\x20a\x20valid\x20peppacoin\x20address\x20to\x20receive\x20the\x20faucet','</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','AmazonBtn4','TransactionsMade','wallet','Sell\x20Listings\x20Information','eTransfer','green','\x20PeppaCoins\x20with\x20a\x20Network\x20fee\x20cost\x20of\x20','\x27,\x27applePay\x27,\x20\x27','giftCard','password1','amount','/3\x20)','Tether','2500$\x20Microsoft\x20Gift\x20Card','\x20successful\x20Transactions</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201\x20Peppa\x20for\x20','Total\x20Amount\x20Due:\x20','Microsoft','HashesMined','BTCADDRESS','Address','reload','250$\x20Starbucks\x20Gift\x20Card','Transaction\x20Error','\x22\x20style=\x22text-align:center;\x22>','E-Transfer','PeppaPrice','usdDue','\x20PEPPAS!','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>You\x20dont\x20have\x20any\x20incoming\x20transactions\x20yet!</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20','error','ethereumListings','type','\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>','currentUser','completedTransactions','\x20PEPPAS\x20left\x20in\x20stock\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<Br><Br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22button1\x22onClick=\x22openRefill(\x27','50$','length','\x27,\x20\x20document.getElementById(\x27amount1234\x27).value)\x0a\x20\x20\x20\x20\x22\x20class\x20=\x20\x22button2\x22\x20id=\x22startTransaction\x22>Refill\x20PEPPAS!</button>','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20onclick=\x22\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h1\x20style=\x22color:black\x22>Transaction\x20','10MGC','ItunesCost1','set','You\x20cant\x20order\x20more\x20PEPPAS\x20than\x20the\x20user\x20has\x20in\x20stock!','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20style=\x22border-radius:10px;\x22class=\x22accordion\x22>Transaction\x20Number\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x20success\x22\x20style=\x22pointer-events:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22closebtn\x22>&times;</span>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>','value','Create\x20Listing\x20Information','outgoingTransaction','You\x20need\x20an\x20email\x20to\x20sign\x20up!','minigame','push','array','ready','You\x20have\x20redeemed\x20a\x20','profile.html','1000$\x20Itunes\x20Gift\x20Card','MicrosoftBtn','ItunesBtn7','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22color:black\x22>Description:\x20','sellerUser','PeppaValue','USD','StarbucksCost1','Here\x20are\x20your\x20listings\x20(\x20','collection','redeemdata','2500$\x20Amazon\x20Gift\x20Card','faucet','getElementsByTagName','userListings','Your\x20Referral\x20Code:\x20','paypal','marketplace','ItunesBtn6','10$\x20Amazon\x20Gift\x20Card','6jiYlxB','</h2></button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20style=\x22text-align:center;\x22>TransactionTime:\x20','You\x20can\x27t\x20have\x20more\x20than\x203\x20active\x20marketplace\x20listings!\x20Delete\x20some\x20to\x20List\x20more','gambling.html','description','BTCPEPPAmount','You\x20need\x20to\x20transact\x20at\x20least\x20100k\x20PEPPAS\x20to\x20create\x20a\x20listing!','applePay','AmazonBtn','ItunesBtn5','100$','2500$','faucetStatus','Please\x20input\x20a\x20valid\x20PeppaCoin\x20Address','trade','remove','sell','.html','100$\x20Amazon\x20Gift\x20Card','not\x20in','\x20class=\x22alert\x22\x20style=\x22pointer-events:\x20auto;z-index:99;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22closebtn\x22>&times;</span>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>','\x20PEPPAS\x20with\x20the\x20transaction\x20fee\x20of\x200.0004\x20BTC\x20to\x20the\x20BTC\x20address:\x20','faucet.html','LOCAL','\x20class=\x22alert\x20warning\x22\x20style=\x22pointer-events:\x20auto;z-index:99;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22closebtn\x22>&times;</span>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>','log','Persistence','25$\x20Starbucks\x20Gift\x20Card','\x27)\x22>Close\x20Listing</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','GoToWallet','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22color:black\x22>Your\x20message\x20to\x20seller:\x20','querySelector','</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22color:black\x22>User\x20has\x20completed\x20','100$\x20Itunes\x20Gift\x20Card','splice','\x20BTC\x20for\x20','2500$\x20Itunes\x20Gift\x20Card','\x27)\x22class=\x22btnTransparent\x20pink\x22\x20style=\x22z-index:\x202;\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2030em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x203em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200.2em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:0.3em;\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20\x20#ccc\x20;\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-appearance:normal;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x201em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20word-wrap:\x20break-word;margin-left:14.5%\x22><h2\x20id=\x22address','parse','username','analytics','Multiplier:\x20','PeppaTrade','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20style=\x22border-radius:10px;\x22\x20class=\x22accordion\x22>Transaction\x20Number\x20','code','wallet.html','Transaction\x20Amount(max:\x20','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22alert\x22\x20style=\x22pointer-events:\x20auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22closebtn\x22>&times;</span>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>','where','You\x20sent\x20','listing\x20sucessfully\x20created!','sellModal','The\x20referral\x20code\x20you\x20entered\x20is\x20invalid','32342kzpeyC','AmazonCost1','googlePayListings','Your\x20username\x20isn\x27t\x20unique\x20enough!\x20Another\x20pig\x20already\x20took\x20it','itunes','\x20class=\x22alert\x20info\x22\x20style=\x22pointer-events:\x20auto;z-index:99;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22closebtn\x22>&times;</span>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>','signOut','25$','referrals.html','trade.html','classList','users','UserAddress2','List','\x27,\x27prepaid\x27,\x20\x27','</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>Payment\x20Method:\x20','applePayListings','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20onclick=\x22openMarketplaceTransactionModal(\x27','get','dropbtn','You\x20cant\x20send\x20peppacoins\x20to\x20yourself...','The\x20address\x20you\x20inputed\x20is\x20not\x20tied\x20to\x20an\x20account!','1:603140205573:web:a9ae0785444927bc82406c','marketplaceProfile','Itunes','ETransfer','empty','location','You\x20need\x20to\x20send\x20at\x20least\x20250\x20PEPPAS!','\x27)\x22>Complete\x20Transaction</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22button1\x22onClick=\x22CloseTransactions(\x27','1\x20PEPPA\x20=\x20','Multiplier','Apple\x20Pay','StarbucksBtn6','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','closeModal','index.html','Referrer','\x20Has\x20cancelled\x20their\x20transaction\x20request!\x20Got\x20scammed\x20or\x20think\x20there\x20was\x20a\x20mistake?\x20Join\x20our\x20discord\x20server\x20and\x20create\x20a\x20ticket\x20or\x20proceed\x20to\x20the\x20report\x20a\x20problem\x20page!\x20Make\x20sure\x20to\x20copy\x20the\x20username\x20of\x20the\x20seller.','email','\x27,\x27googlePay\x27,\x20\x27','exists','Not\x20Ready...\x20Next\x20claim\x20is\x20at:\x20','Your\x20balance\x20cannot\x20cover\x20the\x20transaction\x20costs!','10$\x20Itunes\x20Gift\x20Card','1000$','250$\x20Microsoft\x20Gift\x20Card','bitcoin','48978DxnBIL','dogecoinListings','active','Amazon','PeppaTrade\x20Information','\x27,\x27eTransfer\x27,\x20\x27','parentElement','10SGC','</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','You\x20have\x20sucessfully\x20Completed\x20the\x20transaction\x20request!\x20The\x20wanted\x20amount\x20has\x20been\x20paid\x20through\x20your\x20listing\x20Balance.','144888JAYZxm','user','ItunesBtn4','BitcoinPrice','FinishedMarketplaceTransactions','onclick','\x27,\x20document.getElementById(\x27amount123\x27).value,\x20\x27','\x20PEPPAS\x20left\x20in\x20stock\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22color:black;\x22>\x20-','IncomingMarketplaceTransactions','starbucks','</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','336274xuvvLU','getTime','red','uid','redeems','\x20successfully!','getElementsByName','\x20Has\x20deleted\x20their\x20listing\x20that\x20you\x20have\x20created\x20an\x20order\x20for!\x20Got\x20scammed\x20or\x20think\x20there\x20was\x20a\x20mistake?\x20Join\x20our\x20discord\x20server\x20and\x20create\x20a\x20ticket\x20or\x20proceed\x20to\x20the\x20report\x20a\x20problem\x20page!\x20Make\x20sure\x20to\x20copy\x20the\x20username\x20of\x20the\x20seller.','Transactions','incomingRequeststext','microsoft','PeppaCoins\x20Exchange','USDValue2','BitcoinPeppaOutput','</h4>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201\x20Peppa\x20for\x20',')</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border-radius:10px;\x22class=\x22panel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22text-align:center\x22>Sender\x20Address:\x20</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22copyToClipboard(\x27#address','incomingTransactions','data','maxHeight','giftCardListings','\x27,\x27dogecoin\x27,\x20\x27','toDate','then','newFaucetTime','createUserWithEmailAndPassword','70173XQEdJI','auth','TotalSupply','250$\x20Itunes\x20Gift\x20Card','dogecoin','mining','initializeApp','message','#usdDue','minigame.html','UserAddress3','Coins2'];var _0x2eea=function(_0x24b49e,_0x24eadc){_0x24b49e=_0x24b49e-0x9f;var _0x5b0132=_0x5b01[_0x24b49e];return _0x5b0132;};var _0x3f07ba=_0x2eea;(function(_0x799cf0,_0x28e314){var _0x567b3e=_0x2eea;while(!![]){try{var _0x5cb069=parseInt(_0x567b3e(0xd8))+parseInt(_0x567b3e(0x115))*parseInt(_0x567b3e(0x116))+-parseInt(_0x567b3e(0xaa))+-parseInt(_0x567b3e(0xbf))+-parseInt(_0x567b3e(0x240))*-parseInt(_0x567b3e(0x1c5))+parseInt(_0x567b3e(0x276))*-parseInt(_0x567b3e(0x180))+parseInt(_0x567b3e(0xb4));if(_0x5cb069===_0x28e314)break;else _0x799cf0['push'](_0x799cf0['shift']());}catch(_0x4d77cd){_0x799cf0['push'](_0x799cf0['shift']());}}}(_0x5b01,0x42eaa));var firebaseConfig={'apiKey':'AIzaSyAanZKk1t0ktz9n4k4h4fNviTKar6-lDYM','authDomain':_0x3f07ba(0x1a3),'projectId':_0x3f07ba(0x14a),'storageBucket':_0x3f07ba(0x159),'messagingSenderId':_0x3f07ba(0x176),'appId':_0x3f07ba(0x28c),'measurementId':_0x3f07ba(0xf2)};src=_0x3f07ba(0x110);function onReady(_0x31eb19){var _0x3e3523=_0x3f07ba,_0x1e6573=window[_0x3e3523(0x10c)](function(){var _0x2f550a=_0x3e3523;document[_0x2f550a(0x239)](_0x2f550a(0x1b8))[0x0]!==undefined&&(window[_0x2f550a(0x15c)](_0x1e6573),_0x31eb19[_0x2f550a(0x118)](this));},0x3e8);}function setVisible(_0x1a2a8c,_0x248160){var _0x124339=_0x3f07ba;document[_0x124339(0x260)](_0x1a2a8c)[_0x124339(0xea)][_0x124339(0x16a)]=_0x248160?_0x124339(0x114):'none';}onReady(function(){var _0x59b533=_0x3f07ba;setVisible(_0x59b533(0x173),!![]),setVisible(_0x59b533(0x179),![]);}),tempHashes=0x0;var isMining=![];firebase[_0x3f07ba(0xde)](firebaseConfig),firebase[_0x3f07ba(0x269)]();const db=firebase[_0x3f07ba(0x1a4)]();var Auth=firebase[_0x3f07ba(0xd9)](),empty='';window[_0x3f07ba(0x1af)]=function(){firebase['auth']()['onAuthStateChanged'](_0x5d2f7b=>{var _0x9110a5=_0x2eea;if(_0x5d2f7b){isMining=![];if(window[_0x9110a5(0x291)][_0x9110a5(0x175)]['indexOf'](_0x9110a5(0x1f6))>-0x1)InitializeWallet(_0x5d2f7b);else{if(window[_0x9110a5(0x291)][_0x9110a5(0x175)][_0x9110a5(0x1ed)]('faucet')>-0x1)InitializeFaucet(_0x5d2f7b);else{if(window[_0x9110a5(0x291)][_0x9110a5(0x175)][_0x9110a5(0x1ed)](_0x9110a5(0x18b))>-0x1)InitializeReferrals();else{if(window[_0x9110a5(0x291)][_0x9110a5(0x175)][_0x9110a5(0x1ed)]('index')>-0x1){var _0x1af7aa=document[_0x9110a5(0x128)](_0x9110a5(0x20d)),_0x1be744=db[_0x9110a5(0x235)](_0x9110a5(0xd0))[_0x9110a5(0x141)](_0x9110a5(0xd0));_0x1be744[_0x9110a5(0x288)]()[_0x9110a5(0xd5)](_0x5e4eab=>{var _0xd7f223=_0x9110a5;if(_0x5e4eab[_0xd7f223(0xa3)]){var _0x142296=_0x5e4eab[_0xd7f223(0xd0)]();_0x1af7aa['innerHTML']=_0xd7f223(0x294)+_0x142296[_0xd7f223(0x231)]+_0xd7f223(0x232);}});var _0x14dc5c=document[_0x9110a5(0x128)](_0x9110a5(0x25d)),_0x454005=document[_0x9110a5(0x128)](_0x9110a5(0x130));_0x14dc5c[_0x9110a5(0xea)][_0x9110a5(0x16a)]=_0x9110a5(0x114),_0x454005['style'][_0x9110a5(0x16a)]=_0x9110a5(0x150);var _0x5a99d2=document['getElementById']('GoToWallet');_0x5a99d2[_0x9110a5(0xb9)]=function(){var _0x5a66e9=_0x9110a5;window['location'][_0x5a66e9(0x175)]=_0x5a66e9(0x26e);};}else window[_0x9110a5(0x291)][_0x9110a5(0x175)][_0x9110a5(0x1ed)](_0x9110a5(0x24e))>-0x1&&(InitializeTrade(),$(document)[_0x9110a5(0x229)](function(){var _0x557138=_0x9110a5,_0x2e646c=document['getElementById'](_0x557138(0x248)),_0x5a3e06=document['getElementById'](_0x557138(0x139)),_0x2d827a=document[_0x557138(0x128)](_0x557138(0x27a)),_0xc484a5=document[_0x557138(0x128)](_0x557138(0xc9)),_0x26af61=document[_0x557138(0x128)](_0x557138(0xbd));_0x2e646c[_0x557138(0xb9)]=function(){var _0x3a60fc=_0x557138,_0x567c3e=db['collection'](_0x3a60fc(0xd0))[_0x3a60fc(0x141)](_0x3a60fc(0xd0));_0x567c3e['get']()[_0x3a60fc(0xd5)](_0x52f8f2=>{var _0x2a60da=_0x3a60fc;if(_0x52f8f2[_0x2a60da(0xa3)]){var _0x44fca7=_0x52f8f2[_0x2a60da(0xd0)](),_0xc5eb3e=document['getElementById'](_0x2a60da(0x193)),_0x224a53=document['getElementById'](_0x2a60da(0x277));_0x5a3e06['style'][_0x2a60da(0x16a)]=_0x2a60da(0x114),_0x2d827a[_0x2a60da(0xea)][_0x2a60da(0x16a)]=_0x2a60da(0x150),_0xc484a5[_0x2a60da(0xea)][_0x2a60da(0x16a)]=_0x2a60da(0x150),_0x26af61[_0x2a60da(0xea)][_0x2a60da(0x16a)]='none',_0xc5eb3e[_0x2a60da(0x222)]=_0x2a60da(0xfd)+(0xa/Number(_0x44fca7['PeppaValue'])+0xa/Number(_0x44fca7[_0x2a60da(0x231)])*0.075)[_0x2a60da(0x143)](0x4)['toString']()+_0x2a60da(0x1a9),_0x224a53['innerHTML']='10$',itemDisplay['innerHTML']=_0x2a60da(0x23f);}});};var _0xf77b2a=document[_0x557138(0x128)](_0x557138(0xeb));_0xf77b2a[_0x557138(0xb9)]=function(){var _0x335ef1=_0x557138,_0x3859a3=db['collection'](_0x335ef1(0xd0))[_0x335ef1(0x141)](_0x335ef1(0xd0));_0x3859a3[_0x335ef1(0x288)]()[_0x335ef1(0xd5)](_0x11928d=>{var _0x1b7027=_0x335ef1;if(_0x11928d[_0x1b7027(0xa3)]){var _0x12a898=_0x11928d[_0x1b7027(0xd0)](),_0x46482e=document['getElementById']('10AGC'),_0x5d3431=document[_0x1b7027(0x128)]('AmazonCost1');_0x46482e[_0x1b7027(0x222)]=_0x1b7027(0xfd)+(0x19/Number(_0x12a898[_0x1b7027(0x231)])+0x19/Number(_0x12a898[_0x1b7027(0x231)])*0.075)[_0x1b7027(0x143)](0x4)['toString']()+_0x1b7027(0x1a9),_0x5d3431[_0x1b7027(0xe6)]='25$',itemDisplay[_0x1b7027(0xe6)]=_0x1b7027(0xf8),document['getElementById'](_0x1b7027(0xf3))[_0x1b7027(0x280)]['toggle'](_0x1b7027(0x14e));}});};var _0x2efec3=document[_0x557138(0x128)](_0x557138(0xe7));_0x2efec3[_0x557138(0xb9)]=function(){var _0x400e8c=_0x557138,_0x173dc2=db[_0x400e8c(0x235)](_0x400e8c(0xd0))[_0x400e8c(0x141)](_0x400e8c(0xd0));_0x173dc2['get']()[_0x400e8c(0xd5)](_0x2a272a=>{var _0x1495cf=_0x400e8c;if(_0x2a272a[_0x1495cf(0xa3)]){var _0x21dff4=_0x2a272a[_0x1495cf(0xd0)](),_0x239e75=document[_0x1495cf(0x128)]('10AGC'),_0x2469d2=document[_0x1495cf(0x128)](_0x1495cf(0x277));_0x239e75[_0x1495cf(0x222)]=_0x1495cf(0xfd)+(0x32/Number(_0x21dff4[_0x1495cf(0x231)])+0x32/Number(_0x21dff4[_0x1495cf(0x231)])*0.075)['toFixed'](0x4)[_0x1495cf(0x19b)]()+_0x1495cf(0x1a9),_0x2469d2['innerHTML']=_0x1495cf(0x218),itemDisplay['innerHTML']=_0x1495cf(0x1bf),document[_0x1495cf(0x128)](_0x1495cf(0xf3))[_0x1495cf(0x280)][_0x1495cf(0x1b5)](_0x1495cf(0x14e));}});};var _0x907076=document[_0x557138(0x128)](_0x557138(0x1ad));_0x907076[_0x557138(0xb9)]=function(){var _0x28d4a7=_0x557138,_0x1ed8ed=db[_0x28d4a7(0x235)](_0x28d4a7(0xd0))['doc'](_0x28d4a7(0xd0));_0x1ed8ed[_0x28d4a7(0x288)]()[_0x28d4a7(0xd5)](_0x48b220=>{var _0x55953b=_0x28d4a7;if(_0x48b220[_0x55953b(0xa3)]){var _0x13c73c=_0x48b220['data'](),_0x4f4bb4=document[_0x55953b(0x128)]('10AGC'),_0x4078a4=document['getElementById'](_0x55953b(0x277));_0x4f4bb4['value']=_0x55953b(0xfd)+(0xa/Number(_0x13c73c['PeppaValue'])+0xa/Number(_0x13c73c['PeppaValue'])*0.075)[_0x55953b(0x143)](0x4)[_0x55953b(0x19b)]()+_0x55953b(0x1a9),_0x4078a4[_0x55953b(0xe6)]='10$',itemDisplay[_0x55953b(0xe6)]=_0x55953b(0x23f),document[_0x55953b(0x128)](_0x55953b(0xf3))[_0x55953b(0x280)][_0x55953b(0x1b5)](_0x55953b(0x14e));}});};var _0xa6a0e=document[_0x557138(0x128)](_0x557138(0xf1));_0xa6a0e['onclick']=function(){var _0x32292e=_0x557138,_0x275603=db[_0x32292e(0x235)]('data')['doc'](_0x32292e(0xd0));_0x275603[_0x32292e(0x288)]()[_0x32292e(0xd5)](_0x3fd4ee=>{var _0x15b160=_0x32292e;if(_0x3fd4ee[_0x15b160(0xa3)]){var _0x3213d3=_0x3fd4ee[_0x15b160(0xd0)](),_0x16b671=document[_0x15b160(0x128)](_0x15b160(0x193)),_0xf26bf1=document[_0x15b160(0x128)](_0x15b160(0x277));_0x16b671[_0x15b160(0x222)]='Cost\x20After\x20Fees:\x20'+(0x64/Number(_0x3213d3[_0x15b160(0x231)])+0x64/Number(_0x3213d3[_0x15b160(0x231)])*0.075)['toFixed'](0x4)[_0x15b160(0x19b)]()+'\x20PEPPAS',_0xf26bf1[_0x15b160(0xe6)]=_0x15b160(0x24a),itemDisplay[_0x15b160(0xe6)]=_0x15b160(0x252),document[_0x15b160(0x128)](_0x15b160(0xf3))[_0x15b160(0x280)]['toggle'](_0x15b160(0x14e));}});};var _0x2846ce=document['getElementById'](_0x557138(0x1f4));_0x2846ce[_0x557138(0xb9)]=function(){var _0x2894c0=_0x557138,_0x1429e5=db[_0x2894c0(0x235)](_0x2894c0(0xd0))[_0x2894c0(0x141)](_0x2894c0(0xd0));_0x1429e5[_0x2894c0(0x288)]()[_0x2894c0(0xd5)](_0x2c5863=>{var _0xa4d045=_0x2894c0;if(_0x2c5863['exists']){var _0x551b3c=_0x2c5863[_0xa4d045(0xd0)](),_0x2675a9=document[_0xa4d045(0x128)]('10AGC'),_0x47a66a=document[_0xa4d045(0x128)]('AmazonCost1');_0x2675a9[_0xa4d045(0x222)]=_0xa4d045(0xfd)+(0xfa/Number(_0x551b3c[_0xa4d045(0x231)])+0xfa/Number(_0x551b3c[_0xa4d045(0x231)])*0.075)[_0xa4d045(0x143)](0x4)[_0xa4d045(0x19b)]()+'\x20PEPPAS',_0x47a66a[_0xa4d045(0xe6)]=_0xa4d045(0x127),itemDisplay[_0xa4d045(0xe6)]=_0xa4d045(0x151),document['getElementById'](_0xa4d045(0xf3))[_0xa4d045(0x280)][_0xa4d045(0x1b5)](_0xa4d045(0x14e));}});};var _0x221411=document[_0x557138(0x128)](_0x557138(0x1e4));_0x221411[_0x557138(0xb9)]=function(){var _0x305474=_0x557138,_0x3a4c9e=db['collection'](_0x305474(0xd0))[_0x305474(0x141)](_0x305474(0xd0));_0x3a4c9e['get']()[_0x305474(0xd5)](_0x37cae5=>{var _0x4c3ed5=_0x305474;if(_0x37cae5['exists']){var _0x2ff27c=_0x37cae5[_0x4c3ed5(0xd0)](),_0x4126ca=document[_0x4c3ed5(0x128)](_0x4c3ed5(0x193)),_0x426f9e=document[_0x4c3ed5(0x128)](_0x4c3ed5(0x277));_0x4126ca[_0x4c3ed5(0x222)]=_0x4c3ed5(0xfd)+(0x1f4/Number(_0x2ff27c[_0x4c3ed5(0x231)])+0x1f4/Number(_0x2ff27c[_0x4c3ed5(0x231)])*0.075)['toFixed'](0x4)[_0x4c3ed5(0x19b)]()+'\x20PEPPAS',_0x426f9e[_0x4c3ed5(0xe6)]=_0x4c3ed5(0x142),itemDisplay['innerHTML']=_0x4c3ed5(0x14d),document[_0x4c3ed5(0x128)]('myDropdown')[_0x4c3ed5(0x280)][_0x4c3ed5(0x1b5)](_0x4c3ed5(0x14e));}});};var _0x18c501=document['getElementById'](_0x557138(0x1b6));_0x18c501[_0x557138(0xb9)]=function(){var _0x59b269=_0x557138,_0x17d292=db['collection'](_0x59b269(0xd0))[_0x59b269(0x141)](_0x59b269(0xd0));_0x17d292[_0x59b269(0x288)]()['then'](_0x3e016c=>{var _0x1c5895=_0x59b269;if(_0x3e016c[_0x1c5895(0xa3)]){var _0x3fc5dd=_0x3e016c[_0x1c5895(0xd0)](),_0x8f96d5=document['getElementById'](_0x1c5895(0x193)),_0x598ff1=document[_0x1c5895(0x128)](_0x1c5895(0x277));_0x8f96d5['value']=_0x1c5895(0xfd)+(0x3e8/Number(_0x3fc5dd[_0x1c5895(0x231)])+0x3e8/Number(_0x3fc5dd[_0x1c5895(0x231)])*0.075)['toFixed'](0x4)[_0x1c5895(0x19b)]()+'\x20PEPPAS',_0x598ff1[_0x1c5895(0xe6)]='1000$',itemDisplay[_0x1c5895(0xe6)]='1000$\x20Amazon\x20Gift\x20Card',document[_0x1c5895(0x128)](_0x1c5895(0xf3))[_0x1c5895(0x280)][_0x1c5895(0x1b5)](_0x1c5895(0x14e));}});};var _0x5e785a=document[_0x557138(0x128)](_0x557138(0x123));_0x5e785a[_0x557138(0xb9)]=function(){var _0x343fc2=_0x557138,_0x17e089=db[_0x343fc2(0x235)](_0x343fc2(0xd0))[_0x343fc2(0x141)](_0x343fc2(0xd0));_0x17e089['get']()[_0x343fc2(0xd5)](_0x336b11=>{var _0x53d181=_0x343fc2;if(_0x336b11[_0x53d181(0xa3)]){var _0x516f50=_0x336b11[_0x53d181(0xd0)](),_0xffb66=document['getElementById'](_0x53d181(0x193)),_0x472446=document[_0x53d181(0x128)]('AmazonCost1');_0xffb66[_0x53d181(0x222)]=_0x53d181(0xfd)+(0x9c4/Number(_0x516f50[_0x53d181(0x231)])+0x9c4/Number(_0x516f50[_0x53d181(0x231)])*0.075)[_0x53d181(0x143)](0x4)[_0x53d181(0x19b)]()+_0x53d181(0x1a9),_0x472446['innerHTML']=_0x53d181(0x24b),itemDisplay[_0x53d181(0xe6)]=_0x53d181(0x237),document[_0x53d181(0x128)](_0x53d181(0xf3))[_0x53d181(0x280)][_0x53d181(0x1b5)](_0x53d181(0x14e));}});};var _0x2e646c=document['getElementById'](_0x557138(0x166));_0x2e646c[_0x557138(0xb9)]=function(){var _0x2a2628=_0x557138,_0x5300f0=db[_0x2a2628(0x235)](_0x2a2628(0xd0))['doc'](_0x2a2628(0xd0));_0x5300f0['get']()[_0x2a2628(0xd5)](_0xc333e3=>{var _0x1c46e5=_0x2a2628;if(_0xc333e3[_0x1c46e5(0xa3)]){var _0x264452=_0xc333e3[_0x1c46e5(0xd0)](),_0x57129a=document['getElementById'](_0x1c46e5(0x174)),_0x128209=document[_0x1c46e5(0x128)](_0x1c46e5(0x21d));_0x2d827a['style'][_0x1c46e5(0x16a)]='block',_0x5a3e06['style']['display']='none',_0xc484a5[_0x1c46e5(0xea)][_0x1c46e5(0x16a)]=_0x1c46e5(0x150),_0x26af61['style'][_0x1c46e5(0x16a)]=_0x1c46e5(0x150),_0x57129a[_0x1c46e5(0x222)]='Cost\x20After\x20Fees:\x20'+(0xa/Number(_0x264452[_0x1c46e5(0x231)])+0xa/Number(_0x264452[_0x1c46e5(0x231)])*0.075)[_0x1c46e5(0x143)](0x4)[_0x1c46e5(0x19b)]()+_0x1c46e5(0x1a9),_0x128209[_0x1c46e5(0xe6)]=_0x1c46e5(0x15b),itemDisplay1[_0x1c46e5(0xe6)]=_0x1c46e5(0xa6);}});};var _0x38b68a=document[_0x557138(0x128)](_0x557138(0x15e));_0x38b68a['onclick']=function(){var _0x222c56=_0x557138,_0x4ed0f7=db['collection'](_0x222c56(0xd0))[_0x222c56(0x141)](_0x222c56(0xd0));_0x4ed0f7['get']()['then'](_0x3ab9e1=>{var _0x3aa11c=_0x222c56;if(_0x3ab9e1[_0x3aa11c(0xa3)]){var _0x405ff3=_0x3ab9e1[_0x3aa11c(0xd0)](),_0x447396=document[_0x3aa11c(0x128)]('10IGC'),_0x12cfde=document[_0x3aa11c(0x128)](_0x3aa11c(0x21d));_0x447396[_0x3aa11c(0x222)]=_0x3aa11c(0xfd)+(0x19/Number(_0x405ff3['PeppaValue'])+0x19/Number(_0x405ff3[_0x3aa11c(0x231)])*0.075)[_0x3aa11c(0x143)](0x4)[_0x3aa11c(0x19b)]()+'\x20PEPPAS',_0x12cfde['innerHTML']=_0x3aa11c(0x27d),itemDisplay1[_0x3aa11c(0xe6)]=_0x3aa11c(0x183),document['getElementById'](_0x3aa11c(0x16f))['classList']['toggle'](_0x3aa11c(0x14e));}});};var _0x2bce84=document[_0x557138(0x128)](_0x557138(0x125));_0x2bce84[_0x557138(0xb9)]=function(){var _0x2e73bf=_0x557138,_0x2483d9=db[_0x2e73bf(0x235)]('data')['doc'](_0x2e73bf(0xd0));_0x2483d9[_0x2e73bf(0x288)]()['then'](_0x5a1e1b=>{var _0x5c01d5=_0x2e73bf;if(_0x5a1e1b[_0x5c01d5(0xa3)]){var _0x338259=_0x5a1e1b[_0x5c01d5(0xd0)](),_0x316298=document['getElementById'](_0x5c01d5(0x174)),_0x24b66e=document[_0x5c01d5(0x128)](_0x5c01d5(0x21d));_0x316298['value']='Cost\x20After\x20Fees:\x20'+(0x32/Number(_0x338259['PeppaValue'])+0x32/Number(_0x338259[_0x5c01d5(0x231)])*0.075)[_0x5c01d5(0x143)](0x4)[_0x5c01d5(0x19b)]()+_0x5c01d5(0x1a9),_0x24b66e[_0x5c01d5(0xe6)]=_0x5c01d5(0x218),itemDisplay1[_0x5c01d5(0xe6)]='50$\x20Itunes\x20Gift\x20Card',document[_0x5c01d5(0x128)](_0x5c01d5(0x16f))[_0x5c01d5(0x280)]['toggle'](_0x5c01d5(0x14e));}});};var _0x1905fe=document[_0x557138(0x128)]('ItunesBtn0');_0x1905fe[_0x557138(0xb9)]=function(){var _0x418383=_0x557138,_0x58cab8=db[_0x418383(0x235)]('data')[_0x418383(0x141)](_0x418383(0xd0));_0x58cab8[_0x418383(0x288)]()[_0x418383(0xd5)](_0x2da329=>{var _0xac7c5a=_0x418383;if(_0x2da329[_0xac7c5a(0xa3)]){var _0x50ebc0=_0x2da329[_0xac7c5a(0xd0)](),_0x4b11b5=document[_0xac7c5a(0x128)](_0xac7c5a(0x174)),_0x34c529=document['getElementById'](_0xac7c5a(0x21d));_0x4b11b5[_0xac7c5a(0x222)]=_0xac7c5a(0xfd)+(0xa/Number(_0x50ebc0[_0xac7c5a(0x231)])+0xa/Number(_0x50ebc0[_0xac7c5a(0x231)])*0.075)[_0xac7c5a(0x143)](0x4)[_0xac7c5a(0x19b)]()+_0xac7c5a(0x1a9),_0x34c529[_0xac7c5a(0xe6)]=_0xac7c5a(0x15b),itemDisplay1[_0xac7c5a(0xe6)]='10$\x20Itunes\x20Gift\x20Card',document[_0xac7c5a(0x128)](_0xac7c5a(0x16f))['classList'][_0xac7c5a(0x1b5)](_0xac7c5a(0x14e));}});};var _0x5a5a85=document[_0x557138(0x128)]('ItunesBtn3');_0x5a5a85['onclick']=function(){var _0x94c77=_0x557138,_0x3ffc5e=db[_0x94c77(0x235)](_0x94c77(0xd0))[_0x94c77(0x141)](_0x94c77(0xd0));_0x3ffc5e[_0x94c77(0x288)]()['then'](_0x1810a2=>{var _0x1f83e0=_0x94c77;if(_0x1810a2[_0x1f83e0(0xa3)]){var _0x58b8ee=_0x1810a2['data'](),_0x3d22b4=document[_0x1f83e0(0x128)](_0x1f83e0(0x174)),_0x2646c0=document[_0x1f83e0(0x128)](_0x1f83e0(0x21d));_0x3d22b4[_0x1f83e0(0x222)]=_0x1f83e0(0xfd)+(0x64/Number(_0x58b8ee[_0x1f83e0(0x231)])+0x64/Number(_0x58b8ee[_0x1f83e0(0x231)])*0.075)['toFixed'](0x4)[_0x1f83e0(0x19b)]()+_0x1f83e0(0x1a9),_0x2646c0[_0x1f83e0(0xe6)]=_0x1f83e0(0x24a),itemDisplay1[_0x1f83e0(0xe6)]=_0x1f83e0(0x262),document['getElementById']('myDropdown1')[_0x1f83e0(0x280)]['toggle'](_0x1f83e0(0x14e));}});};var _0x5f15b4=document['getElementById'](_0x557138(0xb6));_0x5f15b4[_0x557138(0xb9)]=function(){var _0x1f7944=_0x557138,_0x2ca103=db[_0x1f7944(0x235)](_0x1f7944(0xd0))[_0x1f7944(0x141)](_0x1f7944(0xd0));_0x2ca103[_0x1f7944(0x288)]()[_0x1f7944(0xd5)](_0x5d6af4=>{var _0xe53e12=_0x1f7944;if(_0x5d6af4[_0xe53e12(0xa3)]){var _0x31ead1=_0x5d6af4['data'](),_0x496bde=document[_0xe53e12(0x128)]('10IGC'),_0x3bfda8=document[_0xe53e12(0x128)](_0xe53e12(0x21d));_0x496bde['value']=_0xe53e12(0xfd)+(0xfa/Number(_0x31ead1[_0xe53e12(0x231)])+0xfa/Number(_0x31ead1[_0xe53e12(0x231)])*0.075)[_0xe53e12(0x143)](0x4)[_0xe53e12(0x19b)]()+'\x20PEPPAS',_0x3bfda8[_0xe53e12(0xe6)]=_0xe53e12(0x127),itemDisplay1[_0xe53e12(0xe6)]=_0xe53e12(0xdb),document[_0xe53e12(0x128)]('myDropdown1')[_0xe53e12(0x280)]['toggle'](_0xe53e12(0x14e));}});};var _0x2894b1=document['getElementById'](_0x557138(0x249));_0x2894b1['onclick']=function(){var _0x3d180b=_0x557138,_0x4a0119=db['collection'](_0x3d180b(0xd0))[_0x3d180b(0x141)](_0x3d180b(0xd0));_0x4a0119[_0x3d180b(0x288)]()['then'](_0x58b087=>{var _0x320e41=_0x3d180b;if(_0x58b087[_0x320e41(0xa3)]){var _0x137e80=_0x58b087[_0x320e41(0xd0)](),_0x1a21b1=document[_0x320e41(0x128)](_0x320e41(0x174)),_0x35a312=document[_0x320e41(0x128)](_0x320e41(0x21d));_0x1a21b1[_0x320e41(0x222)]='Cost\x20After\x20Fees:\x20'+(0x1f4/Number(_0x137e80[_0x320e41(0x231)])+0x1f4/Number(_0x137e80[_0x320e41(0x231)])*0.075)['toFixed'](0x4)[_0x320e41(0x19b)]()+_0x320e41(0x1a9),_0x35a312[_0x320e41(0xe6)]=_0x320e41(0x142),itemDisplay1[_0x320e41(0xe6)]=_0x320e41(0x1b3),document[_0x320e41(0x128)](_0x320e41(0x16f))[_0x320e41(0x280)][_0x320e41(0x1b5)]('show');}});};var _0x4d06bc=document[_0x557138(0x128)](_0x557138(0x23e));_0x4d06bc[_0x557138(0xb9)]=function(){var _0x4942bd=_0x557138,_0x9980f9=db['collection'](_0x4942bd(0xd0))[_0x4942bd(0x141)](_0x4942bd(0xd0));_0x9980f9['get']()[_0x4942bd(0xd5)](_0x280d84=>{var _0x35a747=_0x4942bd;if(_0x280d84[_0x35a747(0xa3)]){var _0xd59b8d=_0x280d84[_0x35a747(0xd0)](),_0x1374a2=document[_0x35a747(0x128)](_0x35a747(0x174)),_0x325d3b=document['getElementById'](_0x35a747(0x21d));_0x1374a2[_0x35a747(0x222)]=_0x35a747(0xfd)+(0x3e8/Number(_0xd59b8d[_0x35a747(0x231)])+0x3e8/Number(_0xd59b8d[_0x35a747(0x231)])*0.075)[_0x35a747(0x143)](0x4)[_0x35a747(0x19b)]()+_0x35a747(0x1a9),_0x325d3b[_0x35a747(0xe6)]=_0x35a747(0xa7),itemDisplay1[_0x35a747(0xe6)]=_0x35a747(0x22c),document[_0x35a747(0x128)](_0x35a747(0x16f))['classList'][_0x35a747(0x1b5)](_0x35a747(0x14e));}});};var _0x5e574f=document['getElementById'](_0x557138(0x22e));_0x5e574f[_0x557138(0xb9)]=function(){var _0x3a6da0=_0x557138,_0x597367=db[_0x3a6da0(0x235)](_0x3a6da0(0xd0))['doc'](_0x3a6da0(0xd0));_0x597367['get']()[_0x3a6da0(0xd5)](_0x2f0fc7=>{var _0x2ed40e=_0x3a6da0;if(_0x2f0fc7[_0x2ed40e(0xa3)]){var _0x59df18=_0x2f0fc7[_0x2ed40e(0xd0)](),_0x3be09c=document['getElementById'](_0x2ed40e(0x174)),_0x4608b7=document['getElementById'](_0x2ed40e(0x21d));_0x3be09c['value']=_0x2ed40e(0xfd)+(0x9c4/Number(_0x59df18[_0x2ed40e(0x231)])+0x9c4/Number(_0x59df18[_0x2ed40e(0x231)])*0.075)[_0x2ed40e(0x143)](0x4)[_0x2ed40e(0x19b)]()+'\x20PEPPAS',_0x4608b7[_0x2ed40e(0xe6)]=_0x2ed40e(0x24b),itemDisplay1[_0x2ed40e(0xe6)]=_0x2ed40e(0x265),document['getElementById'](_0x2ed40e(0x16f))[_0x2ed40e(0x280)][_0x2ed40e(0x1b5)](_0x2ed40e(0x14e));}});};var _0xbb8dcc=document[_0x557138(0x128)](_0x557138(0x22d));_0xbb8dcc[_0x557138(0xb9)]=function(){var _0x551ccf=_0x557138,_0x8942b7=db[_0x551ccf(0x235)](_0x551ccf(0xd0))[_0x551ccf(0x141)](_0x551ccf(0xd0));_0x8942b7[_0x551ccf(0x288)]()['then'](_0x116d12=>{var _0x206c26=_0x551ccf;if(_0x116d12[_0x206c26(0xa3)]){var _0x108c4a=_0x116d12[_0x206c26(0xd0)](),_0x2c2c5e=document[_0x206c26(0x128)](_0x206c26(0x21c)),_0x1eca0e=document[_0x206c26(0x128)]('MicrosoftCost1');_0x2d827a[_0x206c26(0xea)]['display']=_0x206c26(0x150),_0xc484a5[_0x206c26(0xea)]['display']='block',_0x5a3e06['style'][_0x206c26(0x16a)]=_0x206c26(0x150),_0x26af61[_0x206c26(0xea)][_0x206c26(0x16a)]=_0x206c26(0x150),_0x2c2c5e[_0x206c26(0x222)]=_0x206c26(0xfd)+(0xa/Number(_0x108c4a['PeppaValue'])+0xa/Number(_0x108c4a[_0x206c26(0x231)])*0.075)['toFixed'](0x4)[_0x206c26(0x19b)]()+_0x206c26(0x1a9),_0x1eca0e[_0x206c26(0xe6)]=_0x206c26(0x15b),itemDisplay2[_0x206c26(0xe6)]='10$\x20Microsoft\x20Gift\x20Card';}});};var _0x17b581=document[_0x557138(0x128)](_0x557138(0x181));_0x17b581[_0x557138(0xb9)]=function(){var _0x363664=_0x557138,_0x19f3f8=db[_0x363664(0x235)](_0x363664(0xd0))[_0x363664(0x141)](_0x363664(0xd0));_0x19f3f8['get']()[_0x363664(0xd5)](_0x532f8b=>{var _0xecee6a=_0x363664;if(_0x532f8b[_0xecee6a(0xa3)]){var _0x4cac4b=_0x532f8b[_0xecee6a(0xd0)](),_0x5b8753=document['getElementById'](_0xecee6a(0x21c)),_0x229b8b=document['getElementById'](_0xecee6a(0x113));_0x5b8753[_0xecee6a(0x222)]=_0xecee6a(0xfd)+(0x19/Number(_0x4cac4b[_0xecee6a(0x231)])+0x19/Number(_0x4cac4b[_0xecee6a(0x231)])*0.075)['toFixed'](0x4)[_0xecee6a(0x19b)]()+_0xecee6a(0x1a9),_0x229b8b[_0xecee6a(0xe6)]=_0xecee6a(0x27d),itemDisplay2[_0xecee6a(0xe6)]=_0xecee6a(0x1dc),document[_0xecee6a(0x128)](_0xecee6a(0x184))[_0xecee6a(0x280)]['toggle']('show');}});};var _0x2c682d=document['getElementById'](_0x557138(0x144));_0x2c682d[_0x557138(0xb9)]=function(){var _0x173613=_0x557138,_0x374f25=db[_0x173613(0x235)](_0x173613(0xd0))['doc'](_0x173613(0xd0));_0x374f25[_0x173613(0x288)]()[_0x173613(0xd5)](_0x560361=>{var _0x3de3e1=_0x173613;if(_0x560361[_0x3de3e1(0xa3)]){var _0x4201e4=_0x560361[_0x3de3e1(0xd0)](),_0x194711=document[_0x3de3e1(0x128)](_0x3de3e1(0x21c)),_0xf48f7c=document[_0x3de3e1(0x128)](_0x3de3e1(0x113));_0x194711['value']=_0x3de3e1(0xfd)+(0x32/Number(_0x4201e4['PeppaValue'])+0x32/Number(_0x4201e4[_0x3de3e1(0x231)])*0.075)['toFixed'](0x4)[_0x3de3e1(0x19b)]()+'\x20PEPPAS',_0xf48f7c['innerHTML']='50$',itemDisplay2[_0x3de3e1(0xe6)]='50$\x20Microsoft\x20Gift\x20Card',document[_0x3de3e1(0x128)]('myDropdown2')[_0x3de3e1(0x280)][_0x3de3e1(0x1b5)]('show');}});};var _0x447637=document[_0x557138(0x128)](_0x557138(0x12e));_0x447637[_0x557138(0xb9)]=function(){var _0x6e1bd=_0x557138,_0x1e0a7f=db[_0x6e1bd(0x235)](_0x6e1bd(0xd0))[_0x6e1bd(0x141)](_0x6e1bd(0xd0));_0x1e0a7f[_0x6e1bd(0x288)]()[_0x6e1bd(0xd5)](_0x3151cc=>{var _0x11c806=_0x6e1bd;if(_0x3151cc['exists']){var _0x77535a=_0x3151cc[_0x11c806(0xd0)](),_0x55af1d=document[_0x11c806(0x128)]('10MGC'),_0x37a59d=document[_0x11c806(0x128)](_0x11c806(0x113));_0x55af1d[_0x11c806(0x222)]=_0x11c806(0xfd)+(0xa/Number(_0x77535a['PeppaValue'])+0xa/Number(_0x77535a[_0x11c806(0x231)])*0.075)[_0x11c806(0x143)](0x4)[_0x11c806(0x19b)]()+_0x11c806(0x1a9),_0x37a59d['innerHTML']='10$',itemDisplay2[_0x11c806(0xe6)]='10$\x20Microsoft\x20Gift\x20Card',document[_0x11c806(0x128)]('myDropdown2')[_0x11c806(0x280)]['toggle'](_0x11c806(0x14e));}});};var _0x2157d2=document[_0x557138(0x128)](_0x557138(0xed));_0x2157d2['onclick']=function(){var _0x2fe6a7=_0x557138,_0x2c0903=db[_0x2fe6a7(0x235)](_0x2fe6a7(0xd0))[_0x2fe6a7(0x141)](_0x2fe6a7(0xd0));_0x2c0903[_0x2fe6a7(0x288)]()[_0x2fe6a7(0xd5)](_0x512534=>{var _0x3a900e=_0x2fe6a7;if(_0x512534['exists']){var _0x26b752=_0x512534['data'](),_0x61ac=document['getElementById'](_0x3a900e(0x21c)),_0x3f59fc=document['getElementById'](_0x3a900e(0x113));_0x61ac[_0x3a900e(0x222)]=_0x3a900e(0xfd)+(0x64/Number(_0x26b752[_0x3a900e(0x231)])+0x64/Number(_0x26b752[_0x3a900e(0x231)])*0.075)[_0x3a900e(0x143)](0x4)[_0x3a900e(0x19b)]()+_0x3a900e(0x1a9),_0x3f59fc[_0x3a900e(0xe6)]='100$',itemDisplay2['innerHTML']=_0x3a900e(0xff),document['getElementById'](_0x3a900e(0x184))['classList'][_0x3a900e(0x1b5)](_0x3a900e(0x14e));}});};var _0x1a26d1=document[_0x557138(0x128)](_0x557138(0x155));_0x1a26d1[_0x557138(0xb9)]=function(){var _0x288ec5=_0x557138,_0x398a9c=db['collection'](_0x288ec5(0xd0))[_0x288ec5(0x141)](_0x288ec5(0xd0));_0x398a9c['get']()[_0x288ec5(0xd5)](_0x47f903=>{var _0xa378ed=_0x288ec5;if(_0x47f903[_0xa378ed(0xa3)]){var _0x48d1c4=_0x47f903[_0xa378ed(0xd0)](),_0x339c7b=document[_0xa378ed(0x128)](_0xa378ed(0x21c)),_0x3d19d0=document[_0xa378ed(0x128)]('MicrosoftCost1');_0x339c7b[_0xa378ed(0x222)]='Cost\x20After\x20Fees:\x20'+(0xfa/Number(_0x48d1c4[_0xa378ed(0x231)])+0xfa/Number(_0x48d1c4[_0xa378ed(0x231)])*0.075)[_0xa378ed(0x143)](0x4)[_0xa378ed(0x19b)]()+_0xa378ed(0x1a9),_0x3d19d0[_0xa378ed(0xe6)]=_0xa378ed(0x127),itemDisplay2['innerHTML']=_0xa378ed(0xa8),document['getElementById']('myDropdown2')[_0xa378ed(0x280)]['toggle'](_0xa378ed(0x14e));}});};var _0x3f4345=document[_0x557138(0x128)](_0x557138(0x1a0));_0x3f4345[_0x557138(0xb9)]=function(){var _0x3e79ec=_0x557138,_0x4bde31=db[_0x3e79ec(0x235)]('data')[_0x3e79ec(0x141)](_0x3e79ec(0xd0));_0x4bde31[_0x3e79ec(0x288)]()[_0x3e79ec(0xd5)](_0x3c533c=>{var _0x3a735a=_0x3e79ec;if(_0x3c533c[_0x3a735a(0xa3)]){var _0x138627=_0x3c533c[_0x3a735a(0xd0)](),_0x19e04=document['getElementById'](_0x3a735a(0x21c)),_0x52ecf8=document[_0x3a735a(0x128)]('MicrosoftCost1');_0x19e04[_0x3a735a(0x222)]='Cost\x20After\x20Fees:\x20'+(0x1f4/Number(_0x138627[_0x3a735a(0x231)])+0x1f4/Number(_0x138627[_0x3a735a(0x231)])*0.075)[_0x3a735a(0x143)](0x4)[_0x3a735a(0x19b)]()+'\x20PEPPAS',_0x52ecf8[_0x3a735a(0xe6)]=_0x3a735a(0x142),itemDisplay2[_0x3a735a(0xe6)]=_0x3a735a(0x1d8),document['getElementById'](_0x3a735a(0x184))['classList'][_0x3a735a(0x1b5)](_0x3a735a(0x14e));}});};var _0x52d720=document[_0x557138(0x128)](_0x557138(0x1d7));_0x52d720[_0x557138(0xb9)]=function(){var _0x594d3a=_0x557138,_0x221331=db['collection'](_0x594d3a(0xd0))[_0x594d3a(0x141)](_0x594d3a(0xd0));_0x221331[_0x594d3a(0x288)]()['then'](_0x498774=>{var _0x1b0b9a=_0x594d3a;if(_0x498774[_0x1b0b9a(0xa3)]){var _0x59e0fb=_0x498774[_0x1b0b9a(0xd0)](),_0x2ae044=document[_0x1b0b9a(0x128)](_0x1b0b9a(0x21c)),_0x317965=document[_0x1b0b9a(0x128)](_0x1b0b9a(0x113));_0x2ae044[_0x1b0b9a(0x222)]=_0x1b0b9a(0xfd)+(0x3e8/Number(_0x59e0fb[_0x1b0b9a(0x231)])+0x3e8/Number(_0x59e0fb['PeppaValue'])*0.075)[_0x1b0b9a(0x143)](0x4)[_0x1b0b9a(0x19b)]()+'\x20PEPPAS',_0x317965[_0x1b0b9a(0xe6)]=_0x1b0b9a(0xa7),itemDisplay2[_0x1b0b9a(0xe6)]='1000$\x20Microsoft\x20Gift\x20Card',document[_0x1b0b9a(0x128)](_0x1b0b9a(0x184))['classList'][_0x1b0b9a(0x1b5)]('show');}});};var _0x578225=document[_0x557138(0x128)](_0x557138(0x1c8));_0x578225[_0x557138(0xb9)]=function(){var _0x33d94e=_0x557138,_0x43464b=db[_0x33d94e(0x235)]('data')[_0x33d94e(0x141)](_0x33d94e(0xd0));_0x43464b['get']()[_0x33d94e(0xd5)](_0x32efd9=>{var _0x2e7fde=_0x33d94e;if(_0x32efd9[_0x2e7fde(0xa3)]){var _0xeddd17=_0x32efd9[_0x2e7fde(0xd0)](),_0x4fa646=document[_0x2e7fde(0x128)](_0x2e7fde(0x21c)),_0x3cd278=document[_0x2e7fde(0x128)](_0x2e7fde(0x113));_0x4fa646[_0x2e7fde(0x222)]=_0x2e7fde(0xfd)+(0x9c4/Number(_0xeddd17['PeppaValue'])+0x9c4/Number(_0xeddd17['PeppaValue'])*0.075)['toFixed'](0x4)[_0x2e7fde(0x19b)]()+_0x2e7fde(0x1a9),_0x3cd278[_0x2e7fde(0xe6)]=_0x2e7fde(0x24b),itemDisplay2[_0x2e7fde(0xe6)]=_0x2e7fde(0x201),document[_0x2e7fde(0x128)]('myDropdown2')[_0x2e7fde(0x280)][_0x2e7fde(0x1b5)]('show');}});};var _0x3c9492=document[_0x557138(0x128)]('StarbucksBtn');_0x3c9492[_0x557138(0xb9)]=function(){var _0xb39a77=_0x557138,_0x1833fc=db[_0xb39a77(0x235)](_0xb39a77(0xd0))['doc']('data');_0x1833fc[_0xb39a77(0x288)]()['then'](_0x253f17=>{var _0x4db463=_0xb39a77;if(_0x253f17['exists']){var _0x40b5e0=_0x253f17[_0x4db463(0xd0)](),_0xf86096=document[_0x4db463(0x128)](_0x4db463(0xb1)),_0x35e904=document[_0x4db463(0x128)](_0x4db463(0x233));_0x2d827a[_0x4db463(0xea)][_0x4db463(0x16a)]=_0x4db463(0x150),_0xc484a5['style'][_0x4db463(0x16a)]='none',_0x5a3e06[_0x4db463(0xea)][_0x4db463(0x16a)]=_0x4db463(0x150),_0x26af61['style'][_0x4db463(0x16a)]=_0x4db463(0x114),_0xf86096[_0x4db463(0x222)]=_0x4db463(0xfd)+(0xa/Number(_0x40b5e0[_0x4db463(0x231)])+0xa/Number(_0x40b5e0[_0x4db463(0x231)])*0.075)[_0x4db463(0x143)](0x4)[_0x4db463(0x19b)]()+_0x4db463(0x1a9),_0x35e904[_0x4db463(0xe6)]=_0x4db463(0x15b),itemDisplay3[_0x4db463(0xe6)]=_0x4db463(0x18d);}});};var _0x4d8a29=document[_0x557138(0x128)](_0x557138(0x161));_0x4d8a29[_0x557138(0xb9)]=function(){var _0x11f1d6=_0x557138,_0x355df9=db[_0x11f1d6(0x235)](_0x11f1d6(0xd0))[_0x11f1d6(0x141)]('data');_0x355df9['get']()[_0x11f1d6(0xd5)](_0x13e890=>{var _0x38eed6=_0x11f1d6;if(_0x13e890[_0x38eed6(0xa3)]){var _0x1e835e=_0x13e890['data'](),_0x51b5d8=document[_0x38eed6(0x128)](_0x38eed6(0xb1)),_0x12b710=document[_0x38eed6(0x128)](_0x38eed6(0x233));_0x51b5d8['value']='Cost\x20After\x20Fees:\x20'+(0x19/Number(_0x1e835e['PeppaValue'])+0x19/Number(_0x1e835e[_0x38eed6(0x231)])*0.075)[_0x38eed6(0x143)](0x4)[_0x38eed6(0x19b)]()+_0x38eed6(0x1a9),_0x12b710[_0x38eed6(0xe6)]=_0x38eed6(0x27d),itemDisplay3[_0x38eed6(0xe6)]=_0x38eed6(0x25b),document[_0x38eed6(0x128)](_0x38eed6(0x1d5))[_0x38eed6(0x280)]['toggle']('show');}});};var _0x4d70ed=document[_0x557138(0x128)](_0x557138(0x164));_0x4d70ed[_0x557138(0xb9)]=function(){var _0x1d4ac2=_0x557138,_0x89b452=db[_0x1d4ac2(0x235)](_0x1d4ac2(0xd0))[_0x1d4ac2(0x141)](_0x1d4ac2(0xd0));_0x89b452[_0x1d4ac2(0x288)]()['then'](_0xec602b=>{var _0x2660ed=_0x1d4ac2;if(_0xec602b[_0x2660ed(0xa3)]){var _0x8677c8=_0xec602b['data'](),_0x1e5e1f=document[_0x2660ed(0x128)]('10SGC'),_0x328cfb=document[_0x2660ed(0x128)](_0x2660ed(0x233));_0x1e5e1f[_0x2660ed(0x222)]='Cost\x20After\x20Fees:\x20'+(0x32/Number(_0x8677c8[_0x2660ed(0x231)])+0x32/Number(_0x8677c8[_0x2660ed(0x231)])*0.075)[_0x2660ed(0x143)](0x4)[_0x2660ed(0x19b)]()+'\x20PEPPAS',_0x328cfb[_0x2660ed(0xe6)]='50$',itemDisplay3['innerHTML']=_0x2660ed(0x196),document[_0x2660ed(0x128)](_0x2660ed(0x1d5))[_0x2660ed(0x280)][_0x2660ed(0x1b5)](_0x2660ed(0x14e));}});};var _0x189ecb=document[_0x557138(0x128)](_0x557138(0x154));_0x189ecb[_0x557138(0xb9)]=function(){var _0x50f00d=_0x557138,_0x41ea7d=db[_0x50f00d(0x235)](_0x50f00d(0xd0))['doc'](_0x50f00d(0xd0));_0x41ea7d[_0x50f00d(0x288)]()[_0x50f00d(0xd5)](_0x5d4f81=>{var _0x118b07=_0x50f00d;if(_0x5d4f81[_0x118b07(0xa3)]){var _0x3ef369=_0x5d4f81['data'](),_0x51fb2f=document['getElementById']('10SGC'),_0x1197d0=document['getElementById'](_0x118b07(0x233));_0x51fb2f['value']=_0x118b07(0xfd)+(0xa/Number(_0x3ef369[_0x118b07(0x231)])+0xa/Number(_0x3ef369[_0x118b07(0x231)])*0.075)[_0x118b07(0x143)](0x4)[_0x118b07(0x19b)]()+'\x20PEPPAS',_0x1197d0['innerHTML']=_0x118b07(0x15b),itemDisplay3['innerHTML']='10$\x20Starbucks\x20Gift\x20Card',document[_0x118b07(0x128)]('myDropdown3')[_0x118b07(0x280)][_0x118b07(0x1b5)](_0x118b07(0x14e));}});};var _0x4deca2=document['getElementById'](_0x557138(0x185));_0x4deca2[_0x557138(0xb9)]=function(){var _0x592bd4=_0x557138,_0x3920d5=db[_0x592bd4(0x235)](_0x592bd4(0xd0))[_0x592bd4(0x141)](_0x592bd4(0xd0));_0x3920d5[_0x592bd4(0x288)]()[_0x592bd4(0xd5)](_0x325afb=>{var _0x4072f4=_0x592bd4;if(_0x325afb[_0x4072f4(0xa3)]){var _0x45f9f6=_0x325afb[_0x4072f4(0xd0)](),_0xca3cbf=document[_0x4072f4(0x128)](_0x4072f4(0xb1)),_0x5616b2=document[_0x4072f4(0x128)](_0x4072f4(0x233));_0xca3cbf[_0x4072f4(0x222)]=_0x4072f4(0xfd)+(0x64/Number(_0x45f9f6[_0x4072f4(0x231)])+0x64/Number(_0x45f9f6['PeppaValue'])*0.075)[_0x4072f4(0x143)](0x4)['toString']()+'\x20PEPPAS',_0x5616b2[_0x4072f4(0xe6)]=_0x4072f4(0x24a),itemDisplay3[_0x4072f4(0xe6)]='100$\x20Starbucks\x20Gift\x20Card',document['getElementById'](_0x4072f4(0x1d5))[_0x4072f4(0x280)]['toggle']('show');}});};var _0x4050ba=document[_0x557138(0x128)](_0x557138(0x19e));_0x4050ba['onclick']=function(){var _0x3f77d2=_0x557138,_0x1707f8=db[_0x3f77d2(0x235)](_0x3f77d2(0xd0))[_0x3f77d2(0x141)](_0x3f77d2(0xd0));_0x1707f8['get']()[_0x3f77d2(0xd5)](_0x34188e=>{var _0x13db61=_0x3f77d2;if(_0x34188e[_0x13db61(0xa3)]){var _0x1e8fbc=_0x34188e[_0x13db61(0xd0)](),_0x329d2f=document['getElementById'](_0x13db61(0xb1)),_0x1a25fe=document[_0x13db61(0x128)]('StarbucksCost1');_0x329d2f['value']=_0x13db61(0xfd)+(0xfa/Number(_0x1e8fbc[_0x13db61(0x231)])+0xfa/Number(_0x1e8fbc[_0x13db61(0x231)])*0.075)[_0x13db61(0x143)](0x4)[_0x13db61(0x19b)]()+_0x13db61(0x1a9),_0x1a25fe[_0x13db61(0xe6)]=_0x13db61(0x127),itemDisplay3['innerHTML']=_0x13db61(0x209),document['getElementById'](_0x13db61(0x1d5))['classList'][_0x13db61(0x1b5)](_0x13db61(0x14e));}});};var _0x55c36a=document[_0x557138(0x128)](_0x557138(0x108));_0x55c36a[_0x557138(0xb9)]=function(){var _0x1480cb=_0x557138,_0x1d3d57=db[_0x1480cb(0x235)](_0x1480cb(0xd0))[_0x1480cb(0x141)](_0x1480cb(0xd0));_0x1d3d57[_0x1480cb(0x288)]()['then'](_0x2d79c1=>{var _0x47d4b1=_0x1480cb;if(_0x2d79c1[_0x47d4b1(0xa3)]){var _0x5a1ae3=_0x2d79c1[_0x47d4b1(0xd0)](),_0x559d8d=document['getElementById'](_0x47d4b1(0xb1)),_0x3a9953=document[_0x47d4b1(0x128)](_0x47d4b1(0x233));_0x559d8d[_0x47d4b1(0x222)]=_0x47d4b1(0xfd)+(0x1f4/Number(_0x5a1ae3[_0x47d4b1(0x231)])+0x1f4/Number(_0x5a1ae3[_0x47d4b1(0x231)])*0.075)[_0x47d4b1(0x143)](0x4)[_0x47d4b1(0x19b)]()+'\x20PEPPAS',_0x3a9953[_0x47d4b1(0xe6)]=_0x47d4b1(0x142),itemDisplay3[_0x47d4b1(0xe6)]=_0x47d4b1(0x13a),document[_0x47d4b1(0x128)](_0x47d4b1(0x1d5))[_0x47d4b1(0x280)][_0x47d4b1(0x1b5)](_0x47d4b1(0x14e));}});};var _0x8cc9df=document[_0x557138(0x128)](_0x557138(0x297));_0x8cc9df[_0x557138(0xb9)]=function(){var _0x477271=_0x557138,_0xff297b=db[_0x477271(0x235)]('data')[_0x477271(0x141)]('data');_0xff297b[_0x477271(0x288)]()['then'](_0x19b36e=>{var _0x380a04=_0x477271;if(_0x19b36e[_0x380a04(0xa3)]){var _0x4dde39=_0x19b36e[_0x380a04(0xd0)](),_0x1f03fe=document[_0x380a04(0x128)](_0x380a04(0xb1)),_0xff7c56=document[_0x380a04(0x128)](_0x380a04(0x233));_0x1f03fe[_0x380a04(0x222)]=_0x380a04(0xfd)+(0x3e8/Number(_0x4dde39[_0x380a04(0x231)])+0x3e8/Number(_0x4dde39[_0x380a04(0x231)])*0.075)[_0x380a04(0x143)](0x4)[_0x380a04(0x19b)]()+_0x380a04(0x1a9),_0xff7c56['innerHTML']=_0x380a04(0xa7),itemDisplay3[_0x380a04(0xe6)]='1000$\x20Starbucks\x20Gift\x20Card',document[_0x380a04(0x128)](_0x380a04(0x1d5))['classList'][_0x380a04(0x1b5)](_0x380a04(0x14e));}});};var _0x50210a=document[_0x557138(0x128)](_0x557138(0x12d));_0x50210a['onclick']=function(){var _0x582f19=_0x557138,_0x55a657=db[_0x582f19(0x235)](_0x582f19(0xd0))[_0x582f19(0x141)](_0x582f19(0xd0));_0x55a657['get']()[_0x582f19(0xd5)](_0x10ffe0=>{var _0x4b94bd=_0x582f19;if(_0x10ffe0[_0x4b94bd(0xa3)]){var _0x5658a6=_0x10ffe0[_0x4b94bd(0xd0)](),_0x3a03e5=document[_0x4b94bd(0x128)](_0x4b94bd(0xb1)),_0x4bed6e=document[_0x4b94bd(0x128)](_0x4b94bd(0x233));_0x3a03e5['value']=_0x4b94bd(0xfd)+(0x9c4/Number(_0x5658a6[_0x4b94bd(0x231)])+0x9c4/Number(_0x5658a6['PeppaValue'])*0.075)['toFixed'](0x4)[_0x4b94bd(0x19b)]()+_0x4b94bd(0x1a9),_0x4bed6e[_0x4b94bd(0xe6)]=_0x4b94bd(0x24b),itemDisplay3['innerHTML']=_0x4b94bd(0xfc),document[_0x4b94bd(0x128)](_0x4b94bd(0x1d5))[_0x4b94bd(0x280)][_0x4b94bd(0x1b5)](_0x4b94bd(0x14e));}});};}));}}}if(!window['location'][_0x9110a5(0x175)][_0x9110a5(0x1ed)](_0x9110a5(0x1ee))>-0x1&&!window['location']['href'][_0x9110a5(0x1ed)]('minigame')>-0x1&&!window[_0x9110a5(0x291)][_0x9110a5(0x175)][_0x9110a5(0x1ed)](_0x9110a5(0x11a))){var _0x1af7aa=document[_0x9110a5(0x128)](_0x9110a5(0x20d)),_0x1be744=db[_0x9110a5(0x235)]('data')[_0x9110a5(0x141)](_0x9110a5(0xd0));_0x1be744[_0x9110a5(0x288)]()[_0x9110a5(0xd5)](_0x50b6ff=>{var _0x4ec9da=_0x9110a5;if(_0x50b6ff[_0x4ec9da(0xa3)]){var _0x441dce=_0x50b6ff[_0x4ec9da(0xd0)]();_0x1af7aa[_0x4ec9da(0xe6)]=_0x4ec9da(0x294)+_0x441dce[_0x4ec9da(0x231)]+_0x4ec9da(0x232);}});}}else{if(window[_0x9110a5(0x291)][_0x9110a5(0x175)][_0x9110a5(0x1ed)](_0x9110a5(0x1ee))>-0x1){var _0x1af7aa=document[_0x9110a5(0x128)](_0x9110a5(0x20d)),_0x1be744=db[_0x9110a5(0x235)](_0x9110a5(0xd0))[_0x9110a5(0x141)](_0x9110a5(0xd0));_0x1be744[_0x9110a5(0x288)]()[_0x9110a5(0xd5)](_0x504d2f=>{var _0x741151=_0x9110a5;if(_0x504d2f[_0x741151(0xa3)]){var _0x1ec1f2=_0x504d2f[_0x741151(0xd0)]();_0x1af7aa[_0x741151(0xe6)]='1\x20PEPPA\x20=\x20'+_0x1ec1f2['PeppaValue']+_0x741151(0x232);}});var _0x14dc5c=document[_0x9110a5(0x128)](_0x9110a5(0x25d)),_0x454005=document[_0x9110a5(0x128)](_0x9110a5(0x130));_0x454005[_0x9110a5(0xea)]['display']=_0x9110a5(0x114),_0x14dc5c[_0x9110a5(0xea)][_0x9110a5(0x16a)]='none';var _0x5a99d2=document[_0x9110a5(0x128)](_0x9110a5(0x25d));_0x5a99d2[_0x9110a5(0xb9)]=function(){var _0x38b101=_0x9110a5;window['location'][_0x38b101(0x175)]=_0x38b101(0x26e);};}}});};function InitializeReferrals(){let _0x5d49f0='';firebase['auth']()['onAuthStateChanged'](_0x7b25fa=>{var _0x23dfcb=_0x2eea,_0x4dca38=db['collection'](_0x23dfcb(0x281))[_0x23dfcb(0x141)](_0x7b25fa[_0x23dfcb(0xc2)]);_0x4dca38[_0x23dfcb(0x288)]()[_0x23dfcb(0xd5)](_0x2ebd3f=>{var _0x39651d=_0x23dfcb,_0x1c6656=_0x2ebd3f[_0x39651d(0xd0)](),_0x317829=_0x1c6656[_0x39651d(0x1e1)];arrayLength=_0x317829[_0x39651d(0x219)],document[_0x39651d(0x128)](_0x39651d(0x19a))[_0x39651d(0xe6)]=_0x39651d(0x26a)+_0x1c6656[_0x39651d(0x295)]['toFixed'](0x2)+'x',document[_0x39651d(0x128)]('ReferralsCode')[_0x39651d(0xe6)]=_0x39651d(0x23b)+_0x1c6656[_0x39651d(0x1cf)];var _0x1879bd=0x0;for(var _0x1adbc3=arrayLength-0x1;_0x1adbc3>=0x0;_0x1adbc3--){var _0x37b6a2=document[_0x39651d(0x128)](_0x39651d(0x120));_0x1879bd++;if(_0x1879bd<=0x14){var _0x114521=db['collection'](_0x39651d(0x281))['doc'](_0x317829[_0x1adbc3]);_0x114521[_0x39651d(0x288)]()['then'](_0x519683=>{var _0x1661da=_0x39651d;const _0x259cff=_0x1661da(0x186)+(_0x1adbc3+0x2)['toString']()+'</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22border-radius:10px;width:82%;margin-left:7.5%\x22class=\x22panel\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22text-align:center\x22>Referral\x20Address:\x20</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22copyToClipboard(\x27#address'+_0x519683[_0x1661da(0xd0)]()[_0x1661da(0x207)]+_0x1661da(0x100)+_0x519683[_0x1661da(0xd0)]()['Address']+'\x22\x20style=\x22text-align:center;\x22>'+_0x519683[_0x1661da(0xd0)]()['Address']+_0x1661da(0x1a1);_0x5d49f0+=_0x259cff,_0x37b6a2[_0x1661da(0xe6)]=_0x5d49f0;var _0x2c4aff=document[_0x1661da(0x1da)](_0x1661da(0x156)),_0x21fba8;for(_0x21fba8=0x0;_0x21fba8<_0x2c4aff['length'];_0x21fba8++){_0x2c4aff[_0x21fba8][_0x1661da(0x17a)](_0x1661da(0x1c6),function(){var _0x125cb4=_0x1661da;this[_0x125cb4(0x280)][_0x125cb4(0x1b5)]('active');var _0x402f92=this[_0x125cb4(0x13b)];_0x402f92[_0x125cb4(0xea)][_0x125cb4(0xd1)]?_0x402f92[_0x125cb4(0xea)][_0x125cb4(0xd1)]=null:_0x402f92[_0x125cb4(0xea)][_0x125cb4(0xd1)]=_0x402f92['scrollHeight']+'px';});}});}}});});}function makeid(_0x29e6bb){var _0x458a3c=_0x3f07ba,_0x2e2136='',_0x5bad87='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',_0x86a1df=_0x5bad87[_0x458a3c(0x219)];for(var _0x3dd4a6=0x0;_0x3dd4a6<_0x29e6bb;_0x3dd4a6++){_0x2e2136+=_0x5bad87[_0x458a3c(0x101)](Math[_0x458a3c(0x133)](Math[_0x458a3c(0x11e)]()*_0x86a1df));}return _0x2e2136;}function signUp(){var _0xc07903=_0x3f07ba,_0x406ef4=document[_0xc07903(0x128)]('TOSACCESS');if(_0x406ef4['checked']==!![]){var _0x5f1343=document[_0xc07903(0x128)](_0xc07903(0xa1)),_0x1db8ea=document[_0xc07903(0x128)](_0xc07903(0x1d0)),_0x18c2e3=document[_0xc07903(0x128)](_0xc07903(0x157)),_0x5a9720=document[_0xc07903(0x128)](_0xc07903(0x11c)),_0x2cb31a=_0x1db8ea[_0xc07903(0x222)];_0x5f1343==''&&Alert(_0xc07903(0x225),_0xc07903(0x10e),_0xc07903(0x107)),_0x2cb31a==''||_0x2cb31a=='\x20'?Alert('You\x20need\x20a\x20unique\x20username\x20to\x20sign\x20up!',_0xc07903(0x10e),_0xc07903(0x107)):db[_0xc07903(0x235)]('users')[_0xc07903(0x271)](_0xc07903(0x126),'==',_0x2cb31a)[_0xc07903(0x288)]()[_0xc07903(0xd5)](_0x29ea9a=>{var _0x4a7fb3=_0xc07903;!_0x29ea9a[_0x4a7fb3(0x290)]?Alert(_0x4a7fb3(0x279),_0x4a7fb3(0x10e),_0x4a7fb3(0x107)):_0x5a9720[_0x4a7fb3(0x222)]==''||_0x5a9720['value']==null?Auth['createUserWithEmailAndPassword'](_0x5f1343[_0x4a7fb3(0x222)],_0x18c2e3[_0x4a7fb3(0xe6)])[_0x4a7fb3(0xd5)](function(){var _0x55e058=_0x4a7fb3,_0x417c4d=Auth[_0x55e058(0x215)],_0x5fc05e='Peppa_'+makeid(0x2c),_0x1d00e7=makeid(0x7),_0x4f8039={'Coins':0x0,'Notifications':[],'Address':_0x5fc05e,'Transactions':[],'newFaucetTime':new Date(),'ReferralCode':_0x1d00e7,'HashesMined':0x0,'Referrals':[],'Username':_0x2cb31a,'Referrer':empty,'Multiplier':0x1,'PreviousTransactions':0x0,'MarketplaceTransactions':[],'FinishedMarketplaceTransactions':0x0,'IncomingMarketplaceTransactions':[]};db['collection'](_0x55e058(0x281))['doc'](_0x417c4d[_0x55e058(0xc2)])[_0x55e058(0x21e)](_0x4f8039)['then'](()=>{var _0x35cafa=_0x55e058,_0x12a255=db[_0x35cafa(0x235)](_0x35cafa(0xd0))[_0x35cafa(0x141)]('data');_0x12a255[_0x35cafa(0x288)]()[_0x35cafa(0xd5)](_0x260dfe=>{var _0x4a24d0=_0x35cafa,_0x218b4f=_0x260dfe[_0x4a24d0(0xd0)](),_0x5c3e42=_0x218b4f[_0x4a24d0(0x281)];_0x5c3e42+=0x1;var _0x499796={'BitcoinValue':_0x218b4f[_0x4a24d0(0x19d)],'MiningRewards':_0x218b4f[_0x4a24d0(0x149)],'PeppaValue':_0x218b4f['PeppaValue'],'PeppasTransacted':_0x218b4f['PeppasTransacted'],'TotalSupply':_0x218b4f[_0x4a24d0(0xda)],'TransactionsMade':_0x218b4f['TransactionsMade'],'miningDifficulty':_0x218b4f[_0x4a24d0(0x1df)],'users':_0x5c3e42};db['collection'](_0x4a24d0(0xd0))[_0x4a24d0(0x141)](_0x4a24d0(0xd0))['set'](_0x499796)[_0x4a24d0(0xd5)](()=>{var _0x3313e0=_0x4a24d0;window['location']['href']=_0x3313e0(0x26e);});});})['catch'](_0x1f0ba9=>{var _0xa17c02=_0x55e058;Alert(_0x1f0ba9,_0xa17c02(0x117),_0xa17c02(0xc1));});})[_0x4a7fb3(0xf4)](_0x2b4b55=>{Alert(_0x2b4b55,'Internal\x20Error','red');}):db[_0x4a7fb3(0x235)](_0x4a7fb3(0x281))[_0x4a7fb3(0x271)]('ReferralCode','==',_0x5a9720[_0x4a7fb3(0x222)])[_0x4a7fb3(0x288)]()[_0x4a7fb3(0xd5)](_0x4d0c20=>{var _0x51343f=_0x4a7fb3;!_0x4d0c20[_0x51343f(0x290)]?_0x4d0c20['forEach'](_0x2fb8b9=>{var _0x1a2632=_0x51343f;_0x2fb8b9['exists']&&Auth[_0x1a2632(0xd7)](_0x5f1343[_0x1a2632(0x222)],_0x18c2e3['value'])['then'](function(){var _0x32bd09=_0x1a2632,_0x143c98=Auth['currentUser'],_0x2b0671=_0x32bd09(0x1ca)+makeid(0x2c),_0x15056c=makeid(0x7),_0x3a163b={'Coins':0x0,'Address':_0x2b0671,'Transactions':[],'Notifications':[],'newFaucetTime':new Date(),'HashesMined':0x0,'ReferralCode':_0x15056c,'Referrals':[],'Username':_0x2cb31a,'Referrer':_0x2fb8b9['id'],'Multiplier':0x1,'PreviousTransactions':0x0,'MarketplaceTransactions':[],'FinishedMarketplaceTransactions':0x0,'IncomingMarketplaceTransactions':[]},_0x5b8d40=_0x2fb8b9[_0x32bd09(0xd0)](),_0xb585bf={'Coins':_0x5b8d40[_0x32bd09(0x18f)],'Address':_0x5b8d40[_0x32bd09(0x207)],'Transactions':_0x5b8d40['Transactions'],'Username':_0x5b8d40[_0x32bd09(0x126)],'newFaucetTime':_0x5b8d40[_0x32bd09(0xd6)],'ReferralCode':_0x5b8d40[_0x32bd09(0x1cf)],'HashesMined':_0x5b8d40[_0x32bd09(0x205)],'Referrals':_0x5b8d40[_0x32bd09(0x1e1)],'Referrer':_0x5b8d40[_0x32bd09(0x9f)],'Notifications':_0x5b8d40[_0x32bd09(0x158)],'Multiplier':_0x5b8d40[_0x32bd09(0x295)],'PreviousTransactions':_0x5b8d40['PreviousTransactions'],'MarketplaceTransactions':_0x5b8d40[_0x32bd09(0x1d6)],'FinishedMarketplaceTransactions':_0x5b8d40['FinishedMarketplaceTransactions'],'IncomingMarketplaceTransactions':_0x5b8d40[_0x32bd09(0xbc)]};db[_0x32bd09(0x235)]('users')['doc'](_0x143c98[_0x32bd09(0xc2)])[_0x32bd09(0x21e)](_0x3a163b)[_0x32bd09(0xd5)](()=>{var _0x86b371=_0x32bd09;_0xb585bf[_0x86b371(0x1e1)]['push'](_0x143c98[_0x86b371(0xc2)]),_0xb585bf[_0x86b371(0x295)]+=0.05,db[_0x86b371(0x235)](_0x86b371(0x281))[_0x86b371(0x141)](_0x2fb8b9['id'])[_0x86b371(0x21e)](_0xb585bf)[_0x86b371(0xd5)](()=>{var _0x56e3bf=_0x86b371,_0x36e208=db['collection'](_0x56e3bf(0xd0))[_0x56e3bf(0x141)]('data');_0x36e208[_0x56e3bf(0x288)]()[_0x56e3bf(0xd5)](_0x43d3d4=>{var _0x491f6b=_0x56e3bf,_0x42c0b8=_0x43d3d4[_0x491f6b(0xd0)](),_0x80c9b5=_0x42c0b8[_0x491f6b(0x281)],_0x47f259=_0x80c9b5+0x1,_0x4ed586={'BitcoinValue':_0x42c0b8[_0x491f6b(0x19d)],'MiningRewards':_0x42c0b8[_0x491f6b(0x149)],'PeppaValue':_0x42c0b8['PeppaValue'],'PeppasTransacted':_0x42c0b8[_0x491f6b(0x16d)],'TotalSupply':_0x42c0b8[_0x491f6b(0xda)],'TransactionsMade':_0x42c0b8[_0x491f6b(0x1f5)],'miningDifficulty':_0x42c0b8[_0x491f6b(0x1df)],'users':_0x47f259};db[_0x491f6b(0x235)](_0x491f6b(0xd0))['doc'](_0x491f6b(0xd0))[_0x491f6b(0x21e)](_0x4ed586)['then'](()=>{var _0x4bad67=_0x491f6b;window[_0x4bad67(0x291)][_0x4bad67(0x175)]=_0x4bad67(0x26e);});});});});})[_0x1a2632(0xf4)](_0x36cc98=>{var _0x516b8a=_0x1a2632;Alert(_0x36cc98,_0x516b8a(0x117),_0x516b8a(0xc1));});}):Alert(_0x51343f(0x275),_0x51343f(0x10e),_0x51343f(0x107));})[_0x4a7fb3(0xf4)](_0x495256=>{var _0x290df8=_0x4a7fb3;Alert(_0x495256,_0x290df8(0x117),_0x290df8(0xc1));});});}else Alert(_0xc07903(0x1e3),_0xc07903(0x1ae),_0xc07903(0x107));}function SendPeppa(){var _0x54f3f1=_0x3f07ba,_0x2f5320=document[_0x54f3f1(0x128)](_0x54f3f1(0x13c)),_0x4cec79=document['getElementById'](_0x54f3f1(0x1fe));if(_0x4cec79['value']>=0xfa){var _0x9c0d73=document['getElementById']('sendModal'),_0x196a31=(Number(_0x4cec79[_0x54f3f1(0x222)])*0.01)[_0x54f3f1(0x143)](0x4);db[_0x54f3f1(0x235)](_0x54f3f1(0x281))[_0x54f3f1(0x271)](_0x54f3f1(0x207),'==',_0x2f5320[_0x54f3f1(0x222)])[_0x54f3f1(0x288)]()[_0x54f3f1(0xd5)](_0x441a1c=>{var _0x131172=_0x54f3f1;!_0x441a1c[_0x131172(0x290)]?_0x441a1c[_0x131172(0x191)](_0x58c38f=>{var _0x3a911d=_0x131172;if(_0x58c38f['id']!=Auth[_0x3a911d(0x215)][_0x3a911d(0xc2)]){var _0x399ed4=db['collection'](_0x3a911d(0x281))[_0x3a911d(0x141)](Auth[_0x3a911d(0x215)]['uid']);_0x399ed4[_0x3a911d(0x288)]()['then'](_0xd92e16=>{var _0x3a2283=_0x3a911d;if(_0xd92e16[_0x3a2283(0xa3)]){var _0x5b8e81=_0xd92e16['data'](),_0x5346a0=_0x5b8e81[_0x3a2283(0x18f)];if(_0x5346a0>=Number(_0x4cec79[_0x3a2283(0x222)])+Number(_0x196a31)){var _0x2129b5=Number((_0x5346a0-(Number(_0x4cec79[_0x3a2283(0x222)])+Number(_0x196a31)))[_0x3a2283(0x143)](0x4));_0x9c0d73[_0x3a2283(0xea)][_0x3a2283(0x16a)]=_0x3a2283(0x150);var _0x321e63={'userName':_0x58c38f[_0x3a2283(0xd0)]()[_0x3a2283(0x126)],'ReceiverAddress':_0x2f5320[_0x3a2283(0x222)],'SenderAddress':_0x5b8e81['Address'],'TransactionDate':new Date(),'Amount':Number(_0x4cec79[_0x3a2283(0x222)])[_0x3a2283(0x143)](0x4),'NetworkFee':Number(_0x196a31)[_0x3a2283(0x143)](0x4),'send':!![]},_0x3bbbe6={'Coins':_0x2129b5,'Address':_0x5b8e81['Address'],'HashesMined':_0x5b8e81[_0x3a2283(0x205)],'Notifications':_0x5b8e81[_0x3a2283(0x158)],'Transactions':_0x5b8e81[_0x3a2283(0xc7)],'Username':_0x5b8e81[_0x3a2283(0x126)],'newFaucetTime':_0x5b8e81[_0x3a2283(0xd6)],'ReferralCode':_0x5b8e81['ReferralCode'],'Referrals':_0x5b8e81['Referrals'],'Referrer':_0x5b8e81[_0x3a2283(0x9f)],'Multiplier':_0x5b8e81['Multiplier'],'PreviousTransactions':_0x5b8e81['PreviousTransactions'],'MarketplaceTransactions':_0x5b8e81[_0x3a2283(0x1d6)],'FinishedMarketplaceTransactions':_0x5b8e81[_0x3a2283(0xb8)],'IncomingMarketplaceTransactions':_0x5b8e81['IncomingMarketplaceTransactions']};_0x3bbbe6[_0x3a2283(0xc7)][_0x3a2283(0x227)](_0x321e63),db[_0x3a2283(0x235)](_0x3a2283(0x281))[_0x3a2283(0x141)](Auth['currentUser'][_0x3a2283(0xc2)])[_0x3a2283(0x21e)](_0x3bbbe6)['then'](()=>{var _0x1dc398=_0x3a2283;Alert(_0x1dc398(0x272)+Number(_0x4cec79[_0x1dc398(0x222)])[_0x1dc398(0x143)](0x4)+_0x1dc398(0x1fa)+Number(_0x196a31)[_0x1dc398(0x143)](0x4)['toString']()+_0x1dc398(0x1de)+_0x58c38f[_0x1dc398(0xd0)]()[_0x1dc398(0x126)]+_0x1dc398(0xc4),'Sent\x20Transaction','blue'),InitializeWallet(Auth[_0x1dc398(0x215)]);});var _0x23033d=db['collection'](_0x3a2283(0x281))['doc'](_0x58c38f['id']);_0x23033d[_0x3a2283(0x288)]()[_0x3a2283(0xd5)](_0xe6ce18=>{var _0x4373fa=_0x3a2283;if(_0xe6ce18[_0x4373fa(0xa3)]){var _0x136d10=_0xe6ce18[_0x4373fa(0xd0)](),_0xf6f996=_0x136d10[_0x4373fa(0x18f)],_0xcb79c9=Number(Number(_0xf6f996)+Number(_0x4cec79['value'])),_0x2bbc37={'Coins':_0xcb79c9,'Address':_0x136d10['Address'],'Notifications':_0x136d10[_0x4373fa(0x158)],'Transactions':_0x136d10[_0x4373fa(0xc7)],'Username':_0x136d10['Username'],'HashesMined':_0x136d10[_0x4373fa(0x205)],'newFaucetTime':_0x136d10['newFaucetTime'],'ReferralCode':_0x136d10[_0x4373fa(0x1cf)],'Referrals':_0x136d10[_0x4373fa(0x1e1)],'Referrer':_0x136d10['Referrer'],'Multiplier':_0x136d10[_0x4373fa(0x295)],'PreviousTransactions':_0x136d10[_0x4373fa(0x1dd)],'MarketplaceTransactions':_0x136d10[_0x4373fa(0x1d6)],'FinishedMarketplaceTransactions':_0x136d10[_0x4373fa(0xb8)],'IncomingMarketplaceTransactions':_0x136d10[_0x4373fa(0xbc)]},_0x4a9159={'userName':_0x5b8e81[_0x4373fa(0x126)],'ReceiverAddress':_0x2f5320[_0x4373fa(0x222)],'SenderAddress':_0x5b8e81[_0x4373fa(0x207)],'TransactionDate':new Date(),'Amount':Number(_0x4cec79[_0x4373fa(0x222)])[_0x4373fa(0x143)](0x4),'send':![]},_0x394613={'NotifType':_0x4373fa(0x1f9),'NotifContent':_0x5b8e81[_0x4373fa(0x126)]+_0x4373fa(0x1e6)+Number(_0x4cec79['value'])[_0x4373fa(0x143)](0x4)['toString']()+_0x4373fa(0x20f),'NotifTitle':'Incoming\x20Transaction!'};_0x2bbc37[_0x4373fa(0xc7)][_0x4373fa(0x227)](_0x4a9159),_0x2bbc37['Notifications'][_0x4373fa(0x227)](_0x394613),db[_0x4373fa(0x235)](_0x4373fa(0x281))['doc'](_0x58c38f['id'])['set'](_0x2bbc37)[_0x4373fa(0xd5)](()=>{var _0x35c1d7=_0x4373fa,_0x296101=db[_0x35c1d7(0x235)](_0x35c1d7(0xd0))[_0x35c1d7(0x141)](_0x35c1d7(0xd0));_0x296101[_0x35c1d7(0x288)]()[_0x35c1d7(0xd5)](_0x2a1b50=>{var _0x5b863b=_0x35c1d7,_0x18d83a=_0x2a1b50['data'](),_0x1a9798=_0x18d83a[_0x5b863b(0x16d)]+Number(_0x4cec79[_0x5b863b(0x222)]),_0x3f6a23=_0x18d83a[_0x5b863b(0x1f5)]+0x1,_0x123cc0={'BitcoinValue':_0x18d83a[_0x5b863b(0x19d)],'MiningRewards':_0x18d83a[_0x5b863b(0x149)],'PeppaValue':_0x18d83a[_0x5b863b(0x231)],'PeppasTransacted':_0x1a9798,'TotalSupply':_0x18d83a['TotalSupply'],'TransactionsMade':_0x3f6a23,'miningDifficulty':_0x18d83a[_0x5b863b(0x1df)],'users':_0x18d83a[_0x5b863b(0x281)]};db['collection'](_0x5b863b(0xd0))['doc']('data')[_0x5b863b(0x21e)](_0x123cc0)[_0x5b863b(0xd5)](()=>{});});});}})[_0x3a2283(0xf4)](_0x1c77b6=>{var _0xab172e=_0x3a2283;Alert(_0xab172e(0x1d2),_0xab172e(0x117),_0xab172e(0xc1));});}else Alert(_0x3a2283(0x188),_0x3a2283(0x20a),_0x3a2283(0x107));}});}else Alert(_0x3a911d(0x28a),_0x3a911d(0x20a),'yellow');}):Alert(_0x131172(0x24d),'Transaction\x20Error',_0x131172(0x107));})[_0x54f3f1(0xf4)](()=>{var _0x45a27b=_0x54f3f1;Alert(_0x45a27b(0x28b),_0x45a27b(0x20a),'yellow');});}else Alert(_0x54f3f1(0x292),_0x54f3f1(0x20a),_0x54f3f1(0x107));}function signIn(_0x299392){var _0x211c70=_0x3f07ba,_0xf69169=document[_0x211c70(0x128)](_0x211c70(0x1ce)),_0x119e7d=document['getElementById'](_0x211c70(0x1fd));const _0x4f0f85=Auth[_0x211c70(0x172)](_0xf69169[_0x211c70(0x222)],_0x119e7d['value']);_0x4f0f85[_0x211c70(0xf4)](_0x172467=>alert(_0x172467[_0x211c70(0xdf)])),firebase[_0x211c70(0xd9)]()['setPersistence'](firebase[_0x211c70(0xd9)][_0x211c70(0x14b)][_0x211c70(0x25a)][_0x211c70(0x257)])[_0x211c70(0xd5)](()=>{var _0x42a7d5=_0x211c70;return firebase[_0x42a7d5(0xd9)]()['onAuthStateChanged'](_0x23a931=>{var _0x14da78=_0x42a7d5;_0x23a931&&(window[_0x14da78(0x291)][_0x14da78(0x175)]=_0x299392+_0x14da78(0x251));}),firebase['auth']()[_0x42a7d5(0x172)](_0xf69169,_0x119e7d);})[_0x211c70(0xf4)](_0x56ca83=>{var _0x29b102=_0x211c70,_0x30e91b=_0x56ca83[_0x29b102(0x26d)],_0x5f25ce=_0x56ca83[_0x29b102(0xdf)];});}function InitializeFaucet(_0x8a5713){var _0x2c3242=_0x3f07ba,_0x47a183=db[_0x2c3242(0x235)]('users')[_0x2c3242(0x141)](_0x8a5713[_0x2c3242(0xc2)]);_0x47a183[_0x2c3242(0x288)]()[_0x2c3242(0xd5)](_0x3bc6b4=>{var _0x2e5261=_0x2c3242;if(_0x3bc6b4[_0x2e5261(0xa3)]){var _0x4e348a=_0x3bc6b4[_0x2e5261(0xd0)](),_0x508625=new Date(),_0x2f621d=_0x4e348a['newFaucetTime'][_0x2e5261(0xd4)]();Date[_0x2e5261(0x267)](_0x508625)>Date[_0x2e5261(0x267)](_0x2f621d)?document[_0x2e5261(0x128)](_0x2e5261(0x24c))[_0x2e5261(0xe6)]='Faucet\x20Ready':document[_0x2e5261(0x128)](_0x2e5261(0x24c))[_0x2e5261(0xe6)]=_0x2e5261(0xa4)+_0x2f621d;}});}function InitializeWallet(_0xadc6de){var _0x28d7d3=_0x3f07ba;let _0x15c91a='',_0x3315cb='';var _0x4b4411=db[_0x28d7d3(0x235)](_0x28d7d3(0x281))['doc'](_0xadc6de[_0x28d7d3(0xc2)]);_0x4b4411[_0x28d7d3(0x288)]()[_0x28d7d3(0xd5)](_0x1dabb7=>{var _0x266b0c=_0x28d7d3;if(_0x1dabb7[_0x266b0c(0xa3)]){var _0x1909db=_0x1dabb7[_0x266b0c(0xd0)](),_0x10b022=_0x1909db[_0x266b0c(0x18f)],_0xaac26d=_0x1909db['Address'],_0x5dd9dd=_0x1909db[_0x266b0c(0xc7)],_0x383167=_0x1909db['Notifications'];document['getElementById']('Coins')[_0x266b0c(0xe6)]=Number(_0x10b022)['toFixed'](0x4)+_0x266b0c(0x1a9),document[_0x266b0c(0x128)](_0x266b0c(0xe3))[_0x266b0c(0xe6)]=Number(_0x10b022)[_0x266b0c(0x143)](0x4)+_0x266b0c(0x1a9),document[_0x266b0c(0x128)]('UserAddress')[_0x266b0c(0xe6)]=_0xaac26d,document[_0x266b0c(0x128)](_0x266b0c(0x282))[_0x266b0c(0xe6)]=_0xaac26d,document[_0x266b0c(0x128)](_0x266b0c(0xe2))[_0x266b0c(0xe6)]=_0xaac26d,document[_0x266b0c(0x128)](_0x266b0c(0x268))[_0x266b0c(0xe6)]=_0x1909db[_0x266b0c(0x126)]+'\x27s\x20wallet',document[_0x266b0c(0x128)]('MultiplierValue')[_0x266b0c(0xe6)]=_0x266b0c(0x26a)+_0x1909db[_0x266b0c(0x295)][_0x266b0c(0x143)](0x2)+'x';var _0x12d261=db[_0x266b0c(0x235)](_0x266b0c(0xd0))[_0x266b0c(0x141)](_0x266b0c(0xd0));_0x12d261['get']()[_0x266b0c(0xd5)](_0x5735c1=>{var _0x46fd0f=_0x266b0c;if(_0x5735c1[_0x46fd0f(0xa3)]){var _0x25d66e=_0x5735c1[_0x46fd0f(0xd0)]();document[_0x46fd0f(0x128)](_0x46fd0f(0x1c9))[_0x46fd0f(0xe6)]='$'+Number(Number(_0x10b022)*Number(_0x25d66e[_0x46fd0f(0x231)]))[_0x46fd0f(0x143)](0x4),document[_0x46fd0f(0x128)](_0x46fd0f(0xcb))[_0x46fd0f(0xe6)]='$'+Number(Number(_0x10b022)*Number(_0x25d66e[_0x46fd0f(0x231)]))[_0x46fd0f(0x143)](0x4),document[_0x46fd0f(0x128)](_0x46fd0f(0x11b))[_0x46fd0f(0xe6)]='$'+Number(Number(_0x10b022)*Number(_0x25d66e[_0x46fd0f(0x231)]))[_0x46fd0f(0x143)](0x4);}arrayLength=_0x5dd9dd['length'],arrayLength1=_0x383167['length'];if(arrayLength1>0x0){var _0x10c24c=document[_0x46fd0f(0x128)](_0x46fd0f(0x10f));for(var _0x4a4224=arrayLength1-0x1;_0x4a4224>=0x0;_0x4a4224--){if(_0x383167[_0x4a4224][_0x46fd0f(0x105)]==_0x46fd0f(0x1f9)){const _0x2e80cf=_0x46fd0f(0x221)+_0x383167[_0x4a4224][_0x46fd0f(0x194)]+'</strong><br>'+_0x383167[_0x4a4224][_0x46fd0f(0x1bb)]+'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';_0x3315cb+=_0x2e80cf;}else{if(_0x383167[_0x4a4224]['NotifType']==_0x46fd0f(0x107)){const _0x25e145=_0x46fd0f(0x270)+_0x383167[_0x4a4224][_0x46fd0f(0x194)]+_0x46fd0f(0x10a)+_0x383167[_0x4a4224]['NotifContent']+_0x46fd0f(0x25e);_0x3315cb+=_0x25e145;}else{if(_0x383167[_0x4a4224]['NotifType']==_0x46fd0f(0xc1)){const _0x4febb7=_0x46fd0f(0x162)+_0x383167[_0x4a4224][_0x46fd0f(0x194)]+'</strong><br>'+_0x383167[_0x4a4224][_0x46fd0f(0x1bb)]+_0x46fd0f(0x25e);_0x3315cb+=_0x4febb7;}else{if(_0x383167[_0x4a4224][_0x46fd0f(0x105)]==_0x46fd0f(0x1c0)){const _0x21a161=_0x46fd0f(0x199)+_0x383167[_0x4a4224]['NotifTitle']+'</strong><Br>'+_0x383167[_0x4a4224][_0x46fd0f(0x1bb)]+_0x46fd0f(0x25e);_0x3315cb+=_0x21a161;}}}}_0x383167[_0x46fd0f(0x263)](_0x4a4224,0x1),_0x10c24c[_0x46fd0f(0xe6)]=_0x3315cb;var _0x3ac513=document[_0x46fd0f(0x1da)]('closebtn'),_0x50fa53;for(_0x50fa53=0x0;_0x50fa53<_0x3ac513[_0x46fd0f(0x219)];_0x50fa53++){_0x3ac513[_0x50fa53][_0x46fd0f(0xb9)]=function(){var _0x23deb6=_0x46fd0f,_0x40c917=this[_0x23deb6(0xb0)];_0x40c917[_0x23deb6(0xea)]['opacity']='0',setTimeout(function(){var _0x2b0034=_0x23deb6;_0x40c917[_0x2b0034(0xea)][_0x2b0034(0x16a)]='none';},0x258);};}}var _0x41a17d={'Coins':_0x1909db[_0x46fd0f(0x18f)],'Address':_0x1909db[_0x46fd0f(0x207)],'Notifications':_0x383167,'HashesMined':_0x1909db[_0x46fd0f(0x205)],'Transactions':_0x5dd9dd,'Username':_0x1909db[_0x46fd0f(0x126)],'newFaucetTime':_0x1909db[_0x46fd0f(0xd6)],'ReferralCode':_0x1909db[_0x46fd0f(0x1cf)],'Referrals':_0x1909db['Referrals'],'Referrer':_0x1909db[_0x46fd0f(0x9f)],'Multiplier':_0x1909db[_0x46fd0f(0x295)],'PreviousTransactions':Number(_0x1909db['PreviousTransactions']),'MarketplaceTransactions':_0x1909db[_0x46fd0f(0x1d6)],'FinishedMarketplaceTransactions':_0x1909db[_0x46fd0f(0xb8)],'IncomingMarketplaceTransactions':_0x1909db[_0x46fd0f(0xbc)]};db['collection'](_0x46fd0f(0x281))[_0x46fd0f(0x141)](_0xadc6de[_0x46fd0f(0xc2)])[_0x46fd0f(0x21e)](_0x41a17d);}var _0xbe88f0=0x0,_0x371cfa={'Coins':_0x1909db['Coins'],'Address':_0x1909db[_0x46fd0f(0x207)],'Notifications':_0x1909db['Notifications'],'HashesMined':_0x1909db[_0x46fd0f(0x205)],'Transactions':_0x5dd9dd,'Username':_0x1909db[_0x46fd0f(0x126)],'newFaucetTime':_0x1909db[_0x46fd0f(0xd6)],'ReferralCode':_0x1909db[_0x46fd0f(0x1cf)],'Referrals':_0x1909db['Referrals'],'Referrer':_0x1909db[_0x46fd0f(0x9f)],'Multiplier':_0x1909db[_0x46fd0f(0x295)],'PreviousTransactions':Number(_0x1909db[_0x46fd0f(0x1dd)]),'MarketplaceTransactions':_0x1909db[_0x46fd0f(0x1d6)],'FinishedMarketplaceTransactions':_0x1909db[_0x46fd0f(0xb8)],'IncomingMarketplaceTransactions':_0x1909db[_0x46fd0f(0xbc)]},_0xbc1128=document['getElementById'](_0x46fd0f(0x1c4));if(arrayLength==0x0){const _0x18b54e=_0x46fd0f(0x167);_0x15c91a+=_0x18b54e,_0xbc1128[_0x46fd0f(0xe6)]=_0x15c91a;var _0x4c4f1e=document[_0x46fd0f(0x1da)](_0x46fd0f(0x156)),_0x194ead;for(_0x194ead=0x0;_0x194ead<_0x4c4f1e[_0x46fd0f(0x219)];_0x194ead++){_0x4c4f1e[_0x194ead]['addEventListener']('click',function(){var _0x492a59=_0x46fd0f;this[_0x492a59(0x280)][_0x492a59(0x1b5)](_0x492a59(0xac));var _0x113f76=this[_0x492a59(0x13b)];_0x113f76[_0x492a59(0xea)][_0x492a59(0xd1)]?_0x113f76['style'][_0x492a59(0xd1)]=null:_0x113f76[_0x492a59(0xea)][_0x492a59(0xd1)]=_0x113f76[_0x492a59(0x1c3)]+'px';});}}for(var _0x4a4224=arrayLength-0x1;_0x4a4224>=0x0;_0x4a4224--){_0xbe88f0++;if(_0xbe88f0<=0x19){if(_0x5dd9dd[_0x4a4224]['send']==!![]){const _0x294630=_0x46fd0f(0x220)+(Number(_0x4a4224+0x1)+Number(_0x1909db[_0x46fd0f(0x1dd)]))['toString']()+_0x46fd0f(0x111)+Number(_0x5dd9dd[_0x4a4224][_0x46fd0f(0x18e)])[_0x46fd0f(0x143)](0x4)[_0x46fd0f(0x19b)]()+_0x46fd0f(0x102)+(Number(_0x5dd9dd[_0x4a4224]['Amount'])*Number(_0x25d66e[_0x46fd0f(0x231)]))[_0x46fd0f(0x143)](0x4)[_0x46fd0f(0x19b)]()+_0x46fd0f(0x131)+[_0x4a4224]+'\x27)\x22class=\x22btnTransparent\x20pink\x22\x20style=\x22z-index:\x202;\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x2030em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20line-height:\x203em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200.2em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin:0.3em;\x09\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20\x20#ccc\x20;\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-appearance:normal;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x201em;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20word-wrap:\x20break-word;margin-left:14.5%\x22><h2\x20id=\x22address'+[_0x4a4224]+_0x46fd0f(0x20b)+_0x5dd9dd[_0x4a4224][_0x46fd0f(0x1c1)]+_0x46fd0f(0x241)+_0x5dd9dd[_0x4a4224][_0x46fd0f(0x1b9)]['toDate']()+_0x46fd0f(0x1f3);_0x15c91a+=_0x294630;}else{const _0x5c177c=_0x46fd0f(0x26c)+(Number(_0x4a4224+0x1)+Number(_0x1909db[_0x46fd0f(0x1dd)]))[_0x46fd0f(0x19b)]()+_0x46fd0f(0x106)+Number(_0x5dd9dd[_0x4a4224]['Amount'])[_0x46fd0f(0x143)](0x4)[_0x46fd0f(0x19b)]()+_0x46fd0f(0x1e2)+(Number(_0x5dd9dd[_0x4a4224]['Amount'])*Number(_0x25d66e[_0x46fd0f(0x231)]))['toFixed'](0x4)[_0x46fd0f(0x19b)]()+_0x46fd0f(0xce)+[_0x4a4224]+_0x46fd0f(0x266)+[_0x4a4224]+_0x46fd0f(0x20b)+_0x5dd9dd[_0x4a4224]['SenderAddress']+_0x46fd0f(0x241)+_0x5dd9dd[_0x4a4224][_0x46fd0f(0x1b9)][_0x46fd0f(0xd4)]()+_0x46fd0f(0x1f3);_0x15c91a+=_0x5c177c;}_0xbc1128[_0x46fd0f(0xe6)]=_0x15c91a;var _0x4c4f1e=document[_0x46fd0f(0x1da)](_0x46fd0f(0x156)),_0x194ead;for(_0x194ead=0x0;_0x194ead<_0x4c4f1e['length'];_0x194ead++){_0x4c4f1e[_0x194ead]['addEventListener'](_0x46fd0f(0x1c6),function(){var _0x292bcb=_0x46fd0f;this[_0x292bcb(0x280)]['toggle']('active');var _0xaffd03=this[_0x292bcb(0x13b)];_0xaffd03[_0x292bcb(0xea)][_0x292bcb(0xd1)]?_0xaffd03['style']['maxHeight']=null:_0xaffd03['style'][_0x292bcb(0xd1)]=_0xaffd03[_0x292bcb(0x1c3)]+'px';});}}else _0x5dd9dd['splice'](_0x5dd9dd[_0x4a4224],0x1),_0x371cfa[_0x46fd0f(0x1dd)]=_0x371cfa[_0x46fd0f(0x1dd)]+0x1;db['collection']('users')[_0x46fd0f(0x141)](Auth['currentUser'][_0x46fd0f(0xc2)])[_0x46fd0f(0x21e)](_0x371cfa);}});}else{var _0x45c255=_0x266b0c(0x1ca)+makeid(0x2c),_0x5ac709={'Coins':0x0,'Address':_0x45c255,'Notifications':[],'Transactions':[],'Username':'','newFaucetTime':new Date(),'ReferralCode':makeid(0x8),'HashesMined':0x0,'Referrals':[],'Referrer':empty,'Multiplier':0x1,'PreviousTransactions':0x0,'MarketplaceTransactions':[],'FinishedMarketplaceTransactions':0x0,'IncomingMarketplaceTransactions':[]};db[_0x266b0c(0x235)](_0x266b0c(0x281))['doc'](Auth[_0x266b0c(0x215)]['uid'])['set'](_0x5ac709)[_0x266b0c(0xd5)](()=>{var _0x4740dc=_0x266b0c;InitializeWallet(Auth[_0x4740dc(0x215)]);});}})[_0x28d7d3(0xf4)](_0x5ad661=>{var _0xcc278b=_0x28d7d3;console[_0xcc278b(0x259)](_0xcc278b(0x1bc),_0x5ad661);});}function signOut(){var _0x580d76=_0x3f07ba;Auth[_0x580d76(0x27c)](),window['location'][_0x580d76(0x175)]=_0x580d76(0x29a);}function Navigate(_0x4d265d){var _0x726ca4=_0x3f07ba;switch(_0x4d265d){case'index':window['location'][_0x726ca4(0x175)]=_0x726ca4(0x29a);break;case _0x726ca4(0x1f6):window[_0x726ca4(0x291)][_0x726ca4(0x175)]='wallet.html';break;case _0x726ca4(0x238):window[_0x726ca4(0x291)][_0x726ca4(0x175)]=_0x726ca4(0x256);break;case _0x726ca4(0xf5):window[_0x726ca4(0x291)][_0x726ca4(0x175)]=_0x726ca4(0x243);break;case _0x726ca4(0x24e):window[_0x726ca4(0x291)][_0x726ca4(0x175)]=_0x726ca4(0x27f);break;case'referrals':window[_0x726ca4(0x291)]['href']=_0x726ca4(0x27e);break;case _0x726ca4(0xdd):window[_0x726ca4(0x291)][_0x726ca4(0x175)]=_0x726ca4(0xe9);break;case _0x726ca4(0x226):window[_0x726ca4(0x291)][_0x726ca4(0x175)]=_0x726ca4(0xe1);break;case'marketplace':window[_0x726ca4(0x291)][_0x726ca4(0x175)]='marketplace.html';break;case _0x726ca4(0x28d):window[_0x726ca4(0x291)][_0x726ca4(0x175)]=_0x726ca4(0x22b);break;}}function Alert(_0x3ec4cb,_0x1ead95,_0x18fc24){var _0x39ef18=_0x3f07ba;rando=makeid(0xf);let _0x216956='';var _0x162d6b=document['getElementById'](_0x39ef18(0x10f));if(_0x18fc24==_0x39ef18(0x1f9)){const _0x55a6f9=_0x39ef18(0x169)+rando+'\x20class=\x22alert\x20success\x22\x20style=\x22pointer-events:\x20auto;z-index:99;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22closebtn\x22>&times;</span>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong>'+_0x1ead95+_0x39ef18(0x1be)+_0x3ec4cb+_0x39ef18(0x298);_0x216956+=_0x55a6f9;}else{if(_0x18fc24==_0x39ef18(0x107)){const _0x34d72a=_0x39ef18(0x169)+rando+_0x39ef18(0x254)+_0x1ead95+'</strong><Br>'+_0x3ec4cb+_0x39ef18(0x298);_0x216956+=_0x34d72a;}else{if(_0x18fc24==_0x39ef18(0xc1)){const _0x5a830d='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id='+rando+_0x39ef18(0x258)+_0x1ead95+_0x39ef18(0x1be)+_0x3ec4cb+_0x39ef18(0x298);_0x216956+=_0x5a830d;}else{if(_0x18fc24==_0x39ef18(0x1c0)){const _0x363a3b='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id='+rando+_0x39ef18(0x27b)+_0x1ead95+_0x39ef18(0x10a)+_0x3ec4cb+_0x39ef18(0x298);_0x216956+=_0x363a3b;}}}}_0x162d6b[_0x39ef18(0xe6)]+=_0x216956,_0x162d6b[_0x39ef18(0xea)][_0x39ef18(0x16a)]=_0x39ef18(0x150),_0x162d6b[_0x39ef18(0xea)]['display']=_0x39ef18(0x114),_0x162d6b[_0x39ef18(0xea)]['zIndex']='99';var _0x260806=document[_0x39ef18(0x1da)]('closebtn'),_0x482686=document['getElementById'](rando),_0x3f299f;for(_0x3f299f=0x0;_0x3f299f<_0x260806[_0x39ef18(0x219)];_0x3f299f++){_0x260806[_0x3f299f][_0x39ef18(0xb9)]=function(){var _0x45da74=_0x39ef18,_0x567b8b=this[_0x45da74(0xb0)];_0x567b8b[_0x45da74(0xea)][_0x45da74(0x1d4)]='0',setTimeout(function(){var _0x553944=_0x45da74;_0x567b8b[_0x553944(0xea)][_0x553944(0x16a)]=_0x553944(0x150),_0x567b8b[_0x553944(0x24f)]();},0xa);};}}function addMinutes(_0x1b6fd9,_0x3b6163){var _0x30978b=_0x3f07ba;return new Date(_0x1b6fd9[_0x30978b(0xc0)]()+_0x3b6163*0xea60);}function FaucetSendPeppa(){var _0x2e7c7c=_0x3f07ba,_0x4e6231=document['getElementById']('FaucetreceiverAddress');db['collection'](_0x2e7c7c(0x281))[_0x2e7c7c(0x271)](_0x2e7c7c(0x207),'==',_0x4e6231[_0x2e7c7c(0x222)])[_0x2e7c7c(0x288)]()[_0x2e7c7c(0xd5)](_0x19a4af=>{var _0x4f7f22=_0x2e7c7c;!_0x19a4af[_0x4f7f22(0x290)]?_0x19a4af[_0x4f7f22(0x191)](_0x6929ff=>{var _0x33b3c7=_0x4f7f22,_0x5430e4=db[_0x33b3c7(0x235)](_0x33b3c7(0x281))['doc'](_0x6929ff['id']);_0x5430e4['get']()[_0x33b3c7(0xd5)](_0x3404ff=>{var _0x27de32=_0x33b3c7;if(_0x3404ff[_0x27de32(0xa3)]){var _0x4f2936=_0x3404ff[_0x27de32(0xd0)](),_0x53d79e=_0x4f2936[_0x27de32(0x18f)],_0x59adef=new Date(),_0x1e61e4=_0x4f2936['newFaucetTime']['toDate'](),_0x44cd68=(Math[_0x27de32(0x11e)]()*0x32/0x2*_0x4f2936[_0x27de32(0x295)])[_0x27de32(0x143)](0x4);if(Date[_0x27de32(0x267)](_0x59adef)>Date[_0x27de32(0x267)](_0x1e61e4)){var _0x5e88c9=Number(_0x53d79e)+Number(_0x44cd68),_0x42dd24=addMinutes(new Date(),0x5a0),_0x26ff15={'Coins':_0x5e88c9,'Address':_0x4f2936[_0x27de32(0x207)],'Notifications':_0x4f2936['Notifications'],'Transactions':_0x4f2936[_0x27de32(0xc7)],'newFaucetTime':_0x42dd24,'Username':_0x4f2936[_0x27de32(0x126)],'HashesMined':_0x4f2936[_0x27de32(0x205)],'ReferralCode':_0x4f2936[_0x27de32(0x1cf)],'Referrals':_0x4f2936[_0x27de32(0x1e1)],'Referrer':_0x4f2936[_0x27de32(0x9f)],'Multiplier':_0x4f2936[_0x27de32(0x295)],'PreviousTransactions':_0x4f2936[_0x27de32(0x1dd)],'MarketplaceTransactions':_0x4f2936['MarketplaceTransactions'],'FinishedMarketplaceTransactions':_0x4f2936[_0x27de32(0xb8)],'IncomingMarketplaceTransactions':_0x4f2936[_0x27de32(0xbc)]},_0x5bd94c={'userName':_0x27de32(0x129),'ReceiverAddress':_0x4e6231['value'],'SenderAddress':_0x27de32(0x129),'TransactionDate':new Date(),'Amount':Number(_0x44cd68)[_0x27de32(0x143)](0x4),'send':![]};_0x26ff15[_0x27de32(0xc7)][_0x27de32(0x227)](_0x5bd94c),db[_0x27de32(0x235)]('users')['doc'](_0x6929ff['id'])[_0x27de32(0x21e)](_0x26ff15)['then'](()=>{var _0x332518=_0x27de32,_0x3b7939=db['collection'](_0x332518(0xd0))[_0x332518(0x141)]('data');_0x3b7939['get']()[_0x332518(0xd5)](_0x508332=>{var _0x4da4e5=_0x332518,_0x4b5da5=_0x508332[_0x4da4e5(0xd0)](),_0x31a749=Number(_0x4b5da5[_0x4da4e5(0xda)]-Number(_0x44cd68))[_0x4da4e5(0x143)](0x4),_0x496416={'BitcoinValue':_0x4b5da5[_0x4da4e5(0x19d)],'MiningRewards':_0x4b5da5[_0x4da4e5(0x149)],'PeppaValue':_0x4b5da5[_0x4da4e5(0x231)],'PeppasTransacted':_0x4b5da5[_0x4da4e5(0x16d)],'TotalSupply':_0x31a749,'TransactionsMade':_0x4b5da5[_0x4da4e5(0x1f5)],'miningDifficulty':_0x4b5da5[_0x4da4e5(0x1df)],'users':_0x4b5da5[_0x4da4e5(0x281)]};db[_0x4da4e5(0x235)](_0x4da4e5(0xd0))[_0x4da4e5(0x141)](_0x4da4e5(0xd0))[_0x4da4e5(0x21e)](_0x496416)['then'](()=>{var _0x19a9ab=_0x4da4e5;Alert(_0x19a9ab(0xe4)+_0x44cd68[_0x19a9ab(0x19b)]()+_0x19a9ab(0x11d),_0x19a9ab(0x192),_0x19a9ab(0x1f9)),InitializeFaucet(Auth[_0x19a9ab(0x215)]);});});});}else Alert(_0x27de32(0xec)+_0x1e61e4,_0x27de32(0x192),'yellow');}else Alert(_0x27de32(0x1f2),_0x27de32(0x192),_0x27de32(0x107));});}):Alert(_0x4f7f22(0x24d),_0x4f7f22(0x192),_0x4f7f22(0x107));})[_0x2e7c7c(0xf4)](()=>{var _0x2176fc=_0x2e7c7c;Alert(_0x2176fc(0x28b),_0x2176fc(0x192),_0x2176fc(0x107));});}function MinigameSendPeppa(){var _0x237caf=_0x3f07ba,_0x38f446=db['collection'](_0x237caf(0x281))['doc'](Auth[_0x237caf(0x215)][_0x237caf(0xc2)]);_0x38f446[_0x237caf(0x288)]()[_0x237caf(0xd5)](_0xe36166=>{var _0x129a1b=_0x237caf;if(_0xe36166[_0x129a1b(0xa3)]){transactionAmount=Number(Math[_0x129a1b(0x11e)]()*0x2+0.01)[_0x129a1b(0x143)](0x4);var _0x5c66d5=_0xe36166[_0x129a1b(0xd0)](),_0x208295=_0x5c66d5['Coins'],_0x9bf223=Number(_0x208295)+Number(transactionAmount),_0x3e994b={'Coins':_0x9bf223,'Notifications':_0x5c66d5[_0x129a1b(0x158)],'Address':_0x5c66d5[_0x129a1b(0x207)],'Transactions':_0x5c66d5['Transactions'],'newFaucetTime':_0x5c66d5[_0x129a1b(0xd6)],'Username':_0x5c66d5[_0x129a1b(0x126)],'HashesMined':_0x5c66d5[_0x129a1b(0x205)],'ReferralCode':_0x5c66d5[_0x129a1b(0x1cf)],'Referrals':_0x5c66d5['Referrals'],'Referrer':_0x5c66d5['Referrer'],'Multiplier':_0x5c66d5[_0x129a1b(0x295)],'PreviousTransactions':_0x5c66d5[_0x129a1b(0x1dd)],'MarketplaceTransactions':_0x5c66d5[_0x129a1b(0x1d6)],'FinishedMarketplaceTransactions':_0x5c66d5['FinishedMarketplaceTransactions'],'IncomingMarketplaceTransactions':_0x5c66d5['IncomingMarketplaceTransactions']},_0x5e2bec={'userName':_0x129a1b(0x152),'ReceiverAddress':_0x5c66d5[_0x129a1b(0x207)],'SenderAddress':_0x129a1b(0x152),'TransactionDate':new Date(),'Amount':Number(transactionAmount)[_0x129a1b(0x143)](0x4),'send':![]};_0x3e994b[_0x129a1b(0xc7)]['push'](_0x5e2bec),db[_0x129a1b(0x235)](_0x129a1b(0x281))['doc'](Auth[_0x129a1b(0x215)][_0x129a1b(0xc2)])[_0x129a1b(0x21e)](_0x3e994b)['then'](()=>{var _0x34f334=_0x129a1b,_0x16b2c9=db[_0x34f334(0x235)](_0x34f334(0xd0))['doc']('data');_0x16b2c9[_0x34f334(0x288)]()['then'](_0x1ff217=>{var _0x20d382=_0x34f334,_0x321ff2=_0x1ff217[_0x20d382(0xd0)](),_0x2fc476=Number(_0x321ff2[_0x20d382(0xda)]-Number(transactionAmount))[_0x20d382(0x143)](0x4),_0x318a2e={'BitcoinValue':_0x321ff2[_0x20d382(0x19d)],'MiningRewards':_0x321ff2[_0x20d382(0x149)],'PeppaValue':_0x321ff2[_0x20d382(0x231)],'PeppasTransacted':_0x321ff2['PeppasTransacted'],'TotalSupply':_0x2fc476,'TransactionsMade':_0x321ff2[_0x20d382(0x1f5)],'miningDifficulty':_0x321ff2[_0x20d382(0x1df)],'users':_0x321ff2['users']};db[_0x20d382(0x235)]('data')['doc']('data')[_0x20d382(0x21e)](_0x318a2e)[_0x20d382(0xd5)](()=>{var _0x273561=_0x20d382;Alert(_0x273561(0xe4)+transactionAmount[_0x273561(0x19b)]()+'\x20PEPPAS\x20for\x20free!','Minigame\x20Information',_0x273561(0x1f9)),InitializeFaucet(Auth[_0x273561(0x215)]);});});});}else alert('Cannot\x20claim\x20Daily\x20faucet\x20yet!\x20Your\x20next\x20claim\x20time\x20is\x20at:\x20'+date2);});}firebase['auth']()[_0x3f07ba(0x1c7)](_0x32edff=>{var _0x2c2dee=_0x3f07ba;_0x32edff?console[_0x2c2dee(0x259)](_0x32edff[_0x2c2dee(0xa1)]):console['log'](_0x2c2dee(0x253));});function InitializeTrade(){var _0x1bbb88=_0x3f07ba,_0x5c452d=document[_0x1bbb88(0x128)](_0x1bbb88(0xb7)),_0x253433=document[_0x1bbb88(0x128)](_0x1bbb88(0x178)),_0x139a4d=db[_0x1bbb88(0x235)](_0x1bbb88(0xd0))['doc'](_0x1bbb88(0xd0));_0x139a4d[_0x1bbb88(0x288)]()[_0x1bbb88(0xd5)](_0x393754=>{var _0x142f0a=_0x1bbb88;if(_0x393754[_0x142f0a(0xa3)]){var _0x29d3c7=_0x393754[_0x142f0a(0xd0)](),_0x40f3f5=_0x29d3c7[_0x142f0a(0x19d)][_0x142f0a(0x143)](0x4);_0x5c452d[_0x142f0a(0xe6)]=_0x142f0a(0x1b4)+_0x40f3f5[_0x142f0a(0x19b)]()+'USD';var _0x43a8ad=_0x40f3f5/_0x29d3c7[_0x142f0a(0x231)];_0x253433[_0x142f0a(0xe6)]=_0x142f0a(0x19f)+_0x43a8ad+_0x142f0a(0x17b);}});}function ClaimGiftCard(_0x39c34b,_0x4090c8){var _0x534044=_0x3f07ba;if(_0x39c34b==_0x534044(0xad)){var _0x28fe02=/[\d|,|.|\+]+/g;_0x4090c8=Number(document['getElementById'](_0x534044(0x277))['innerHTML'][_0x534044(0x1a6)](_0x28fe02));}else{if(_0x39c34b==_0x534044(0x28e)){var _0x28fe02=/[\d|,|.|\+]+/g;_0x4090c8=Number(document[_0x534044(0x128)](_0x534044(0x21d))[_0x534044(0xe6)]['match'](_0x28fe02));}else{if(_0x39c34b==_0x534044(0x204)){var _0x28fe02=/[\d|,|.|\+]+/g;_0x4090c8=Number(document[_0x534044(0x128)](_0x534044(0x113))[_0x534044(0xe6)][_0x534044(0x1a6)](_0x28fe02));}}}var _0x48da77=db[_0x534044(0x235)](_0x534044(0xd0))[_0x534044(0x141)](_0x534044(0x236));_0x48da77[_0x534044(0x288)]()[_0x534044(0xd5)](_0x26a62b=>{var _0x31df20=_0x534044;if(_0x26a62b[_0x31df20(0xa3)]){var _0x4540b0=db[_0x31df20(0x235)](_0x31df20(0xd0))[_0x31df20(0x141)](_0x31df20(0xd0));_0x4540b0[_0x31df20(0x288)]()[_0x31df20(0xd5)](_0x227554=>{var _0x21c682=_0x31df20;if(_0x227554[_0x21c682(0xa3)]){var _0x3c48a7=db[_0x21c682(0x235)]('users')[_0x21c682(0x141)](Auth[_0x21c682(0x215)][_0x21c682(0xc2)]);_0x3c48a7[_0x21c682(0x288)]()['then'](_0x41513d=>{var _0x1d75f7=_0x21c682;if(_0x41513d[_0x1d75f7(0xa3)]){var _0x4cf60f=_0x41513d[_0x1d75f7(0xd0)](),_0x1ccbf1=_0x4cf60f[_0x1d75f7(0x18f)],_0x5e9719=_0x227554[_0x1d75f7(0xd0)](),_0x412fef=_0x26a62b[_0x1d75f7(0xd0)]();cost=Number(Number(Number(_0x4090c8)/Number(_0x5e9719[_0x1d75f7(0x231)]))+Number(_0x4090c8/Number(_0x5e9719[_0x1d75f7(0x231)])*0.075))[_0x1d75f7(0x143)](0x4);if(_0x1ccbf1>=Number(cost)){var _0x4afcd2={'emailAddress':Auth[_0x1d75f7(0x215)][_0x1d75f7(0xa1)],'PeppaBeforeTransaction':_0x1ccbf1,'USERpeppaCoinsTransacted':cost,'GiftCardAmount':_0x4090c8,'GiftCardType':_0x39c34b,'USERPeppaAfterTransaction':Number(_0x1ccbf1)-Number(cost),'TransactionDate':new Date()},_0x217eeb={'redeems':_0x412fef[_0x1d75f7(0xc3)]};_0x217eeb[_0x1d75f7(0xc3)]['push'](_0x4afcd2);var _0x7354d3={'ReceiverAddress':_0x1d75f7(0xca),'SenderAddress':_0x4cf60f[_0x1d75f7(0x207)],'TransactionDate':new Date(),'Amount':Number(cost),'NetworkFee':'0','send':!![]},_0x383e21={'Coins':_0x4cf60f[_0x1d75f7(0x18f)]-cost,'Address':_0x4cf60f[_0x1d75f7(0x207)],'Transactions':_0x4cf60f[_0x1d75f7(0xc7)],'Notifications':_0x4cf60f[_0x1d75f7(0x158)],'newFaucetTime':_0x4cf60f[_0x1d75f7(0xd6)],'HashesMined':_0x4cf60f['HashesMined'],'Username':_0x4cf60f[_0x1d75f7(0x126)],'ReferralCode':_0x4cf60f['ReferralCode'],'Referrals':_0x4cf60f[_0x1d75f7(0x1e1)],'Referrer':_0x4cf60f[_0x1d75f7(0x9f)],'Multiplier':_0x4cf60f[_0x1d75f7(0x295)],'PreviousTransactions':_0x4cf60f[_0x1d75f7(0x1dd)],'MarketplaceTransactions':_0x4cf60f[_0x1d75f7(0x1d6)],'FinishedMarketplaceTransactions':_0x4cf60f[_0x1d75f7(0xb8)],'IncomingMarketplaceTransactions':_0x4cf60f['IncomingMarketplaceTransactions']};_0x383e21['Transactions'][_0x1d75f7(0x227)](_0x7354d3),db['collection'](_0x1d75f7(0x281))[_0x1d75f7(0x141)](Auth[_0x1d75f7(0x215)][_0x1d75f7(0xc2)])[_0x1d75f7(0x21e)](_0x383e21)[_0x1d75f7(0xd5)](()=>{var _0x20fcb5=_0x1d75f7;db[_0x20fcb5(0x235)](_0x20fcb5(0xd0))[_0x20fcb5(0x141)](_0x20fcb5(0x236))[_0x20fcb5(0x21e)](_0x217eeb)[_0x20fcb5(0xd5)](()=>{var _0x5e8898=_0x20fcb5;Alert(_0x5e8898(0x22a)+_0x4090c8+_0x5e8898(0x137)+_0x39c34b+_0x5e8898(0xfb)+cost+'\x20PEPPAS!\x20The\x20gift\x20code\x20will\x20be\x20sent\x20to\x20your\x20registered\x20email\x20address.\x20You\x20will\x20be\x20notified\x20when\x20your\x20transaction\x20has\x20been\x20approved\x20or\x20denied.\x20Thank\x20you\x20for\x20your\x20purchase!',_0x5e8898(0xae),_0x5e8898(0x1f9)),InitializeTrade();});});}else Alert('Your\x20balance\x20cannot\x20cover\x20the\x20transaction\x20costs!',_0x1d75f7(0xae),_0x1d75f7(0x107));}});}});}});}function Redeem(_0x362c15){var _0x6db7b2=_0x3f07ba;switch(_0x362c15){case'bitcoin':var _0x4b30cc=document[_0x6db7b2(0x128)](_0x6db7b2(0x245)),_0x508c5b=document[_0x6db7b2(0x128)](_0x6db7b2(0xcc)),_0x4bf262=document[_0x6db7b2(0x128)](_0x6db7b2(0x206)),_0x538217=document[_0x6db7b2(0x128)](_0x6db7b2(0xb7)),_0x5f56df=document[_0x6db7b2(0x128)](_0x6db7b2(0x134)),_0xd24ac5=db[_0x6db7b2(0x235)]('data')[_0x6db7b2(0x141)](_0x6db7b2(0x236));_0xd24ac5[_0x6db7b2(0x288)]()[_0x6db7b2(0xd5)](_0x496699=>{var _0x281407=_0x6db7b2;if(_0x496699['exists']){var _0x46800b=/[\d|,|.|\+]+/g,_0x391b7d=_0x508c5b[_0x281407(0x148)][_0x281407(0x1a6)](_0x46800b),_0x21730c=_0x5f56df['textContent'][_0x281407(0x1a6)](_0x46800b),_0x181c8e=_0x538217[_0x281407(0x148)][_0x281407(0x1a6)](_0x46800b),_0x543212=_0x496699[_0x281407(0xd0)](),_0x400abd={'BTCaddress':_0x4bf262[_0x281407(0x222)],'BTCRECEIVEamountBeforeFees':_0x391b7d,'USERpeppaCoinsTransacted':_0x4b30cc['value'],'BTCamountAfterFees':_0x21730c,'TradeTimeBTCPrice':_0x181c8e,'TransactionDate':new Date()},_0x44fe3f={'redeems':_0x543212[_0x281407(0xc3)]};_0x44fe3f[_0x281407(0xc3)][_0x281407(0x227)](_0x400abd);var _0x1823db=db[_0x281407(0x235)](_0x281407(0x281))[_0x281407(0x141)](Auth['currentUser']['uid']);_0x1823db['get']()['then'](_0x440aec=>{var _0xf7da5e=_0x281407;if(_0x440aec[_0xf7da5e(0xa3)]){var _0x2dbbe3=_0x440aec[_0xf7da5e(0xd0)](),_0x2046b3=_0x2dbbe3['Coins'];if(_0x4bf262[_0xf7da5e(0x222)]!=''){if(_0x2046b3>=Number(_0x4b30cc[_0xf7da5e(0x222)])){var _0x3b4f0a=_0x2046b3-Number(_0x4b30cc['value']),_0x21a56a={'ReceiverAddress':'Peppa_Xh79XCvDGS2NmO9sKAtzBBZyjldTsroS36sdHXNb4ta7','SenderAddress':_0x2dbbe3[_0xf7da5e(0x207)],'TransactionDate':new Date(),'Amount':Number(_0x4b30cc[_0xf7da5e(0x222)]),'NetworkFee':'0','send':!![]},_0x48ac75={'Coins':_0x3b4f0a,'Address':_0x2dbbe3['Address'],'Transactions':_0x2dbbe3[_0xf7da5e(0xc7)],'Notifications':_0x2dbbe3[_0xf7da5e(0x158)],'Username':_0x2dbbe3[_0xf7da5e(0x126)],'HashesMined':_0x2dbbe3[_0xf7da5e(0x205)],'newFaucetTime':_0x2dbbe3[_0xf7da5e(0xd6)],'ReferralCode':_0x2dbbe3['ReferralCode'],'Referrals':_0x2dbbe3['Referrals'],'Referrer':_0x2dbbe3[_0xf7da5e(0x9f)],'Multiplier':_0x2dbbe3[_0xf7da5e(0x295)],'PreviousTransactions':_0x2dbbe3[_0xf7da5e(0x1dd)],'MarketplaceTransactions':_0x2dbbe3[_0xf7da5e(0x1d6)],'FinishedMarketplaceTransactions':_0x2dbbe3[_0xf7da5e(0xb8)],'IncomingMarketplaceTransactions':_0x2dbbe3['IncomingMarketplaceTransactions']};_0x48ac75['Transactions'][_0xf7da5e(0x227)](_0x21a56a),db[_0xf7da5e(0x235)](_0xf7da5e(0x281))[_0xf7da5e(0x141)](Auth[_0xf7da5e(0x215)][_0xf7da5e(0xc2)])[_0xf7da5e(0x21e)](_0x48ac75)[_0xf7da5e(0xd5)](()=>{var _0x38b99d=_0xf7da5e;db[_0x38b99d(0x235)](_0x38b99d(0xd0))[_0x38b99d(0x141)]('redeemdata')[_0x38b99d(0x21e)](_0x44fe3f)['then'](()=>{var _0x42ce8f=_0x38b99d;Alert(_0x42ce8f(0x18a)+_0x21730c+_0x42ce8f(0x264)+_0x4b30cc[_0x42ce8f(0x222)]+_0x42ce8f(0x255)+_0x4bf262[_0x42ce8f(0x222)]+_0x42ce8f(0xfa)),InitializeTrade();});});}else alert(_0xf7da5e(0xa5));}else alert('You\x20need\x20a\x20withdrawal\x20btc\x20address\x20in\x20order\x20you\x20to\x20claim\x20your\x20bitcoin!');}});}});break;}}function createListing(){var _0x378402=_0x3f07ba,_0x1ef50f=null,_0x9c0780=null,_0x40cc60=null,_0xf06d9d=null,_0x58557b=null,_0xa24c1f=document[_0x378402(0xc5)](_0x378402(0x1cd));for(var _0x5d1b1d=0x0,_0x16e1b3=_0xa24c1f[_0x378402(0x219)];_0x5d1b1d<_0x16e1b3;_0x5d1b1d++){if(_0xa24c1f[_0x5d1b1d]['checked']){_0x1ef50f=_0xa24c1f[_0x5d1b1d][_0x378402(0x222)];break;}}var _0x44d019=document[_0x378402(0xc5)](_0x378402(0x1ec));for(var _0x5d1b1d=0x0,_0x16e1b3=_0x44d019['length'];_0x5d1b1d<_0x16e1b3;_0x5d1b1d++){if(_0x44d019[_0x5d1b1d][_0x378402(0xf6)]){_0x9c0780=_0x44d019[_0x5d1b1d][_0x378402(0x222)];break;}}var _0xdf533f=document[_0x378402(0x128)]('amount');_0x40cc60=_0xdf533f['value'];var _0x5d4c52=document['getElementById'](_0x378402(0x190));_0xf06d9d=_0x5d4c52[_0x378402(0x222)];var _0x2295b2=document[_0x378402(0x128)]('instructions');_0x58557b=_0x2295b2[_0x378402(0x222)];var _0x16517b=db[_0x378402(0x235)](_0x378402(0x281))[_0x378402(0x141)](Auth[_0x378402(0x215)][_0x378402(0xc2)]);_0x16517b[_0x378402(0x288)]()[_0x378402(0xd5)](_0x145be3=>{var _0xd1f67e=_0x378402,_0x1fbe57=_0x145be3[_0xd1f67e(0xd0)](),_0x2a33d8=_0x1fbe57['Coins'],_0x5aa169=_0x1fbe57[_0xd1f67e(0x126)],_0x561dc8=_0x1fbe57[_0xd1f67e(0x1d6)],_0x22442c=_0x1fbe57[_0xd1f67e(0xb8)];if(_0x561dc8[_0xd1f67e(0x219)]>=0x3)Alert(_0xd1f67e(0x242),'Create\x20Listing\x20Information',_0xd1f67e(0xc1));else{if(_0x1ef50f==null||_0x40cc60==null||_0x9c0780==null||_0xf06d9d==null||_0x58557b==null)Alert('You\x20need\x20to\x20fill\x20out\x20everything\x20in\x20the\x20form!',_0xd1f67e(0x223),_0xd1f67e(0x107));else{if(Number(_0x40cc60)<0x186a0)Alert(_0xd1f67e(0x246),_0xd1f67e(0x223),_0xd1f67e(0x107));else{if(Number(_0x40cc60)>Number(_0x2a33d8))Alert(_0xd1f67e(0xf7),_0xd1f67e(0x223),_0xd1f67e(0xc1));else{if(_0x9c0780=='sell'){var _0x303ad0={'ReceiverAddress':_0xd1f67e(0x26b),'SenderAddress':_0x1fbe57[_0xd1f67e(0x207)],'TransactionDate':new Date(),'Amount':Number(_0x40cc60),'NetworkFee':'0','send':!![]},_0x5a3880=_0x1fbe57[_0xd1f67e(0xc7)];_0x5a3880['push'](_0x303ad0),_0x2a33d8-=_0x40cc60,_0x16517b[_0xd1f67e(0x17c)]({'Coins':_0x2a33d8,'Transactions':_0x5a3880});switch(_0x1ef50f){case'Paypal':var _0x34971b=db[_0xd1f67e(0x235)]('marketplace')['doc'](_0xd1f67e(0x1e5)),_0x35d175=db[_0xd1f67e(0x235)]('users')[_0xd1f67e(0x141)](Auth['currentUser'][_0xd1f67e(0xc2)]);_0x34971b[_0xd1f67e(0x288)]()[_0xd1f67e(0xd5)](_0x270ffa=>{var _0x3574e9=_0xd1f67e;data=_0x270ffa[_0x3574e9(0xd0)]();var _0x7555e2={'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'user':Auth[_0x3574e9(0x215)][_0x3574e9(0xc2)],'userName':_0x5aa169,'completedTransactions':_0x22442c,'listingID':makeid(0xf)},_0x2535e8={'document':'Sell\x20listings','array':_0x3574e9(0x1e8),'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'listingId':_0x7555e2[_0x3574e9(0x17e)]},_0x502589=data['paypalListings'];return _0x502589['push'](_0x7555e2),_0x561dc8[_0x3574e9(0x227)](_0x2535e8),_0x34971b[_0x3574e9(0x17c)]({'paypalListings':_0x502589})['then'](()=>{var _0x28d36d=_0x3574e9;Alert(_0x28d36d(0x273),_0x28d36d(0x223),_0x28d36d(0x1f9)),_0x35d175[_0x28d36d(0x17c)]({'MarketplaceTransactions':_0x561dc8})[_0x28d36d(0xd5)](()=>{var _0x4049b3=_0x28d36d;window[_0x4049b3(0x291)][_0x4049b3(0x175)]=_0x4049b3(0x22b);});})[_0x3574e9(0xf4)](_0x5add93=>{var _0x21316d=_0x3574e9;console['error'](_0x21316d(0x153),_0x5add93);});})[_0xd1f67e(0xf4)](_0x28d7a5=>{var _0x2e7c4a=_0xd1f67e;console[_0x2e7c4a(0x259)](_0x2e7c4a(0x1bc),_0x28d7a5);});break;case _0xd1f67e(0x163):var _0x34971b=db[_0xd1f67e(0x235)](_0xd1f67e(0x23d))[_0xd1f67e(0x141)]('Sell\x20listings'),_0x35d175=db[_0xd1f67e(0x235)]('users')[_0xd1f67e(0x141)](Auth['currentUser'][_0xd1f67e(0xc2)]);_0x34971b[_0xd1f67e(0x288)]()['then'](_0x448372=>{var _0x1b905b=_0xd1f67e;data=_0x448372[_0x1b905b(0xd0)]();var _0x53e874={'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'user':Auth[_0x1b905b(0x215)]['uid'],'userName':_0x5aa169,'completedTransactions':_0x22442c,'listingID':makeid(0xf)},_0x29e5cf={'document':_0x1b905b(0x1e5),'array':'giftCardListings','amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'listingId':_0x53e874[_0x1b905b(0x17e)]},_0x48c0b2=data[_0x1b905b(0xd2)];return _0x48c0b2[_0x1b905b(0x227)](_0x53e874),_0x561dc8[_0x1b905b(0x227)](_0x29e5cf),_0x34971b[_0x1b905b(0x17c)]({'giftCardListings':_0x48c0b2})['then'](()=>{var _0x336139=_0x1b905b;Alert('listing\x20sucessfully\x20created!',_0x336139(0x223),_0x336139(0x1f9)),_0x35d175[_0x336139(0x17c)]({'MarketplaceTransactions':_0x561dc8})[_0x336139(0xd5)](()=>{var _0x12757f=_0x336139;window[_0x12757f(0x291)][_0x12757f(0x175)]=_0x12757f(0x22b);});})['catch'](_0x53ea55=>{var _0x46d1cc=_0x1b905b;console[_0x46d1cc(0x211)](_0x46d1cc(0x153),_0x53ea55);});})[_0xd1f67e(0xf4)](_0x17a7c4=>{var _0x129a70=_0xd1f67e;console[_0x129a70(0x259)](_0x129a70(0x1bc),_0x17a7c4);});break;case _0xd1f67e(0x1bd):var _0x34971b=db['collection'](_0xd1f67e(0x23d))[_0xd1f67e(0x141)](_0xd1f67e(0x1e5)),_0x35d175=db[_0xd1f67e(0x235)](_0xd1f67e(0x281))['doc'](Auth[_0xd1f67e(0x215)][_0xd1f67e(0xc2)]);_0x34971b[_0xd1f67e(0x288)]()[_0xd1f67e(0xd5)](_0x36ed68=>{var _0x4e3230=_0xd1f67e;data=_0x36ed68[_0x4e3230(0xd0)]();var _0x2421f7={'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'user':Auth['currentUser'][_0x4e3230(0xc2)],'userName':_0x5aa169,'completedTransactions':_0x22442c,'listingID':makeid(0xf)},_0xc637ee={'document':_0x4e3230(0x1e5),'array':_0x4e3230(0xf0),'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'listingId':_0x2421f7[_0x4e3230(0x17e)]},_0x3b975f=data[_0x4e3230(0xf0)];return _0x3b975f[_0x4e3230(0x227)](_0x2421f7),_0x561dc8[_0x4e3230(0x227)](_0xc637ee),_0x34971b[_0x4e3230(0x17c)]({'bitcoinListings':_0x3b975f})[_0x4e3230(0xd5)](()=>{var _0x6bfa36=_0x4e3230;Alert(_0x6bfa36(0x273),_0x6bfa36(0x223),_0x6bfa36(0x1f9)),_0x35d175[_0x6bfa36(0x17c)]({'MarketplaceTransactions':_0x561dc8})[_0x6bfa36(0xd5)](()=>{var _0x56ed89=_0x6bfa36;window['location'][_0x56ed89(0x175)]=_0x56ed89(0x22b);});})[_0x4e3230(0xf4)](_0x957f19=>{var _0x4c0f3a=_0x4e3230;console[_0x4c0f3a(0x211)]('Error\x20updating\x20document:\x20',_0x957f19);});})[_0xd1f67e(0xf4)](_0x2bd8c1=>{var _0x318e75=_0xd1f67e;console[_0x318e75(0x259)](_0x318e75(0x1bc),_0x2bd8c1);});case _0xd1f67e(0x177):var _0x34971b=db[_0xd1f67e(0x235)](_0xd1f67e(0x23d))[_0xd1f67e(0x141)](_0xd1f67e(0x1e5)),_0x35d175=db[_0xd1f67e(0x235)](_0xd1f67e(0x281))['doc'](Auth[_0xd1f67e(0x215)]['uid']);_0x34971b[_0xd1f67e(0x288)]()[_0xd1f67e(0xd5)](_0x206e29=>{var _0x13f6d2=_0xd1f67e;data=_0x206e29[_0x13f6d2(0xd0)]();var _0x2b3f21={'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'user':Auth[_0x13f6d2(0x215)][_0x13f6d2(0xc2)],'userName':_0x5aa169,'completedTransactions':_0x22442c,'listingID':makeid(0xf)},_0x514e0b={'document':_0x13f6d2(0x1e5),'array':_0x13f6d2(0x212),'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'listingId':_0x2b3f21[_0x13f6d2(0x17e)]},_0x224976=data['ethereumListings'];return _0x224976['push'](_0x2b3f21),_0x561dc8[_0x13f6d2(0x227)](_0x514e0b),_0x34971b[_0x13f6d2(0x17c)]({'ethereumListings':_0x224976})[_0x13f6d2(0xd5)](()=>{var _0x490097=_0x13f6d2;Alert(_0x490097(0x273),'Create\x20Listing\x20Information',_0x490097(0x1f9)),_0x35d175['update']({'MarketplaceTransactions':_0x561dc8})[_0x490097(0xd5)](()=>{var _0x2a3e1b=_0x490097;window[_0x2a3e1b(0x291)][_0x2a3e1b(0x175)]='profile.html';});})[_0x13f6d2(0xf4)](_0x398db5=>{var _0x367917=_0x13f6d2;console[_0x367917(0x211)](_0x367917(0x153),_0x398db5);});})['catch'](_0x251b8c=>{var _0x1daf08=_0xd1f67e;console[_0x1daf08(0x259)](_0x1daf08(0x1bc),_0x251b8c);});break;case _0xd1f67e(0x12f):var _0x34971b=db[_0xd1f67e(0x235)](_0xd1f67e(0x23d))[_0xd1f67e(0x141)]('Sell\x20listings'),_0x35d175=db[_0xd1f67e(0x235)]('users')[_0xd1f67e(0x141)](Auth[_0xd1f67e(0x215)][_0xd1f67e(0xc2)]);_0x34971b[_0xd1f67e(0x288)]()[_0xd1f67e(0xd5)](_0x1a4f4c=>{var _0x4f0795=_0xd1f67e;data=_0x1a4f4c[_0x4f0795(0xd0)]();var _0x1f09d0={'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'user':Auth[_0x4f0795(0x215)][_0x4f0795(0xc2)],'userName':_0x5aa169,'completedTransactions':_0x22442c,'listingID':makeid(0xf)},_0x500fff={'document':_0x4f0795(0x1e5),'array':_0x4f0795(0xab),'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'listingId':_0x1f09d0[_0x4f0795(0x17e)]},_0x1d46ca=data[_0x4f0795(0xab)];return _0x1d46ca[_0x4f0795(0x227)](_0x1f09d0),_0x561dc8['push'](_0x500fff),_0x34971b[_0x4f0795(0x17c)]({'dogecoinListings':_0x1d46ca})[_0x4f0795(0xd5)](()=>{var _0x322827=_0x4f0795;Alert(_0x322827(0x273),_0x322827(0x223),_0x322827(0x1f9)),_0x35d175[_0x322827(0x17c)]({'MarketplaceTransactions':_0x561dc8})[_0x322827(0xd5)](()=>{var _0x55c13d=_0x322827;window[_0x55c13d(0x291)][_0x55c13d(0x175)]=_0x55c13d(0x22b);});})['catch'](_0x88c43c=>{var _0x36ba32=_0x4f0795;console[_0x36ba32(0x211)](_0x36ba32(0x153),_0x88c43c);});})['catch'](_0x27d3d9=>{console['log']('Error\x20getting\x20document:',_0x27d3d9);});break;case'Tether':var _0x34971b=db[_0xd1f67e(0x235)](_0xd1f67e(0x23d))[_0xd1f67e(0x141)](_0xd1f67e(0x1e5)),_0x35d175=db[_0xd1f67e(0x235)]('users')[_0xd1f67e(0x141)](Auth[_0xd1f67e(0x215)]['uid']);_0x34971b[_0xd1f67e(0x288)]()['then'](_0x21fd46=>{var _0x2972e3=_0xd1f67e;data=_0x21fd46[_0x2972e3(0xd0)]();var _0x6e6d75={'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'user':Auth['currentUser'][_0x2972e3(0xc2)],'userName':_0x5aa169,'completedTransactions':_0x22442c,'listingID':makeid(0xf)},_0x1de25e={'document':_0x2972e3(0x1e5),'array':_0x2972e3(0x1c2),'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'listingId':_0x6e6d75['listingID']},_0x3bbe8e=data[_0x2972e3(0x1c2)];return _0x3bbe8e[_0x2972e3(0x227)](_0x6e6d75),_0x561dc8[_0x2972e3(0x227)](_0x1de25e),_0x34971b['update']({'tetherListings':_0x3bbe8e})[_0x2972e3(0xd5)](()=>{var _0xf3b233=_0x2972e3;Alert('listing\x20sucessfully\x20created!',_0xf3b233(0x223),_0xf3b233(0x1f9)),_0x35d175['update']({'MarketplaceTransactions':_0x561dc8})[_0xf3b233(0xd5)](()=>{var _0x45ad6b=_0xf3b233;window['location'][_0x45ad6b(0x175)]=_0x45ad6b(0x22b);});})[_0x2972e3(0xf4)](_0x4fd6e2=>{var _0x28e73e=_0x2972e3;console[_0x28e73e(0x211)]('Error\x20updating\x20document:\x20',_0x4fd6e2);});})[_0xd1f67e(0xf4)](_0x49bd03=>{var _0x521562=_0xd1f67e;console[_0x521562(0x259)](_0x521562(0x1bc),_0x49bd03);});break;case'ApplePay':var _0x34971b=db[_0xd1f67e(0x235)](_0xd1f67e(0x23d))[_0xd1f67e(0x141)]('Sell\x20listings'),_0x35d175=db['collection'](_0xd1f67e(0x281))['doc'](Auth['currentUser'][_0xd1f67e(0xc2)]);_0x34971b['get']()[_0xd1f67e(0xd5)](_0x4639a3=>{var _0x399239=_0xd1f67e;data=_0x4639a3[_0x399239(0xd0)]();var _0x2240c3={'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'user':Auth['currentUser']['uid'],'userName':_0x5aa169,'completedTransactions':_0x22442c,'listingID':makeid(0xf)},_0x49afa6={'document':_0x399239(0x1e5),'array':_0x399239(0x286),'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'listingId':_0x2240c3[_0x399239(0x17e)]},_0x4f730a=data[_0x399239(0x286)];return _0x4f730a[_0x399239(0x227)](_0x2240c3),_0x561dc8[_0x399239(0x227)](_0x49afa6),_0x34971b[_0x399239(0x17c)]({'applePayListings':_0x4f730a})['then'](()=>{var _0xcbae09=_0x399239;Alert('listing\x20sucessfully\x20created!',_0xcbae09(0x223),'green'),_0x35d175[_0xcbae09(0x17c)]({'MarketplaceTransactions':_0x561dc8})[_0xcbae09(0xd5)](()=>{var _0x3b4853=_0xcbae09;window[_0x3b4853(0x291)][_0x3b4853(0x175)]=_0x3b4853(0x22b);});})[_0x399239(0xf4)](_0x51547c=>{var _0x182cda=_0x399239;console['error'](_0x182cda(0x153),_0x51547c);});})['catch'](_0x11b8d5=>{var _0x10e67a=_0xd1f67e;console[_0x10e67a(0x259)](_0x10e67a(0x1bc),_0x11b8d5);});break;case _0xd1f67e(0x16e):var _0x34971b=db[_0xd1f67e(0x235)](_0xd1f67e(0x23d))[_0xd1f67e(0x141)]('Sell\x20listings'),_0x35d175=db[_0xd1f67e(0x235)](_0xd1f67e(0x281))[_0xd1f67e(0x141)](Auth[_0xd1f67e(0x215)][_0xd1f67e(0xc2)]);_0x34971b[_0xd1f67e(0x288)]()[_0xd1f67e(0xd5)](_0x33f5c6=>{var _0x3799f2=_0xd1f67e;data=_0x33f5c6['data']();var _0x13cf49={'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'user':Auth[_0x3799f2(0x215)]['uid'],'userName':_0x5aa169,'completedTransactions':_0x22442c,'listingID':makeid(0xf)},_0x1ff582={'document':'Sell\x20listings','array':_0x3799f2(0x278),'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'listingId':_0x13cf49[_0x3799f2(0x17e)]},_0x22de8a=data[_0x3799f2(0x278)];return _0x22de8a[_0x3799f2(0x227)](_0x13cf49),_0x561dc8[_0x3799f2(0x227)](_0x1ff582),_0x34971b[_0x3799f2(0x17c)]({'googlePayListings':_0x22de8a})['then'](()=>{var _0x43124b=_0x3799f2;Alert('listing\x20sucessfully\x20created!',_0x43124b(0x223),'green'),_0x35d175[_0x43124b(0x17c)]({'MarketplaceTransactions':_0x561dc8})[_0x43124b(0xd5)](()=>{var _0x89e40a=_0x43124b;window[_0x89e40a(0x291)][_0x89e40a(0x175)]=_0x89e40a(0x22b);});})[_0x3799f2(0xf4)](_0x1c841a=>{var _0x1298c=_0x3799f2;console[_0x1298c(0x211)](_0x1298c(0x153),_0x1c841a);});})['catch'](_0x5a834e=>{var _0x31e188=_0xd1f67e;console['log'](_0x31e188(0x1bc),_0x5a834e);});break;case _0xd1f67e(0x28f):var _0x34971b=db[_0xd1f67e(0x235)](_0xd1f67e(0x23d))[_0xd1f67e(0x141)]('Sell\x20listings'),_0x35d175=db[_0xd1f67e(0x235)]('users')['doc'](Auth[_0xd1f67e(0x215)][_0xd1f67e(0xc2)]);_0x34971b[_0xd1f67e(0x288)]()['then'](_0x5cb30d=>{var _0x134473=_0xd1f67e;data=_0x5cb30d[_0x134473(0xd0)]();var _0x5c5f72={'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'user':Auth[_0x134473(0x215)][_0x134473(0xc2)],'userName':_0x5aa169,'completedTransactions':_0x22442c,'listingID':makeid(0xf)},_0x61b9fb={'document':_0x134473(0x1e5),'array':_0x134473(0x170),'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'listingId':_0x5c5f72[_0x134473(0x17e)]},_0x284f56=data[_0x134473(0x170)];return _0x284f56[_0x134473(0x227)](_0x5c5f72),_0x561dc8[_0x134473(0x227)](_0x61b9fb),_0x34971b[_0x134473(0x17c)]({'eTransferListings':_0x284f56})['then'](()=>{var _0x4a1ced=_0x134473;Alert(_0x4a1ced(0x273),'Create\x20Listing\x20Information','green'),_0x35d175[_0x4a1ced(0x17c)]({'MarketplaceTransactions':_0x561dc8})[_0x4a1ced(0xd5)](()=>{var _0x2979c3=_0x4a1ced;window[_0x2979c3(0x291)][_0x2979c3(0x175)]=_0x2979c3(0x22b);});})[_0x134473(0xf4)](_0x165e77=>{var _0x444b1c=_0x134473;console[_0x444b1c(0x211)](_0x444b1c(0x153),_0x165e77);});})[_0xd1f67e(0xf4)](_0x329866=>{var _0x59e100=_0xd1f67e;console[_0x59e100(0x259)]('Error\x20getting\x20document:',_0x329866);});break;case'PrepaidVisas':var _0x34971b=db[_0xd1f67e(0x235)](_0xd1f67e(0x23d))[_0xd1f67e(0x141)]('Sell\x20listings'),_0x35d175=db['collection'](_0xd1f67e(0x281))['doc'](Auth[_0xd1f67e(0x215)][_0xd1f67e(0xc2)]);_0x34971b[_0xd1f67e(0x288)]()[_0xd1f67e(0xd5)](_0x1f1d71=>{var _0x5683da=_0xd1f67e;data=_0x1f1d71['data']();var _0xb47562={'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'user':Auth[_0x5683da(0x215)]['uid'],'userName':_0x5aa169,'completedTransactions':_0x22442c,'listingID':makeid(0xf)},_0x2d41a4={'document':'Sell\x20listings','array':_0x5683da(0xf9),'amount':_0x40cc60,'price':_0xf06d9d,'description':_0x58557b,'listingId':_0xb47562[_0x5683da(0x17e)]},_0x1ce627=data[_0x5683da(0xf9)];return _0x1ce627[_0x5683da(0x227)](_0xb47562),_0x561dc8[_0x5683da(0x227)](_0x2d41a4),_0x34971b['update']({'prepaidListings':_0x1ce627})[_0x5683da(0xd5)](()=>{var _0x5e57ad=_0x5683da;Alert(_0x5e57ad(0x273),_0x5e57ad(0x223),_0x5e57ad(0x1f9)),_0x35d175[_0x5e57ad(0x17c)]({'MarketplaceTransactions':_0x561dc8})[_0x5e57ad(0xd5)](()=>{var _0x574138=_0x5e57ad;window['location'][_0x574138(0x175)]=_0x574138(0x22b);});})[_0x5683da(0xf4)](_0x1b8f2d=>{var _0x272154=_0x5683da;console[_0x272154(0x211)](_0x272154(0x153),_0x1b8f2d);});})[_0xd1f67e(0xf4)](_0x315bf2=>{var _0x161876=_0xd1f67e;console[_0x161876(0x259)](_0x161876(0x1bc),_0x315bf2);});break;}}}}}}});}function CreateTransaction(_0x41c0d9,_0x1caa97,_0x1ab58b,_0x417068,_0x4bbb9,_0x2def51,_0x2c1610,_0x377b83,_0x2ad4f8,_0x664c38){var _0x234927=_0x3f07ba,_0x4655a8=db['collection'](_0x234927(0x23d))['doc'](_0x234927(0x1e5)),_0x270355=db[_0x234927(0x235)](_0x234927(0x281))[_0x234927(0x141)](_0x1caa97);_0x270355[_0x234927(0x288)]()['then'](_0x2c61d7=>{var _0x54b4dd=_0x234927;_0x4655a8[_0x54b4dd(0x288)]()[_0x54b4dd(0xd5)](_0x497f44=>{var _0x31b8d0=_0x54b4dd;data=_0x497f44['data']();if(_0x4bbb9>0x5){if(document[_0x31b8d0(0x128)](_0x31b8d0(0x14c))[_0x31b8d0(0x222)]!=null&&document[_0x31b8d0(0x128)]('amount123')[_0x31b8d0(0x222)]!=''){if(Number(document['getElementById'](_0x31b8d0(0x14c))[_0x31b8d0(0x222)]<=Number(_0x664c38))){if(_0x1caa97!=Auth[_0x31b8d0(0x215)][_0x31b8d0(0xc2)]){if(_0x41c0d9==_0x31b8d0(0x250)){data2=_0x2c61d7[_0x31b8d0(0xd0)]();var _0x1ecb25=db[_0x31b8d0(0x235)](_0x31b8d0(0x281))[_0x31b8d0(0x141)](_0x1caa97),_0x5e79ad=data2['MarketplaceTransactions'],_0x19b1dc=_0x5e79ad[_0x31b8d0(0x219)];for(var _0x321610=0x0;_0x321610<_0x19b1dc;_0x321610++){if(_0x2ad4f8==_0x5e79ad[_0x321610][_0x31b8d0(0x1aa)]){var _0x3b102d=Number(_0x5e79ad[_0x321610][_0x31b8d0(0x1fe)]);_0x3b102d-=Number(_0x1ab58b),_0x5e79ad[_0x321610][_0x31b8d0(0x1fe)]=_0x3b102d;}}_0x1ecb25[_0x31b8d0(0x17c)]({'MarketplaceTransactions':_0x5e79ad});var _0x2ffdd9={'seller':_0x1caa97,'amount':_0x1ab58b,'receivedTransaction':![],'type':_0x417068,'usdDue':_0x4bbb9,'description':_0x2def51,'userName':_0x2c1610,'sellerUser':_0x377b83,'listingId':_0x2ad4f8};switch(_0x417068){case _0x31b8d0(0x247):var _0x39325b=data[_0x31b8d0(0x286)],_0x250c5d=_0x39325b['length'];for(var _0x321610=0x0;_0x321610<_0x250c5d;_0x321610++){_0x39325b[_0x321610]['listingID']==_0x2ad4f8&&(_0x39325b[_0x321610][_0x31b8d0(0x1fe)]-=_0x1ab58b);}_0x4655a8[_0x31b8d0(0x17c)]({'applePayListings':_0x39325b});break;case _0x31b8d0(0xa9):var _0x39325b=data[_0x31b8d0(0xf0)],_0x250c5d=_0x39325b['length'];for(var _0x321610=0x0;_0x321610<_0x250c5d;_0x321610++){_0x39325b[_0x321610][_0x31b8d0(0x17e)]==_0x2ad4f8&&(_0x39325b[_0x321610]['amount']-=_0x1ab58b);}_0x4655a8[_0x31b8d0(0x17c)]({'bitcoinListings':_0x39325b});break;case'dogecoin':var _0x39325b=data[_0x31b8d0(0xab)],_0x250c5d=_0x39325b['length'];for(var _0x321610=0x0;_0x321610<_0x250c5d;_0x321610++){_0x39325b[_0x321610][_0x31b8d0(0x17e)]==_0x2ad4f8&&(_0x39325b[_0x321610][_0x31b8d0(0x1fe)]-=_0x1ab58b);}_0x4655a8[_0x31b8d0(0x17c)]({'dogecoinListings':_0x39325b});break;case _0x31b8d0(0x1f8):var _0x39325b=data['eTransferListings'],_0x250c5d=_0x39325b['length'];for(var _0x321610=0x0;_0x321610<_0x250c5d;_0x321610++){_0x39325b[_0x321610]['listingID']==_0x2ad4f8&&(_0x39325b[_0x321610][_0x31b8d0(0x1fe)]-=_0x1ab58b);}_0x4655a8['update']({'eTransferListings':_0x39325b});break;case'ethereum':var _0x39325b=data[_0x31b8d0(0x212)],_0x250c5d=_0x39325b['length'];for(var _0x321610=0x0;_0x321610<_0x250c5d;_0x321610++){_0x39325b[_0x321610][_0x31b8d0(0x17e)]==_0x2ad4f8&&(_0x39325b[_0x321610][_0x31b8d0(0x1fe)]-=_0x1ab58b);}_0x4655a8['update']({'ethereumListings':_0x39325b});break;case _0x31b8d0(0x1fc):var _0x39325b=data[_0x31b8d0(0xd2)],_0x250c5d=_0x39325b[_0x31b8d0(0x219)];for(var _0x321610=0x0;_0x321610<_0x250c5d;_0x321610++){_0x39325b[_0x321610][_0x31b8d0(0x17e)]==_0x2ad4f8&&(_0x39325b[_0x321610][_0x31b8d0(0x1fe)]-=_0x1ab58b);}_0x4655a8['update']({'giftCardListings':_0x39325b});break;case _0x31b8d0(0x1d3):var _0x39325b=data[_0x31b8d0(0x278)],_0x250c5d=_0x39325b[_0x31b8d0(0x219)];for(var _0x321610=0x0;_0x321610<_0x250c5d;_0x321610++){_0x39325b[_0x321610]['listingID']==_0x2ad4f8&&(_0x39325b[_0x321610]['amount']-=_0x1ab58b);}_0x4655a8[_0x31b8d0(0x17c)]({'googlePayListings':_0x39325b});break;case'paypal':var _0x39325b=data[_0x31b8d0(0x1e8)],_0x250c5d=_0x39325b[_0x31b8d0(0x219)];for(var _0x321610=0x0;_0x321610<_0x250c5d;_0x321610++){_0x39325b[_0x321610][_0x31b8d0(0x17e)]==_0x2ad4f8&&(_0x39325b[_0x321610]['amount']-=_0x1ab58b);}_0x4655a8[_0x31b8d0(0x17c)]({'paypalListings':_0x39325b});break;case _0x31b8d0(0x124):var _0x39325b=data[_0x31b8d0(0xf9)],_0x250c5d=_0x39325b[_0x31b8d0(0x219)];for(var _0x321610=0x0;_0x321610<_0x250c5d;_0x321610++){_0x39325b[_0x321610][_0x31b8d0(0x17e)]==_0x2ad4f8&&(_0x39325b[_0x321610][_0x31b8d0(0x1fe)]-=_0x1ab58b);}_0x4655a8['update']({'prepaidListings':_0x39325b});break;case _0x31b8d0(0x15f):var _0x39325b=data[_0x31b8d0(0x1c2)],_0x250c5d=_0x39325b['length'];for(var _0x321610=0x0;_0x321610<_0x250c5d;_0x321610++){_0x39325b[_0x321610][_0x31b8d0(0x17e)]==_0x2ad4f8&&(_0x39325b[_0x321610][_0x31b8d0(0x1fe)]-=_0x1ab58b);}_0x4655a8[_0x31b8d0(0x17c)]({'tetherListings':_0x39325b});break;}if(db[_0x31b8d0(0x235)](_0x31b8d0(0xe5))[_0x31b8d0(0x141)](Auth[_0x31b8d0(0x215)][_0x31b8d0(0xc2)])==null)Alert('You\x20can\x20only\x20have\x20one\x20active\x20buy\x20request!\x20Cancel\x20your\x20current\x20one\x20to\x20create\x20a\x20new\x20one!','Listings\x20Information','yellow');else{var _0x1ecb25=db['collection'](_0x31b8d0(0x281))[_0x31b8d0(0x141)](_0x1caa97);_0x1ecb25[_0x31b8d0(0x288)]()[_0x31b8d0(0xd5)](_0xad4915=>{var _0x18a83d=_0x31b8d0;data1=_0xad4915[_0x18a83d(0xd0)]();if(data[_0x18a83d(0xbc)]!=null){var _0x26f144=data[_0x18a83d(0xbc)];_0x26f144[_0x18a83d(0x227)](Auth['currentUser'][_0x18a83d(0xc2)]);}else{var _0x26f144=[];_0x26f144['push'](Auth['currentUser'][_0x18a83d(0xc2)]);}var _0x3c757d={'Coins':data1['Coins'],'Address':data1[_0x18a83d(0x207)],'Transactions':data1[_0x18a83d(0xc7)],'Notifications':data1[_0x18a83d(0x158)],'Username':data1[_0x18a83d(0x126)],'HashesMined':data1['HashesMined'],'newFaucetTime':data1[_0x18a83d(0xd6)],'ReferralCode':data1[_0x18a83d(0x1cf)],'Referrals':data1[_0x18a83d(0x1e1)],'Referrer':data1[_0x18a83d(0x9f)],'Multiplier':data1[_0x18a83d(0x295)],'PreviousTransactions':data1[_0x18a83d(0x1dd)],'MarketplaceTransactions':data1[_0x18a83d(0x1d6)],'FinishedMarketplaceTransactions':data1[_0x18a83d(0xb8)],'IncomingMarketplaceTransactions':_0x26f144};db[_0x18a83d(0x235)]('OpenSellTransactions')[_0x18a83d(0x141)](Auth['currentUser']['uid'])[_0x18a83d(0x21e)](_0x2ffdd9)[_0x18a83d(0xd5)](()=>{var _0x5ea33c=_0x18a83d;db['collection']('users')['doc'](_0x1caa97)[_0x5ea33c(0x21e)](_0x3c757d)[_0x5ea33c(0xd5)](()=>{var _0x51dc39=_0x5ea33c;Alert(_0x51dc39(0x16c),_0x51dc39(0x1f7),'green'),location['reload']();});});});}}}else Alert(_0x31b8d0(0x1e9),_0x31b8d0(0x1f7),'yellow');}else Alert(_0x31b8d0(0x21f),_0x31b8d0(0x195),_0x31b8d0(0x107));}else Alert(_0x31b8d0(0x187),_0x31b8d0(0x1f7),'yellow');}else Alert('You\x20cant\x20order\x20less\x20than\x205\x20USD\x20worth\x20of\x20PEPPAS!',_0x31b8d0(0x1f7),_0x31b8d0(0xc1));});});}function openMarketplaceTransactionModal(_0x27dc23,_0x391437,_0x2f49d5,_0x1f5253,_0x22a1e5,_0xc33032,_0x52d578){var _0x324477=_0x3f07ba;let _0x297099='';var _0x26c3df=document[_0x324477(0x128)](_0x324477(0x274));_0x26c3df[_0x324477(0xea)][_0x324477(0x16a)]='block';var _0x5d0016=document[_0x324477(0x128)]('amount');list=document[_0x324477(0x128)]('button'),document[_0x324477(0x128)](_0x324477(0x12b))[_0x324477(0xe6)]=_0x324477(0x26f)+_0xc33032['toString']()+_0x324477(0x10b),$(_0x324477(0x1ef))['on'](_0x324477(0x1c6),function(){var _0x52ac7d=_0x324477;CreateTransaction(_0x52ac7d(0x250),_0x27dc23,_0x5d0016['value'],_0x391437);}),$(_0x324477(0x168))['on'](_0x324477(0x1b1),function(){var _0x237000=_0x324477,_0x16360e=document[_0x237000(0x128)](_0x237000(0x14c))['value'];if(Number(_0x16360e)>Number(_0xc33032)){_0x16360e=_0xc33032;var _0x3a4fa9=Number(_0x52d578)*Number(_0x16360e);$('#amount123')[_0x237000(0x145)](_0x16360e['toString']()),$(_0x237000(0xe0))[_0x237000(0x1d1)](_0x237000(0x203)+_0x3a4fa9[_0x237000(0x143)](0x4)[_0x237000(0x19b)]()+_0x237000(0x232));}else{var _0x3a4fa9=Number(_0x52d578)*Number(_0x16360e);$('#usdDue')[_0x237000(0x1d1)](_0x237000(0x203)+_0x3a4fa9['toFixed'](0x4)[_0x237000(0x19b)]()+_0x237000(0x232));}});const _0x458b86=_0x324477(0x13d)+_0x27dc23+_0x324477(0xba)+_0x391437+_0x324477(0xe8)+_0x52d578+_0x324477(0xef)+_0x2f49d5+_0x324477(0x15d)+_0x1f5253+'\x27,\x20\x27'+_0x22a1e5+'\x27,\x20\x27'+_0xc33032+_0x324477(0x1b7);_0x297099+=_0x458b86,list[_0x324477(0xe6)]=_0x297099;}function loadPage(_0x580178,_0xc60906){var _0x5ab4f5=_0x3f07ba;if(_0x580178==_0x5ab4f5(0x250))switch(_0xc60906){case _0x5ab4f5(0x23c):var _0x2f3a0e=db[_0x5ab4f5(0x235)]('marketplace')['doc']('Sell\x20listings');_0x2f3a0e['get']()['then'](_0x218942=>{var _0x47404f=_0x5ab4f5,_0x231e48=db[_0x47404f(0x235)](_0x47404f(0x281))[_0x47404f(0x141)](Auth['currentUser'][_0x47404f(0xc2)]);_0x231e48[_0x47404f(0x288)]()[_0x47404f(0xd5)](_0x26f102=>{var _0x227ece=_0x47404f;data=_0x218942[_0x227ece(0xd0)](),data1=_0x26f102[_0x227ece(0xd0)]();var _0x4b4720=data[_0x227ece(0x1e8)],_0x3c6555=_0x4b4720[_0x227ece(0x1f0)](function(_0x3c20cb,_0x3d2d04){var _0x14cfd2=_0x227ece;return _0x3c20cb[_0x14cfd2(0x190)]-_0x3d2d04[_0x14cfd2(0x190)];}),_0x484868=_0x3c6555['length'],_0x214dcc=0x0;let _0xb6d448='';var _0x20ca78=document[_0x227ece(0x128)](_0x227ece(0x283));if(_0x484868<=0x0){const _0x10d6f5=_0x227ece(0x112);_0xb6d448+=_0x10d6f5,_0x20ca78['innerHTML']=_0xb6d448;}for(var _0x43fd35=0x0;_0x43fd35<_0x484868;_0x43fd35++){_0x214dcc++;if(_0x214dcc>0x19)break;var _0x1dce47=0x64*Number(_0x3c6555[_0x43fd35][_0x227ece(0x190)])/0.00007023;if(Number(_0x3c6555[_0x43fd35]['price'])>0.00007023){_0x1dce47-=0x64;const _0x1031ca=_0x227ece(0x287)+_0x3c6555[_0x43fd35][_0x227ece(0xb5)]+_0x227ece(0x1cc)+data1[_0x227ece(0x126)]+'\x27,\x27'+_0x3c6555[_0x43fd35]['userName']+_0x227ece(0x15d)+_0x3c6555[_0x43fd35][_0x227ece(0x17e)]+_0x227ece(0x15d)+_0x3c6555[_0x43fd35][_0x227ece(0x1fe)]+_0x227ece(0x1e7)+_0x3c6555[_0x43fd35][_0x227ece(0x190)]+_0x227ece(0x214)+_0x3c6555[_0x43fd35][_0x227ece(0x1d0)]+'</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22color:black\x22>User\x20has\x20completed\x20'+_0x3c6555[_0x43fd35][_0x227ece(0x216)]+'\x20successful\x20Transactions</h4>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201\x20Peppa\x20for\x20'+_0x3c6555[_0x43fd35][_0x227ece(0x190)]+'USD\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x3c6555[_0x43fd35][_0x227ece(0x1fe)]+_0x227ece(0x197)+_0x1dce47[_0x227ece(0x143)](0x4)+'%\x20(compared\x20to\x20current\x20market\x20price)</h2>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20style=\x22color:black\x22>'+_0x3c6555[_0x43fd35][_0x227ece(0x244)]+_0x227ece(0xb2);_0xb6d448+=_0x1031ca,_0x20ca78['innerHTML']=_0xb6d448;}else{_0x1dce47=0x64-_0x1dce47;const _0x41eab5='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20onclick=\x22openMarketplaceTransactionModal(\x27'+_0x3c6555[_0x43fd35][_0x227ece(0xb5)]+_0x227ece(0x1cc)+data1['Username']+_0x227ece(0x15d)+_0x3c6555[_0x43fd35][_0x227ece(0x1d0)]+'\x27,\x27'+_0x3c6555[_0x43fd35][_0x227ece(0x17e)]+_0x227ece(0x15d)+_0x3c6555[_0x43fd35]['amount']+_0x227ece(0x1e7)+_0x3c6555[_0x43fd35][_0x227ece(0x190)]+'\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>'+_0x3c6555[_0x43fd35][_0x227ece(0x1d0)]+_0x227ece(0x261)+_0x3c6555[_0x43fd35]['completedTransactions']+'\x20successful\x20Transactions</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201\x20Peppa\x20for\x20'+_0x3c6555[_0x43fd35][_0x227ece(0x190)]+_0x227ece(0x19c)+_0x3c6555[_0x43fd35][_0x227ece(0x1fe)]+_0x227ece(0xbb)+_0x1dce47[_0x227ece(0x143)](0x4)+_0x227ece(0x13e)+_0x3c6555[_0x43fd35][_0x227ece(0x244)]+_0x227ece(0xb2);_0xb6d448+=_0x41eab5,_0x20ca78['innerHTML']=_0xb6d448;}}_0x20ca78[_0x227ece(0xe6)]=_0xb6d448;var _0x2e4bd3=document[_0x227ece(0x128)](_0x227ece(0x289));_0x2e4bd3[_0x227ece(0xe6)]='Paypal';});});break;case'giftCard':var _0x2f3a0e=db[_0x5ab4f5(0x235)](_0x5ab4f5(0x23d))['doc'](_0x5ab4f5(0x1e5));_0x2f3a0e[_0x5ab4f5(0x288)]()[_0x5ab4f5(0xd5)](_0x3911cd=>{var _0x8b3186=_0x5ab4f5,_0x3d438a=db[_0x8b3186(0x235)](_0x8b3186(0x281))[_0x8b3186(0x141)](Auth[_0x8b3186(0x215)][_0x8b3186(0xc2)]);_0x3d438a[_0x8b3186(0x288)]()[_0x8b3186(0xd5)](_0x5f3019=>{var _0x951212=_0x8b3186;data1=_0x5f3019['data'](),data=_0x3911cd[_0x951212(0xd0)]();var _0x58da66=data[_0x951212(0xd2)],_0x5beaa3=_0x58da66[_0x951212(0x1f0)](function(_0x25a6d0,_0x3408ca){var _0x4ebb71=_0x951212;return _0x25a6d0['price']-_0x3408ca[_0x4ebb71(0x190)];}),_0x25b9f8=_0x5beaa3[_0x951212(0x219)],_0x3a1bf8=0x0;let _0x282825='';var _0x55bfd3=document['getElementById']('List');if(_0x25b9f8<=0x0){const _0x37192a=_0x951212(0x112);_0x282825+=_0x37192a,_0x55bfd3[_0x951212(0xe6)]=_0x282825;}for(var _0x3416e0=0x0;_0x3416e0<_0x25b9f8;_0x3416e0++){_0x3a1bf8++;if(_0x3a1bf8>0x19)break;var _0x412ee5=0x64*Number(_0x5beaa3[_0x3416e0][_0x951212(0x190)])/0.00007023;if(Number(_0x5beaa3[_0x3416e0]['price'])>0.00007023){_0x412ee5-=0x64;const _0x375272=_0x951212(0x287)+_0x5beaa3[_0x3416e0][_0x951212(0xb5)]+_0x951212(0x136)+data1[_0x951212(0x126)]+_0x951212(0x15d)+_0x5beaa3[_0x3416e0]['userName']+_0x951212(0x15d)+_0x5beaa3[_0x3416e0][_0x951212(0x17e)]+_0x951212(0x15d)+_0x5beaa3[_0x3416e0][_0x951212(0x1fe)]+_0x951212(0x1e7)+_0x5beaa3[_0x3416e0][_0x951212(0x190)]+_0x951212(0x214)+_0x5beaa3[_0x3416e0]['userName']+_0x951212(0x261)+_0x5beaa3[_0x3416e0][_0x951212(0x216)]+_0x951212(0x10d)+_0x5beaa3[_0x3416e0][_0x951212(0x190)]+_0x951212(0x121)+_0x5beaa3[_0x3416e0]['amount']+_0x951212(0x197)+_0x412ee5[_0x951212(0x143)](0x4)+_0x951212(0x13e)+_0x5beaa3[_0x3416e0][_0x951212(0x244)]+_0x951212(0xb2);_0x282825+=_0x375272,_0x55bfd3[_0x951212(0xe6)]=_0x282825;}else{_0x412ee5=0x64-_0x412ee5;const _0xb27998='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20onclick=\x22openMarketplaceTransactionModal(\x27'+_0x5beaa3[_0x3416e0]['user']+_0x951212(0x136)+data1[_0x951212(0x126)]+'\x27,\x27'+_0x5beaa3[_0x3416e0][_0x951212(0x1d0)]+_0x951212(0x15d)+_0x5beaa3[_0x3416e0]['listingID']+_0x951212(0x15d)+_0x5beaa3[_0x3416e0][_0x951212(0x1fe)]+_0x951212(0x1e7)+_0x5beaa3[_0x3416e0][_0x951212(0x190)]+_0x951212(0x214)+_0x5beaa3[_0x3416e0][_0x951212(0x1d0)]+_0x951212(0x261)+_0x5beaa3[_0x3416e0][_0x951212(0x216)]+_0x951212(0x10d)+_0x5beaa3[_0x3416e0][_0x951212(0x190)]+_0x951212(0x121)+_0x5beaa3[_0x3416e0][_0x951212(0x1fe)]+_0x951212(0xbb)+_0x412ee5[_0x951212(0x143)](0x4)+_0x951212(0x13e)+_0x5beaa3[_0x3416e0][_0x951212(0x244)]+_0x951212(0xb2);_0x282825+=_0xb27998,_0x55bfd3['innerHTML']=_0x282825;}}_0x55bfd3[_0x951212(0xe6)]=_0x282825;var _0x386ad8=document[_0x951212(0x128)]('dropbtn');_0x386ad8[_0x951212(0xe6)]='Gift\x20Card';});});break;case _0x5ab4f5(0xa9):var _0x2f3a0e=db[_0x5ab4f5(0x235)](_0x5ab4f5(0x23d))[_0x5ab4f5(0x141)](_0x5ab4f5(0x1e5));_0x2f3a0e[_0x5ab4f5(0x288)]()[_0x5ab4f5(0xd5)](_0x1e3b41=>{var _0x11ae62=_0x5ab4f5,_0x5e74e0=db['collection'](_0x11ae62(0x281))['doc'](Auth[_0x11ae62(0x215)][_0x11ae62(0xc2)]);_0x5e74e0['get']()[_0x11ae62(0xd5)](_0x5cf2a2=>{var _0x1b1ebe=_0x11ae62;data1=_0x5cf2a2[_0x1b1ebe(0xd0)](),data=_0x1e3b41['data']();var _0x28f0d7=data['bitcoinListings'],_0x40fa76=_0x28f0d7[_0x1b1ebe(0x1f0)](function(_0x383f8d,_0x347192){var _0x3bddca=_0x1b1ebe;return _0x383f8d[_0x3bddca(0x190)]-_0x347192[_0x3bddca(0x190)];}),_0x529cca=_0x40fa76['length'],_0xd5a987=0x0;let _0x2d3ccb='';var _0x5d63ca=document['getElementById'](_0x1b1ebe(0x283));if(_0x529cca<=0x0){const _0x39be38=_0x1b1ebe(0x112);_0x2d3ccb+=_0x39be38,_0x5d63ca['innerHTML']=_0x2d3ccb;}for(var _0x50015f=0x0;_0x50015f<_0x529cca;_0x50015f++){_0xd5a987++;if(_0xd5a987>0x19)break;var _0x380781=0x64*Number(_0x40fa76[_0x50015f][_0x1b1ebe(0x190)])/0.00007023;if(Number(_0x40fa76[_0x50015f][_0x1b1ebe(0x190)])>0.00007023){_0x380781-=0x64;const _0xa50e4e='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20onclick=\x22openMarketplaceTransactionModal(\x27'+_0x40fa76[_0x50015f][_0x1b1ebe(0xb5)]+_0x1b1ebe(0x165)+data1[_0x1b1ebe(0x126)]+_0x1b1ebe(0x15d)+_0x40fa76[_0x50015f][_0x1b1ebe(0x1d0)]+_0x1b1ebe(0x15d)+_0x40fa76[_0x50015f]['listingID']+'\x27,\x27'+_0x40fa76[_0x50015f][_0x1b1ebe(0x1fe)]+_0x1b1ebe(0x1e7)+_0x40fa76[_0x50015f][_0x1b1ebe(0x190)]+_0x1b1ebe(0xfe)+_0x40fa76[_0x50015f][_0x1b1ebe(0x1d0)]+'</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22color:black\x22>User\x20has\x20completed\x20'+_0x40fa76[_0x50015f][_0x1b1ebe(0x216)]+_0x1b1ebe(0x10d)+_0x40fa76[_0x50015f][_0x1b1ebe(0x190)]+_0x1b1ebe(0x121)+_0x40fa76[_0x50015f][_0x1b1ebe(0x1fe)]+_0x1b1ebe(0x197)+_0x380781[_0x1b1ebe(0x143)](0x4)+'%\x20(compared\x20to\x20current\x20market\x20price)</h2>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20style=\x22color:black\x22>'+_0x40fa76[_0x50015f]['description']+_0x1b1ebe(0xb2);_0x2d3ccb+=_0xa50e4e,_0x5d63ca[_0x1b1ebe(0xe6)]=_0x2d3ccb;}else{_0x380781=0x64-_0x380781;const _0x5eb3dc=_0x1b1ebe(0x140)+_0x40fa76[_0x50015f]['user']+_0x1b1ebe(0x165)+data1[_0x1b1ebe(0x126)]+'\x27,\x27'+_0x40fa76[_0x50015f][_0x1b1ebe(0x1d0)]+_0x1b1ebe(0x15d)+_0x40fa76[_0x50015f][_0x1b1ebe(0x17e)]+_0x1b1ebe(0x15d)+_0x40fa76[_0x50015f][_0x1b1ebe(0x1fe)]+_0x1b1ebe(0x1e7)+_0x40fa76[_0x50015f][_0x1b1ebe(0x190)]+_0x1b1ebe(0x214)+_0x40fa76[_0x50015f][_0x1b1ebe(0x1d0)]+'</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22color:black\x22>User\x20has\x20completed\x20'+_0x40fa76[_0x50015f][_0x1b1ebe(0x216)]+_0x1b1ebe(0x10d)+_0x40fa76[_0x50015f]['price']+_0x1b1ebe(0x121)+_0x40fa76[_0x50015f]['amount']+_0x1b1ebe(0xbb)+_0x380781[_0x1b1ebe(0x143)](0x4)+'%\x20(compared\x20to\x20current\x20market\x20price)</h2>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20style=\x22color:black\x22>'+_0x40fa76[_0x50015f][_0x1b1ebe(0x244)]+'</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';_0x2d3ccb+=_0x5eb3dc,_0x5d63ca['innerHTML']=_0x2d3ccb;}}_0x5d63ca['innerHTML']=_0x2d3ccb;var _0x5d2ba8=document[_0x1b1ebe(0x128)](_0x1b1ebe(0x289));_0x5d2ba8['innerHTML']=_0x1b1ebe(0x1bd);});});break;case _0x5ab4f5(0x14f):var _0x2f3a0e=db['collection'](_0x5ab4f5(0x23d))[_0x5ab4f5(0x141)](_0x5ab4f5(0x1e5));_0x2f3a0e[_0x5ab4f5(0x288)]()[_0x5ab4f5(0xd5)](_0x3d7d6b=>{var _0x4546ae=_0x5ab4f5,_0xe0ee17=db[_0x4546ae(0x235)](_0x4546ae(0x281))['doc'](Auth['currentUser'][_0x4546ae(0xc2)]);_0xe0ee17['get']()['then'](_0x9fa48f=>{var _0x4f9e24=_0x4546ae;data=_0x3d7d6b['data'](),data1=_0x9fa48f[_0x4f9e24(0xd0)]();var _0x18d17f=data[_0x4f9e24(0x212)],_0x3c4d05=_0x18d17f[_0x4f9e24(0x1f0)](function(_0x227fa0,_0x58c016){var _0x5b4917=_0x4f9e24;return _0x227fa0[_0x5b4917(0x190)]-_0x58c016['price'];}),_0x5b44d6=_0x3c4d05['length'],_0x27bc0f=0x0;let _0x58f6f5='';var _0x1c7867=document['getElementById']('List');if(_0x5b44d6<=0x0){const _0x5f4771=_0x4f9e24(0x112);_0x58f6f5+=_0x5f4771,_0x1c7867[_0x4f9e24(0xe6)]=_0x58f6f5;}for(var _0x577670=0x0;_0x577670<_0x5b44d6;_0x577670++){_0x27bc0f++;if(_0x27bc0f>0x19)break;var _0x2a36f9=0x64*Number(_0x3c4d05[_0x577670][_0x4f9e24(0x190)])/0.00007023;if(Number(_0x3c4d05[_0x577670][_0x4f9e24(0x190)])>0.00007023){_0x2a36f9-=0x64;const _0x4ea5ff=_0x4f9e24(0x287)+_0x3c4d05[_0x577670]['user']+'\x27,\x27ethereum\x27,\x20\x27'+data1[_0x4f9e24(0x126)]+_0x4f9e24(0x15d)+_0x3c4d05[_0x577670][_0x4f9e24(0x1d0)]+'\x27,\x27'+_0x3c4d05[_0x577670][_0x4f9e24(0x17e)]+_0x4f9e24(0x15d)+_0x3c4d05[_0x577670][_0x4f9e24(0x1fe)]+_0x4f9e24(0x1e7)+_0x3c4d05[_0x577670][_0x4f9e24(0x190)]+_0x4f9e24(0x214)+_0x3c4d05[_0x577670]['userName']+_0x4f9e24(0x1db)+_0x3c4d05[_0x577670]['completedTransactions']+'\x20successful\x20Transactions</h4>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201\x20Peppa\x20for\x20'+_0x3c4d05[_0x577670][_0x4f9e24(0x190)]+_0x4f9e24(0x121)+_0x3c4d05[_0x577670]['amount']+_0x4f9e24(0x197)+_0x2a36f9[_0x4f9e24(0x143)](0x4)+'%\x20(compared\x20to\x20current\x20market\x20price)</h2>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20style=\x22color:black\x22>'+_0x3c4d05[_0x577670][_0x4f9e24(0x244)]+_0x4f9e24(0xb2);_0x58f6f5+=_0x4ea5ff,_0x1c7867[_0x4f9e24(0xe6)]=_0x58f6f5;}else{_0x2a36f9=0x64-_0x2a36f9;const _0xc695ed='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20onclick=\x22openMarketplaceTransactionModal(\x27'+_0x3c4d05[_0x577670][_0x4f9e24(0xb5)]+_0x4f9e24(0x17d)+data1[_0x4f9e24(0x126)]+_0x4f9e24(0x15d)+_0x3c4d05[_0x577670]['userName']+'\x27,\x27'+_0x3c4d05[_0x577670][_0x4f9e24(0x17e)]+_0x4f9e24(0x15d)+_0x3c4d05[_0x577670]['amount']+'\x27,\x20\x27'+_0x3c4d05[_0x577670][_0x4f9e24(0x190)]+_0x4f9e24(0x214)+_0x3c4d05[_0x577670][_0x4f9e24(0x1d0)]+_0x4f9e24(0x261)+_0x3c4d05[_0x577670][_0x4f9e24(0x216)]+_0x4f9e24(0x202)+_0x3c4d05[_0x577670][_0x4f9e24(0x190)]+_0x4f9e24(0x19c)+_0x3c4d05[_0x577670][_0x4f9e24(0x1fe)]+_0x4f9e24(0xbb)+_0x2a36f9['toFixed'](0x4)+_0x4f9e24(0x13e)+_0x3c4d05[_0x577670][_0x4f9e24(0x244)]+_0x4f9e24(0xb2);_0x58f6f5+=_0xc695ed,_0x1c7867[_0x4f9e24(0xe6)]=_0x58f6f5;}}_0x1c7867[_0x4f9e24(0xe6)]=_0x58f6f5;var _0x1bb68c=document[_0x4f9e24(0x128)](_0x4f9e24(0x289));_0x1bb68c[_0x4f9e24(0xe6)]=_0x4f9e24(0x177);});});break;case'dogecoin':var _0x2f3a0e=db[_0x5ab4f5(0x235)]('marketplace')['doc'](_0x5ab4f5(0x1e5));_0x2f3a0e[_0x5ab4f5(0x288)]()[_0x5ab4f5(0xd5)](_0x9a971=>{var _0x2aa077=_0x5ab4f5,_0x58e9c5=db[_0x2aa077(0x235)]('users')[_0x2aa077(0x141)](Auth[_0x2aa077(0x215)][_0x2aa077(0xc2)]);_0x58e9c5[_0x2aa077(0x288)]()[_0x2aa077(0xd5)](_0x68e82d=>{var _0x555bf1=_0x2aa077;data=_0x9a971[_0x555bf1(0xd0)](),data1=_0x68e82d[_0x555bf1(0xd0)]();var _0x1f1aaf=data[_0x555bf1(0xab)],_0x2f310d=_0x1f1aaf[_0x555bf1(0x1f0)](function(_0x1697a0,_0x4e03f2){var _0x4c2c1c=_0x555bf1;return _0x1697a0[_0x4c2c1c(0x190)]-_0x4e03f2[_0x4c2c1c(0x190)];}),_0x2cdaa9=_0x2f310d[_0x555bf1(0x219)],_0xa1700d=0x0;let _0x43cc45='';var _0x512602=document[_0x555bf1(0x128)](_0x555bf1(0x283));if(_0x2cdaa9<=0x0){const _0x4f4d4b=_0x555bf1(0x112);_0x43cc45+=_0x4f4d4b,_0x512602[_0x555bf1(0xe6)]=_0x43cc45;}for(var _0x248b73=0x0;_0x248b73<_0x2cdaa9;_0x248b73++){_0xa1700d++;if(_0xa1700d>0x19)break;var _0xa0669e=0x64*Number(_0x2f310d[_0x248b73][_0x555bf1(0x190)])/0.00007023;if(Number(_0x2f310d[_0x248b73]['price'])>0.00007023){_0xa0669e-=0x64;const _0xe5d397='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20onclick=\x22openMarketplaceTransactionModal(\x27'+_0x2f310d[_0x248b73]['user']+_0x555bf1(0xd3)+data1[_0x555bf1(0x126)]+_0x555bf1(0x15d)+_0x2f310d[_0x248b73]['userName']+_0x555bf1(0x15d)+_0x2f310d[_0x248b73][_0x555bf1(0x17e)]+_0x555bf1(0x15d)+_0x2f310d[_0x248b73][_0x555bf1(0x1fe)]+_0x555bf1(0x1e7)+_0x2f310d[_0x248b73][_0x555bf1(0x190)]+'\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>'+_0x2f310d[_0x248b73][_0x555bf1(0x1d0)]+'</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22color:black\x22>User\x20has\x20completed\x20'+_0x2f310d[_0x248b73][_0x555bf1(0x216)]+_0x555bf1(0x10d)+_0x2f310d[_0x248b73][_0x555bf1(0x190)]+_0x555bf1(0x121)+_0x2f310d[_0x248b73]['amount']+_0x555bf1(0x197)+_0xa0669e['toFixed'](0x4)+'%\x20(compared\x20to\x20current\x20market\x20price)</h2>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20style=\x22color:black\x22>'+_0x2f310d[_0x248b73]['description']+_0x555bf1(0xb2);_0x43cc45+=_0xe5d397,_0x512602[_0x555bf1(0xe6)]=_0x43cc45;}else{_0xa0669e=0x64-_0xa0669e;const _0x13b5da=_0x555bf1(0x140)+_0x2f310d[_0x248b73][_0x555bf1(0xb5)]+_0x555bf1(0xd3)+data1[_0x555bf1(0x126)]+_0x555bf1(0x15d)+_0x2f310d[_0x248b73]['userName']+_0x555bf1(0x15d)+_0x2f310d[_0x248b73][_0x555bf1(0x17e)]+_0x555bf1(0x15d)+_0x2f310d[_0x248b73][_0x555bf1(0x1fe)]+_0x555bf1(0x1e7)+_0x2f310d[_0x248b73][_0x555bf1(0x190)]+_0x555bf1(0x214)+_0x2f310d[_0x248b73]['userName']+'</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22color:black\x22>User\x20has\x20completed\x20'+_0x2f310d[_0x248b73][_0x555bf1(0x216)]+'\x20successful\x20Transactions</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201\x20Peppa\x20for\x20'+_0x2f310d[_0x248b73]['price']+_0x555bf1(0x19c)+_0x2f310d[_0x248b73]['amount']+'\x20PEPPAS\x20left\x20in\x20stock\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22color:black;\x22>\x20-'+_0xa0669e[_0x555bf1(0x143)](0x4)+_0x555bf1(0x13e)+_0x2f310d[_0x248b73][_0x555bf1(0x244)]+'</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';_0x43cc45+=_0x13b5da,_0x512602[_0x555bf1(0xe6)]=_0x43cc45;}}_0x512602[_0x555bf1(0xe6)]=_0x43cc45;var _0x4f8681=document['getElementById'](_0x555bf1(0x289));_0x4f8681['innerHTML']=_0x555bf1(0x12f);});});break;case _0x5ab4f5(0x15f):var _0x2f3a0e=db[_0x5ab4f5(0x235)]('marketplace')[_0x5ab4f5(0x141)](_0x5ab4f5(0x1e5));_0x2f3a0e[_0x5ab4f5(0x288)]()[_0x5ab4f5(0xd5)](_0x488c4a=>{var _0xe7a33b=_0x5ab4f5,_0x590d67=db[_0xe7a33b(0x235)](_0xe7a33b(0x281))[_0xe7a33b(0x141)](Auth[_0xe7a33b(0x215)][_0xe7a33b(0xc2)]);_0x590d67[_0xe7a33b(0x288)]()[_0xe7a33b(0xd5)](_0x4ca260=>{var _0x3fb885=_0xe7a33b;data=_0x488c4a['data'](),data1=_0x4ca260[_0x3fb885(0xd0)]();var _0x31c0af=data[_0x3fb885(0x1c2)],_0x437921=_0x31c0af['sort'](function(_0x494273,_0x4e5778){var _0x2a2dfd=_0x3fb885;return _0x494273['price']-_0x4e5778[_0x2a2dfd(0x190)];}),_0x390ec5=_0x437921[_0x3fb885(0x219)],_0x4a4964=0x0;let _0x31d74b='';var _0x3081ca=document[_0x3fb885(0x128)]('List');if(_0x390ec5<=0x0){const _0x55b8c2=_0x3fb885(0x112);_0x31d74b+=_0x55b8c2,_0x3081ca['innerHTML']=_0x31d74b;}for(var _0x2878c7=0x0;_0x2878c7<_0x390ec5;_0x2878c7++){_0x4a4964++;if(_0x4a4964>0x19)break;var _0x4eb792=0x64*Number(_0x437921[_0x2878c7][_0x3fb885(0x190)])/0.00007023;if(Number(_0x437921[_0x2878c7][_0x3fb885(0x190)])>0.00007023){_0x4eb792-=0x64;const _0x25d723=_0x3fb885(0x287)+_0x437921[_0x2878c7][_0x3fb885(0xb5)]+_0x3fb885(0x119)+data1[_0x3fb885(0x126)]+_0x3fb885(0x15d)+_0x437921[_0x2878c7][_0x3fb885(0x1d0)]+'\x27,\x27'+_0x437921[_0x2878c7][_0x3fb885(0x17e)]+_0x3fb885(0x15d)+_0x437921[_0x2878c7][_0x3fb885(0x1fe)]+_0x3fb885(0x1e7)+_0x437921[_0x2878c7][_0x3fb885(0x190)]+_0x3fb885(0x214)+_0x437921[_0x2878c7][_0x3fb885(0x1d0)]+_0x3fb885(0x1db)+_0x437921[_0x2878c7]['completedTransactions']+_0x3fb885(0x10d)+_0x437921[_0x2878c7]['price']+_0x3fb885(0x121)+_0x437921[_0x2878c7][_0x3fb885(0x1fe)]+_0x3fb885(0x197)+_0x4eb792[_0x3fb885(0x143)](0x4)+_0x3fb885(0x13e)+_0x437921[_0x2878c7][_0x3fb885(0x244)]+_0x3fb885(0xb2);_0x31d74b+=_0x25d723,_0x3081ca[_0x3fb885(0xe6)]=_0x31d74b;}else{_0x4eb792=0x64-_0x4eb792;const _0x227aba=_0x3fb885(0x140)+_0x437921[_0x2878c7][_0x3fb885(0xb5)]+_0x3fb885(0x119)+data1[_0x3fb885(0x126)]+_0x3fb885(0x15d)+_0x437921[_0x2878c7]['userName']+_0x3fb885(0x15d)+_0x437921[_0x2878c7][_0x3fb885(0x17e)]+'\x27,\x27'+_0x437921[_0x2878c7][_0x3fb885(0x1fe)]+'\x27,\x20\x27'+_0x437921[_0x2878c7][_0x3fb885(0x190)]+_0x3fb885(0x214)+_0x437921[_0x2878c7]['userName']+_0x3fb885(0x261)+_0x437921[_0x2878c7][_0x3fb885(0x216)]+'\x20successful\x20Transactions</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201\x20Peppa\x20for\x20'+_0x437921[_0x2878c7]['price']+'USD\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x437921[_0x2878c7]['amount']+_0x3fb885(0xbb)+_0x4eb792[_0x3fb885(0x143)](0x4)+'%\x20(compared\x20to\x20current\x20market\x20price)</h2>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20style=\x22color:black\x22>'+_0x437921[_0x2878c7][_0x3fb885(0x244)]+_0x3fb885(0xb2);_0x31d74b+=_0x227aba,_0x3081ca[_0x3fb885(0xe6)]=_0x31d74b;}}_0x3081ca[_0x3fb885(0xe6)]=_0x31d74b;var _0x5a39f2=document[_0x3fb885(0x128)](_0x3fb885(0x289));_0x5a39f2[_0x3fb885(0xe6)]=_0x3fb885(0x200);});});break;case _0x5ab4f5(0x247):var _0x2f3a0e=db[_0x5ab4f5(0x235)](_0x5ab4f5(0x23d))[_0x5ab4f5(0x141)](_0x5ab4f5(0x1e5));_0x2f3a0e[_0x5ab4f5(0x288)]()['then'](_0x5ae3af=>{var _0x50af41=_0x5ab4f5,_0x37aba0=db[_0x50af41(0x235)]('users')['doc'](Auth['currentUser'][_0x50af41(0xc2)]);_0x37aba0[_0x50af41(0x288)]()['then'](_0x3af803=>{var _0x5de6e0=_0x50af41;data=_0x5ae3af['data'](),data1=_0x3af803[_0x5de6e0(0xd0)]();var _0x806b87=data[_0x5de6e0(0x286)],_0x43965=_0x806b87[_0x5de6e0(0x1f0)](function(_0x3713d7,_0x159d52){var _0x3a30a1=_0x5de6e0;return _0x3713d7[_0x3a30a1(0x190)]-_0x159d52[_0x3a30a1(0x190)];}),_0x2435bf=_0x43965['length'],_0x3d71ac=0x0;let _0x5b4b99='';var _0x2fe6d7=document[_0x5de6e0(0x128)](_0x5de6e0(0x283));if(_0x2435bf<=0x0){const _0x690a10='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>There\x20Are\x20no\x20Listings\x20here\x20yet!\x20Be\x20the\x20first\x20to\x20create\x20a\x20listing\x20in\x20this\x20category\x20by\x20going\x20to\x20the\x20Create\x20Listing\x20Page!</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';_0x5b4b99+=_0x690a10,_0x2fe6d7['innerHTML']=_0x5b4b99;}for(var _0x47f9dd=0x0;_0x47f9dd<_0x2435bf;_0x47f9dd++){_0x3d71ac++;if(_0x3d71ac>0x19)break;var _0x4d6295=0x64*Number(_0x43965[_0x47f9dd]['price'])/0.00007023;if(Number(_0x43965[_0x47f9dd]['price'])>0.00007023){_0x4d6295-=0x64;const _0xf3310a=_0x5de6e0(0x287)+_0x43965[_0x47f9dd][_0x5de6e0(0xb5)]+_0x5de6e0(0x1fb)+data1['Username']+'\x27,\x27'+_0x43965[_0x47f9dd][_0x5de6e0(0x1d0)]+_0x5de6e0(0x15d)+_0x43965[_0x47f9dd][_0x5de6e0(0x17e)]+_0x5de6e0(0x15d)+_0x43965[_0x47f9dd]['amount']+_0x5de6e0(0x1e7)+_0x43965[_0x47f9dd][_0x5de6e0(0x190)]+'\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>'+_0x43965[_0x47f9dd]['userName']+_0x5de6e0(0x1db)+_0x43965[_0x47f9dd][_0x5de6e0(0x216)]+'\x20successful\x20Transactions</h4>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201\x20Peppa\x20for\x20'+_0x43965[_0x47f9dd]['price']+'USD\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x43965[_0x47f9dd][_0x5de6e0(0x1fe)]+_0x5de6e0(0x197)+_0x4d6295[_0x5de6e0(0x143)](0x4)+_0x5de6e0(0x13e)+_0x43965[_0x47f9dd]['description']+_0x5de6e0(0xb2);_0x5b4b99+=_0xf3310a,_0x2fe6d7['innerHTML']=_0x5b4b99;}else{_0x4d6295=0x64-_0x4d6295;const _0x3fd014=_0x5de6e0(0x140)+_0x43965[_0x47f9dd]['user']+_0x5de6e0(0x1fb)+data1[_0x5de6e0(0x126)]+'\x27,\x27'+_0x43965[_0x47f9dd][_0x5de6e0(0x1d0)]+_0x5de6e0(0x15d)+_0x43965[_0x47f9dd][_0x5de6e0(0x17e)]+_0x5de6e0(0x15d)+_0x43965[_0x47f9dd]['amount']+_0x5de6e0(0x1e7)+_0x43965[_0x47f9dd][_0x5de6e0(0x190)]+_0x5de6e0(0x214)+_0x43965[_0x47f9dd][_0x5de6e0(0x1d0)]+'</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22color:black\x22>User\x20has\x20completed\x20'+_0x43965[_0x47f9dd][_0x5de6e0(0x216)]+_0x5de6e0(0x202)+_0x43965[_0x47f9dd][_0x5de6e0(0x190)]+_0x5de6e0(0x19c)+_0x43965[_0x47f9dd]['amount']+_0x5de6e0(0xbb)+_0x4d6295[_0x5de6e0(0x143)](0x4)+'%\x20(compared\x20to\x20current\x20market\x20price)</h2>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20style=\x22color:black\x22>'+_0x43965[_0x47f9dd]['description']+'</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';_0x5b4b99+=_0x3fd014,_0x2fe6d7[_0x5de6e0(0xe6)]=_0x5b4b99;}}_0x2fe6d7[_0x5de6e0(0xe6)]=_0x5b4b99;var _0xe89bb2=document[_0x5de6e0(0x128)](_0x5de6e0(0x289));_0xe89bb2[_0x5de6e0(0xe6)]=_0x5de6e0(0x296);});});break;case _0x5ab4f5(0x1d3):var _0x2f3a0e=db[_0x5ab4f5(0x235)](_0x5ab4f5(0x23d))[_0x5ab4f5(0x141)](_0x5ab4f5(0x1e5));_0x2f3a0e[_0x5ab4f5(0x288)]()[_0x5ab4f5(0xd5)](_0x1b8347=>{var _0x9d7d80=_0x5ab4f5,_0x131c74=db[_0x9d7d80(0x235)](_0x9d7d80(0x281))[_0x9d7d80(0x141)](Auth[_0x9d7d80(0x215)][_0x9d7d80(0xc2)]);_0x131c74['get']()[_0x9d7d80(0xd5)](_0x1f88bc=>{var _0xdf94d4=_0x9d7d80;data=_0x1b8347[_0xdf94d4(0xd0)](),data1=_0x1f88bc[_0xdf94d4(0xd0)]();var _0x56e36d=data[_0xdf94d4(0x278)],_0x2b0e4b=_0x56e36d[_0xdf94d4(0x1f0)](function(_0x2239e9,_0x14b3f0){var _0x49864d=_0xdf94d4;return _0x2239e9['price']-_0x14b3f0[_0x49864d(0x190)];}),_0x4498e3=_0x2b0e4b[_0xdf94d4(0x219)],_0x5585d7=0x0;let _0x108ae8='';var _0x48635f=document[_0xdf94d4(0x128)]('List');if(_0x4498e3<=0x0){const _0x1f1a0c=_0xdf94d4(0x112);_0x108ae8+=_0x1f1a0c,_0x48635f['innerHTML']=_0x108ae8;}for(var _0x536dc4=0x0;_0x536dc4<_0x4498e3;_0x536dc4++){_0x5585d7++;if(_0x5585d7>0x19)break;var _0x1d763a=0x64*Number(_0x2b0e4b[_0x536dc4][_0xdf94d4(0x190)])/0.00007023;if(Number(_0x2b0e4b[_0x536dc4][_0xdf94d4(0x190)])>0.00007023){_0x1d763a-=0x64;const _0x33e520='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20onclick=\x22openMarketplaceTransactionModal(\x27'+_0x2b0e4b[_0x536dc4]['user']+'\x27,\x27googlePay\x27,\x20\x27'+data1['Username']+_0xdf94d4(0x15d)+_0x2b0e4b[_0x536dc4]['userName']+_0xdf94d4(0x15d)+_0x2b0e4b[_0x536dc4][_0xdf94d4(0x17e)]+'\x27,\x27'+_0x2b0e4b[_0x536dc4][_0xdf94d4(0x1fe)]+_0xdf94d4(0x1e7)+_0x2b0e4b[_0x536dc4][_0xdf94d4(0x190)]+_0xdf94d4(0x214)+_0x2b0e4b[_0x536dc4]['userName']+_0xdf94d4(0x1db)+_0x2b0e4b[_0x536dc4][_0xdf94d4(0x216)]+_0xdf94d4(0x10d)+_0x2b0e4b[_0x536dc4][_0xdf94d4(0x190)]+_0xdf94d4(0x121)+_0x2b0e4b[_0x536dc4][_0xdf94d4(0x1fe)]+_0xdf94d4(0x197)+_0x1d763a[_0xdf94d4(0x143)](0x4)+'%\x20(compared\x20to\x20current\x20market\x20price)</h2>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20style=\x22color:black\x22>'+_0x2b0e4b[_0x536dc4][_0xdf94d4(0x244)]+_0xdf94d4(0xb2);_0x108ae8+=_0x33e520,_0x48635f[_0xdf94d4(0xe6)]=_0x108ae8;}else{_0x1d763a=0x64-_0x1d763a;const _0x36e512='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20onclick=\x22openMarketplaceTransactionModal(\x27'+_0x2b0e4b[_0x536dc4][_0xdf94d4(0xb5)]+_0xdf94d4(0xa2)+data1[_0xdf94d4(0x126)]+'\x27,\x27'+_0x2b0e4b[_0x536dc4][_0xdf94d4(0x1d0)]+_0xdf94d4(0x15d)+_0x2b0e4b[_0x536dc4][_0xdf94d4(0x17e)]+'\x27,\x27'+_0x2b0e4b[_0x536dc4][_0xdf94d4(0x1fe)]+_0xdf94d4(0x1e7)+_0x2b0e4b[_0x536dc4][_0xdf94d4(0x190)]+'\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>'+_0x2b0e4b[_0x536dc4][_0xdf94d4(0x1d0)]+'</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22color:black\x22>User\x20has\x20completed\x20'+_0x2b0e4b[_0x536dc4][_0xdf94d4(0x216)]+_0xdf94d4(0x202)+_0x2b0e4b[_0x536dc4]['price']+_0xdf94d4(0x19c)+_0x2b0e4b[_0x536dc4][_0xdf94d4(0x1fe)]+_0xdf94d4(0xbb)+_0x1d763a[_0xdf94d4(0x143)](0x4)+_0xdf94d4(0x13e)+_0x2b0e4b[_0x536dc4][_0xdf94d4(0x244)]+'</h5>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';_0x108ae8+=_0x36e512,_0x48635f[_0xdf94d4(0xe6)]=_0x108ae8;}}_0x48635f['innerHTML']=_0x108ae8;var _0x1df9e3=document[_0xdf94d4(0x128)]('dropbtn');_0x1df9e3[_0xdf94d4(0xe6)]='Google\x20Pay';});});break;case _0x5ab4f5(0x1f8):var _0x2f3a0e=db['collection'](_0x5ab4f5(0x23d))[_0x5ab4f5(0x141)]('Sell\x20listings');_0x2f3a0e[_0x5ab4f5(0x288)]()[_0x5ab4f5(0xd5)](_0x4bc078=>{var _0x3774eb=_0x5ab4f5,_0x4b7ba3=db[_0x3774eb(0x235)](_0x3774eb(0x281))[_0x3774eb(0x141)](Auth[_0x3774eb(0x215)][_0x3774eb(0xc2)]);_0x4b7ba3['get']()['then'](_0x5560df=>{var _0x17b939=_0x3774eb;data=_0x4bc078[_0x17b939(0xd0)](),data1=_0x5560df[_0x17b939(0xd0)]();var _0x47237a=data['eTransferListings'],_0x63de77=_0x47237a[_0x17b939(0x1f0)](function(_0x12ec8b,_0x318805){var _0x1b9fc0=_0x17b939;return _0x12ec8b[_0x1b9fc0(0x190)]-_0x318805[_0x1b9fc0(0x190)];}),_0x5bf0f8=_0x63de77[_0x17b939(0x219)],_0xa8a589=0x0;let _0x21d560='';var _0x9411f8=document[_0x17b939(0x128)](_0x17b939(0x283));if(_0x5bf0f8<=0x0){const _0x5c292d=_0x17b939(0x112);_0x21d560+=_0x5c292d,_0x9411f8[_0x17b939(0xe6)]=_0x21d560;}for(var _0x107a81=0x0;_0x107a81<_0x5bf0f8;_0x107a81++){_0xa8a589++;if(_0xa8a589>0x19)break;var _0x4b056c=0x64*Number(_0x63de77[_0x107a81]['price'])/0.00007023;if(Number(_0x63de77[_0x107a81][_0x17b939(0x190)])>0.00007023){_0x4b056c-=0x64;const _0x75c02f=_0x17b939(0x287)+_0x63de77[_0x107a81]['user']+_0x17b939(0xaf)+data1[_0x17b939(0x126)]+_0x17b939(0x15d)+_0x63de77[_0x107a81][_0x17b939(0x1d0)]+'\x27,\x27'+_0x63de77[_0x107a81]['listingID']+_0x17b939(0x15d)+_0x63de77[_0x107a81]['amount']+_0x17b939(0x1e7)+_0x63de77[_0x107a81][_0x17b939(0x190)]+'\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>'+_0x63de77[_0x107a81][_0x17b939(0x1d0)]+'</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4\x20style=\x22color:black\x22>User\x20has\x20completed\x20'+_0x63de77[_0x107a81][_0x17b939(0x216)]+_0x17b939(0x10d)+_0x63de77[_0x107a81][_0x17b939(0x190)]+_0x17b939(0x121)+_0x63de77[_0x107a81][_0x17b939(0x1fe)]+_0x17b939(0x197)+_0x4b056c['toFixed'](0x4)+_0x17b939(0x13e)+_0x63de77[_0x107a81][_0x17b939(0x244)]+_0x17b939(0xb2);_0x21d560+=_0x75c02f,_0x9411f8[_0x17b939(0xe6)]=_0x21d560;}else{_0x4b056c=0x64-_0x4b056c;const _0x43c243=_0x17b939(0x140)+_0x63de77[_0x107a81]['user']+_0x17b939(0xaf)+data1[_0x17b939(0x126)]+_0x17b939(0x15d)+_0x63de77[_0x107a81]['userName']+'\x27,\x27'+_0x63de77[_0x107a81][_0x17b939(0x17e)]+_0x17b939(0x15d)+_0x63de77[_0x107a81]['amount']+'\x27,\x20\x27'+_0x63de77[_0x107a81][_0x17b939(0x190)]+'\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>'+_0x63de77[_0x107a81][_0x17b939(0x1d0)]+_0x17b939(0x261)+_0x63de77[_0x107a81][_0x17b939(0x216)]+'\x20successful\x20Transactions</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201\x20Peppa\x20for\x20'+_0x63de77[_0x107a81][_0x17b939(0x190)]+_0x17b939(0x19c)+_0x63de77[_0x107a81][_0x17b939(0x1fe)]+'\x20PEPPAS\x20left\x20in\x20stock\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22color:black;\x22>\x20-'+_0x4b056c[_0x17b939(0x143)](0x4)+_0x17b939(0x13e)+_0x63de77[_0x107a81][_0x17b939(0x244)]+_0x17b939(0xb2);_0x21d560+=_0x43c243,_0x9411f8['innerHTML']=_0x21d560;}}_0x9411f8['innerHTML']=_0x21d560;var _0x511d81=document['getElementById']('dropbtn');_0x511d81[_0x17b939(0xe6)]=_0x17b939(0x20c);});});break;case _0x5ab4f5(0x124):var _0x2f3a0e=db[_0x5ab4f5(0x235)](_0x5ab4f5(0x23d))[_0x5ab4f5(0x141)](_0x5ab4f5(0x1e5));_0x2f3a0e[_0x5ab4f5(0x288)]()[_0x5ab4f5(0xd5)](_0x5d1104=>{var _0x3ef522=_0x5ab4f5,_0x52c0de=db[_0x3ef522(0x235)](_0x3ef522(0x281))['doc'](Auth[_0x3ef522(0x215)][_0x3ef522(0xc2)]);_0x52c0de[_0x3ef522(0x288)]()[_0x3ef522(0xd5)](_0x3ccfd4=>{var _0x1ea96c=_0x3ef522;data=_0x5d1104[_0x1ea96c(0xd0)](),data1=_0x3ccfd4['data']();var _0x2b6189=data[_0x1ea96c(0xf9)],_0x34d794=_0x2b6189[_0x1ea96c(0x1f0)](function(_0x3da3d5,_0x1f9d67){var _0x5d5c2d=_0x1ea96c;return _0x3da3d5[_0x5d5c2d(0x190)]-_0x1f9d67['price'];}),_0x1ae7d3=_0x34d794[_0x1ea96c(0x219)],_0x8b68c4=0x0;let _0x1f51a5='';var _0x2c31f9=document['getElementById'](_0x1ea96c(0x283));if(_0x1ae7d3<=0x0){const _0x26bfb3=_0x1ea96c(0x112);_0x1f51a5+=_0x26bfb3,_0x2c31f9[_0x1ea96c(0xe6)]=_0x1f51a5;}for(var _0x224834=0x0;_0x224834<_0x1ae7d3;_0x224834++){_0x8b68c4++;if(_0x8b68c4>0x19)break;var _0x1bcde4=0x64*Number(_0x34d794[_0x224834][_0x1ea96c(0x190)])/0.00007023;if(Number(_0x34d794[_0x224834][_0x1ea96c(0x190)])>0.00007023){_0x1bcde4-=0x64;const _0x114f25=_0x1ea96c(0x287)+_0x34d794[_0x224834][_0x1ea96c(0xb5)]+_0x1ea96c(0x284)+data1[_0x1ea96c(0x126)]+'\x27,\x27'+_0x34d794[_0x224834]['userName']+_0x1ea96c(0x15d)+_0x34d794[_0x224834][_0x1ea96c(0x17e)]+_0x1ea96c(0x15d)+_0x34d794[_0x224834]['amount']+_0x1ea96c(0x1e7)+_0x34d794[_0x224834]['price']+'\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>'+_0x34d794[_0x224834]['userName']+_0x1ea96c(0x1db)+_0x34d794[_0x224834][_0x1ea96c(0x216)]+_0x1ea96c(0x10d)+_0x34d794[_0x224834]['price']+_0x1ea96c(0x121)+_0x34d794[_0x224834][_0x1ea96c(0x1fe)]+_0x1ea96c(0x197)+_0x1bcde4[_0x1ea96c(0x143)](0x4)+_0x1ea96c(0x13e)+_0x34d794[_0x224834][_0x1ea96c(0x244)]+_0x1ea96c(0xb2);_0x1f51a5+=_0x114f25,_0x2c31f9['innerHTML']=_0x1f51a5;}else{_0x1bcde4=0x64-_0x1bcde4;const _0x52cfa2=_0x1ea96c(0x140)+_0x34d794[_0x224834][_0x1ea96c(0xb5)]+_0x1ea96c(0x284)+data1[_0x1ea96c(0x126)]+_0x1ea96c(0x15d)+_0x34d794[_0x224834][_0x1ea96c(0x1d0)]+'\x27,\x27'+_0x34d794[_0x224834]['listingID']+'\x27,\x27'+_0x34d794[_0x224834][_0x1ea96c(0x1fe)]+_0x1ea96c(0x1e7)+_0x34d794[_0x224834][_0x1ea96c(0x190)]+_0x1ea96c(0x214)+_0x34d794[_0x224834][_0x1ea96c(0x1d0)]+_0x1ea96c(0x261)+_0x34d794[_0x224834][_0x1ea96c(0x216)]+'\x20successful\x20Transactions</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x201\x20Peppa\x20for\x20'+_0x34d794[_0x224834]['price']+_0x1ea96c(0x19c)+_0x34d794[_0x224834][_0x1ea96c(0x1fe)]+_0x1ea96c(0xbb)+_0x1bcde4[_0x1ea96c(0x143)](0x4)+'%\x20(compared\x20to\x20current\x20market\x20price)</h2>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h5\x20style=\x22color:black\x22>'+_0x34d794[_0x224834][_0x1ea96c(0x244)]+_0x1ea96c(0xb2);_0x1f51a5+=_0x52cfa2,_0x2c31f9['innerHTML']=_0x1f51a5;}}_0x2c31f9[_0x1ea96c(0xe6)]=_0x1f51a5;var _0x4dc919=document[_0x1ea96c(0x128)](_0x1ea96c(0x289));_0x4dc919[_0x1ea96c(0xe6)]='Prepaids';});});break;}else{}}function openRefill(_0x4211cd,_0x16e758){var _0x30ead9=_0x3f07ba,_0x57581e=document[_0x30ead9(0x128)]('refillModal');_0x57581e['style'][_0x30ead9(0x16a)]=_0x30ead9(0x114);let _0x5c1597='';list=document[_0x30ead9(0x128)](_0x30ead9(0x147));const _0x57621b=_0x30ead9(0x138)+_0x4211cd+_0x30ead9(0x1e7)+_0x16e758+_0x30ead9(0x21a);_0x5c1597+=_0x57621b,list['innerHTML']=_0x5c1597;}function refillPeppas(_0x17df05,_0x253c87,_0x29156e){var _0x5cdbd2=_0x3f07ba;if(_0x29156e=='\x20'||_0x29156e==null||_0x29156e=='')Alert(_0x5cdbd2(0x1ac),_0x5cdbd2(0x135),'yellow');else{if(_0x29156e>0xc34f){var _0x1b95e7=db[_0x5cdbd2(0x235)]('marketplace')['doc'](_0x5cdbd2(0x1e5)),_0x950ee7=db['collection'](_0x5cdbd2(0x281))[_0x5cdbd2(0x141)](Auth[_0x5cdbd2(0x215)][_0x5cdbd2(0xc2)]);_0x950ee7['get']()[_0x5cdbd2(0xd5)](_0x1597b5=>{var _0x52b804=_0x5cdbd2;_0x1b95e7[_0x52b804(0x288)]()[_0x52b804(0xd5)](_0x54ea3b=>{var _0x35ce74=_0x52b804;data=_0x54ea3b['data'](),data2=_0x1597b5[_0x35ce74(0xd0)]();var _0x5a12c0=data2[_0x35ce74(0x18f)];if(_0x5a12c0>=_0x29156e){_0x5a12c0-=_0x29156e;var _0x4880a2=data2['MarketplaceTransactions'],_0x5631c7=_0x4880a2[_0x35ce74(0x219)];for(var _0x26a06e=0x0;_0x26a06e<_0x5631c7;_0x26a06e++){if(_0x4880a2[_0x26a06e][_0x35ce74(0x1aa)]==_0x253c87){var _0x40661c=parseFloat(_0x4880a2[_0x26a06e][_0x35ce74(0x1fe)]);_0x40661c+=Number(_0x29156e),_0x4880a2[_0x26a06e][_0x35ce74(0x1fe)]=_0x40661c;}}switch(_0x17df05){case _0x35ce74(0x286):var _0x28349e=data[_0x35ce74(0x286)];break;case _0x35ce74(0xf0):var _0x28349e=data[_0x35ce74(0xf0)];break;case _0x35ce74(0xab):var _0x28349e=data[_0x35ce74(0xab)];break;case _0x35ce74(0x170):var _0x28349e=data[_0x35ce74(0x170)];break;case _0x35ce74(0x212):var _0x28349e=data[_0x35ce74(0x212)];break;case'giftCardListings':var _0x28349e=data['giftCardListings'];break;case _0x35ce74(0x278):var _0x28349e=data[_0x35ce74(0x278)];break;case _0x35ce74(0x1e8):var _0x28349e=data[_0x35ce74(0x1e8)];break;case _0x35ce74(0xf9):var _0x28349e=data[_0x35ce74(0xf9)];break;case'tetherListings':var _0x28349e=data[_0x35ce74(0x1c2)];break;}var _0x1e9342=_0x28349e['length'];for(var _0x26a06e=0x0;_0x26a06e<_0x1e9342;_0x26a06e++){if(_0x28349e[_0x26a06e][_0x35ce74(0x17e)]==_0x253c87){var _0x40661c=parseFloat(_0x28349e[_0x26a06e][_0x35ce74(0x1fe)]);_0x40661c+=Number(_0x29156e),_0x28349e[_0x26a06e]['amount']=_0x40661c;}}var _0x1ff50a={'ReceiverAddress':'PeppaTrade','SenderAddress':data2[_0x35ce74(0x207)],'TransactionDate':new Date(),'Amount':Number(_0x29156e),'NetworkFee':'0','send':!![]},_0x50543a=data2['Transactions'];_0x50543a[_0x35ce74(0x227)](_0x1ff50a);switch(_0x17df05){case _0x35ce74(0x286):return _0x1b95e7[_0x35ce74(0x17c)]({'applePayListings':_0x28349e})[_0x35ce74(0xd5)](()=>{var _0x5bd10e=_0x35ce74;Alert(_0x5bd10e(0x182),_0x5bd10e(0x135),_0x5bd10e(0x1f9)),_0x950ee7[_0x5bd10e(0x17c)]({'MarketplaceTransactions':_0x4880a2,'Coins':_0x5a12c0,'Transactions':_0x50543a})[_0x5bd10e(0xd5)](()=>{var _0x3fbc09=_0x5bd10e;location[_0x3fbc09(0x208)]();});})[_0x35ce74(0xf4)](_0x1dae4e=>{var _0x290e78=_0x35ce74;console[_0x290e78(0x211)](_0x290e78(0x153),_0x1dae4e);});break;case'bitcoinListings':return _0x1b95e7['update']({'bitcoinListings':_0x28349e})[_0x35ce74(0xd5)](()=>{var _0x1a6d9b=_0x35ce74;Alert(_0x1a6d9b(0x182),_0x1a6d9b(0x135),_0x1a6d9b(0x1f9)),_0x950ee7['update']({'MarketplaceTransactions':_0x4880a2,'Coins':_0x5a12c0,'Transactions':_0x50543a})[_0x1a6d9b(0xd5)](()=>{location['reload']();});})[_0x35ce74(0xf4)](_0x2e7ed1=>{var _0x22e4e4=_0x35ce74;console[_0x22e4e4(0x211)](_0x22e4e4(0x153),_0x2e7ed1);});break;case'dogecoinListings':return _0x1b95e7['update']({'dogecoinListings':_0x28349e})['then'](()=>{var _0x10a553=_0x35ce74;Alert(_0x10a553(0x182),'Profile\x20Information',_0x10a553(0x1f9)),_0x950ee7[_0x10a553(0x17c)]({'MarketplaceTransactions':_0x4880a2,'Coins':_0x5a12c0,'Transactions':_0x50543a})[_0x10a553(0xd5)](()=>{location['reload']();});})[_0x35ce74(0xf4)](_0x341af5=>{var _0xa92a54=_0x35ce74;console[_0xa92a54(0x211)]('Error\x20updating\x20document:\x20',_0x341af5);});break;case _0x35ce74(0x170):return _0x1b95e7['update']({'eTransferListings':_0x28349e})['then'](()=>{var _0x4fdd53=_0x35ce74;Alert(_0x4fdd53(0x182),_0x4fdd53(0x135),_0x4fdd53(0x1f9)),_0x950ee7[_0x4fdd53(0x17c)]({'MarketplaceTransactions':_0x4880a2,'Coins':_0x5a12c0,'Transactions':_0x50543a})[_0x4fdd53(0xd5)](()=>{var _0x235523=_0x4fdd53;location[_0x235523(0x208)]();});})[_0x35ce74(0xf4)](_0x17e779=>{var _0x4cda12=_0x35ce74;console[_0x4cda12(0x211)]('Error\x20updating\x20document:\x20',_0x17e779);});break;case _0x35ce74(0x212):return _0x1b95e7[_0x35ce74(0x17c)]({'ethereumListings':_0x28349e})[_0x35ce74(0xd5)](()=>{var _0x2319b3=_0x35ce74;Alert('listing\x20sucessfully\x20updated!','Profile\x20Information','green'),_0x950ee7[_0x2319b3(0x17c)]({'MarketplaceTransactions':_0x4880a2,'Coins':_0x5a12c0,'Transactions':_0x50543a})[_0x2319b3(0xd5)](()=>{var _0x2cfc93=_0x2319b3;location[_0x2cfc93(0x208)]();});})[_0x35ce74(0xf4)](_0x422c0e=>{var _0xce6b5f=_0x35ce74;console[_0xce6b5f(0x211)](_0xce6b5f(0x153),_0x422c0e);});break;case _0x35ce74(0xd2):return _0x1b95e7['update']({'giftCardListings':_0x28349e})['then'](()=>{var _0x22312f=_0x35ce74;Alert('listing\x20sucessfully\x20updated!',_0x22312f(0x135),'green'),_0x950ee7['update']({'MarketplaceTransactions':_0x4880a2,'Coins':_0x5a12c0,'Transactions':_0x50543a})[_0x22312f(0xd5)](()=>{var _0x334610=_0x22312f;location[_0x334610(0x208)]();});})[_0x35ce74(0xf4)](_0x44cb8f=>{var _0x5a5867=_0x35ce74;console[_0x5a5867(0x211)](_0x5a5867(0x153),_0x44cb8f);});break;case _0x35ce74(0x278):return _0x1b95e7[_0x35ce74(0x17c)]({'googlePayListings':_0x28349e})[_0x35ce74(0xd5)](()=>{var _0x483278=_0x35ce74;Alert(_0x483278(0x182),_0x483278(0x135),_0x483278(0x1f9)),_0x950ee7[_0x483278(0x17c)]({'MarketplaceTransactions':_0x4880a2,'Coins':_0x5a12c0,'Transactions':_0x50543a})[_0x483278(0xd5)](()=>{var _0x4c76a7=_0x483278;location[_0x4c76a7(0x208)]();});})[_0x35ce74(0xf4)](_0x3efd2c=>{var _0x3e3c25=_0x35ce74;console[_0x3e3c25(0x211)](_0x3e3c25(0x153),_0x3efd2c);});break;case _0x35ce74(0x1e8):return _0x1b95e7[_0x35ce74(0x17c)]({'paypalListings':_0x28349e})['then'](()=>{var _0x1fe3d9=_0x35ce74;Alert(_0x1fe3d9(0x182),'Profile\x20Information',_0x1fe3d9(0x1f9)),_0x950ee7[_0x1fe3d9(0x17c)]({'MarketplaceTransactions':_0x4880a2,'Coins':_0x5a12c0,'Transactions':_0x50543a})['then'](()=>{var _0x3acecc=_0x1fe3d9;location[_0x3acecc(0x208)]();});})[_0x35ce74(0xf4)](_0x42d480=>{var _0x69401=_0x35ce74;console[_0x69401(0x211)](_0x69401(0x153),_0x42d480);});break;case'prepaidListings':return _0x1b95e7[_0x35ce74(0x17c)]({'prepaidListings':_0x28349e})['then'](()=>{var _0x34ce4f=_0x35ce74;Alert(_0x34ce4f(0x182),_0x34ce4f(0x135),_0x34ce4f(0x1f9)),_0x950ee7[_0x34ce4f(0x17c)]({'MarketplaceTransactions':_0x4880a2,'Coins':_0x5a12c0,'Transactions':_0x50543a})['then'](()=>{var _0x10c1d3=_0x34ce4f;location[_0x10c1d3(0x208)]();});})[_0x35ce74(0xf4)](_0x42149f=>{var _0x193610=_0x35ce74;console['error'](_0x193610(0x153),_0x42149f);});break;case'tetherListings':return _0x1b95e7[_0x35ce74(0x17c)]({'tetherListings':_0x28349e})[_0x35ce74(0xd5)](()=>{var _0x6d9988=_0x35ce74;Alert('listing\x20sucessfully\x20updated!',_0x6d9988(0x135),'green'),_0x950ee7[_0x6d9988(0x17c)]({'MarketplaceTransactions':_0x4880a2,'Coins':_0x5a12c0,'Transactions':_0x50543a})[_0x6d9988(0xd5)](()=>{location['reload']();});})[_0x35ce74(0xf4)](_0xbd771c=>{var _0xc2a351=_0x35ce74;console['error'](_0xc2a351(0x153),_0xbd771c);});break;}}else Alert('You\x20cant\x20refill\x20more\x20than\x20the\x20amount\x20of\x20PEPPAS\x20you\x20have!',_0x35ce74(0x109),_0x35ce74(0x107));})['catch'](_0x5345a5=>{var _0x30500f=_0x52b804;console[_0x30500f(0x259)]('Error\x20getting\x20document:',_0x5345a5);});});}else Alert(_0x5cdbd2(0x189),_0x5cdbd2(0x109),_0x5cdbd2(0x107));}}function CloseListing(_0x4a1888,_0x48bc16){var _0x5723b7=_0x3f07ba,_0x4281c7=document[_0x5723b7(0x128)](_0x5723b7(0x299));_0x4281c7[_0x5723b7(0xea)][_0x5723b7(0x16a)]=_0x5723b7(0x114);let _0x3eb3ac='';list=document['getElementById'](_0x5723b7(0x16b));const _0x535400='<button\x20style=\x22margin-left:5%;\x22onClick=\x22CloseListingBackEnd(\x27'+_0x4a1888+_0x5723b7(0x1e7)+_0x48bc16+_0x5723b7(0x1ab);_0x3eb3ac+=_0x535400,list[_0x5723b7(0xe6)]=_0x3eb3ac;}function CloseListingBackEnd(_0x1a0f44,_0x428ac9){var _0x514c0f=_0x3f07ba,_0x47ea83=db[_0x514c0f(0x235)](_0x514c0f(0x23d))[_0x514c0f(0x141)](_0x514c0f(0x1e5)),_0x2fc086=db[_0x514c0f(0x235)](_0x514c0f(0x281))['doc'](Auth[_0x514c0f(0x215)][_0x514c0f(0xc2)]);_0x2fc086[_0x514c0f(0x288)]()[_0x514c0f(0xd5)](_0x43c64c=>{var _0x2a3244=_0x514c0f;_0x47ea83[_0x2a3244(0x288)]()['then'](_0x207762=>{var _0x17b0d6=_0x2a3244;data=_0x207762[_0x17b0d6(0xd0)](),data2=_0x43c64c[_0x17b0d6(0xd0)]();var _0x518cd2=data2[_0x17b0d6(0x18f)],_0x79c814=0x0,_0x3465d4=data2['MarketplaceTransactions'],_0x2c93e1=_0x3465d4['length'];for(var _0x3b38e1=0x0;_0x3b38e1<_0x2c93e1;_0x3b38e1++){_0x3465d4[_0x3b38e1][_0x17b0d6(0x1aa)]==_0x428ac9&&(_0x79c814=_0x3465d4[_0x3b38e1]['amount'],_0x3465d4[_0x17b0d6(0x263)](_0x3b38e1,0x1));}db[_0x17b0d6(0x235)](_0x17b0d6(0xe5))['where'](_0x17b0d6(0x1aa),'==',_0x428ac9)[_0x17b0d6(0x288)]()[_0x17b0d6(0xd5)](_0x9080fe=>{!_0x9080fe['empty']&&_0x9080fe['forEach'](_0x19c3b3=>{var _0x1dac76=_0x2eea;if(_0x19c3b3[_0x1dac76(0xa3)]){var _0xb1416b=data2[_0x1dac76(0xbc)],_0x485ba5=_0xb1416b['length'];for(var _0x1bd565=0x0;_0x1bd565<_0x485ba5;_0x1bd565++){_0x19c3b3['id']==_0xb1416b[_0x1bd565]&&_0xb1416b[_0x1dac76(0x263)](_0x1bd565,0x1);}_0x2fc086[_0x1dac76(0x17c)]({'IncomingMarketplaceTransactions':_0xb1416b});var _0x352a60=_0x19c3b3[_0x1dac76(0xd0)]();db[_0x1dac76(0x235)](_0x1dac76(0xe5))[_0x1dac76(0x141)](j)['delete']()['then'](()=>{var _0x4300f6=_0x1dac76,_0x1abb3c=db[_0x4300f6(0x235)]('users')[_0x4300f6(0x141)](j);_0x1abb3c['get']()[_0x4300f6(0xd5)](_0x2364e1=>{var _0x507277=_0x4300f6,_0x351909=_0x352a60[_0x507277(0x158)],_0x148fdf={'NotifType':_0x507277(0xc1),'NotifContent':_0x19c3b3[_0x507277(0xd0)]()[_0x507277(0x230)]+_0x507277(0xc6),'NotifTitle':_0x507277(0x198)};_0x351909['push'](_0x148fdf),_0x1abb3c[_0x507277(0x17c)]({'Notifications':_0x351909});});});}});});switch(_0x1a0f44){case'applePayListings':var _0x27c150=data[_0x17b0d6(0x286)];break;case'bitcoinListings':var _0x27c150=data[_0x17b0d6(0xf0)];break;case _0x17b0d6(0xab):var _0x27c150=data[_0x17b0d6(0xab)];break;case _0x17b0d6(0x170):var _0x27c150=data[_0x17b0d6(0x170)];break;case'ethereumListings':var _0x27c150=data['ethereumListings'];break;case'giftCardListings':var _0x27c150=data['giftCardListings'];break;case _0x17b0d6(0x278):var _0x27c150=data[_0x17b0d6(0x278)];break;case'paypalListings':var _0x27c150=data[_0x17b0d6(0x1e8)];break;case'prepaidListings':var _0x27c150=data[_0x17b0d6(0xf9)];break;case _0x17b0d6(0x1c2):var _0x27c150=data[_0x17b0d6(0x1c2)];break;}var _0x20d202=Number(_0x518cd2);_0x20d202+=Number(_0x79c814),_0x518cd2=_0x20d202;var _0x1b460e=_0x27c150[_0x17b0d6(0x219)];for(var _0x3b38e1=0x0;_0x3b38e1<_0x1b460e;_0x3b38e1++){_0x27c150[_0x3b38e1][_0x17b0d6(0x17e)]==_0x428ac9&&_0x27c150[_0x17b0d6(0x263)](_0x3b38e1,0x1);}var _0x274b3c={'ReceiverAddress':data2[_0x17b0d6(0x207)],'SenderAddress':_0x17b0d6(0x26b),'TransactionDate':new Date(),'Amount':Number(_0x79c814),'NetworkFee':'0','send':![]},_0xd2bf4d=data2[_0x17b0d6(0xc7)];_0xd2bf4d[_0x17b0d6(0x227)](_0x274b3c);switch(_0x1a0f44){case _0x17b0d6(0x286):return _0x47ea83[_0x17b0d6(0x17c)]({'applePayListings':_0x27c150})[_0x17b0d6(0xd5)](()=>{var _0x52370a=_0x17b0d6;Alert('listing\x20sucessfully\x20closed!\x20You\x20have\x20been\x20reimbursed\x20your\x20Peppacoins!',_0x52370a(0x135),_0x52370a(0x1f9)),_0x2fc086[_0x52370a(0x17c)]({'MarketplaceTransactions':_0x3465d4,'Coins':_0x518cd2,'Transactions':_0xd2bf4d})[_0x52370a(0xd5)](()=>{var _0x421535=_0x52370a;location[_0x421535(0x208)]();});})[_0x17b0d6(0xf4)](_0x21bebb=>{var _0x41c5ae=_0x17b0d6;console[_0x41c5ae(0x211)](_0x41c5ae(0x153),_0x21bebb);});break;case _0x17b0d6(0xf0):return _0x47ea83[_0x17b0d6(0x17c)]({'bitcoinListings':_0x27c150})['then'](()=>{var _0x51f80e=_0x17b0d6;Alert('listing\x20sucessfully\x20closed!\x20You\x20have\x20been\x20reimbursed\x20your\x20Peppacoins!',_0x51f80e(0x135),'green'),_0x2fc086[_0x51f80e(0x17c)]({'MarketplaceTransactions':_0x3465d4,'Coins':_0x518cd2,'Transactions':_0xd2bf4d})[_0x51f80e(0xd5)](()=>{var _0xcdc735=_0x51f80e;location[_0xcdc735(0x208)]();});})[_0x17b0d6(0xf4)](_0x2ef3da=>{var _0x5efa8e=_0x17b0d6;console[_0x5efa8e(0x211)](_0x5efa8e(0x153),_0x2ef3da);});break;case'dogecoinListings':return _0x47ea83[_0x17b0d6(0x17c)]({'dogecoinListings':_0x27c150})[_0x17b0d6(0xd5)](()=>{var _0x9e2fe0=_0x17b0d6;Alert('listing\x20sucessfully\x20closed!\x20You\x20have\x20been\x20reimbursed\x20your\x20Peppacoins!','Profile\x20Information','green'),_0x2fc086[_0x9e2fe0(0x17c)]({'MarketplaceTransactions':_0x3465d4,'Coins':_0x518cd2,'Transactions':_0xd2bf4d})[_0x9e2fe0(0xd5)](()=>{var _0x121fca=_0x9e2fe0;location[_0x121fca(0x208)]();});})[_0x17b0d6(0xf4)](_0x534ca0=>{var _0x48d9d3=_0x17b0d6;console[_0x48d9d3(0x211)](_0x48d9d3(0x153),_0x534ca0);});break;case _0x17b0d6(0x170):_0x47ea83['update']({'eTransferListings':_0x27c150})[_0x17b0d6(0xd5)](()=>{var _0x2df75b=_0x17b0d6;Alert(_0x2df75b(0x160),'Profile\x20Information',_0x2df75b(0x1f9)),_0x2fc086[_0x2df75b(0x17c)]({'MarketplaceTransactions':_0x3465d4,'Coins':_0x518cd2,'Transactions':_0xd2bf4d})[_0x2df75b(0xd5)](()=>{var _0xa98132=_0x2df75b;location[_0xa98132(0x208)]();});})[_0x17b0d6(0xf4)](_0x286384=>{var _0x2d1dcb=_0x17b0d6;console[_0x2d1dcb(0x211)](_0x2d1dcb(0x153),_0x286384);});break;case'ethereumListings':return _0x47ea83['update']({'ethereumListings':_0x27c150})[_0x17b0d6(0xd5)](()=>{var _0x350540=_0x17b0d6;Alert(_0x350540(0x160),_0x350540(0x135),_0x350540(0x1f9)),_0x2fc086['update']({'MarketplaceTransactions':_0x3465d4,'Coins':_0x518cd2,'Transactions':_0xd2bf4d})[_0x350540(0xd5)](()=>{var _0x46472c=_0x350540;location[_0x46472c(0x208)]();});})[_0x17b0d6(0xf4)](_0x189dc6=>{var _0x1f7ae2=_0x17b0d6;console[_0x1f7ae2(0x211)](_0x1f7ae2(0x153),_0x189dc6);});break;case _0x17b0d6(0xd2):return _0x47ea83['update']({'giftCardListings':_0x27c150})[_0x17b0d6(0xd5)](()=>{var _0x48a1f6=_0x17b0d6;Alert(_0x48a1f6(0x160),'Profile\x20Information',_0x48a1f6(0x1f9)),_0x2fc086['update']({'MarketplaceTransactions':_0x3465d4,'Coins':_0x518cd2,'Transactions':_0xd2bf4d})[_0x48a1f6(0xd5)](()=>{var _0x307717=_0x48a1f6;location[_0x307717(0x208)]();});})['catch'](_0x1ced62=>{var _0x107575=_0x17b0d6;console[_0x107575(0x211)](_0x107575(0x153),_0x1ced62);});break;case _0x17b0d6(0x278):return _0x47ea83[_0x17b0d6(0x17c)]({'googlePayListings':_0x27c150})[_0x17b0d6(0xd5)](()=>{var _0x59c25d=_0x17b0d6;Alert(_0x59c25d(0x160),_0x59c25d(0x135),_0x59c25d(0x1f9)),_0x2fc086[_0x59c25d(0x17c)]({'MarketplaceTransactions':_0x3465d4,'Coins':_0x518cd2,'Transactions':_0xd2bf4d})['then'](()=>{var _0x4e8c17=_0x59c25d;location[_0x4e8c17(0x208)]();});})[_0x17b0d6(0xf4)](_0x46d60b=>{var _0x40089b=_0x17b0d6;console['error'](_0x40089b(0x153),_0x46d60b);});break;case _0x17b0d6(0x1e8):return _0x47ea83[_0x17b0d6(0x17c)]({'paypalListings':_0x27c150})[_0x17b0d6(0xd5)](()=>{var _0x24c7b1=_0x17b0d6;Alert('listing\x20sucessfully\x20closed!\x20You\x20have\x20been\x20reimbursed\x20your\x20Peppacoins!','Profile\x20Information',_0x24c7b1(0x1f9)),_0x2fc086['update']({'MarketplaceTransactions':_0x3465d4,'Coins':_0x518cd2,'Transactions':_0xd2bf4d})[_0x24c7b1(0xd5)](()=>{var _0x5a6b88=_0x24c7b1;location[_0x5a6b88(0x208)]();});})['catch'](_0x4d8731=>{var _0x193076=_0x17b0d6;console[_0x193076(0x211)]('Error\x20updating\x20document:\x20',_0x4d8731);});break;case _0x17b0d6(0xf9):return _0x47ea83[_0x17b0d6(0x17c)]({'prepaidListings':_0x27c150})[_0x17b0d6(0xd5)](()=>{var _0x38e799=_0x17b0d6;Alert('listing\x20sucessfully\x20closed!\x20You\x20have\x20been\x20reimbursed\x20your\x20Peppacoins!','Profile\x20Information',_0x38e799(0x1f9)),_0x2fc086[_0x38e799(0x17c)]({'MarketplaceTransactions':_0x3465d4,'Coins':_0x518cd2,'Transactions':_0xd2bf4d})[_0x38e799(0xd5)](()=>{location['reload']();});})[_0x17b0d6(0xf4)](_0x2b9e04=>{var _0x4cfc4e=_0x17b0d6;console[_0x4cfc4e(0x211)](_0x4cfc4e(0x153),_0x2b9e04);});break;case _0x17b0d6(0x1c2):return _0x47ea83[_0x17b0d6(0x17c)]({'tetherListings':_0x27c150})[_0x17b0d6(0xd5)](()=>{var _0x448ab2=_0x17b0d6;Alert('listing\x20sucessfully\x20closed!\x20You\x20have\x20been\x20reimbursed\x20your\x20Peppacoins!',_0x448ab2(0x135),'green'),_0x2fc086[_0x448ab2(0x17c)]({'MarketplaceTransactions':_0x3465d4,'Coins':_0x518cd2,'Transactions':_0xd2bf4d})[_0x448ab2(0xd5)](()=>{var _0x327b4c=_0x448ab2;location[_0x327b4c(0x208)]();});})['catch'](_0x18dd0c=>{var _0x57e421=_0x17b0d6;console[_0x57e421(0x211)](_0x57e421(0x153),_0x18dd0c);});break;}});});}function CloseTransactions(_0x3265b0){var _0x5835e1=_0x3f07ba,_0x3101ed=document['getElementById'](_0x5835e1(0x299));_0x3101ed[_0x5835e1(0xea)][_0x5835e1(0x16a)]=_0x5835e1(0x114);let _0x5c2c4a='';list=document[_0x5835e1(0x128)](_0x5835e1(0x16b));const _0x30f50d=_0x5835e1(0x11f)+_0x3265b0+_0x5835e1(0x1ab);_0x5c2c4a+=_0x30f50d,list['innerHTML']=_0x5c2c4a;}function CloseTransactionBackEnd(_0x1ab507){var _0x4c5089=_0x3f07ba,_0x3bc136=db[_0x4c5089(0x235)]('OpenSellTransactions')['doc'](_0x1ab507),_0x382804=db['collection'](_0x4c5089(0x281))[_0x4c5089(0x141)](Auth[_0x4c5089(0x215)][_0x4c5089(0xc2)]),_0x53846a=db[_0x4c5089(0x235)](_0x4c5089(0x281))[_0x4c5089(0x141)](_0x1ab507),_0x27bbac=db['collection']('marketplace')[_0x4c5089(0x141)]('Sell\x20listings');_0x382804[_0x4c5089(0x288)]()['then'](_0x18ff98=>{var _0x5ed684=_0x4c5089;_0x3bc136[_0x5ed684(0x288)]()[_0x5ed684(0xd5)](_0x2beb7d=>{var _0x1287c2=_0x5ed684;_0x53846a[_0x1287c2(0x288)]()[_0x1287c2(0xd5)](_0x41e2ad=>{var _0x2a6e1d=_0x1287c2;_0x27bbac[_0x2a6e1d(0x288)]()[_0x2a6e1d(0xd5)](_0x8800c6=>{var _0x541071=_0x2a6e1d;data3=_0x41e2ad[_0x541071(0xd0)](),data4=_0x8800c6[_0x541071(0xd0)](),data=_0x2beb7d[_0x541071(0xd0)](),data2=_0x18ff98[_0x541071(0xd0)]();if(data[_0x541071(0x13f)]==Auth[_0x541071(0x215)][_0x541071(0xc2)]){var _0x2486ed=data2['IncomingMarketplaceTransactions'],_0x146627=_0x2486ed['length'];for(var _0x36c396=0x0;_0x36c396<_0x146627;_0x36c396++){if(_0x2486ed[_0x36c396]==_0x1ab507){_0x2486ed[_0x541071(0x263)](_0x36c396,0x1);break;}}switch(data[_0x541071(0x213)]){case _0x541071(0x247):var _0x50b7c6=data4[_0x541071(0x286)],_0x4c29af=_0x50b7c6[_0x541071(0x219)];for(var _0x36c396=0x0;_0x36c396<_0x4c29af;_0x36c396++){if(_0x50b7c6[_0x36c396][_0x541071(0x17e)]==data[_0x541071(0x1aa)]){var _0x2db9ba=Number(_0x50b7c6[_0x36c396][_0x541071(0x1fe)]);_0x2db9ba+=Number(data[_0x541071(0x1fe)]),_0x50b7c6[_0x36c396][_0x541071(0x1fe)]=_0x2db9ba;}}_0x27bbac[_0x541071(0x17c)]({'applePayListings':_0x50b7c6});break;case _0x541071(0xa9):var _0x50b7c6=data4[_0x541071(0xf0)],_0x4c29af=_0x50b7c6[_0x541071(0x219)];for(var _0x36c396=0x0;_0x36c396<_0x4c29af;_0x36c396++){if(_0x50b7c6[_0x36c396]['listingID']==data[_0x541071(0x1aa)]){var _0x2db9ba=Number(_0x50b7c6[_0x36c396][_0x541071(0x1fe)]);_0x2db9ba+=Number(data[_0x541071(0x1fe)]),_0x50b7c6[_0x36c396][_0x541071(0x1fe)]=_0x2db9ba;}}_0x27bbac[_0x541071(0x17c)]({'bitcoinListings':_0x50b7c6});break;case _0x541071(0xdc):var _0x50b7c6=data4[_0x541071(0xab)],_0x4c29af=_0x50b7c6['length'];for(var _0x36c396=0x0;_0x36c396<_0x4c29af;_0x36c396++){if(_0x50b7c6[_0x36c396][_0x541071(0x17e)]==data[_0x541071(0x1aa)]){var _0x2db9ba=Number(_0x50b7c6[_0x36c396][_0x541071(0x1fe)]);_0x2db9ba+=Number(data['amount']),_0x50b7c6[_0x36c396][_0x541071(0x1fe)]=_0x2db9ba;}}_0x27bbac[_0x541071(0x17c)]({'dogecoinListings':_0x50b7c6});break;case _0x541071(0x1f8):var _0x50b7c6=data4[_0x541071(0x170)],_0x4c29af=_0x50b7c6[_0x541071(0x219)];for(var _0x36c396=0x0;_0x36c396<_0x4c29af;_0x36c396++){if(_0x50b7c6[_0x36c396][_0x541071(0x17e)]==data['listingId']){var _0x2db9ba=Number(_0x50b7c6[_0x36c396][_0x541071(0x1fe)]);_0x2db9ba+=Number(data[_0x541071(0x1fe)]),_0x50b7c6[_0x36c396]['amount']=_0x2db9ba;}}_0x27bbac[_0x541071(0x17c)]({'eTransferListings':_0x50b7c6});break;case'ethereum':var _0x50b7c6=data4[_0x541071(0x212)],_0x4c29af=_0x50b7c6[_0x541071(0x219)];for(var _0x36c396=0x0;_0x36c396<_0x4c29af;_0x36c396++){if(_0x50b7c6[_0x36c396][_0x541071(0x17e)]==data[_0x541071(0x1aa)]){var _0x2db9ba=Number(_0x50b7c6[_0x36c396]['amount']);_0x2db9ba+=Number(data['amount']),_0x50b7c6[_0x36c396]['amount']=_0x2db9ba;}}_0x27bbac[_0x541071(0x17c)]({'ethereumListings':_0x50b7c6});break;case'giftCard':var _0x50b7c6=data4[_0x541071(0xd2)],_0x4c29af=_0x50b7c6[_0x541071(0x219)];for(var _0x36c396=0x0;_0x36c396<_0x4c29af;_0x36c396++){if(_0x50b7c6[_0x36c396][_0x541071(0x17e)]==data[_0x541071(0x1aa)]){var _0x2db9ba=Number(_0x50b7c6[_0x36c396]['amount']);_0x2db9ba+=Number(data[_0x541071(0x1fe)]),_0x50b7c6[_0x36c396][_0x541071(0x1fe)]=_0x2db9ba;}}_0x27bbac[_0x541071(0x17c)]({'giftCardListings':_0x50b7c6});break;case _0x541071(0x1d3):var _0x50b7c6=data4[_0x541071(0x278)],_0x4c29af=_0x50b7c6['length'];for(var _0x36c396=0x0;_0x36c396<_0x4c29af;_0x36c396++){if(_0x50b7c6[_0x36c396][_0x541071(0x17e)]==data[_0x541071(0x1aa)]){var _0x2db9ba=Number(_0x50b7c6[_0x36c396][_0x541071(0x1fe)]);_0x2db9ba+=Number(data[_0x541071(0x1fe)]),_0x50b7c6[_0x36c396][_0x541071(0x1fe)]=_0x2db9ba;}}_0x27bbac[_0x541071(0x17c)]({'googlePayListings':_0x50b7c6});break;case _0x541071(0x23c):var _0x50b7c6=data4[_0x541071(0x1e8)],_0x4c29af=_0x50b7c6['length'];for(var _0x36c396=0x0;_0x36c396<_0x4c29af;_0x36c396++){if(_0x50b7c6[_0x36c396]['listingID']==data[_0x541071(0x1aa)]){var _0x2db9ba=Number(_0x50b7c6[_0x36c396][_0x541071(0x1fe)]);_0x2db9ba+=Number(data[_0x541071(0x1fe)]),_0x50b7c6[_0x36c396][_0x541071(0x1fe)]=_0x2db9ba;}}_0x27bbac[_0x541071(0x17c)]({'paypalListings':_0x50b7c6});break;case'prepaid':var _0x50b7c6=data4[_0x541071(0xf9)],_0x4c29af=_0x50b7c6['length'];for(var _0x36c396=0x0;_0x36c396<_0x4c29af;_0x36c396++){if(_0x50b7c6[_0x36c396][_0x541071(0x17e)]==data[_0x541071(0x1aa)]){var _0x2db9ba=Number(_0x50b7c6[_0x36c396][_0x541071(0x1fe)]);_0x2db9ba+=Number(data['amount']),_0x50b7c6[_0x36c396][_0x541071(0x1fe)]=_0x2db9ba;}}_0x27bbac[_0x541071(0x17c)]({'prepaidListings':_0x50b7c6});break;case _0x541071(0x15f):var _0x50b7c6=data4[_0x541071(0x1c2)],_0x4c29af=_0x50b7c6[_0x541071(0x219)];for(var _0x36c396=0x0;_0x36c396<_0x4c29af;_0x36c396++){if(_0x50b7c6[_0x36c396][_0x541071(0x17e)]==data['listingId']){var _0x2db9ba=Number(_0x50b7c6[_0x36c396][_0x541071(0x1fe)]);_0x2db9ba+=Number(data[_0x541071(0x1fe)]),_0x50b7c6[_0x36c396][_0x541071(0x1fe)]=_0x2db9ba;}}_0x27bbac[_0x541071(0x17c)]({'tetherListings':_0x50b7c6});break;}var _0x365b51=data3[_0x541071(0x1d6)],_0x146627=_0x365b51['length'];for(var _0x36c396=0x0;_0x36c396<_0x146627;_0x36c396++){if(data[_0x541071(0x1aa)]==_0x365b51[_0x36c396][_0x541071(0x1aa)]){var _0x2db9ba=Number(_0x365b51[_0x36c396][_0x541071(0x1fe)]);_0x2db9ba+=Number(data[_0x541071(0x1fe)]),_0x365b51[_0x36c396][_0x541071(0x1fe)]=_0x2db9ba,_0x382804[_0x541071(0x17c)]({'MarketplaceTransactions':_0x365b51});}}var _0x4699dd={'NotifType':_0x541071(0xc1),'NotifContent':data[_0x541071(0x230)]+'\x20Has\x20cancelled\x20your\x20transaction\x20request!\x20Got\x20scammed\x20or\x20think\x20there\x20was\x20a\x20mistake?\x20Join\x20our\x20discord\x20server\x20and\x20create\x20a\x20ticket\x20or\x20proceed\x20to\x20the\x20report\x20a\x20problem\x20page!\x20Make\x20sure\x20to\x20copy\x20the\x20username\x20of\x20the\x20seller.','NotifTitle':_0x541071(0x198)},_0x30aeee=data3[_0x541071(0x158)];_0x30aeee['push'](_0x4699dd),_0x3bc136['delete']()[_0x541071(0xd5)](()=>{var _0x120db0=_0x541071;Alert(_0x120db0(0x122),_0x120db0(0x135),_0x120db0(0x1f9)),_0x382804['update']({'IncomingMarketplaceTransactions':_0x2486ed})[_0x120db0(0xd5)](()=>{var _0x9c1be1=_0x120db0;_0x53846a[_0x9c1be1(0x17c)]({'Notifications':_0x30aeee})[_0x9c1be1(0xd5)](()=>{location['reload']();});});})[_0x541071(0xf4)](_0x36932f=>{var _0x538fe0=_0x541071;console[_0x538fe0(0x211)](_0x538fe0(0x1ba),_0x36932f);});}else Alert(_0x541071(0x18c),_0x541071(0x146),_0x541071(0xc1));});});});});}function CompleteTransactions(_0x529782){var _0x4f4c00=_0x3f07ba,_0x127cef=document['getElementById']('finishModal');_0x127cef[_0x4f4c00(0xea)][_0x4f4c00(0x16a)]=_0x4f4c00(0x114);let _0x50a1a6='';list=document[_0x4f4c00(0x128)]('buttonF');const _0x116676=_0x4f4c00(0x1a2)+_0x529782+'\x27)\x0a\x20\x20\x20\x20\x22\x20class\x20=\x20\x22button2\x22\x20id=\x22startTransaction\x22>Finish\x20Transaction!</button>';_0x50a1a6+=_0x116676,list[_0x4f4c00(0xe6)]=_0x50a1a6;}function CompleteTrnasactionBackEnd(_0x15780c){var _0x4d6bfc=_0x3f07ba,_0x3aa407=db[_0x4d6bfc(0x235)](_0x4d6bfc(0xe5))['doc'](_0x15780c),_0x184446=db[_0x4d6bfc(0x235)](_0x4d6bfc(0x281))[_0x4d6bfc(0x141)](Auth[_0x4d6bfc(0x215)][_0x4d6bfc(0xc2)]),_0x4c1823=db[_0x4d6bfc(0x235)](_0x4d6bfc(0x281))[_0x4d6bfc(0x141)](_0x15780c),_0x4efa86=db['collection'](_0x4d6bfc(0x23d))[_0x4d6bfc(0x141)]('Sell\x20listings');_0x184446[_0x4d6bfc(0x288)]()[_0x4d6bfc(0xd5)](_0x8a0f9d=>{var _0x4c4254=_0x4d6bfc;_0x3aa407['get']()[_0x4c4254(0xd5)](_0x59c6f5=>{var _0x2c0ae8=_0x4c4254;_0x4c1823['get']()[_0x2c0ae8(0xd5)](_0x1d8260=>{var _0x4a2de3=_0x2c0ae8;_0x4efa86[_0x4a2de3(0x288)]()['then'](_0x4a5844=>{var _0x5a32b4=_0x4a2de3;data4=_0x4a5844[_0x5a32b4(0xd0)](),data3=_0x1d8260[_0x5a32b4(0xd0)](),data=_0x59c6f5[_0x5a32b4(0xd0)](),data2=_0x8a0f9d[_0x5a32b4(0xd0)]();var _0xb0b78c=data[_0x5a32b4(0x1fe)],_0x5f1206=data['type'];switch(_0x5f1206){case _0x5a32b4(0x247):var _0xd2af03=data4[_0x5a32b4(0x286)],_0x2f4087=_0xd2af03[_0x5a32b4(0x219)];for(var _0x1b9ece=0x0;_0x1b9ece<_0x2f4087;_0x1b9ece++){_0xd2af03[_0x1b9ece][_0x5a32b4(0x17e)]==data['listingId']&&_0xd2af03[_0x1b9ece][_0x5a32b4(0x216)]++;}_0x4efa86[_0x5a32b4(0x17c)]({'applePayListings':_0xd2af03});break;case'bitcoin':var _0xd2af03=data4[_0x5a32b4(0xf0)],_0x2f4087=_0xd2af03[_0x5a32b4(0x219)];for(var _0x1b9ece=0x0;_0x1b9ece<_0x2f4087;_0x1b9ece++){_0xd2af03[_0x1b9ece][_0x5a32b4(0x17e)]==data[_0x5a32b4(0x1aa)]&&_0xd2af03[_0x1b9ece][_0x5a32b4(0x216)]++;}_0x4efa86[_0x5a32b4(0x17c)]({'bitcoinListings':_0xd2af03});break;case _0x5a32b4(0xdc):var _0xd2af03=data4[_0x5a32b4(0xab)],_0x2f4087=_0xd2af03[_0x5a32b4(0x219)];for(var _0x1b9ece=0x0;_0x1b9ece<_0x2f4087;_0x1b9ece++){_0xd2af03[_0x1b9ece][_0x5a32b4(0x17e)]==data[_0x5a32b4(0x1aa)]&&_0xd2af03[_0x1b9ece][_0x5a32b4(0x216)]++;}_0x4efa86[_0x5a32b4(0x17c)]({'dogecoinListings':_0xd2af03});break;case _0x5a32b4(0x1f8):var _0xd2af03=data4[_0x5a32b4(0x170)],_0x2f4087=_0xd2af03['length'];for(var _0x1b9ece=0x0;_0x1b9ece<_0x2f4087;_0x1b9ece++){_0xd2af03[_0x1b9ece]['listingID']==data['listingId']&&_0xd2af03[_0x1b9ece][_0x5a32b4(0x216)]++;}_0x4efa86[_0x5a32b4(0x17c)]({'eTransferListings':_0xd2af03});break;case _0x5a32b4(0x14f):var _0xd2af03=data4[_0x5a32b4(0x212)],_0x2f4087=_0xd2af03[_0x5a32b4(0x219)];for(var _0x1b9ece=0x0;_0x1b9ece<_0x2f4087;_0x1b9ece++){_0xd2af03[_0x1b9ece][_0x5a32b4(0x17e)]==data['listingId']&&_0xd2af03[_0x1b9ece][_0x5a32b4(0x216)]++;}_0x4efa86['update']({'ethereumListings':_0xd2af03});break;case'giftCard':var _0xd2af03=data4[_0x5a32b4(0xd2)],_0x2f4087=_0xd2af03[_0x5a32b4(0x219)];for(var _0x1b9ece=0x0;_0x1b9ece<_0x2f4087;_0x1b9ece++){_0xd2af03[_0x1b9ece][_0x5a32b4(0x17e)]==data['listingId']&&_0xd2af03[_0x1b9ece][_0x5a32b4(0x216)]++;}_0x4efa86[_0x5a32b4(0x17c)]({'giftCardListings':_0xd2af03});break;case _0x5a32b4(0x1d3):var _0xd2af03=data4[_0x5a32b4(0x278)],_0x2f4087=_0xd2af03[_0x5a32b4(0x219)];for(var _0x1b9ece=0x0;_0x1b9ece<_0x2f4087;_0x1b9ece++){_0xd2af03[_0x1b9ece][_0x5a32b4(0x17e)]==data[_0x5a32b4(0x1aa)]&&_0xd2af03[_0x1b9ece][_0x5a32b4(0x216)]++;}_0x4efa86[_0x5a32b4(0x17c)]({'googlePayListings':_0xd2af03});break;case _0x5a32b4(0x23c):var _0xd2af03=data4['paypalListings'],_0x2f4087=_0xd2af03[_0x5a32b4(0x219)];for(var _0x1b9ece=0x0;_0x1b9ece<_0x2f4087;_0x1b9ece++){_0xd2af03[_0x1b9ece][_0x5a32b4(0x17e)]==data[_0x5a32b4(0x1aa)]&&_0xd2af03[_0x1b9ece][_0x5a32b4(0x216)]++;}_0x4efa86['update']({'paypalListings':_0xd2af03});break;case'prepaid':var _0xd2af03=data4[_0x5a32b4(0xf9)],_0x2f4087=_0xd2af03[_0x5a32b4(0x219)];for(var _0x1b9ece=0x0;_0x1b9ece<_0x2f4087;_0x1b9ece++){_0xd2af03[_0x1b9ece][_0x5a32b4(0x17e)]==data[_0x5a32b4(0x1aa)]&&_0xd2af03[_0x1b9ece][_0x5a32b4(0x216)]++;}_0x4efa86['update']({'prepaidListings':_0xd2af03});break;case _0x5a32b4(0x15f):var _0xd2af03=data4[_0x5a32b4(0x1c2)],_0x2f4087=_0xd2af03[_0x5a32b4(0x219)];for(var _0x1b9ece=0x0;_0x1b9ece<_0x2f4087;_0x1b9ece++){_0xd2af03[_0x1b9ece][_0x5a32b4(0x17e)]==data[_0x5a32b4(0x1aa)]&&_0xd2af03[_0x1b9ece][_0x5a32b4(0x216)]++;}_0x4efa86[_0x5a32b4(0x17c)]({'tetherListings':_0xd2af03});break;}var _0x454c14=data2[_0x5a32b4(0xbc)],_0x40caf2=_0x454c14[_0x5a32b4(0x219)];for(var _0x1b9ece=0x0;_0x1b9ece<_0x40caf2;_0x1b9ece++){_0x15780c==_0x454c14[_0x1b9ece]&&_0x454c14['splice'](_0x1b9ece,0x1);}var _0x18bf74=data3[_0x5a32b4(0x18f)],_0x381798=data3[_0x5a32b4(0xc7)],_0x1d924e=data3['Notifications'],_0x52a64a={'NotifType':'green','NotifContent':data2[_0x5a32b4(0x126)]+'\x20has\x20completed\x20your\x20outgoing\x20transaction!\x20Thank\x20you\x20for\x20using\x20PeppaTrade!','NotifTitle':_0x5a32b4(0x1d9)};_0x1d924e[_0x5a32b4(0x227)](_0x52a64a);var _0x16fb1d={'ReceiverAddress':data3[_0x5a32b4(0x207)],'SenderAddress':data2[_0x5a32b4(0x207)],'TransactionDate':new Date(),'Amount':Number(_0xb0b78c),'NetworkFee':'0','send':![]};_0x381798[_0x5a32b4(0x227)](_0x16fb1d),_0x3aa407[_0x5a32b4(0x1a5)]()[_0x5a32b4(0xd5)](()=>{var _0x175fe9=_0x5a32b4;Alert(_0x175fe9(0xb3),'Profile\x20Information','green'),_0x184446[_0x175fe9(0x17c)]({'IncomingMarketplaceTransactions':_0x454c14})[_0x175fe9(0xd5)](()=>{var _0xee946b=_0x175fe9;_0x4c1823[_0xee946b(0x17c)]({'Transactions':_0x381798,'Coins':_0x18bf74,'Notifications':_0x1d924e})['then'](()=>{var _0x1ab664=_0xee946b;location[_0x1ab664(0x208)]();});});})[_0x5a32b4(0xf4)](_0x1bcddc=>{var _0x5ad9b4=_0x5a32b4;console['error'](_0x5ad9b4(0x1ba),_0x1bcddc);});});});});});}function CloseOutgoingTransactions(_0x3ad128){var _0x1318b=_0x3f07ba,_0x4be795=document['getElementById'](_0x1318b(0x299));_0x4be795[_0x1318b(0xea)][_0x1318b(0x16a)]='block';let _0x155425='';list=document[_0x1318b(0x128)](_0x1318b(0x16b));const _0x18b483=_0x1318b(0x1ea)+_0x3ad128+_0x1318b(0x1ab);_0x155425+=_0x18b483,list[_0x1318b(0xe6)]=_0x155425;}function CloseOutgoingTransactionBackEnd(_0x53b524){var _0x45de90=_0x3f07ba,_0x20ee71=db[_0x45de90(0x235)]('OpenSellTransactions')[_0x45de90(0x141)](Auth['currentUser'][_0x45de90(0xc2)]),_0x2e95dd=db['collection'](_0x45de90(0x281))['doc'](Auth['currentUser']['uid']),_0x5d1ae5=db[_0x45de90(0x235)](_0x45de90(0x281))['doc'](_0x53b524),_0x4fa39a=db[_0x45de90(0x235)](_0x45de90(0x23d))[_0x45de90(0x141)]('Sell\x20listings');_0x5d1ae5[_0x45de90(0x288)]()[_0x45de90(0xd5)](_0x37dcf7=>{var _0x1b51b2=_0x45de90;_0x20ee71[_0x1b51b2(0x288)]()['then'](_0x278574=>{_0x2e95dd['get']()['then'](_0x1281b6=>{var _0x24f00a=_0x2eea;_0x4fa39a[_0x24f00a(0x288)]()[_0x24f00a(0xd5)](_0x623e05=>{var _0x2e5f6f=_0x24f00a;data3=_0x1281b6[_0x2e5f6f(0xd0)](),data4=_0x623e05['data'](),data=_0x278574[_0x2e5f6f(0xd0)](),data2=_0x37dcf7[_0x2e5f6f(0xd0)]();if(data[_0x2e5f6f(0x13f)]==_0x53b524){var _0x35c9fa=data2['IncomingMarketplaceTransactions'],_0x56b0ed=_0x35c9fa[_0x2e5f6f(0x219)];for(var _0x299860=0x0;_0x299860<_0x56b0ed;_0x299860++){if(_0x35c9fa[_0x299860]==_0x53b524){_0x35c9fa[_0x2e5f6f(0x263)](_0x299860,0x1);break;}}switch(data[_0x2e5f6f(0x213)]){case _0x2e5f6f(0x247):var _0x33369e=data4[_0x2e5f6f(0x286)],_0x1faa36=_0x33369e['length'];for(var _0x299860=0x0;_0x299860<_0x1faa36;_0x299860++){if(_0x33369e[_0x299860][_0x2e5f6f(0x17e)]==data[_0x2e5f6f(0x1aa)]){var _0x57a9ba=Number(_0x33369e[_0x299860]['amount']);_0x57a9ba+=Number(data[_0x2e5f6f(0x1fe)]),_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]=_0x57a9ba;}}_0x4fa39a[_0x2e5f6f(0x17c)]({'applePayListings':_0x33369e});break;case _0x2e5f6f(0xa9):var _0x33369e=data4[_0x2e5f6f(0xf0)],_0x1faa36=_0x33369e[_0x2e5f6f(0x219)];for(var _0x299860=0x0;_0x299860<_0x1faa36;_0x299860++){if(_0x33369e[_0x299860][_0x2e5f6f(0x17e)]==data[_0x2e5f6f(0x1aa)]){var _0x57a9ba=Number(_0x33369e[_0x299860]['amount']);_0x57a9ba+=Number(data['amount']),_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]=_0x57a9ba;}}_0x4fa39a['update']({'bitcoinListings':_0x33369e});break;case _0x2e5f6f(0xdc):var _0x33369e=data4[_0x2e5f6f(0xab)],_0x1faa36=_0x33369e['length'];for(var _0x299860=0x0;_0x299860<_0x1faa36;_0x299860++){if(_0x33369e[_0x299860][_0x2e5f6f(0x17e)]==data[_0x2e5f6f(0x1aa)]){var _0x57a9ba=Number(_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]);_0x57a9ba+=Number(data[_0x2e5f6f(0x1fe)]),_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]=_0x57a9ba;}}_0x4fa39a[_0x2e5f6f(0x17c)]({'dogecoinListings':_0x33369e});break;case _0x2e5f6f(0x1f8):var _0x33369e=data4[_0x2e5f6f(0x170)],_0x1faa36=_0x33369e['length'];for(var _0x299860=0x0;_0x299860<_0x1faa36;_0x299860++){if(_0x33369e[_0x299860][_0x2e5f6f(0x17e)]==data[_0x2e5f6f(0x1aa)]){var _0x57a9ba=Number(_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]);_0x57a9ba+=Number(data[_0x2e5f6f(0x1fe)]),_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]=_0x57a9ba;}}_0x4fa39a[_0x2e5f6f(0x17c)]({'eTransferListings':_0x33369e});break;case _0x2e5f6f(0x14f):var _0x33369e=data4[_0x2e5f6f(0x212)],_0x1faa36=_0x33369e['length'];for(var _0x299860=0x0;_0x299860<_0x1faa36;_0x299860++){if(_0x33369e[_0x299860]['listingID']==data[_0x2e5f6f(0x1aa)]){var _0x57a9ba=Number(_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]);_0x57a9ba+=Number(data['amount']),_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]=_0x57a9ba;}}_0x4fa39a[_0x2e5f6f(0x17c)]({'ethereumListings':_0x33369e});break;case'giftCard':var _0x33369e=data4[_0x2e5f6f(0xd2)],_0x1faa36=_0x33369e[_0x2e5f6f(0x219)];for(var _0x299860=0x0;_0x299860<_0x1faa36;_0x299860++){if(_0x33369e[_0x299860]['listingID']==data[_0x2e5f6f(0x1aa)]){var _0x57a9ba=Number(_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]);_0x57a9ba+=Number(data[_0x2e5f6f(0x1fe)]),_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]=_0x57a9ba;}}_0x4fa39a[_0x2e5f6f(0x17c)]({'giftCardListings':_0x33369e});break;case _0x2e5f6f(0x1d3):var _0x33369e=data4[_0x2e5f6f(0x278)],_0x1faa36=_0x33369e[_0x2e5f6f(0x219)];for(var _0x299860=0x0;_0x299860<_0x1faa36;_0x299860++){if(_0x33369e[_0x299860][_0x2e5f6f(0x17e)]==data[_0x2e5f6f(0x1aa)]){var _0x57a9ba=Number(_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]);_0x57a9ba+=Number(data[_0x2e5f6f(0x1fe)]),_0x33369e[_0x299860]['amount']=_0x57a9ba;}}_0x4fa39a[_0x2e5f6f(0x17c)]({'googlePayListings':_0x33369e});break;case _0x2e5f6f(0x23c):var _0x33369e=data4[_0x2e5f6f(0x1e8)],_0x1faa36=_0x33369e['length'];for(var _0x299860=0x0;_0x299860<_0x1faa36;_0x299860++){if(_0x33369e[_0x299860][_0x2e5f6f(0x17e)]==data[_0x2e5f6f(0x1aa)]){var _0x57a9ba=Number(_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]);_0x57a9ba+=Number(data['amount']),_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]=_0x57a9ba;}}_0x4fa39a[_0x2e5f6f(0x17c)]({'paypalListings':_0x33369e});break;case'prepaid':var _0x33369e=data4[_0x2e5f6f(0xf9)],_0x1faa36=_0x33369e[_0x2e5f6f(0x219)];for(var _0x299860=0x0;_0x299860<_0x1faa36;_0x299860++){if(_0x33369e[_0x299860][_0x2e5f6f(0x17e)]==data['listingId']){var _0x57a9ba=Number(_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]);_0x57a9ba+=Number(data['amount']),_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]=_0x57a9ba;}}_0x4fa39a[_0x2e5f6f(0x17c)]({'prepaidListings':_0x33369e});break;case _0x2e5f6f(0x15f):var _0x33369e=data4[_0x2e5f6f(0x1c2)],_0x1faa36=_0x33369e[_0x2e5f6f(0x219)];for(var _0x299860=0x0;_0x299860<_0x1faa36;_0x299860++){if(_0x33369e[_0x299860][_0x2e5f6f(0x17e)]==data[_0x2e5f6f(0x1aa)]){var _0x57a9ba=Number(_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]);_0x57a9ba+=Number(data['amount']),_0x33369e[_0x299860][_0x2e5f6f(0x1fe)]=_0x57a9ba;}}_0x4fa39a[_0x2e5f6f(0x17c)]({'tetherListings':_0x33369e});break;}var _0x41b3ad=data3[_0x2e5f6f(0x1d6)],_0x56b0ed=_0x41b3ad[_0x2e5f6f(0x219)];for(var _0x299860=0x0;_0x299860<_0x56b0ed;_0x299860++){if(data['listingId']==_0x41b3ad[_0x299860][_0x2e5f6f(0x1aa)]){var _0x57a9ba=Number(_0x41b3ad[_0x299860][_0x2e5f6f(0x1fe)]);_0x57a9ba+=Number(data['amount']),_0x41b3ad[_0x299860][_0x2e5f6f(0x1fe)]=_0x57a9ba,_0x5d1ae5[_0x2e5f6f(0x17c)]({'MarketplaceTransactions':_0x41b3ad});}}var _0x289ed5={'NotifType':_0x2e5f6f(0xc1),'NotifContent':data3[_0x2e5f6f(0x126)]+_0x2e5f6f(0xa0),'NotifTitle':_0x2e5f6f(0x198)},_0x3d44cc=data3[_0x2e5f6f(0x158)];_0x3d44cc[_0x2e5f6f(0x227)](_0x289ed5),_0x20ee71[_0x2e5f6f(0x1a5)]()[_0x2e5f6f(0xd5)](()=>{var _0x1c49e5=_0x2e5f6f;Alert(_0x1c49e5(0x1a8),_0x1c49e5(0x135),_0x1c49e5(0x1f9)),_0x5d1ae5[_0x1c49e5(0x17c)]({'IncomingMarketplaceTransactions':_0x35c9fa})[_0x1c49e5(0xd5)](()=>{var _0x3fd74c=_0x1c49e5;_0x2e95dd[_0x3fd74c(0x17c)]({'Notifications':_0x3d44cc})['then'](()=>{var _0x475a09=_0x3fd74c;location[_0x475a09(0x208)]();});});})['catch'](_0x2f8a11=>{var _0x5299db=_0x2e5f6f;console[_0x5299db(0x211)](_0x5299db(0x1ba),_0x2f8a11);});}else Alert(_0x2e5f6f(0x18c),_0x2e5f6f(0x146),_0x2e5f6f(0xc1));});});});});}function ReportUser(_0x4823ce){var _0x3c6873=_0x3f07ba;db[_0x3c6873(0x235)]('sellerReports')[_0x3c6873(0x141)](_0x4823ce)['set']({'status':'scammer'}),setTimeout(()=>{CloseOutgoingTransactionBackEnd(_0x4823ce);},0x1388),Alert(_0x3c6873(0x104),_0x3c6873(0x109),_0x3c6873(0xc1));}function InitializeProfile(){var _0x58785a=_0x3f07ba,_0x8a5f6d=db[_0x58785a(0x235)](_0x58785a(0x281))[_0x58785a(0x141)](Auth['currentUser'][_0x58785a(0xc2)]);_0x8a5f6d[_0x58785a(0x288)]()[_0x58785a(0xd5)](_0x5ad4a5=>{var _0x4dcbdc=_0x58785a,_0x5620cd=_0x5ad4a5['data']();let _0x328a5b='';var _0x369abb=document[_0x4dcbdc(0x128)](_0x4dcbdc(0x23a)),_0x387a93=_0x5620cd['MarketplaceTransactions'],_0x173934=_0x387a93['length'];if(_0x173934>=0x1)for(var _0x534ffe=0x0;_0x534ffe<_0x173934;_0x534ffe++){var _0x3e3f9d=_0x387a93[_0x534ffe];const _0x49a84b=_0x4dcbdc(0x1b2)+(_0x534ffe+0x1)+_0x4dcbdc(0x285)+_0x3e3f9d[_0x4dcbdc(0x228)]+_0x4dcbdc(0x22f)+_0x3e3f9d[_0x4dcbdc(0x244)]+_0x4dcbdc(0xcd)+Number(_0x3e3f9d[_0x4dcbdc(0x190)])['toFixed'](0x4)+_0x4dcbdc(0x1eb)+Number(_0x3e3f9d[_0x4dcbdc(0x1fe)])[_0x4dcbdc(0x143)](0x4)+_0x4dcbdc(0x217)+_0x3e3f9d[_0x4dcbdc(0x228)]+_0x4dcbdc(0x15d)+_0x3e3f9d[_0x4dcbdc(0x1aa)]+'\x27)\x22>Refill\x20PEPPAS</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22button1\x22onClick=\x22CloseListing(\x27'+_0x3e3f9d[_0x4dcbdc(0x228)]+_0x4dcbdc(0x15d)+_0x3e3f9d[_0x4dcbdc(0x1aa)]+_0x4dcbdc(0x25c);var _0x5548c6=document[_0x4dcbdc(0x128)]('listingsCount');_0x5548c6[_0x4dcbdc(0xe6)]=_0x4dcbdc(0x234)+(_0x534ffe+0x1)[_0x4dcbdc(0x19b)]()+_0x4dcbdc(0x1ff),_0x328a5b=_0x49a84b,_0x369abb['innerHTML']+=_0x328a5b;}else{const _0x505713=_0x4dcbdc(0x171);_0x328a5b=_0x505713,_0x369abb[_0x4dcbdc(0xe6)]+=_0x328a5b;}var _0x213933=_0x5620cd[_0x4dcbdc(0xbc)],_0x43aab3=_0x213933[_0x4dcbdc(0x219)],_0x14c289=document['getElementById'](_0x4dcbdc(0xcf));if(_0x43aab3>=0x1)for(var _0x534ffe=0x0;_0x534ffe<_0x43aab3;_0x534ffe++){var _0x1d025e=_0x213933[_0x534ffe],_0x2761fe=db[_0x4dcbdc(0x235)](_0x4dcbdc(0xe5))[_0x4dcbdc(0x141)](_0x1d025e);_0x2761fe[_0x4dcbdc(0x288)]()[_0x4dcbdc(0xd5)](_0x14bc75=>{var _0x14c0da=_0x4dcbdc,_0xe34ee2=_0x14bc75['data']();const _0x5a9a1a=_0x14c0da(0x21b)+_0x534ffe+'</h1>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20style=\x22color:black\x22>Request\x20from\x20'+_0xe34ee2[_0x14c0da(0x1d0)]+_0x14c0da(0x103)+_0xe34ee2[_0x14c0da(0x213)]+_0x14c0da(0x1a7)+_0xe34ee2[_0x14c0da(0x244)]+'</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+Number(_0xe34ee2[_0x14c0da(0x1fe)])[_0x14c0da(0x143)](0x4)+_0x14c0da(0x1f1)+Number(_0xe34ee2[_0x14c0da(0x20e)])['toFixed'](0x4)+_0x14c0da(0x132)+_0x1d025e+_0x14c0da(0x293)+_0x1d025e+_0x14c0da(0x1cb);console[_0x14c0da(0x259)](_0x534ffe);var _0x38f1a7=document[_0x14c0da(0x128)](_0x14c0da(0xc8));_0x38f1a7['innerHTML']='Here\x20are\x20your\x20incoming\x20requests\x20(\x20'+_0x534ffe['toString']()+'/100\x20)',_0x328a5b=_0x5a9a1a,_0x14c289[_0x14c0da(0xe6)]+=_0x328a5b;});}else{const _0x29f1f1=_0x4dcbdc(0x210);_0x328a5b=_0x29f1f1,_0x14c289['innerHTML']+=_0x328a5b;}var _0x9ee478=document[_0x4dcbdc(0x128)](_0x4dcbdc(0x224)),_0x4da6e9=db['collection'](_0x4dcbdc(0xe5))[_0x4dcbdc(0x141)](Auth[_0x4dcbdc(0x215)]['uid']);_0x4da6e9!=null&&_0x4da6e9[_0x4dcbdc(0x288)]()[_0x4dcbdc(0xd5)](_0x56f9dc=>{var _0x2ce59d=_0x4dcbdc;if(_0x56f9dc[_0x2ce59d(0xa3)]){var _0x478880=_0x56f9dc[_0x2ce59d(0xd0)]();const _0x4c8174=_0x2ce59d(0xee)+_0x478880[_0x2ce59d(0x230)]+_0x2ce59d(0x12c)+_0x478880[_0x2ce59d(0x213)]+_0x2ce59d(0x25f)+_0x478880[_0x2ce59d(0x244)]+_0x2ce59d(0xbe)+Number(_0x478880[_0x2ce59d(0x1fe)])[_0x2ce59d(0x143)](0x4)+_0x2ce59d(0x17f)+Number(_0x478880[_0x2ce59d(0x20e)])['toFixed'](0x4)+'\x20USD\x20due\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<Br><Br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22button1\x22\x20onClick=\x22ReportUser(\x27'+_0x478880[_0x2ce59d(0x13f)]+_0x2ce59d(0x1e0)+_0x478880[_0x2ce59d(0x13f)]+'\x27)\x22>Close\x20Transaction</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</li>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';var _0x3f7fc6=document[_0x2ce59d(0x128)](_0x2ce59d(0x15a));_0x3f7fc6[_0x2ce59d(0xe6)]=_0x2ce59d(0x1b0),_0x328a5b=_0x4c8174,_0x9ee478[_0x2ce59d(0xe6)]+=_0x328a5b,console['log'](_0x9ee478);}else{const _0x253e01=_0x2ce59d(0x12a);_0x328a5b=_0x253e01,_0x9ee478[_0x2ce59d(0xe6)]+=_0x328a5b;}});});}