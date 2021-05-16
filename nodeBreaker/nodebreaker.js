var mainInterval;

function runStartApplication() {
    var elllllss = document.getElementsByClassName("grid-noGutter");
    if (elllllss.length > 2) {
        clearInterval(frameInterval);
        var ul = document.getElementById("console_form");
        var li = document.createElement("input");
        li.type = "submit";
        li.id = "LOTSSSS";
        ul.appendChild(li);

    }
}
chrome.storage.onChanged.addListener(function (changes, namespace) {
    var what_to_summon = changes["cool_values"]["newValue"];
    var special_argument = "";
    var summon = true;
    if (window.location.href.includes("instance/console") && what_to_summon != "") {
        var commandLine = document.getElementById("stdin");
        if (what_to_summon == "TrickOrTreat!") {
            var whatType = Math.floor((Math.random() * 2) + 1);
            console.log(whatType);
            if (whatType == 1) {
                var whatToDo = Math.floor((Math.random() * 12) + 1);
                
                switch(whatToDo){
                    case 12:
                        what_to_summon = "cat";
                        break;
                    case 11:
                        what_to_summon = "iron_golem";
                        break;
                    case 10:
                        var howmany = Math.floor((Math.random() * 3)+1);
                        commandLine.value = "give Darilli diamond "+ howmany.toString();
                        summon = false;
                        break;
                    case 9:
                        var howmany = Math.floor((Math.random() * 3)+1);
                        commandLine.value = "give Darilli iron_ingot " + howmany.toString();
                        summon = false;
                        break;
                    case 8:
                        var howmany = Math.floor((Math.random() * 3)+1);
                        commandLine.value = "give Darilli gold_ingot " + howmany.toString();
                        summon = false;
                        break;
                    case 7:
                        var howmany = Math.floor((Math.random() * 4)+1);
                        commandLine.value = "give Darilli bread " + howmany.toString();
                        summon = false;
                        break;
                    case 6:
                        var howmany = Math.floor((Math.random() * 5)+1);
                        commandLine.value = "give Darilli cobblestone " + howmany.toString();
                        summon = false;
                        break;
                    case 5:
                        var howmany = Math.floor((Math.random() * 5)+1);
                        commandLine.value = "give Darilli arrow " + howmany.toString();
                        summon = false;
                        break;
                    case 4:
                        what_to_summon = "chicken";
                        break;
                    case 3:
                        what_to_summon = "pig";
                        break;
                    case 2:
                        what_to_summon = "cow";
                        break;
                    case 1:
                        what_to_summon = "sheep";
                        break;
                }
                
                

            }
            else {
                whatType = Math.floor((Math.random() * 12) + 1);
                switch(whatType){
                    case 1:
                        what_to_summon = "zombie";
                        break;
                    case 2:
                        what_to_summon = "spider";
                        break;
                    case 3:
                        what_to_summon = "skeleton";
                        break;
                    case 4:
                        what_to_summon = "wither_skeleton";
                        break;
                    case 5:
                        what_to_summon = "witch";
                        break;
                    case 6:
                        what_to_summon = "area_effect_cloud";
                        special_argument = " {Passengers:[{id:zombie},{id:zombie},{id:zombie},{id:zombie}]}";
                        break;
                    case 7:
                        what_to_summon = "area_effect_cloud";
                        special_argument = " {Passengers:[{id:zombie,IsBaby:1},{id:drowned,IsBaby:1},{id:husk,IsBaby:1}]}";
                        break;
                    case 8:
                        what_to_summon = "area_effect_cloud";
                        special_argument = " {Passengers:[{id:spider},{id:spider},{id:spider},{id:spider}]}";
                        break;
                    case 9:
                        what_to_summon = "skeleton_horse";
                        special_argument = " {Passengers:[{id:skeleton,HandItems:[{Count:1,id:stone_axe},{}],ArmorItems:[{Count:1,id:netherite_boots},{Count:1,id:netherite_leggings},{Count:1,id:netherite_chestplate},{Count:1,id:carved_pumpkin}]}]}";
                        break;
                    case 10:
                        what_to_summon = "area_effect_cloud";
                        special_argument = " {Passengers:[{id:creeper},{id:creeper},{id:creeper}]}";
                        break;
                    case 11:
                        what_to_summon = "creeper";
                        special_argument = " {powered:1b}";
                        break;
                    case 12:
                        what_to_summon = "rabbit";
                        special_argument = " {RabbitType:99}";
                        break;
                }
                
            }

        }
        if (summon == true) {
            var num1 = Math.floor((Math.random() * 6) + 1);
            num1 *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
            var num2 = Math.floor(Math.random() * 6) + 1;
            num2 *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
            commandLine.value = "execute at Darilli run summon minecraft:" + what_to_summon + " ~" + num1.toString() + " ~ ~" + num2.toString() + special_argument;
            

        }
        var ul = document.getElementById("console_form");
        var li = document.getElementById("LOTSSSS");
        var ev1 = new Event("change");
        var ev2 = new Event("click");
        commandLine.focus();
        commandLine.dispatchEvent(ev1);
        commandLine.focus();
        li.dispatchEvent(ev2);
        li.click();
        chrome.storage.sync.set({ cool_values: "" });

    } else {
        console.log("wrong window");
    }

});

function runFrameFunction() {
    var giggle = $(".user-notice-line").last().children().first().html();
    var firstSplit = giggle.split("<")[0];
    var secondSplit = firstSplit.split(" ")[2];
    console.log(secondSplit);
    chrome.storage.sync.set({ cool_values: secondSplit });
    $(".user-notice-line").last().removeClass("user-notice-line");


}

function main() {
    if (window.location.href.includes("instance/console")) {
        console.log("somehting is happening and on right page");
        frameInterval = setInterval(runStartApplication, 5000);

    }
    else if (window.location.href.includes(".tv/darilli")) {
        console.log("I am on Darilli's");
        mainInterval = setInterval(runFrameFunction, 2000);

    }

    else {
        console.log("This is not the page you are lookign for")
    }
}

main();