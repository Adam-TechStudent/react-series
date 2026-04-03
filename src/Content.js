const Content = () => {

    const handleNameChange = () => {
        const name = ['akshay', 'atul', 'arvind', 'panda', 'vighnesh'];
        const randomName = Math.floor(Math.random() * name.length);
        return name[randomName];
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
        alert('Button Clicked!');
    }
    const handleClick2 = (name) => {
        alert(`Button Clicked, Hello ${name}`);
    }
    const handleClick3 = (e) => {
        console.log(e.target.innerText);
    }
    



    return (
        <main>
            <p style={handlestyle}>
                Hello {handleNameChange()} !
                <button onClick={(handleClick)}>Click Me</button>
                <button onClick={() => handleClick2(handleNameChange())}>Click Me</button>
                <button onClick={(e) => handleClick3(e)}>Click Me</button>
            </p>
            
        </main>
    )
}
export default Content;