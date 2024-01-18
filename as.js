*/ javaScript /*
let cog=document.querySelector("#hero,radio");
let va="white";
cog.addEventListener("click",()=>{
    switch (va)
    {
        case "white":
            va="dark";
            document.body.style.backgroundColor="black";
            console.log("hello");
            break;
            case "dark":
                va="white";
                document.body.style.backgroundColor="rgba(41, 44, 44, 0.2)";
                console.log("dark");
                break;

    }
});
