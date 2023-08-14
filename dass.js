function calcul(){
    var dp = 0;
    var ap = 0;
    var sp = 0;
    var ss = document.getElementsByClassName("stress");
    for (var i = 0; i < ss.length; i++) {
        if (ss[i].checked) {
            sp += parseInt(ss[i].value);
        }
    }
    var aa = document.getElementsByClassName("anxiete");
    for (var i = 0; i < aa.length; i++) {
        if (aa[i].checked) {
            ap += parseInt(aa[i].value);
        }
    }
    var dd = document.getElementsByClassName("depression");
    for (var i = 0; i < dd.length; i++) {
        if (dd[i].checked) {
            dp += parseInt(dd[i].value);
        }
    }
    if((dp >=0 && dp <= 9) || (ap >=0 && ap <= 7) || (sp >=0 && sp <= 14)){
        alert("Normal")
    }
    else if((dp >=10 && dp <= 13) || (ap >=8 && ap <= 9) || (sp >=15 && sp <= 18)){
        alert("Léger")
    }
    else if((dp >=14 && dp <= 20) || (ap >=10 && ap <= 14) || (sp >=19 && sp <= 25)){
        alert("Modéré")
    }
    else if((dp >=21 && dp <= 27) || (ap >=15 && ap <= 19) || (sp >=26 && sp <= 33)){
        alert("Sévère")
    }
    else {
        alert("Extrêmement sévère")
    }
    alert("stress : " + sp +" anxiete : " + ap + " depression : " + dp)
    
}
