function Validation() {
    this.kiemTraRong = function (value,idError,name) {
        if(value.trim() === ''){
            document.getElementById(idError).innerHTML = `${name} không được bỏ trống!`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;
    }
    this.kiemTraKyTu = function (value,idError,name) {
        var regexLetter = /^[A-Z a-z]+$/;
        if(regexLetter.test(value)){
            document.getElementById(idError).innerHTML = ''
            return true;
        }
        document.getElementById(idError).innerHTML = `${name} tất cả phải là ký tự!`;
        return false;
    }
    this.kiemTraEmail = function (value,idError,name) {
        var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(regexEmail.test(value)) {
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `${name} không hợp lệ!`;
        return false;
    }
    this.kiemTraSo = function (value,idError,name) {
        var regexNumber = /^[0-9]+$/;
        if(regexNumber.test(value)){
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `${name} phải là số!`;
        return false;
    }

    this.kiemTraDoDai = function (value,idError,name,minLength,maxLength) {
        if(value.length > maxLength || value.length < minLength) {
            document.getElementById(idError).innerHTML = `${name} từ ${minLength} đến ${maxLength} ký tự!`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;
    }
    this.kiemTraNgayLam =  function (value,idError,name) {
        var reg = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
        if (!reg.test(value)) {
            document.getElementById(idError).innerHTML = `${name} không hợp lệ!`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;
    }
    this.kiemTraMatKhau = function (value,idError,name) {
        var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,10}$/ ;
        if (reg.test(value)) {
            document.getElementById(idError).innerHTML = '';
            return true;
        }
        document.getElementById(idError).innerHTML = `${name} không hợp lệ!`;
        return false;
    }
    this.kiemTraChucVu = function (value,idError,name) {
        var reg = /Chọn chức vụ/g;
        if (reg.test(value)) {
            document.getElementById(idError).innerHTML = `Vui lòng chọn ${name} !`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;
    }
    this.kiemTraLuong = function (value,idError,name) {
        if (value < 1000000 || value > 20000000) {
            document.getElementById(idError).innerHTML = `${name} không hợp lệ!`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;
    }
    this.kiemTraGioLam = function (value,idError,name) {
        if (value < 80 || value > 200) {
            document.getElementById(idError).innerHTML = `${name} không hợp lệ!`;
            return false;
        }
        document.getElementById(idError).innerHTML = '';
        return true;
    }
}