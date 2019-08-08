window.addEventListener('load', function() {
    var barra = document.getElementById("barra");
    var app = document.querySelector(".lista");
    var contador = this.document.querySelector(".contador");
    var arreglolista = [];
    var arreglofinal = [];

    var active = this.document.querySelector(".active");
    var all = this.document.querySelector(".all");
    var holis = 0;


    barra.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            arreglolista.push(this.value);
            var li = document.createElement('li');

            li.innerHTML = '<input type="checkbox" class="check">' + arreglolista[arreglolista.length - 1];
            li.setAttribute('class', 'tarea');
            li.setAttribute('contenteditable', true);
            arreglofinal.push(li);
            app.appendChild(li);
            this.value = "";
            contador.innerHTML = arreglolista.length + " elementes left";
            console.log(arreglofinal);

        }


    });


    active.addEventListener('click', function() {

        var numero = 1;

        arreglofinal.forEach(element => {

            const input = element.children[0];

            if (input.checked == false) {
                element.style.display = "none";
                numero++;
            }
        });

        contador.innerHTML = numero + " elementes active";

    });

    all.addEventListener('click', function() {

        arreglofinal.forEach(element => {
            element.style.display = "flex";


        });

        contador.innerHTML = arreglolista.length + " elementes left";

    });



});