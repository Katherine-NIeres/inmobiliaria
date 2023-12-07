const propiedades_venta = [
    {
        nombre: 'Casa sola en casa',
        src: 'https://imgix.ranker.com/user_node_img/50046/1000911622/original/the-and-_34_home-alone-and-_34_-house-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650',
        descripcion: 'Hogar navideno',
        ubicacion: 'Lincoln Avenue in Winnetka',
        habitaciones: 7,
        banos: 4,
        costo: 100000000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa de familia grande',
        src: 'https://imgix.ranker.com/user_node_img/50046/1000911590/original/the-full-house-house-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650',
        descripcion: 'Casa adosada',
        ubicacion: '1709 Broderick Street',
        habitaciones: 2,
        banos: 3,
        costo: 100000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa del principe',
        src: 'https://imgix.ranker.com/user_node_img/50046/1000911589/original/the-fresh-prince-house-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650',
        descripcion: 'Casa en New York',
        ubicacion: '251 N. Bristol Avenue',
        habitaciones: 2,
        banos: 3,
        costo: 100000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa junto al motel',
        src: 'https://imgix.ranker.com/user_node_img/50046/1000911588/original/the-and-_34_psycho-and-_34_-house-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650',
        descripcion: 'Junto al mar',
        ubicacion: 'Universal Studios in Hollywood',
        habitaciones: 4,
        banos: 3,
        costo: 200000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Hogar setentoso',
        src: 'https://imgix.ranker.com/user_node_img/50046/1000911813/original/the-and-quot-brady-bunch-and-quot-house-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650',
        descripcion: 'Hogar sin drama familiar',
        ubicacion: '11222 Dilling Street',
        habitaciones: 5,
        banos: 3,
        costo: 300000,
        smoke: false,
        pets: false
    }
]

const propiedades_alquiler = [
    {
        nombre: 'Pequeno castillo',
        src: 'https://imgix.ranker.com/user_node_img/50046/1000911625/original/the-and-_34_downton-abbey-and-_34_-castle-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650',
        descripcion: 'Propiedad con sotano',
        ubicacion: ' Newbury, West Berkshire',
        habitaciones: 12,
        banos: 7,
        costo: 100000000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa Gump',
        src: 'https://imgix.ranker.com/user_node_img/50046/1000911609/original/the-and-_34_forrest-gump-and-_34_-house-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650',
        descripcion: 'Casa con varios camarones',
        ubicacion: 'South Carolina',
        habitaciones: 4,
        banos: 3,
        costo: 100000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Cruger home',
        src: 'https://imgix.ranker.com/user_node_img/50046/1000911624/original/the-nightmare-on-elm-street-house-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650',
        descripcion: 'Se recomienda no dormir',
        ubicacion: 'Genessee Avenue',
        habitaciones: 2,
        banos: 3,
        costo: 5000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Hogar Cullen',
        src: 'https://imgix.ranker.com/user_node_img/50046/1000911619/original/the-twilight-house-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650',
        descripcion: 'Un hogar sin camas',
        ubicacion: 'Portland, Oregon',
        habitaciones: 2,
        banos: 3,
        costo: 4000000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Suelo de Jerry',
        src: 'https://imgix.ranker.com/user_node_img/50046/1000911593/original/the-seinfeld-apartment-building-photo-u2?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650',
        descripcion: 'Vecinos muy invasivos',
        ubicacion: 'New York, Estados Unidos',
        habitaciones: 1,
        banos: 1,
        costo: 30000,
        smoke: false,
        pets: true
    }
]


let div_propiedades_venta = document.getElementById('div-propiedades-venta')

