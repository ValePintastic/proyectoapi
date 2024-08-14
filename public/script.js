
document.addEventListener('DOMContentLoaded', ()=>{
    async function handleRegister(e) {
        e.preventDefault();

        const nombrecompleto = document.getElementById('nombrecompleto').value;
        const email = document.getElementById('email').value;
        const celular = document.getElementById('celular').value;
        const cumpleaños = document.getElementById('cumpleaños').value;
        const password = document.getElementById('password').value;

        try{
            const res =await fetch('https://proyectoapi-y9wg.onrender.com',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({nombrecompleto, email, celular, cumpleaños, password})
                });


                const data = await res.json();
                if(res.status === 200){
                    alert ('Registro Exitoso');
                }else{
                    alert(`Error: ${data.msg}`);
                }

        }catch(error){
            console.error('Error:',error);
            alert('Error de Registro de Usuario')
        }

    }


    async function handleLogin(e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        try{
            const res =await fetch('https://proyectoapi-y9wg.onrender.com',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password})
                });


                const data = await res.json();
                if(res.status ===200){
                    alert ('Login Exitoso');
                }else{
                    alert(`Error: ${data.msg}`);
                }

        }catch(error){
            console.error('Error:',error);
            alert('Error al inicio de sesion')
        }

    }

    document.getElementById('registerForm').addEventListener('submit', handleRegister);
    document.getElementById('loginForm').addEventListener('submit', handleLogin);

});

