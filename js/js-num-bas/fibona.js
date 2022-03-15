var a = 0, b = 1, c = 0;
document.write("Fibonacci serie");

while (b <= 40) {
    document.write("<br/>");
    document.write(c);    
    c = a + b;
    a = b;
    b = c;    
}
    document.write("<br/>");
    document.write(c);