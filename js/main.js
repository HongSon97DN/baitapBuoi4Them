// Bài 1
/**
 * Khối 1: input
 * ngày, tháng, năm
 * 
 * Khối 2: Các bước xử lý
 * tạo biến và khai báo giá trị biến: ngay, thang, nam
 * tháng 31 ngày: 1, 3, 5, 7, 8, 10, 12
 * tháng 30 ngày: 4, 6, 9, 11
 * tháng 28 ngày: 2
 * 
 *  Nếu ngày người dùng nhập là 31 tháng(1,3,5,7,8,10) thì ngày mai tháng sẽ tăng lên 1 => ngày sẽ xét lại 01 ngày đầu tiên của tháng, năm giữ nguyên
 *  
 *  Nếu người dùng nhập ngày 30 tháng(4,6,9,11) thì ngày mai tháng sẽ tăng lên 1 => ngày sẽ xét lại 01 ngày đầu tiên của tháng, năm giữ nguyên
 * 
 *  Nếu người dùng nhập ngày 31 tháng 12 => năm sẽ tăng lên 1 && ngày và tháng xét lại 01 
 * 
 *  Nếu người dùng nhập ngày 1 tháng 1 => ngày hôm qua năm sẽ giảm 1 && xét lại ngày là 31 tháng là 12
 * 
 *  Nếu người dùng nhập ngày 28 tháng 2 => ngày mai tháng tăng lên 1
 * => ngày xét lại 01, năm giữ nguyên
 * 
 *  Các trường hợp còn lại: ngày hôm qua => ngày giảm 1
 *                          ngày mai => ngày tăng 1
 *          => tháng năm giữ nguyên
 * 
 * Khối 3: output
 * ngày hôm qua
 * ngày mai
 */

var ngay = 0;
var thang = 0;
var nam = 0;

function tinhNgayHomQua() {
    var ngay = Number(document.getElementById("ngay").value);
    var thang = Number(document.getElementById("thang").value);
    var nam = Number(document.getElementById("nam").value);

    if (ngay == 1 && thang == 1) {
        nam -= 1;
        ngay = 31;
        thang = 12;      
    } else {
        ngay -= 1;       
    }
    document.getElementById("txtResult").innerHTML = ngay + "/" + thang + "/" + nam;
}
document.getElementById("homQua").onclick = tinhNgayHomQua;

function tinhNgayMai() {
    var ngay = Number(document.getElementById("ngay").value);
    var thang = Number(document.getElementById("thang").value);
    var nam = Number(document.getElementById("nam").value);

    if (ngay == 31 && (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10)) {
        thang += 1;
        ngay = 01;
    } else if(ngay == 30 && (thang == 4 || thang == 6 || thang == 9 || thang == 11)){
        thang += 1;
        ngay = 01;
    } else if(ngay == 31 && thang == 12) {
        nam += 1;
        ngay = 01;
        thang = 01;
    } else if(ngay == 28 && thang == 2) {
        thang += 1;
        ngay = 01;
    } else {
        ngay += 1;
    }

    document.getElementById("txtResult").innerHTML = ngay + "/" + thang + "/" + nam;   
}
document.getElementById("ngayMai").onclick = tinhNgayMai;

// Bài 2
/**
 * Khối 1: input
 * tháng, năm
 * 
 * Khối 2: các bước xử lý
 * khai báo và gán giá trị biến (thang, nam)
 *    Nếu tháng thuộc (1,3,5,7,8,10,12) => 31 ngày
 *    Nếu tháng thuộc (4,6,9,11) => 30 ngày
 *    Tháng 2 ko nhuận => 28 ngày; nếu nhuận => 29 ngày
 * 
 * Khối 3: output
 * tháng đó có bao nhiêu ngày
 */

function tinhNgayTrongThang() {
    var thang = Number(document.getElementById("month").value);
    var nam = Number(document.getElementById("year").value);

    if (thang == 1 || thang == 3 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
        document.getElementById("txtResult1").innerHTML = "Tháng " + thang + " năm " + nam + " có 31 ngày";
    } else if(thang == 4 || thang == 6 || thang == 9 || thang ==11){
        document.getElementById("txtResult1").innerHTML = "Tháng " + thang + " năm " + nam + " có 30 ngày";
    } else if((thang == 2) && ((nam % 400 == 0) || (nam % 4 == 0 && nam % 100 !== 0))) {
        document.getElementById("txtResult1").innerHTML = "Tháng " + thang + " năm " + nam + " có 29 ngày";
    } else {
        document.getElementById("txtResult1").innerHTML = "Tháng bạn nhập không tồn tại !"
    }
}
document.getElementById("tinhNgay").onclick = tinhNgayTrongThang;

// Bài 3:
/**
 * Khối 1: input
 * số có 3 chữ số
 * 
 * Khối 2: các bước xử lý
 * khai báo và gán các giá trị của biến
 * soHangTram, soHangChuc, soHangDonvi
 *      VD: 586
 *      soHangTram = Math.floor(number / 100) => 5
 *      soHangChuc = Math.floor((Math.floor(number % 100)) / 10); => 8
 *      soHangDonvi = Math.floor((Math.floor(number % 100)) % 10); => 6
 *   
 * Khối 3: output
 * đọc số có 3 chữ số
 */

var number = 0;
var soHangTram = 0;
var soHangChuc = 0;
var soHangDonVi = 0;

