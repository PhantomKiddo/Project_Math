var UIHover = new Audio();
UIHover.src = "Audio/snd_option.wav";
UIHover.volume = 1;

var UIclick = new Audio();
UIclick.src = "Audio/snd_system_ok.wav";
UIclick.volume = 1;

var UIDialog = new Audio();
UIDialog.src = "Audio/snd_system_ng.wav";
UIDialog.volume = 1;

// Slider whoosh audio: play one of four random sounds each time a tab/slider button is used
var SliderWhooshSources = [
    "Audio/dash_BladeSwitch_1.wav",
    "Audio/dash_BladeSwitch_2.wav",
    "Audio/dash_BladeSwitch_3.wav",
    "Audio/dash_BladeSwitch_4.wav"
];

function Woosh()
{
    var randomIndex = Math.floor(Math.random() * SliderWhooshSources.length);
    var whoosh = new Audio(SliderWhooshSources[randomIndex]);
    whoosh.volume = .25;
    whoosh.play();
}




