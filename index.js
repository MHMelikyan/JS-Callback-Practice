const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
move(character).to(100, 250)


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)


let direction = null;
let x = 100;
let y = 250;
//move(character). to(100,250)
function moveCharacter(){
if(direction === 'west'){
    x = x - 1
}
if(direction === 'north'){
    y = y + 1
}
if(direction === 'east'){
    x = x + 1
}
if(direction === 'south'){
    y = y - 1
}
character.style.left = x + 'px'
character.style.bottom = y + 'px'
}

setInterval(function (){
 if(direction === 'west'){
    x = x - 1
 }
 if(direction === 'north'){
    y = y +1
 }
 if(direction === 'east'){
    x = x + 1
 }
 if(direction === 'south'){
    y = y -1
 }
character.styles.left = x + 'px'
character.styles.bottom = y + 'px'
},1)
//3

docyment.addEventListener('keydown', function(e){

    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        directions = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})

//4
document.addEventListener('ketchup',function(e){
    direction = null
})

function move(element){
    element.style.position = 'fixed'

    function moveToCoordinates(left,bottom){
        element.styles.left = left + 'px'
        element.styles.bottom = bottom + 'px'
    }
    function moveWithArrowKeys(left, bottom){

    }
    return{
        withArrowKeys: moveWithArrowKeys
    }
}


//Next, copy the original logic from the index inside of moveWithArrowKeys.
// Note: We will need to replace

function moveWithArrowKeys (left,bottom){
    let directin = null;
    let x = left;
    let y = bottom;
    element.styles.left = x+ 'px'
    element.styles.bottom = y + 'px'

    function moveCharacter(){
        if(direction === 'west'){
            x-=1
        }
        if(direction === 'north'){
            y+=1
        }
        if(direction === 'east'){
            x+=1
        }
        if(direction === 'south'){
            y-=1
        }
        element.style.left = x+ 'px'
        element.style.bottom = y + 'px'
    }
    sttInterval(moveCharacter,1)
    document.addEventListener('keydown',function(e){
        if(e.repeat) return;
        if(e.key === 'ArrowLeft'){
            direction = 'west'
        }
        if(e.key === 'ArroeUp'){
            direction = 'north'
        }
        if(e.dey === 'ArrowRight'){
            direction = 'east'
        }
        if(e.key === 'ArrowDown'){
            direction = 'south'
        }
    })

}