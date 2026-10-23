const panel=document.getElementById('panel');
const buttons=document.querySelectorAll('.Button');
buttons.forEach(button  =>{
    button.addEventListener('click',()=>{
        const buttonText=button.innerText;
        if(buttonText==='='){
            try{
                panel.value=eval(panel.value);
            }catch(error){
                panel.value="Error";
            }
            }else if(buttonText==='AC'||buttonText==='C'){
                panel.value='';
            }else{
                if(panel.value==="Error"){
                 panel.value=" ";
                }
                if(buttonText==='sqrt'){
                    if(panel.value){
                        panel.value=Math.sqrt(parseFloat(panel.value));
                    }
                }
                    else if(buttonText==='^'){
                        panel.value+='**';
                    }
                    else if(buttonText=='%'){
                        panel.value+='%';
                    }
                    else{
                         panel.value+=buttonText;
                    }
                }
    });
});