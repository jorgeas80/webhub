function TestController($scope) {
    $scope.questions = [
        {
            id : 1,
            text:'Una aplicación Angular 2 se puede escribir:',
            validAnswer : 1,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'En JavaScript estándar, en ES6, en TypeScript y en Dart.'},
                {id : 2, text : 'Solo en TypeScript.'},
                {id : 3, text : 'En ES6 y en TypeScript solamente.'},
            ]
        },
        {
            id : 2,
            text:'La herramienta oficial para generar proyectos escritos en Angular 2 se llama:',
            validAnswer : 2,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'FountainJS'},
                {id : 2, text : 'angular-cli'},
                {id : 3, text : 'ng'}
            ]
        },
        {
            id : 3,
            text:'Los componentes en Angular 2:',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Son clases a las que se les aplica el decorador @Component'},
                {id : 2, text : 'Son un tipo especial de directiva'},
                {id : 3, text : 'Las dos respuestas anteriores son correctas'},
            ]
        },
        {
            id : 4,
            text:'Con respecto a los módulos en Angular 2',
            validAnswer : 2,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Son una funcionalidad heredada del estándar ES6, que considera cada fichero un módulo que puede exportar ciertas partes e importar otros módulos.'},
                {id : 2, text : 'En el fondo solo son clases decoradas con @NgModule.'},
                {id : 3, text : 'Las dos respuestas anteriores son correctas.'},
            ]
        },
        {
            id : 5,
            text:'Un módulo de Angular 2 puede importar otros módulos de Angular 2',
            validAnswer : 1,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Verdadero'},
                {id : 2, text : 'Falso'},
                {id : 3, text : 'Solo si los otros módulos son proporcionados por el propio framework, como HttpModule, FormsModule, etc.'},
            ]
        },
        {
            id : 6,
            text:'¿Qué partes podemos distinguir en un componente de Angular 2?',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Los metadatos y el marcado HTML.'},
                {id : 2, text : 'El marcado HTML, los estilos CSS y la lógica de negocio.'},
                {id : 3, text : 'El selector, el marcado HTML, los estilos CSS y la lógica de negocio.'},
            ]
        },
        {
            id : 7,
            text:'Para aplicar estilos a un componente de Angular 2',
            validAnswer : 2,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Tengo que aplicarlos a nivel de componente, mediante una hoja de estilos enlazada con el mismo.'},
                {id : 2, text : 'Puedo utilizar estilos globales, estilos a nivel de componente o estilos inline directamente aplicados en el marcado HTML'},
                {id : 3, text : 'He de incluirlos a nivel global.'},
            ]
        },
        {
            id : 8,
            text:'¿Mediante qué etiqueta señalo que una determinada parte de mi marcado HTML va a ser gestionada por el router de Angular 2',
            validAnswer : 2,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'ng2-router'},
                {id : 2, text : 'router-outlet'},
                {id : 3, text : 'outlet'},
            ]
        },
        {
            id : 9,
            text:'¿Cuál de las siguientes afirmaciones sobre los servicios en Angular 2 es correcta?',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Deberíamos declararlos siempre a nivel de componente, nunca a nivel global de módulo.'},
                {id : 2, text : 'Son clases que van decoradas mediante @Inject'},
                {id : 3, text : 'Se deberían encargar de todo aquello que no implique interactuar con la vista.'},
            ]
        },
        {
            id : 10,
            text:'La comunicación entre componentes en Angular 2',
            validAnswer : 1,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Se puede hacer tanto mediante eventos (EventEmitter) como mediante servicios.'},
                {id : 2, text : 'Exige que importemos un módulo especial para comunicación.'},
                {id : 3, text : 'Ninguna de las respuestas anteriores es correcta.'},
            ]
        },
        {
            id : 11,
            text:'Sobre el servicio de http de Angular 2',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Devuelve objetos de tipo Observable, que son una alternativa a las promesas proporcionada por la librería rxjs'},
                {id : 2, text : 'Encapsula las llamadas XHR y JSONP, abstrayendo al desarrollador de las mismas'},
                {id : 3, text : 'Las dos respuestas anteriores son correctas.'},
            ]
        },
        {
            id : 12,
            text:'Para poder utilizar servicios en Angular 2',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'He de incluirlos en el array providers del módulo o componente donde lo quiera usar.'},
                {id : 2, text : 'Debo inyectarlos en el constructor del componente o servicio donde lo quiera usar.'},
                {id : 3, text : 'Las dos respuestas anteriores son correctas.'},
            ]
        },
        {
            id : 13,
            text:'La instanciación de servicios en Angular 2 sigue el patrón Singleton',
            validAnswer : 1,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Verdadero'},
                {id : 2, text : 'Falso'},
                {id : 3, text : 'Solo para los servicios nativos del propio framework, no para los nuestros propios'},
            ]
        },
        {
            id : 14,
            text:'Las template reference variables permiten acceder al contenido de unos campos de un formulario HTML desde otros.',
            validAnswer : 2,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Falso.'},
                {id : 2, text : 'Verdadero.'},
            ]
        },
        {
            id : 15,
            text:'Sobre los objetivos de un data binding en Angular 2',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Pueden ser marcados como inputs o outputs, en función de si están destinados a recibir datos o a emitirlos'},
                {id : 2, text : 'Los de salida han de ser de tipo EventEmitter'},
                {id : 3, text : 'Las dos respuestas anteriores son correctas.'},
            ]
        },
        {
            id : 16,
            text:'Es recomendable en la implementación de directivas de tipo atributo',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'El uso de ElementRef para acceder al elemento nativo del DOM.'},
                {id : 2, text : 'Comenzar los nombres de las directivas por ng.'},
                {id : 3, text : 'Usar el elemento Renderer para interactuar con el DOM.'},
            ]
        },
        {
            id : 17,
            text:'¿Qué elementos son comunes en la creación de formularios en Angular 2?',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'ngModel y ngChange'},
                {id : 2, text : 'ngRequest'},
                {id : 3, text : 'ngModel, ngSubmit, #form'},
            ]
        },
        {
            id : 18,
            text:'El elemento TestBed de Angular 2',
            validAnswer : 2,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Se usa solamente para probar servicios.'},
                {id : 2, text : 'Nos permite configurar un módulo para testing y crear un componente dentro del mismo.'},
                {id : 3, text : 'No existe'},
            ]
        },
        {
            id : 19,
            text:'A partir de un componente, podemos crear un objeto ComponentFixture, que nos permite acceder al DOM del componente en nuestro código de test. ¿Qué método de este objeto debemos llamar para forzar al renderizado del HTML y detectar los cambios en el DOM?',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'A ninguno. No es necesario.'},
                {id : 2, text : 'renderizeChanges()'},
                {id : 3, text : 'detectChanges()'},
            ]
        },
        {
            id : 20,
            text:'¿Cuál de estas técnicas puede ser usada para probar un componente que depende de un servicio?',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Sustituir el servicio por un stub, creado ad-hoc para el test'},
                {id : 2, text : 'Declarar un spy de Jasmine sobre el servicio y controlar lo que pasa al llamar a sus métodos'},
                {id : 3, text : 'Ambas respuestas anteriores son correctas'},
            ]
        },
    ];

    $scope.userStatus = '';

    $scope.validAnswers = 0;

    $scope.validate = function (question) {
        if (question.validAnswer == question.userAnswer) {
            $scope.validAnswers ++;
            question.status = 'ok';
        } else {
            if (question.status == 'ok' && $scope.validAnswers > 0) {
                $scope.validAnswers --;
            }
            question.status = 'error';
        }

        updateUserStatus();
    };

    function updateUserStatus() {
        var avgValidAnswers = ($scope.validAnswers / $scope.questions.length) * 100;
        if (avgValidAnswers == 0) {
            $scope.userStatus = 'looser';
        } else if (avgValidAnswers == 100) {
            $scope.userStatus = 'guru';
        } else {
            $scope.userStatus = 'poor';
        }
    }

}
