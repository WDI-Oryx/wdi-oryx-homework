n_line = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]

l_line = ["8th", "6th", "Union Square", "3rd", "1st"]

six_line = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

def go_line_one ( name ,start, final)
    start = name.index(start)
    final = name.index(final)
    p name[start..final]

end


def different_steps (line_one,start,line_two,end)