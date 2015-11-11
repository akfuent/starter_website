
$('.example-list').on('click', '.example-list-item', changeColorWillWork )

function changeColorWillWork() {
  $(this).css('color', 'blue');
}

$('.mondrian-color').on('click', getColor);

var color; 

function getColor() {
if ( $(this).hasClass('red') ) {
	color = 'red';
}
if ( $(this).hasClass('blue') ) {
	color = 'blue';
}
if ( $(this).hasClass('yellow') ) {
	color = 'yellow';
}
if ( $(this).hasClass('white') ) {
	color = 'white';
}
console.log(color);
}

$('#row1box1').on('click', fillMondrian);
function fillMondrian() 

{
	$(this).css('background-color', color);
}
$('#row1box2').on('click', fillMondrian);
function fillMondrian() 

{
	$(this).css('background-color', color);
}
$('#row1box3').on('click', fillMondrian);
function fillMondrian() 

{
	$(this).css('background-color', color);
}
$('#row1box4').on('click', fillMondrian);
function fillMondrian() 

{
	$(this).css('background-color', color);
}
$('#row2box1').on('click', fillMondrian);
function fillMondrian() 

{
	$(this).css('background-color', color);
}
$('#row2box2').on('click', fillMondrian);
function fillMondrian() 

{
	$(this).css('background-color', color);
}

$('#row2box3').on('click', fillMondrian);
function fillMondrian() 

{
	$(this).css('background-color', color);
}
$('#row2box4').on('click', fillMondrian);
function fillMondrian() 

{
	$(this).css('background-color', color);
}
$('#row3box1').on('click', fillMondrian);
function fillMondrian() 

{
	$(this).css('background-color', color);
}
$('#row3box2').on('click', fillMondrian);
function fillMondrian() 

{
	$(this).css('background-color', color);
}
$('#row3box3').on('click', fillMondrian);
function fillMondrian() 

{
	$(this).css('background-color', color);
}
$('#row3box4').on('click', fillMondrian);
function fillMondrian() 

{
	$(this).css('background-color', color);
}
$('#row4box1').on('click', fillMondrian);
function fillMondrian() 

{
	$(this).css('background-color', color);
}
$('#row4box2').on('click', fillMondrian);
function fillMondrian() 

{
	$(this).css('background-color', color);
}
$('#row4box3').on('click', fillMondrian);
function fillMondrian() 

{
	$(this).css('background-color', color);
}
$('#row4box4').on('click', fillMondrian);
function fillMondrian() 

{
	$(this).css('background-color', color);
}


