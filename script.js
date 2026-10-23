
const btn=document.getElementById('theme-toggle');
const saved=localStorage.getItem('theme');
if(saved==='light'){
    document.body.classList.add('light');
    btn.textContent='dark';
}
else{
    btn.textContent='light';
}
btn.addEventListener('click',()=>{
    const isLight=document.body.classList.toggle('light');
    btn.textContent=isLight?'dark':'light';
    localStorage.setItem('theme',isLight?'light':'dark');
});
const profileimg=document.getElementById('profile');
const hoverbakground="url('https://i.pinimg.com/originals/c4/9b/39/c49b39938f0af3e16afddaba0811e19f.jpg')";
profileimg.addEventListener('mouseenter',()=>{
    document.body.style.backgroundImage=hoverbakground;
    document.body.style.backgroundSize="cover";
    document.body.style.backgroundRepeat="no-repeat";
});
profileimg.addEventListener('mouseleave',()=>{
    document.body.style.backgroundImage="none";
});