function ipv4_bits(ip){
    var bits = ip.split(".");
    var result = "";
    for(var i = 0; i < bits.length; i++){
        var bit = parseInt(bits[i]).toString(2);
        while(bit.length < 8){
            bit = "0" + bit;
        }
        result += bit;
    }
    return result;
}

console.log(ipv4_bits("999.999.0.1"));