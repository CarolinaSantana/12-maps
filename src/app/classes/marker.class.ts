
export class Marker {

    public lat: number;
    public lng: number;
    public title = 'Without title';
    public desc = 'Without description';

    constructor( lat: number,  lng: number ) {
        this.lat = lat;
        this.lng = lng;
    }

}

