var mangNhanVien = [];
var kiemTra = new Validation();

document.getElementById('btnThemNV').onclick = function () {
    var nv = new NhanVien();
    nv.taiKhoan = document.querySelector('#tknv').value;
    nv.hoTen = document.querySelector('#name').value;
    nv.email = document.querySelector('#email').value;
    nv.matKhau = document.querySelector('#password').value;
    nv.ngayLam = document.querySelector('#datepicker').value;
    nv.luongCoBan = document.querySelector('#luongCB').value;
    nv.chucVu = document.querySelector('#chucvu').value;
    nv.gioLam = document.querySelector('#gioLam').value;
    nv.tongLuong = tongLuong(nv.luongCoBan, nv.chucVu);
    nv.xepLoai = xepLoai(nv.gioLam);

    var valid = true;
    valid = kiemTra.kiemTraRong(nv.taiKhoan,'tbTKNV','Tài khoản') & kiemTra.kiemTraRong(nv.hoTen,'tbTen','Họ tên') & kiemTra.kiemTraRong(nv.email,'tbEmail','Email') & kiemTra.kiemTraRong(nv.matKhau,'tbMatKhau','Mật khẩu') & kiemTra.kiemTraRong(nv.ngayLam,'tbNgay','Ngày làm') & kiemTra.kiemTraRong(nv.luongCoBan,'tbLuongCB','Lương cơ bản') & kiemTra.kiemTraRong(nv.gioLam,'tbGioLam','Giờ làm');
    
    valid = valid & kiemTra.kiemTraSo(nv.taiKhoan,'tkHopLe','Tài khoản');

    valid = valid & kiemTra.kiemTraDoDai(nv.taiKhoan,'ktDoDai','Tài khoản',4,6);

    valid = valid & kiemTra.kiemTraKyTu(nv.hoTen,'ktTen','Họ tên');

    valid = valid & kiemTra.kiemTraEmail(nv.email,'ktEmail','Email');

    valid = valid & kiemTra.kiemTraNgayLam(nv.ngayLam,'ktNgay','Ngày làm')

    valid = valid & kiemTra.kiemTraMatKhau(nv.matKhau,'ktMatKhau','Mật khẩu');

    valid = valid & kiemTra.kiemTraChucVu(nv.chucVu,'tbChucVu','chức vụ');

    valid = valid & kiemTra.kiemTraLuong(nv.luongCoBan,'ktLuongCB','Lương cơ bản');

    valid = valid & kiemTra.kiemTraGioLam(nv.gioLam,'ktGioLam','Giờ làm');


    if(!valid){
        return;
    }

    
    mangNhanVien.push(nv);
    renderTableNhanVien(mangNhanVien);
    luuLocalStorage();
}

function renderTableNhanVien(arrNhanVien) { 
    var htmlString = '';
    for (var index = 0; index < arrNhanVien.length; index++) {
        var nv = arrNhanVien[index];
        htmlString += `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.xepLoai}</td>
                <td>
                    <button class="btn btn-danger m-2" onclick="xoaNhanVien('${index}')">Xoá</button>
                    <button class="btn btn-primary " id="btnSua" data-toggle="modal"
                    data-target="#myModal" onclick="layThongTin('${nv.taiKhoan}')">Sửa</button>
                </td>
            </tr>
        `
    }
    document.getElementById('tableDanhSach').innerHTML = htmlString;
    return htmlString; 
}


function layThongTin(tkClick) {
    
    for (var index = 0; index < mangNhanVien.length; index++) {
        if (mangNhanVien[index].taiKhoan === tkClick) {
            
            document.getElementById('tknv').value = mangNhanVien[index].taiKhoan;
            document.getElementById('name').value = mangNhanVien[index].hoTen;
            document.getElementById('email').value = mangNhanVien[index].email;
            document.getElementById('password').value = mangNhanVien[index].matKhau;
            document.getElementById('datepicker').value = mangNhanVien[index].ngayLam;
            document.getElementById('luongCB').value = mangNhanVien[index].luongCoBan;
            document.getElementById('chucvu').value = mangNhanVien[index].chucVu;
            document.getElementById('gioLam').value = mangNhanVien[index].gioLam;
            break;
        }
    }

}



