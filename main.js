const aside = document.querySelector('aside');
const opemaside = document.getElementById('opemaside');
const closeaside = document.getElementById('closeaside');

const toggleAside = () => {
   aside.classList.toggle('-translate-x-full');
}

opemaside.onclick = toggleAside;
closeaside.onclick = toggleAside;