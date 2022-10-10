function hesapla() {
    var bk =
        document.getElementById("birinciKenar").value;
    var ik =
        document.getElementById("ikinciKenar").value;
    var bk1 = Number(bk);
    var ik1 = Number(ik);
    var alan = bk1 * ik1;
    document.getElementById("Alan").innerHTML = alan;




}



