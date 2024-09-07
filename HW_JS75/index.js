const ketQua = () => {
    const dSo = document.getElementById("doanhSo").value * 1;

    if (dSo >= 100) {
        KQ = "duoc thuong 10% doanh so"
    } else {
        KQ = "khong duoc thuong"
    }
    const pThongbaoketqua = document.getElementById("pThongbaoketqua");
    pThongbaoketqua.innerHTML = `kết quả: ${KQ}`;

}
// ///////////////////////////////////////////////////////////

// Tính chiết khấu
const tienChietkhau = () => {
    const Ck = document.getElementById("tinhTien").value * 1;

    if (Ck >= 500) {
        const chietKhau = Ck * 0.2;
        const tienGiamgia = Ck - chietKhau;
        result = `Số tiền sau khi giảm 20%: ${tienGiamgia}$`;
    } else {
        result = 'Số tiền mua hàng không đủ để nhận chiết khấu.';
    }
    const pThongbaoketqua = document.getElementById("pThongbaochietkhau");
    pThongbaoketqua.innerHTML = `kết quả: ${result}`;
}

