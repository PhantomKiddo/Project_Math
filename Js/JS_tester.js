const Sheet_ID = '1p-rgPuLOUqB8Vn8T8oMkgB7Zcvmjv6LcqiYdSzt_bwU';
const Sheet_Name = encodeURIComponent('FrontPage');
const Sheet_Range = 'B3:C10';

const _URL = 'https://docs.google.com/spreadsheets/d/' + Sheet_ID + '/gviz/tq?sheet=' + Sheet_Name + '&range=' + Sheet_Range;



fetch(_URL)
.then((URL_respond) => URL_respond.text())
.then((URL_Data) => 
{
    let data = JSON.parse(URL_Data.substring(47).slice(0,-2));
    
    data.table.rows.map((rows) => 
    {
        const p = document.createElement('p');

        p.innerHTML = rows.c[0].v.replace(/\n/g, '<br>');

        document.getElementById('News_1').append(p);
    });
})