function docSo() {
    var number = Number(document.getElementById("so3ChuSo").value);

    var soHangTram = Math.floor(number / 100);
    var soHangChuc = Math.floor((Math.floor(number % 100)) / 10);
    var soHangDonVi = Math.floor((Math.floor(number % 100)) % 10);

    if (soHangTram == 1) {
        soHangTram = "Một trăm";
    } else if(soHangTram == 2) {
        soHangTram = "Hai trăm";
    } else if(soHangTram == 3) {
        soHangTram = "Ba trăm";
    } else if(soHangTram == 4) {
        soHangTram = "Bốn trăm";
    } else if(soHangTram == 5) {
        soHangTram = "Năm trăm";
    } else if(soHangTram == 6) {
        soHangTram = "Sáu trăm";
    } else if(soHangTram == 7) {
        soHangTram = "Bảy trăm";
    } else if(soHangTram == 8) {
        soHangTram = "Tám trăm";
    } else if(soHangTram == 9) {
        soHangTram = "Chín trăm";
    } else {
        alert("Số hàng trăm ko xác định được");
    }

    if (soHangChuc == 1) {
        soHangChuc = "một mươi";
    } else if(soHangChuc == 2) {
        soHangChuc = "hai mươi";
    } else if(soHangChuc == 3) {
        soHangChuc = "ba mươi";
    } else if(soHangChuc == 4) {
        soHangChuc = "bốn mươi";
    } else if(soHangChuc == 5) {
        soHangChuc = "năm mươi";
    } else if(soHangChuc == 6) {
        soHangChuc = "sáu mươi";
    } else if(soHangChuc == 7) {
        soHangChuc = "bảy mươi";
    } else if(soHangChuc == 8) {
        soHangChuc = "tám mươi";
    } else if(soHangChuc == 9) {
        soHangChuc = "chín mươi";
    } else {
        alert("Số hàng chục ko xác định được");
    }

    if (soHangDonVi == 1) {
        soHangDonVi = "một";
    } else if(soHangDonVi == 2) {
        soHangDonVi = "hai";
    } else if(soHangDonVi == 3) {
        soHangDonVi = "ba";
    } else if(soHangDonVi == 4) {
        soHangDonVi = "bốn";
    } else if(soHangDonVi == 5) {
        soHangDonVi = "năm";
    } else if(soHangDonVi == 6) {
        soHangDonVi = "sáu";
    } else if(soHangDonVi == 7) {
        soHangDonVi = "bảy";
    } else if(soHangDonVi == 8) {
        soHangDonVi = "tám";
    } else if(soHangDonVi == 9) {
        soHangDonVi = "chín";
    } else {
        alert("Số hàng đơn vị ko xác định được");
    }
    document.getElementById("txtResult2").innerHTML = soHangTram +" "+ soHangChuc +" "+ soHangDonVi;
}
document.getElementById("docSo").onclick = docSo;

// Bài 4
/**
 * Khối 1: input
 * tên SV 1, tọa độ x1,y1
 * tên SV 2, tọa độ x2,y2
 * tên SV 3, tọa độ x3,y3
 * trường học, tọa độ x,y
 * 
 * Khối 2: các bước xử lý
 * khai báo và gán giá trị biến 
 * tenSV1, x1, y1
 * tenSV2, x2, y2
 * tenSV3, x3, y3
 * x,y (trường học)
 *   Tính độ dài của nhà SV đến trường d^2 = (x1 -x)^2 + (y1 -y)^2
 *   So sánh độ dài d1(x1,y1), d2(x2,y2), d3(x3,y3) => vd: d1 lớn nhất
 *      => Sinh viên 1 xa trường nhất
 *      
 * Khối 3: output
 * tên SV xa trường nhất
 */

var tenSV1 = "";
var tenSV2 = "";
var tenSV3 = "";
var x1 = 0;
var y1 = 0;
var x2 = 0;
var y2 = 0;
var x3 = 0;
var y3 = 0;
var x = 0;
var y = 0;

function svXaTruongNhat() {
    var tenSV1 = document.getElementById("tenSV1").value;
    var tenSV2 = document.getElementById("tenSV2").value;
    var tenSV3 = document.getElementById("tenSV3").value;

    var x1 = Number(document.getElementById("x1").value);
    var x2 = Number(document.getElementById("x2").value);
    var x3 = Number(document.getElementById("x3").value);

    var y1 = Number(document.getElementById("y1").value);
    var y2 = Number(document.getElementById("y2").value);
    var y3 = Number(document.getElementById("y3").value);

    var x = Number(document.getElementById("x").value);
    var y = Number(document.getElementById("y").value);

    var d1 = Math.sqrt(Math.pow((x1 - x), 2) + Math.pow((y1 - y), 2));
    var d2 = Math.sqrt(Math.pow((x2 - x), 2) + Math.pow((y2 - y), 2));
    var d3 = Math.sqrt(Math.pow((x3 - x), 2) + Math.pow((y3 - y), 2));

    if (d1 > d2 && d1 > d3) {
        document.getElementById("txtResult3").innerHTML = tenSV1 + " là SV xa trường nhất";
    } else if (d2 > d1 && d2 > d3) {
        document.getElementById("txtResult3").innerHTML = tenSV2 + " là SV xa trường nhất";
    } else if(d3 > d1 && d3 > d2){
        document.getElementById("txtResult3").innerHTML = tenSV3 + " là SV xa trường nhất";
    }
}
document.getElementById("tim").onclick = svXaTruongNhat;
