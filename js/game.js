function gameFunc(playerName){
    // изначальные координаты машины 
    let track = document.querySelector('.track');
    let car = document.querySelector('.car');
    let trackCoord = track.getBoundingClientRect();
    let carCoord = {
        left : trackCoord.left + track.offsetWidth/2 - car.offsetWidth/2,
        top: trackCoord.top + track.offsetHeight - car.offsetHeight
    };
    car.style.left = carCoord.left + 'px';
    car.style.top = carCoord.top + 'px';

    let player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `<p>${playerName}</p>`;
    gameBlock.append(player);
    
    function stoneSpawn(){
        let stone = document.createElement('div');
        
    }
    




    function moveCar(e){
        switch (e.key, e.code) {
            case 'KeyA':
            case 'ArrowLeft':
                carCoord.left -= 20;
                if(carCoord.left <= trackCoord.left){ 
                    carCoord.left = trackCoord.left;
                }
                break;
            case 'KeyD':    
            case 'ArrowRight':
                carCoord.left += 20;
                if(carCoord.left + car.offsetWidth >= trackCoord.left + track.offsetWidth){ 
                    carCoord.left = trackCoord.left + track.offsetWidth - car.offsetWidth;
                } 
                break;
            default:
                break;
        }

        car.style.left = carCoord.left + 'px';
    }
    
    document.addEventListener('keydown', moveCar);
}