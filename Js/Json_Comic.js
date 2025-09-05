const ComicURL = "Json/Comics.Json";

let Page = parseInt(localStorage.getItem("Page_Value")) || 0;



function Next()
{

    Page++;
    localStorage.setItem("Page_Value", Page );
    window.location.reload();
    
}

function Preview()
{

    Page--;
    localStorage.setItem("Page_Value", Page );
    window.location.reload();
    
}

function JumpLink(Linkvalue)
{
    localStorage.setItem("Page_Value", Linkvalue)
    window.location.href = "Comics.html";
}



fetch(ComicURL)
.then((respond) => respond.json())
.then((InfoData) => 
{
    
    if(Page == 0)
    {
        document.getElementById("PREVIEW").style.display = "none";
    }
    
    if(InfoData.Act_0.length == Page + 1)
    {
        document.getElementById("NEXT").style.display = "none";
    }


    
    if(Page == InfoData.Act_0[Page].Page)
    {
        const Image = document.createElement("img");

        Image.src = InfoData.Act_0[Page].Image;

        Image.style.width = '100%'
        Image.style.verticalAlign = 'middle';
        
        if(!document.getElementById("Display"))return;
        
        document.getElementById("Display").append(Image);
    }
})