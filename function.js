// Lấy phần tử modal
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImg");
var closeBtn = document.getElementsByClassName("close")[0];

// Lấy tất cả các ảnh trong trang web có thẻ <img>
var images = document.querySelectorAll("img");

// Duyệt qua từng ảnh và thêm sự kiện click
images.forEach(function (img) {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    };
});

// Khi người dùng bấm vào nút đóng, tắt modal
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// Khi bấm bên ngoài ảnh trong modal, cũng đóng modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

