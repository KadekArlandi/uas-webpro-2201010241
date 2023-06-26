function tampilSemua() {
    $.getJSON('data/ngofee.json', function (data) {
        let menu = data.menu;
        $.each(menu, function (i, data) {
            $('#daftar-menu').append(`<div class="col-md-3 rounded"><div class="card mb-3" style="background-image: linear-gradient(to bottom right, #D5CEA3, #A27B5C ); border-radius: 25px; width: 260px; height: 450px;"><img style="width: 258px; height: 200px;" src="data/${data.gambar}" class="card-img-top"><div class="card-body"><h5 class="card-title">${data.nama}</h5><p class="card-text">${data.deskripsi}</p><h5 class="card-title">Rp. ${data.harga}</h5><a href="#" class="btn btn-primary">Add to Cart <i class="bi bi-cart"></i></a></div></div></div>`);
        });
    });
}

tampilSemua();


$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All-Menu') {
        tampilSemua();
        return;
    }


    $.getJSON('data/ngofee.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content +='<div class="col-md-3 rounded"><div class="card mb-3" style="    background-image: linear-gradient(to bottom right, #D5CEA3, #A27B5C ); border-radius: 25px; width: 260px; height: 450px;"><img style="width: 258px; height: 200px;" src="data/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Add to Cart <i class="bi bi-cart"></i></a></div></div></div>';
            }
        });

        $('#daftar-menu').html(content);
    });


});