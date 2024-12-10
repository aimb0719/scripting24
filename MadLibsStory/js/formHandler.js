
console.log("coffee");

function write(){
    console.log("write function is functional");

    var adj = document.getElementById('adj').value;
    var adj1 = document.getElementById('adj1').value;
    var noun = document.getElementById('noun').value;
    var adj2 = document.getElementById('adj2').value;
    var typeofdrink = document.getElementById('typeofdrink').value;
    var pluralnoun = document.getElementById('pluralnoun').value;
    var adj3 = document.getElementById('adj3').value;
    var topic = document.getElementById('topic').value;
    var noun1 = document.getElementById('noun1').value;
    var adj4 = document.getElementById('adj4').value;

    var act = document.querySelector('input[name="act"]:checked').value;

    console.log(adj);
    console.log(adj1);
    console.log(noun);
    console.log(adj2);
    console.log(typeofdrink);
    console.log(pluralnoun);
    console.log(adj3);
    console.log(topic);
    console.log(noun1);
    console.log(adj4);
    console.log(act);

    var actMessage1 = 'close my eyes and savor the taste';
    var actMessage2 = 'immediately check my phone for messages';
    var actMessage3 = 'let out a contented sigh, just enjoying the moment';
    var actMessage4 = 'stir it with a spoon to make sure the sugar is dissolved evenly';

    if(act=="close my eyes"){
        actMessage = actMessage1;
    }else if(act=="checkphone"){
        actMessage = actMessage2;
    }else if(act=="sigh"){
        actMessage = actMessage3;
    }else if(act=="stir"){
        actMessage = actMessage4;
    }

    document.getElementById('output').innerHTML = "This morning, I woke up feeling incredibly <u><b>"+adj+"</b></u>. I could already smell the <u><b>"+adj1+"</b></u> aroma of coffee as I stumbled out of bed. My favorite coffee mug was waiting for me on the counter.<br><br>I decided to make my special brew. First, I ground up the beans until they were as fine as <u><b>"+noun+"</b></u>. Then, I poured the water into the coffee maker and waited impatiently, tapping my fingers against the counter.<br><br>While the coffee brewed, I dreamed about my day. I planned to visit a <u><b>"+adj2+"</b></u> café downtown, where they serve the best <u><b>"+typeofdrink+"</b></u> and the most delicious <u><b>"+pluralnoun+"</b></u>. I would bring along my <u><b>"+adj3+"</b></u> book about <u><b>"+topic+"</b></u> and spend hours reading.<br><br>Finally, my coffee was ready! I took a sip and it tasted like sweet <u><b>"+noun1+"</b></u>. I <u><b>"+actMessage+"</b></u>.<br><br>I knew it was going to be a <b><u>"+adj4+"</u></b> day."

}

