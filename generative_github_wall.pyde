w, h = 1000, 600
colors = [(23, 27, 33), (31, 67, 43), (46, 107, 56), (82, 164, 78), (108, 208, 100)]

side_length = 5
segment = side_length / 5
lines_of_blocks = h/(side_length+segment)
cols_of_blocks = w/(side_length+segment)

def get_random_element(l):
    return l[int(random(len(l)))]

def setup():
    size(w, h)
    background(14, 17, 22)

    rect_start_x = side_length / 2
    rect_start_y = side_length / 2
    rect_end_x = rect_start_x + side_length
    rect_end_y = rect_start_y + side_length 
        
    for i in range(lines_of_blocks):
        for j in range(cols_of_blocks):
            pc = get_random_element(colors)
            fill(*pc)
            rect(rect_start_x, rect_start_y, side_length, side_length, side_length/5)
            rect_start_x += side_length + segment
            
        rect_start_x = side_length / 2
        rect_start_y += side_length + segment
    
    save("Examples/github-contribution-wall.png")
