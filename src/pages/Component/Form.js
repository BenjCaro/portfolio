const Form = () => {
    return (
        <form className="mt-4">
            <div class="row text-center">
                <div class="col-md-12 mb-2">
                    
                    <input type="text" class="form-control" name="nom" placeholder="Votre nom" required/>
                
                </div>
                
                <div class="col-md-12 mb-2">
                    
                    <input type="email" class="form-control" name="email" placeholder="Votre adresse mail" required/>
                
                </div>
                
                
                <div class="col-md-12 mb-2">
                    
                    <input type="tel" class="form-control" name="phone" placeholder="Votre numéro de téléphone" required/>
                    
                </div>
                <div class="col-md-12 mb-2">
                    
                    <input type="text" class="form-control" name="sujet" placeholder="Sujet" required/>
                    
                </div>
                
                
                <div class="col-md-12 mb-3">
                    
                    <textarea class="form-control" placeholder="Votre Message" rows="14" required></textarea>
                
                </div>
                
                
                <div class="col-md-12 mb-3">
                    
                    <input type="submit" class="btn btn-primary" value="Envoyer"/>
                
                </div>
            </div>
      </form>
        
    )
}

export default Form;