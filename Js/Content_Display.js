
//JSON Library Fetching 
const MainContent = "Json/Comics.Json";

//Google Sheet QueryFetching
const Sheet_ID = '1p-rgPuLOUqB8Vn8T8oMkgB7Zcvmjv6LcqiYdSzt_bwU';
const Sheet_Name = encodeURIComponent('Library');
const Sheet_Range = 'B3:F20';

const _URL = 'https://docs.google.com/spreadsheets/d/' + Sheet_ID + '/gviz/tq?sheet=' + Sheet_Name + '&range=' + Sheet_Range;



fetch(MainContent)
.then((response) => response.json())
.then((data) => 
{

    for (let i = 0; i < data.Act_0.length; i++)
    {
        
        const Content_Card = document.createElement('button');
        Content_Card.className = "Content_Card_Background Content_Card_StandardLayout";
        Content_Card.id = "Button_Grow";

        const Title = document.createElement('h2');
        Title.textContent = data.Act_0[i].Page_Name;
        Title.className = "Wht";

        const Thumbnail = document.createElement('img');
        Thumbnail.src = data.Act_0[i].Thumbnail;
        Thumbnail.className = "Content_Card_Display";
        Thumbnail.style.width = "75%";
        Thumbnail.style.padding = "auto";

        Content_Card.setAttribute('onmouseenter', 'UIHover.play()');
        
        Content_Card.setAttribute('onmousedown', 'if(event.button === 0) UIclick.play();');

        Content_Card.setAttribute('onclick', 'JumpLink(' + data.Act_0[i].Page + ')');

        //-----------------------[Append]-------------------------
        
        Content_Card.append(Thumbnail, Title);

        document.getElementById('Main_Post').appendChild(Content_Card);

    }
})