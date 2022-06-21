let side_length = 20
let segment = side_length / 5
let lines_of_blocks = 30
let cols_of_blocks = 60
let fr = 10

var w = (side_length + segment) * cols_of_blocks - segment
var h = (side_length + segment) * lines_of_blocks - segment
var colors = ['rgb(23, 27, 33)', 'rgb(31, 67, 43)', 'rgb(46, 107, 56)' , 'rgb(82, 164, 78)', 'rgb(108, 208, 100)']


function get_random_element(l) {
    return l[int(random(l.length))]
}

function setup() {
    createCanvas(w, h)
    background(14, 17, 22)
}
function draw() {
    rect_start_x = side_length / 2
    rect_start_y = side_length / 2
    rect_end_x = rect_start_x + side_length
    rect_end_y = rect_start_y + side_length 
        
    for (var i=1; i < lines_of_blocks; i++) {
        for (var j=1; j < cols_of_blocks; j++) {
            pc = get_random_element(colors)
            fill(pc)
            rect(rect_start_x, rect_start_y, side_length, side_length, side_length/5)
            
            rect_start_x += side_length + segment
        }
      
        rect_start_x = side_length / 2
        rect_start_y += side_length + segment
  
    }
    frameRate(fr)
}