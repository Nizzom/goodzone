var spans = document.querySelectorAll(".changeTime");
var timeArr = [
    "15:30",
    "15:30",
    "15:00",
    "15:00",
    "15:00",
    "16:00",
    "16:30",
    "16:30",
    "17:00",
    "17:00",
];
var timeM = 604800000;
var startWeek = 1662336000000;

var now = new Date(1662940800000).getTime()
if(now <= startWeek){
    spans.forEach(val=>{
        val.innerHTML = timeArr[0]
    })
} else {
    timeArr = timeArr.map((item,index)=>{
        var addTime = startWeek;
        if (index != 0) {
            addTime += timeM;
        }
        return [item, addTime]
    })
    console.log(timeArr)
    for (let index = 0; index < timeArr.length; index++) {
        const element = timeArr[index];
        if (element[1] > now){
            spans.forEach(val=>{
                val.innerHTML = element[0]
            })
            break
        }
    }
}