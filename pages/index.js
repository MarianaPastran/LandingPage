function addCard(params = {}){
    //primero selecciono el elemento donde quiero agregar la data
    const template= document.querySelector("#portfolio-card-template");
    const container= document.querySelector(".portfolio-conteiner");
    //despues clono el template para reutilizarlo
    const clone = document.importNode(template.content, true);

    //le agrego el nuevo contenido a las partes del template
    template.content.querySelector(".portfolio-card-img").src= params.img;
    template.content.querySelector(".portfolio-card-title").textContent= params.title;
    template.content.querySelector(".portfolio-card-description").textContent= params.description;
    template.content.querySelector(".portfolio-link").href= params.url;


    //le asigno el template a su contenedor para reutilizarlo
    container.appendChild(clone);

}
function getContentfull(){
    return fetch("https://preview.contentful.com/spaces/zipyysjrue6h/environments/master/entries?access_token=cLryvanakTSDhBRb90yVqpiD6xrBkiHu7MTcBC54UYI&content_type=work").then(res =>{
        return res.json()
    }).then((data)=>{
        console.log(data);
        const fieldItem= data.items.map((item)=>{
            return {
                title: item.fields.title,
                description: item.fields.description,
                url: item.fields.url,
                img: item.fields.image
                
            };

        });
        return fieldItem;
    });
}

function main(){
    
    const header = document.querySelector(".header");
    headerComponent(header);

    // contactComponent(document.querySelector(".contact__container"));
    // footerComponent(document.querySelector(".footer"));

    // getContentfull().then(function(works){
    // for (const w of works){
    //     addCard(w)
    // }
    // })
}


main();