if (div_propiedades_venta != null) {
    for (let index = 0; index < 3; index++) {
        let permiteMascotaEstilo, permiteMascotaTexto, permiteMascotaIcono, permiteFumarEstilo, permiteFumarTexto, permiteFumarIcono;

        if (propiedades_venta[index].pets == true) {
            permiteMascotaEstilo = 'text-success'
            permiteMascotaTexto = 'Permite mascota'
            permiteMascotaIcono = 'fas fa-paw'
        } else {
            permiteMascotaEstilo = 'text-danger'
            permiteMascotaTexto = 'No se permite mascota'
            permiteMascotaIcono = 'fas fa-ban'
        }

        if (propiedades_venta[index].smoke == true) {
            permiteFumarEstilo = 'text-success'
            permiteFumarTexto = 'Permite fumar'
            permiteFumarIcono = 'fas fa-smoking'
        } else {
            permiteFumarEstilo = 'text-danger'
            permiteFumarTexto = 'No se permite fumar'
            permiteFumarIcono = 'fas fa-smoking-ban'
        }

        div_propiedades_venta.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
            <img
                src="${propiedades_venta[index].src}"
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">
                    ${propiedades_venta[index].nombre}
                </h5>
                <p class="card-text">
                    ${propiedades_venta[index].descripcion}
                </p>
                <p>
                <i class="fas fa-map-marker-alt"></i> ${propiedades_venta[index].ubicacion}
                </p>
                <p>
                <i class="fas fa-bed"></i> ${propiedades_venta[index].habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedades_venta[index].banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedades_venta[index].costo}</p>
                <p class="${permiteFumarEstilo}">
                <i class="${permiteFumarIcono}"></i> ${permiteFumarTexto}
                </p>
                <p class="${permiteMascotaEstilo}">
                <i class="${permiteMascotaIcono}"></i> ${permiteMascotaTexto}
                </p>
            </div>
            </div>
        </div>`

    }
}


////////////////////////////////////////////////////////////////////////////////////////

let div_propiedades_alquiler = document.getElementById('div-propiedades-alquiler')


if (div_propiedades_alquiler != null) {
    for (let index = 0; index < 3; index++) {
        let permiteMascotaEstilo, permiteMascotaTexto, permiteMascotaIcono, permiteFumarEstilo, permiteFumarTexto, permiteFumarIcono;

        if (propiedades_venta[index].pets == true) {
            permiteMascotaEstilo = 'text-success'
            permiteMascotaTexto = 'Permite mascota'
            permiteMascotaIcono = 'fas fa-paw'
        } else {
            permiteMascotaEstilo = 'text-danger'
            permiteMascotaTexto = 'No se permite mascota'
            permiteMascotaIcono = 'fas fa-ban'
        }

        if (propiedades_venta[index].smoke == true) {
            permiteFumarEstilo = 'text-success'
            permiteFumarTexto = 'Permite fumar'
            permiteFumarIcono = 'fas fa-smoking'
        } else {
            permiteFumarEstilo = 'text-danger'
            permiteFumarTexto = 'No se permite fumar'
            permiteFumarIcono = 'fas fa-smoking-ban'
        }

        div_propiedades_alquiler.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
            <img
                src="${propiedades_alquiler[index].src}"
                class="card-img-top"
                alt="Imagen del departamento"
            />
            <div class="card-body">
                <h5 class="card-title">
                    ${propiedades_alquiler[index].nombre}
                </h5>
                <p class="card-text">
                    ${propiedades_alquiler[index].descripcion}
                </p>
                <p>
                <i class="fas fa-map-marker-alt"></i> ${propiedades_alquiler[index].ubicacion}
                </p>
                <p>
                <i class="fas fa-bed"></i> ${propiedades_alquiler[index].habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${propiedades_alquiler[index].banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedades_alquiler[index].costo}</p>
                <p class="${permiteFumarEstilo}">
                <i class="${permiteFumarIcono}"></i> ${permiteFumarTexto}
                </p>
                <p class="${permiteMascotaEstilo}">
                <i class="${permiteMascotaIcono}"></i> ${permiteMascotaTexto}
                </p>
            </div>
            </div>
        </div>`

    }
}


////////////////////////////////////////////

let total_propiedades_venta = document.getElementById('total-propiedades-venta')

