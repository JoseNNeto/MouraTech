function rgbToHexa(r, g, b) {
    red = r.toString(16);
    green = g.toString(16);
    blue = b.toString(16);
    string = "#";

    if (red.length == 1) {
        red = "0" + r;
    }

    if (green.length == 1) {
        green = "0" + g;
    }

    if (blue.length == 1) {
        blue = "0" + b;
    }
    return string + red + green + blue;
    
}

console.log(rgbToHexa(00, 00, 00)); // #ffffff