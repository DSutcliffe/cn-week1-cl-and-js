/* Searches HTML code for <p></p> elements */
let paragraphs = document.getElementsByTagName("p");

for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);
    
}

/* ForOf Loop below does the same as above ForLoop */
for (const paragraph of paragraphs) {
    console.log(paragraph);
}