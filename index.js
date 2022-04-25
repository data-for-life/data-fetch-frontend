setInterval(()=>{
    const cur = new Date()
    document.getElementById('current_time').innerHTML = cur;
    var year_str = String(cur.getFullYear())
    var mon_str = String(cur.getMonth()+1)
    var date_str = String(cur.getDate())
    if(cur.getFullYear()<10){
        year_str = "0"+year_str;
    }
    if(cur.getMonth()+1<10){
        mon_str = "0"+mon_str;
    }
    if(cur.getDate()<10){
        date_str = "0"+date_str;
    }
    document.getElementById('cur_time').value = year_str +"-"+mon_str+"-"+date_str;
}, 500)