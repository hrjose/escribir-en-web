//Configuracion

let marginParrafos = 50;

let espacioLetras  = 10;

let tamañoLetras = 90;

let espacio = 20;

let tipografias = [
    {
        families: ['letras1','letras2','letras3','letras4','letras5'],
        contain: ['!','"',"'",",",'.',':',':','?','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        '¡','¿','Á','É','Í','Ñ','Ó','Ú','á','é','í','ó','ú','ñ']
    },{
        families: ['numeros1','numeros3','numeros4','numeros5'],
        contain: ['!','"','#','$','%','&',"'",'(',')','*','+','´','-',',','/','0','1','2','3','4','5','6','7','8','9',':',';','<','=','>','?','@','[',"\"",']','^','_','`','{','|','}','~','¡','‘','’',"\"","\""]
    }
];

$('#close').on('click',e=>{
    $('#window').css('display','none');
})

$('#open').on('click',e=>{
    $('#window').css('display','block');
})

$('#add').on('click',e=>{
    insertInfo($('#content').val());
    $('#content').val('');
});

function insertInfo(text) {
    $('#letras').append(`<div style="margin: ${marginParrafos}px 0px">${generateParrafo(text)}</div>`)
}

function generateParrafo(text) {
    textArray = text.split('');

    let append = '';
    textArray.forEach(letra => {

        if(letra==' '){
            append += `<p style="font-size: ${tamañoLetras}px; display: inline-block; margin:0px; width:${espacio}px"></p>`;
        }
        if(letra=='\n'){
            append += `<div></div>`;
        }
        for (let i = 0; i < tipografias.length; i++) {
            const tipo = tipografias[i];
            if(tipo.contain.includes(letra)){
                append += `<p style="margin:0px; font-family: '${tipo.families[Math.floor(Math.random() * tipo.families.length)]}'; font-size: ${tamañoLetras}px; display: inline-block;">${letra}</p>`;
                return null;
            }
        }
        
    });

    return append;
}