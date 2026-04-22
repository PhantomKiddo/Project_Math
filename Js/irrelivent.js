const ComicURL = "Json/Comics.Json";

let Page = parseInt(localStorage.getItem("Page_Value")) || 0;

let SaveData = parseInt(localStorage.getItem("Save_Page")) || 0;

const DialogBtn = document.getElementById("DIALOG");

const TxtContent = document.getElementById("txtcontent");



DialogBtn.addEventListener("click", event => 
{
    if(TxtContent.style.display === "none")
    {
        TxtContent.style.display = "block"
        DialogBtn.children[0].textContent = "Hide Dialog"
    }else
    {
        TxtContent.style.display = "none"
        DialogBtn.children[0].textContent = "Show Dialog"
    }
})



function Next()
{
    Page++;
    localStorage.setItem("Page_Value", Page );
    window.location.reload();
    
}

function Previous()
{
    Page--;
    localStorage.setItem("Page_Value", Page );
    window.location.reload();
    
}

function JumpLink(Linkvalue)
{
    localStorage.setItem("Page_Value", Linkvalue);
    window.location.href = "Comics.html";
    
}

function SavePage()
{
    localStorage.setItem("Save_Page", Page);
    
}

function ResetPage()
{
    localStorage.setItem("Save_Page", 0);
    SaveData = 0;
}

function ContinuePage()
{
    localStorage.setItem("Page_Value", SaveData);
    window.location.href = "Comics.html";
}



fetch(ComicURL)
.then((respond) => respond.json())
.then((InfoData) => 
{
    
    if(Page == 0)
    {
        document.getElementById("PREVIOUS").style.visibility = "hidden";
    }
    
    if(InfoData.Act_0.length == Page + 1)
    {
        document.getElementById("NEXT").style.visibility = "hidden";
    }


    
    if(Page == InfoData.Act_0[Page].Page)
    {
        const Image = document.createElement("img");

        const P = document.getElementById("T-Content");

        Image.src = InfoData.Act_0[Page].Image;
        Image.style.width = '100%'
        Image.style.verticalAlign = 'middle';

        P.textContent = InfoData.Act_0[Page].Description;
        
        if(!document.getElementById("Display"))return;
        
        document.getElementById("Display").append(Image);
    }
})