function tongLuong(luong, chucVu) {
    var tongLuong = 0;
    if (chucVu === 'Sếp') {
        tongLuong = luong * 3;
    }
    if (chucVu === 'Trưởng phòng') {
        tongLuong = luong * 2;
    }
    if (chucVu === 'Nhân viên') {
        tongLuong = luong * 1;
    }
    return tongLuong;
}

function xepLoai(gioLam) {
    var output = '';
    if (gioLam < 160) {
        output = 'Trung bình';
    }else if (gioLam < 176) {
        output = 'Khá';
    }else if (gioLam < 192) {
        output = 'Giỏi';
    }else {
        output = 'Xuất sắc';
    }
    return output;
}