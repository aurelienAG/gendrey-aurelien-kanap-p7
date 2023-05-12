import Header from "../../components/Header" 

function Error(){

    return ( 
         
        <div className="errorPage"> 
         <Header/>  
         <div className="errorText">
       <h1><strong>404</strong></h1> 
       <h2>Oups! La page que vous demandez n'existe pas.</h2>
       <p>Retourner sur la page d'accueil</p>
       </div>
       </div>
    )
    }

export default Error;