document.getElementById('btnCapNhat').onclick = function () {

    var nhanVienEdit = new NhanVien();
    nhanVienEdit.taiKhoan = document.getElementById('tknv').value;
    nhanVienEdit.hoTen = document.getElementById('name').value;
    nhanVienEdit.email = document.getElementById('email').value;
    nhanVienEdit.matKhau = document.getElementById('password').value;
    nhanVienEdit.ngayLam = document.getElementById('datepicker').value;
    nhanVienEdit.luongCoBan = document.getElementById('luongCB').value;
    nhanVienEdit.chucVu = document.getElementById('chucvu').value;
    nhanVienEdit.gioLam = document.getElementById('gioLam').value;
    nhanVienEdit.tongLuong = tongLuong(nhanVienEdit.luongCoBan, nhanVienEdit.chucVu);
    nhanVienEdit.xepLoai = xepLoai(nhanVienEdit.gioLam);

    var valid = true;
    valid = kiemTra.kiemTraRong(nhanVienEdit.taiKhoan,'tbTKNV','Tài khoản') & kiemTra.kiemTraRong(nhanVienEdit.hoTen,'tbTen','Họ tên') & kiemTra.kiemTraRong(nhanVienEdit.email,'tbEmail','Email') & kiemTra.kiemTraRong(nhanVienEdit.matKhau,'tbMatKhau','Mật khẩu') & kiemTra.kiemTraRong(nhanVienEdit.ngayLam,'tbNgay','Ngày làm') & kiemTra.kiemTraRong(nhanVienEdit.luongCoBan,'tbLuongCB','Lương cơ bản') & kiemTra.kiemTraRong(nhanVienEdit.gioLam,'tbGioLam','Giờ làm');
    
    valid = valid & kiemTra.kiemTraSo(nhanVienEdit.taiKhoan,'tkHopLe','Tài khoản');

    valid = valid & kiemTra.kiemTraDoDai(nhanVienEdit.taiKhoan,'ktDoDai','Tài khoản',4,6);

    valid = valid & kiemTra.kiemTraKyTu(nhanVienEdit.hoTen,'ktTen','Họ tên');

    valid = valid & kiemTra.kiemTraEmail(nhanVienEdit.email,'ktEmail','Email');

    valid = valid & kiemTra.kiemTraNgayLam(nhanVienEdit.ngayLam,'ktNgay','Ngày làm')

    valid = valid & kiemTra.kiemTraMatKhau(nhanVienEdit.matKhau,'ktMatKhau','Mật khẩu');

    valid = valid & kiemTra.kiemTraChucVu(nhanVienEdit.chucVu,'tbChucVu','chức vụ');

    valid = valid & kiemTra.kiemTraLuong(nhanVienEdit.luongCoBan,'ktLuongCB','Lương cơ bản');

    valid = valid & kiemTra.kiemTraGioLam(nhanVienEdit.gioLam,'ktGioLam','Giờ làm');


    if(!valid){
        return;
    }

    for (var index = 0; index < mangNhanVien.length; index++) {
        if (mangNhanVien[index].taiKhoan === nhanVienEdit.taiKhoan) {
            mangNhanVien[index].hoTen = nhanVienEdit.hoTen;
            mangNhanVien[index].email = nhanVienEdit.email;
            mangNhanVien[index].matKhau = nhanVienEdit.matKhau;
            mangNhanVien[index].ngayLam = nhanVienEdit.ngayLam;
            mangNhanVien[index].luongCoBan = nhanVienEdit.luongCoBan;
            mangNhanVien[index].chucVu = nhanVienEdit.chucVu;
            mangNhanVien[index].gioLam = nhanVienEdit.gioLam;
            mangNhanVien[index].tongLuong = nhanVienEdit.tongLuong;
            mangNhanVien[index].xepLoai = nhanVienEdit.xepLoai;
            break;
        }
    }
    
    renderTableNhanVien(mangNhanVien);
    
    luuLocalStorage();
    
}


function xoaNhanVien(indexDel) {
    mangNhanVien.splice(indexDel, 1);
    renderTableNhanVien(mangNhanVien);
}

function luuLocalStorage() {
    var stringMangNhanVien = JSON.stringify(mangNhanVien);
    localStorage.setItem('mangNhanVien', stringMangNhanVien);
}

function layStore() {
    if (localStorage.getItem('mangNhanVien')) {
        var stringMangNhanVien = localStorage.getItem('mangNhanVien');
        mangNhanVien = JSON.parse(stringMangNhanVien);
        renderTableNhanVien(mangNhanVien);
    }
}
layStore();




document.getElementById('searchName').oninput = function () {
    
    var loaiNV = document.getElementById('searchName').value;

    loaiNV = stringToSlug(loaiNV);
    
    var mangNhanVienTimKiem = [];
    for (var index = 0; index < mangNhanVien.length; index++) {
        var nv = mangNhanVien[index];
        var loaiNhanVien = stringToSlug(nv.xepLoai);
        if (loaiNhanVien.search(loaiNV) !== -1) {
            mangNhanVienTimKiem.push(nv);
        }
    }

    renderTableNhanVien(mangNhanVienTimKiem);
}
function stringToSlug(title) { 
    //Đổi chữ hoa thành chữ thường
    slug = title.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    //Xóa các ký tự đặt biệt
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    slug = slug.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');

    return slug;
}