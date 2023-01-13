
class Pestanyes{
    constructor ( idMenu, idSection ) {
        let that = this;
        this.llistaPestanyes = document.getElementById(idMenu);
        this.continguts = document.getElementById(idSection);
        this.llistaEnllaços = this.llistaPestanyes.getElementsByTagName('a');
        this.llistaContinguts = this.continguts.getElementsByTagName('article');

        for(let i = 0;i<this.llistaEnllaços.length; i++){
            let enllaç = this.llistaEnllaços[i];
            enllaç.onclick = function(evt){
                that.clickEnllaç(evt, this);
            }

        }
    }
	
	clickEnllaç(evt,pestanya){
        evt.preventDefault();
        let node, posAc;
        for(let i = 0;i<this.llistaEnllaços.length; i++){
            node = this.llistaEnllaços[i];
            node.className='';
            if (node.id == pestanya.id) posAc=i;
        }
        pestanya.className="actual";

        for(let i = 0;i<this.llistaContinguts.length;i++){
            this.llistaContinguts[i].className='amagat';
        }
        this.llistaContinguts[posAc].className='';
	}
}

function compilar(){
    let botons = document.querySelectorAll("button");
    let compilat = document.getElementsByClassName("bot-amagat");
    for(let i = 0;i<botons.length; i++){
        botons[i].addEventListener(
        "click",
        function () {
            compilat[i].className='';
          }
        )   
    }
}

