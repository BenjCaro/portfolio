const Form = () => {
    return (
        <div>
            <form>
                <input type="text" name="nom" placeholder="Votre nom" required></input>
                <input type="email" name="email" placeholder="Votre adress mail" required></input>
                <input type="tel" name="phone" placeholder="Votre numéro de téléphone" required></input>
                <input type="text" name="sujet"  placeholder="Sujet" required></input>
                <textarea placeholder="Votre Message" required></textarea>
                <input type="submit"></input>
            </form>
        </div>
        
    )
}

export default Form;