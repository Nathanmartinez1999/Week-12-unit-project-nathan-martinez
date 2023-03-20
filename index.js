class hotel {
    constructor(name) {
        this.name = name;
        this.rooms = []
    }
    addGuest(name, email) {
        this.guests.push(new guest(name, email));
    }
}

class guest {
    constructor(name, email) {
        this.name = name;
        this.name = email;
    }
}

class HotelService {
    static url = 'http://127.0.0.1:5500/index.html';

    static getAllHotels() {
        return $.get(this.url);
    }
    static getHotel(id) {
        return $.get(this.url + '/${id}');
    }
    static createHotel(hotel) {
        return $.post(this.url, hotel);
    }
    static updateHotel(hotel) {
        return $.ajax({
            url: this.url + '/?{$hotel._id}',
            dataType: 'json',
            data: JSON.stringify(house),
            contentType: 'application/json',
            type: 'PUT'
        });
    }
    static deleteHotel(id) {
        return $.ajax({
            url: this.url + '/${id}',
            type: 'Delete'
        });
    }
}

class DOMManager {
    static hotels;

    static getAllHotels() {
        HotelService.getAllHotels().then(hotels => this.render(hotels));
    }


    static render(hotels) {
        this.hotels = hotels;
        $('#app').empty();
        for (let hotel of hotels) {
            $('#app').prepend(
                ` <div id='${hotel._id}' class='card'>
            <div class= 'card-header' >
            <h2>${hotel.name}</h2>
            <button class='btn btn-danger' onClick='DOMManager.deleteHouse('${hotel._id}')'>delete</button>
                    </div >
<div class='card-body'>
<div class='card'>
<div class='row'>
<div class='col-sm'>
<input type='text' id='${hotel._id}-guest-name' class = 'form=control' placeholder='Guest Name'>
</div>
<div class='col-sm'>
<imput type='text' id='${hotel._id}-guest-email' class ='form-control' placeholder='Guest Email'>
</div>
</div>
<button id='${hotel.id}-new-hotel' onclick='DOMManager.addGuests('${hotel.id}')' class='btn btn-primary form-control'>ADD<button>

</div>
</div>
</div >
                `
            );
        }
    }

}

DOMManager.getAllHotels();