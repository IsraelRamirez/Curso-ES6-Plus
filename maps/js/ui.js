class UI {
    constructor() {

         // Iniciar el mapa
         this.mapa = this.initMap();
         this.markers = new L.LayerGroup();

    }

    initMap() {
        // Inicializar y obtener la propiedad del mapa
        const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
        const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + enlaceMapa + ' Contributors',
            maxZoom: 18,
            }).addTo(map);
        return map;
    }
    initMarkers(gasolinera){
        
        const mark = new L.marker([gasolinera.latitude, gasolinera.longitude], {
            title: gasolinera.razonsocial,
        })

        mark.bindPopup(`
            <h6>${gasolinera.razonsocial}</h6>
            <p><b>Calle: </b>${gasolinera.calle}</p>
            <p><b>Regular: $</b>${gasolinera.regular}</p>
            <p><b>Premium: $</b>${gasolinera.premium}</p>
        `);

        this.markers.addLayer(mark);
    }

    setAllMarkers(){
        this.markers.clearLayers();
        const gasolineras = ApiGov.getGasolineras()
        .then((gasolineras) => {
            gasolineras.forEach(gasolinera => {
                this.initMarkers(gasolinera);
            });
            this.markers.addTo(this.mapa);
        })
    }

    getSugerencias(busqueda){
        this.markers.clearLayers();
        const gasolineras = ApiGov.getGasolineras()
        .then((gasolineras) =>{
            const filtrados = this.filtrar(gasolineras, busqueda);
            if(filtrados)
                filtrados.forEach((gasolinera)=>{
                    this.initMarkers(gasolinera);
                })
            
            this.markers.addTo(this.mapa);
        })
    }
    filtrar(resultado, busqueda){
        const filtro = resultado.filter((gasolinera)=> gasolinera.calle.toUpperCase().includes(busqueda.toUpperCase()));
        return filtro;
    }
}