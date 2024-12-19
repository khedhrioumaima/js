let ch = string;
let i, cpt, n, v = integer;
let vowals = ["a", "u", "e", "i", "o", "y"]
console.log("donner une phrase qui se termine par point")
ch = "aa aaa aa"
n = ch.length()

i = 1
cpt = 0
while (i <= n) {
    while (i <= n && ch[i] == '') {
        i++
        if (i <= n && ch[i] != '') {
            cpt++;
        }
    }
    v = 0
    for (let j = 0; i < n; j++) {
        if (vowals.includes(char))
            v++
    }
    i++
}
console.log(n)
console.log(cpt)
console.log(v)
