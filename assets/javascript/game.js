// Generate random numbers to be used for the target score and points for each crystal
function randomNumber(minNumber, maxNumber){
    var number = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return number;
}

// Set random numbers to numberScore and each crystalScore
var numberTarget= randomNumber(19, 120);
$('#random-num').html(numberTarget);

// Set score, wins and losses to 0
var score = 0;
var wins = 0;
var losses = 0;

function reset(){
    // Set random numbers to the value attribute of each image
    $('#red').attr('value', randomNumber(12, 19));
    $('#blue').attr('value', randomNumber(12, 19));
    $('#yellow').attr('value', randomNumber(12, 19));
    $('#green').attr('value', randomNumber(12, 19));

    // Store the value of each 
    var redValue = $('#red').attr('value');
    var blueValue = $('#blue').attr('value');
    var yellowValue = $('#yellow').attr('value');
    var greenValue = $('#green').attr('value');

    score = 0;
    numberTarget = randomNumber(19, 120);
    $('#score-number').html(score);
    $('#random-num').html(numberTarget);
}

reset();


$('.crystal-img').on('click', function(event)
    {
        crystalClicked = event.target;
        crystalValue = crystalClicked.getAttribute('value');
        score += Number(crystalValue)
        $('#score-number').html(Number(score));
        if (score === numberTarget) 
        {
            wins += 1;
            alert("YOU WIN!!! Your score matched the random number of " + numberTarget);
            $('#wins').html(Number(wins));
            reset();
        }
        else if (score < numberTarget) 
        {
            $('#score-number').html(Number(score));
        }
        else 
        {
            losses += 1;
            $('#losses').html(Number(losses));
            alert("YOU LOSE! Your total score was " + score + " which is greater than " + numberTarget);
            reset();  
        }
    });


