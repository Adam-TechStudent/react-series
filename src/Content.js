import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Rama');
    const [count, setCount] =useState(0);

    const handleNameChange = () => {
        const name = ['akshay', 'atul', 'arvind', 'panda', 'vighnesh'];
        const randomName = Math.floor(Math.random() * name.length);
        setName(name[randomName]);
    }

    const handlestyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%', 
        textAlign: 'center', 
        fontSize: '24px', 
        marginTop: '20px', 
        height: '450px', 
        backgroundColor: '#f0f0f0',
        color: '#333',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    }

    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    }
    const handleClick2 = (name) => {
        alert(`Button Clicked, Hello ${name}`);
    }
    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }
    



    return (
        <main>
            <p onDoubleClick = {handleClick} style={handlestyle}>
                Hello {name} !
                <button onClick={(handleNameChange)}>Change Name</button>
                <button onClick={(handleClick)}>Click Me</button>
                <button onClick={() => handleClick2(handleNameChange())}>Click Me</button>
                <button onClick={(e) => handleClick3(e)}>Click Me</button>
            </p>
            
        </main>
    )
}
export default Content;