if (total_propiedades_venta != null) {
    for (let index = 0; index < propiedades_venta.length; index++) {
        let permiteMascotaEstilo, permiteMascotaTexto, permiteMascotaIcono, permiteFumarEstilo, permiteFumarTexto, permiteFumarIcono;

        if (propiedades_venta[index].pets == true) {
            permiteMascotaEstilo = 'text-success'
            permiteMascotaTexto = 'Permite mascota'
            permiteMascotaIcono = 'fas fa-paw'
        } else {
            permiteMascotaEstilo = 'text-danger'
            permiteMascotaTexto = 'No se permite mascota'
            permiteMascotaIcono = 'fas fa-ban'
        }

        if (propiedades_venta[index].smoke == true) {
            permiteFumarEstilo = 'text-success'
            permiteFumarTexto = 'Permite fumar'
            permiteFumarIcono = 'fas fa-smoking'
        } else {
            permiteFumarEstilo = 'text-danger'
            permiteFumarTexto = 'No se permite fumar'
            permiteFumarIcono = 'fas fa-smoking-ban'
        }

        total_propiedades_venta.innerHTML += `
    <div class="col-md-4 mb-4">
        <div class="card">
        <img
            src="${propiedades_venta[index].src}"
            class="card-img-top"
            alt="Imagen del departamento"
        />
        <div class="card-body">
            <h5 class="card-title">
                ${propiedades_venta[index].nombre}
            </h5>
            <p class="card-text">
                ${propiedades_venta[index].descripcion}
            </p>
            <p>
            <i class="fas fa-map-marker-alt"></i> ${propiedades_venta[index].ubicacion}
            </p>
            <p>
            <i class="fas fa-bed"></i> ${propiedades_venta[index].habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedades_venta[index].banos} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedades_venta[index].costo}</p>
            <p class="${permiteFumarEstilo}">
            <i class="${permiteFumarIcono}"></i> ${permiteFumarTexto}
            </p>
            <p class="${permiteMascotaEstilo}">
            <i class="${permiteMascotaIcono}"></i> ${permiteMascotaTexto}
            </p>
        </div>
        </div>
    </div>`

    }
}

////////////////////////////////////////////

let total_propiedades_alquiler = document.getElementById('total-propiedades-alquiler')

if (total_propiedades_alquiler != null) {
    for (let index = 0; index < propiedades_alquiler.length; index++) {
        let permiteMascotaEstilo, permiteMascotaTexto, permiteMascotaIcono, permiteFumarEstilo, permiteFumarTexto, permiteFumarIcono;

        if (propiedades_alquiler[index].pets == true) {
            permiteMascotaEstilo = 'text-success'
            permiteMascotaTexto = 'Permite mascota'
            permiteMascotaIcono = 'fas fa-paw'
        } else {
            permiteMascotaEstilo = 'text-danger'
            permiteMascotaTexto = 'No se permite mascota'
            permiteMascotaIcono = 'fas fa-ban'
        }

        if (propiedades_alquiler[index].smoke == true) {
            permiteFumarEstilo = 'text-success'
            permiteFumarTexto = 'Permite fumar'
            permiteFumarIcono = 'fas fa-smoking'
        } else {
            permiteFumarEstilo = 'text-danger'
            permiteFumarTexto = 'No se permite fumar'
            permiteFumarIcono = 'fas fa-smoking-ban'
        }

        total_propiedades_alquiler.innerHTML += `
    <div class="col-md-4 mb-4">
        <div class="card">
        <img
            src="${propiedades_alquiler[index].src}"
            class="card-img-top"
            alt="Imagen del departamento"
        />
        <div class="card-body">
            <h5 class="card-title">
                ${propiedades_alquiler[index].nombre}
            </h5>
            <p class="card-text">
                ${propiedades_alquiler[index].descripcion}
            </p>
            <p>
            <i class="fas fa-map-marker-alt"></i> ${propiedades_alquiler[index].ubicacion}
            </p>
            <p>
            <i class="fas fa-bed"></i> ${propiedades_alquiler[index].habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedades_alquiler[index].banos} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedades_alquiler[index].costo}</p>
            <p class="${permiteFumarEstilo}">
            <i class="${permiteFumarIcono}"></i> ${permiteFumarTexto}
            </p>
            <p class="${permiteMascotaEstilo}">
            <i class="${permiteMascotaIcono}"></i> ${permiteMascotaTexto}
            </p>
        </div>
        </div>
    </div>`

    }
}
