
//tsc --init: tạo ra file config
//tsc -build: compile từ ts -> js
//tsc -watch: auto compile từ ts -> js
let _name = 'Thông';
let string: string = `hello ${_name}`;

//kiểu dữ liệu
let hoTen: string = 'Huỳnh Minh Thông';
var soThuTu = 1231231;

let flag: boolean = true;


//ARRAY     
//number array
let arrNumber: number[] = [1, 2, 3];
let arrString: string[] = ['Huynh', 'Minh', 'Thong'];

class SinhVien {
    maSV: string = '';
    tenSinhVien: string = '';
    constructor() {

    }
}
let sinhVien = new SinhVien();

let arrSinhVien: SinhVien[] = [sinhVien, { maSV: '123', tenSinhVien: 'Huynh Minh Thong' }, new SinhVien()];


//tuple (thể hiện dữ liệu object dưới dạng mảng)

let hocVien: [string, string, number] = ['1', 'Thong', 21];


//enum
enum TrangThai { notActive = 0, Active = 1, cancelActive = 2 };


enum Api { dangKy = `/api/quanlynguoidung/dangky`, dangnhap = `/api/quanlynguoidung/dangnhap` }

let trangThai: TrangThai = TrangThai.Active;

let url: Api = Api.dangKy;


//any: kiểu dữ liệu bất kì
//dùng cho các trường hợp không biết trước kiễu dữ liệu trả về của kết quả trả về => không nên lạm dụng any trong code typescript.

let lop: any = 1;

lop = '123';
lop = true;


// dẫn xuất: (Private, Public, Protected)

class LopHoc {
    public maLop: string = '';
    protected tenLop: string = '';
    public diaChi: string = '';
    constructor() {

    }

    setTenLop(tenLop) {
        this.tenLop = tenLop;
    }

    render() {

    }
}

class Frontend extends LopHoc {


    constructor() {
        super()
    }
}


let lopHoc: LopHoc = new LopHoc();
lopHoc.setTenLop('abc');


class Validation {

    static kiemTraRong = (value: string, name: string, selectorError: string) => {
        return true;
    }
}

Validation.kiemTraRong('name', 'name', '#error');


interface CRUD {
    add(newItem);
    delete(id);
    update(id, itemUpdate);
}

interface Student {
    id: string,
    name: string
}

let studentA = { id: 1, name: 'Nguyen Van A' };

let student: Student; //Dùng để hứng 1 giá trị là student đọc giá trị (không gán lại được thường dùng trong props của react)


class Products implements CRUD {
    add(newItem: any) {
        throw new Error("Method not implemented.");
    }
    delete(id: any) {
        throw new Error("Method not implemented.");
    }
    update(id: any, itemUpdate: any) {
        throw new Error("Method not implemented.");
    }

}

class Users implements CRUD {
    add(newItem: any) {
        throw new Error("Method not implemented.");
    }
    delete(id: any) {
        throw new Error("Method not implemented.");
    }
    update(id: any, itemUpdate: any) {
        throw new Error("Method not implemented.");
    }
}

