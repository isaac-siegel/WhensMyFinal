var myFirebaseRef = new Firebase("https://broncofinals.firebaseio.com/spring15");
var springStr =   "spring15";
var winterStr =   "winter15";
var fallStr =   "fall15";
var baseFirebaseStr = "https://broncofinals.firebaseio.com/";


function lookup(time){
    //console.log("Call To Lookup"+time)
    if (time == null){
        $("#output").text("No final at this time");
    }
    else{
        if(time.charAt(0) == "0"){
            time = time.substr(1,time.length)
        }
        var days = "";
        if (M.bootstrapSwitch('state')){
            days += "M";
        }
        if (Tu.bootstrapSwitch('state')){
            days += "Tu";
        }
        if (W.bootstrapSwitch('state')){
            days += "W";
        }
        if (Th.bootstrapSwitch('state')){
            days += "Th";
        }
        if (F.bootstrapSwitch('state')){
            days += "F";
        }
        //console.log(days+time)


        myFirebaseRef.child(days+time).once("value", function(snapshot) {
            console.log(snapshot.val())
            var result = snapshot.val();
            if (result == null){
                $("#output").text("No final at this time");
            }
            else{
                $("#output").text(snapshot.val());
            }
        });
    }
}

function changeQuarter(time){
    if (fall15.bootstrapSwitch('state')){
        myFirebaseRef = new Firebase(baseFirebaseStr + fallStr);
        console.log("Switched to "+fallStr);
    }
    else if (winter15.bootstrapSwitch('state')){
        myFirebaseRef = new Firebase(baseFirebaseStr + winterStr);
        console.log("Switched to " + winterStr);
    }
    else if (spring15.bootstrapSwitch('state')){
        myFirebaseRef = new Firebase(baseFirebaseStr + springStr);
        console.log("Switched to " + springStr);
    }

    lookup(time);


}





