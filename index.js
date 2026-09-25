// Write your code here!
const h1 = document.createElement('h1');
h1.textContent = 'Hello, DOM!';
document.body.appendChild(h1);




const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';
document.body.appendChild(newHeader);




const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}
document.body.appendChild(ul);

