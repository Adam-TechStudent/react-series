const Content = () => {

    const handleNameChange = () => {
        const name = ['akshay', 'atul', 'arvind', 'panda', 'vighnesh'];
        const randomName = Math.floor(Math.random() * name.length);
        return name[randomName];
    }

    return (
        <main>
            <p>
                Hello {handleNameChange()} !
            </p>
        </main>
    )
}
export default Content;