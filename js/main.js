const Image = ["h1.jpg","h4.gif","h5.jpg","h6.jpg","h7.jpg","h8.gif","h14.gif","h15.gif","h18.jpg","h23.jpg","h24.jpg","p1.gif"]

const text = ["A series of set of movements to music, either alone or with a partner. That is the definition of dancing. Dancing is a way to express one's feeling and to get active!!","Dance The lights dim, the orchestra begins to warm up, the rustling of paper can be heard, and then the curtain rises. The performance begins with an overture, a prelude to what will happen!!","Dance would be an amazing activity in the Landgren chapel because it will help people relax and it is great exercise!!","Dance is seen only as an art to some individuals but in actuality it is a hard working sport as well!!","Dance and body Expression The video Dance in the Real World expressed the details of dance and body expression!! ","Dance is my everything. It changed my life. It taught me to never give up and to be strong. It taught me to be fluid and sharp all at the same time!!","Dance is one of the most beautiful, expressive forms of art known to mankind. It expresses joy, love, sorrow, anger, and the list truly goes!!","Dance is a performing art form consisting of purposefully selected sequences of human movement. ... Dance can be categorized and described by its choreography, by its repertoire of movements, or by its historical period or place of origin.!!","Dance is more than the exploring of different ways to make a shape or learning a series of steps to music; it is a way of moving that uses the body as an instrument of expression and communication!!","Dancing can be a way to stay fit for people of all ages, shapes and sizes. It has a wide range of physical and mental benefits including: improved condition of your heart and lungs. increased muscular strength, endurance and motor fitness!!","You appear to get a much bigger release of endorphins when you dance than during other forms of exercise; it also connects with the emotional centres in the brain. For many people, dancing prompts an emotional release – often that's uncomplicated happiness, while for some it can make them cry!!","dance is full of expressions, you are emotional because dance is full of emotions, you are calm because dance makes you come from inside, you feel more energetic for next week because dance is full of energy!!",]

const heena = []


for (let i =0; i< Image.length; i++){
    heena.push(`<img src="./Images/${Image[i]}" class="image"  alt="" data-text="${text[i]}" alt="dance">`)
}
document.querySelector(".model-content").classList.add("animated", 'rollIn','delay-0.3s')
document.querySelector(".images").innerHTML=heena.join(" ");
const parth = document.querySelectorAll('.image');
console.log(parth);

const model = document.getElementById('myModel')
const modelImg = document.getElementById('img01')
const modelText = document.getElementById("caption")
for (const $image of parth){
    $image.addEventListener('mouseover', function(event){
        const img = event.target.closest('img');
        if(img){
        img.style.filter= "blur(0px)"
            img.style.backgroundBlendMode = 'overlay'
            img.style.transform = "scale(1.10)"
        }
    })
    $image.addEventListener('mouseout', function(event){
        const img = event.target.closest('img');
        if(img){
        img.style.filter= "blur(2px)"
        img.style.backgroundBlendMode = 'overlay'
            img.style.transform = "scale(1.0)"
        }
         })
    $image.addEventListener('click', function(event){
        const img = event.target.closest('img');
        if(img){
            model.style.display = "block";
            modelImg.src = img.src;
            modelText.textContent = img.dataset.text
        }
    })
}

for (let i = 0; i < parth.length; i++){
    if (i==1 || i == 4 || i==7 || i==10){
        parth[i].classList.add("animated", "slow", "slideInDown")
    }
    else{
        parth[i].classList.add("slideInUp","animated", "slow")
    }
}

const close = document.querySelector('.close')
close.addEventListener('click', function(event){
    model.style.display = 'none';
})

document.addEventListener('keydown',function(event){
    if(event.keyCode == 27){
        close.querySelector('.close');
    }
    model.style.display = 'none';
})