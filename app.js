const questionBTN1 = document.getElementById("questionBTN1");
const questionBTN2 = document.getElementById("questionBTN2");
const questionBTN3 = document.getElementById("questionBTN3");
const questionBTN4 = document.getElementById("questionBTN4");
const questionBTN5 = document.getElementById("questionBTN5");
const questionBTN6 = document.getElementById("questionBTN6");
const questionBTN7 = document.getElementById("questionBTN7");
const questionBTN8 = document.getElementById("questionBTN8");

const QuestionBox1 = document.getElementById("QuestionBox1");
const QuestionBox2 = document.getElementById("QuestionBox2");
const QuestionBox3 = document.getElementById("QuestionBox3");
const QuestionBox4 = document.getElementById("QuestionBox4");
const QuestionBox5 = document.getElementById("QuestionBox5");
const QuestionBox6 = document.getElementById("QuestionBox6");
const QuestionBox7 = document.getElementById("QuestionBox7");
const QuestionBox8 = document.getElementById("QuestionBox8");

questionBTN1.addEventListener("click", () => {
    QuestionBox1.classList.remove("UnactiveQuestion");
    QuestionBox2.classList.add("UnactiveQuestion");
    QuestionBox3.classList.add("UnactiveQuestion");
    QuestionBox4.classList.add("UnactiveQuestion");
    QuestionBox5.classList.add("UnactiveQuestion");
    QuestionBox6.classList.add("UnactiveQuestion");
    QuestionBox7.classList.add("UnactiveQuestion");
    QuestionBox8.classList.add("UnactiveQuestion");

})
questionBTN2.addEventListener("click", () => {
    QuestionBox1.classList.add("UnactiveQuestion");
    QuestionBox2.classList.remove("UnactiveQuestion");
    QuestionBox3.classList.add("UnactiveQuestion");
    QuestionBox4.classList.add("UnactiveQuestion");
    QuestionBox5.classList.add("UnactiveQuestion");
    QuestionBox6.classList.add("UnactiveQuestion");
    QuestionBox7.classList.add("UnactiveQuestion");
    QuestionBox8.classList.add("UnactiveQuestion");

})
questionBTN3.addEventListener("click", () => {
    QuestionBox1.classList.add("UnactiveQuestion");
    QuestionBox2.classList.add("UnactiveQuestion");
    QuestionBox3.classList.remove("UnactiveQuestion");
    QuestionBox4.classList.add("UnactiveQuestion");
    QuestionBox5.classList.add("UnactiveQuestion");
    QuestionBox6.classList.add("UnactiveQuestion");
    QuestionBox7.classList.add("UnactiveQuestion");
    QuestionBox8.classList.add("UnactiveQuestion");

})
questionBTN4.addEventListener("click", () => {
    QuestionBox1.classList.add("UnactiveQuestion");
    QuestionBox2.classList.add("UnactiveQuestion");
    QuestionBox3.classList.add("UnactiveQuestion");
    QuestionBox4.classList.remove("UnactiveQuestion");
    QuestionBox5.classList.add("UnactiveQuestion");
    QuestionBox6.classList.add("UnactiveQuestion");
    QuestionBox7.classList.add("UnactiveQuestion");
    QuestionBox8.classList.add("UnactiveQuestion");

})
questionBTN5.addEventListener("click", () => {
    QuestionBox1.classList.add("UnactiveQuestion");
    QuestionBox2.classList.add("UnactiveQuestion");
    QuestionBox3.classList.add("UnactiveQuestion");
    QuestionBox4.classList.add("UnactiveQuestion");
    QuestionBox5.classList.remove("UnactiveQuestion");
    QuestionBox6.classList.add("UnactiveQuestion");
    QuestionBox7.classList.add("UnactiveQuestion");
    QuestionBox8.classList.add("UnactiveQuestion");

})
questionBTN6.addEventListener("click", () => {
    QuestionBox1.classList.add("UnactiveQuestion");
    QuestionBox2.classList.add("UnactiveQuestion");
    QuestionBox3.classList.add("UnactiveQuestion");
    QuestionBox4.classList.add("UnactiveQuestion");
    QuestionBox5.classList.add("UnactiveQuestion");
    QuestionBox6.classList.remove("UnactiveQuestion");
    QuestionBox7.classList.add("UnactiveQuestion");
    QuestionBox8.classList.add("UnactiveQuestion");

})
questionBTN7.addEventListener("click", () => {
    QuestionBox1.classList.add("UnactiveQuestion");
    QuestionBox2.classList.add("UnactiveQuestion");
    QuestionBox3.classList.add("UnactiveQuestion");
    QuestionBox4.classList.add("UnactiveQuestion");
    QuestionBox5.classList.add("UnactiveQuestion");
    QuestionBox6.classList.add("UnactiveQuestion");
    QuestionBox7.classList.remove("UnactiveQuestion");
    QuestionBox8.classList.add("UnactiveQuestion");

})
questionBTN8.addEventListener("click", () => {
    QuestionBox1.classList.add("UnactiveQuestion");
    QuestionBox2.classList.add("UnactiveQuestion");
    QuestionBox3.classList.add("UnactiveQuestion");
    QuestionBox4.classList.add("UnactiveQuestion");
    QuestionBox5.classList.add("UnactiveQuestion");
    QuestionBox6.classList.add("UnactiveQuestion");
    QuestionBox7.classList.add("UnactiveQuestion");
    QuestionBox8.classList.remove("UnactiveQuestion");
})
