import React,{useRef} from 'react';
import { Link } from 'react-router-dom';
import'./Attestation de Réussite.css';
import Ecole from './ecole sup.png';
import Esp from './esprit.png';
import Sin from './siganture.png';
import Bar from './barre dessous.png';
import Img from './p1.png';

import { useReactToPrint} from 'react-to-print';

class ComponentToPrint extends React.Component{
    constructor(){
        super();
        this.state={name:"",
                     classe:""
                    }
    }
    componentDidMount(){
        const items = JSON.parse(localStorage.getItem("user"));
        if (items) {
            this.setState({name:items.rfidExist.name});
            this.setState({classe:items.rfidExist.classe});
        }
    }
    render(){
        return(
        
            <div>
                <div>
                <div>
            <div className='ecole'>
                <img src={Ecole} alt='Ecole'></img>
            </div>
            <div className='esprit'>
                <img src={Esp} alt='Esp'></img>
            </div>
            <div className='Date'>
            {Date().slice(3,15)}
            </div>
            <div className='a'>
            A l’aimable attention de la Direction Générale
            </div>
            <div className='b'>
            Objet: Demande de Stage Obligatoire
            </div>
            <div className='c'>
            Madame, Monsieur,
            </div>
            <div className='d'>
            L’Ecole Supérieure Privée d’Ingénierie et de Technologies, ESPRIT SA, est un établissement d’enseignement supérieur privé ayant pour objet principal, la formation d’ingénieurs dans le domaine des technologies de l’information et de la communication, ainsi qu' électromécanique et génie civil.
            </div>
            <div className='e'>
            Notre objectif consiste à former des ingénieurs opérationnels dès leur sortie d’école ; C’est dans ce but que nous encourageons nos élèves à mettre en pratique le savoir qu’ils ont acquis au cours de leur cursus universitaire.
            </div>
            <div className='f'>
            C’est également dans le but de les amener à s’intégrer dans l’environnement de l’entreprise que nous vous demandons de bien vouloir accepter :
            </div>
            <div className='g'>
            Létudiant(e) :  {this.state.name}
            </div>
            <div className='h'>
            Inscrit(e) en :  {this.state.classe}
            </div>
            <div className='i'>
            pour effectuer un stage obligatoire, au sein de votre honorable société. 
            </div>
            <div className='j'>
            En vous remerciant pour votre précieux soutien, nous vous prions d’agréer, Madame, Monsieur, l’expression de nos salutations distinguées.
            </div>
            <div className='sign'>
                <img src={Sin} alt='Sin'></img>
            </div>
            <div className='bar'>
                <img src={Bar} alt='bar'></img>
            </div>
            <div className='img'>
                <img src={Img} alt='img'></img>
            </div>





        </div> 
                </div>
            </div>

           
        
        );  
    }
}
const Presen = () =>{
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content:() => componentRef.current,
    });
    return(
        <div>
            <ComponentToPrint ref ={componentRef}/>
            <button onClick={handlePrint} className='t'>Print</button>
            <Link to='/Select'>
                        <button className='RR'>Retour</button>
            </Link>
        </div>
    );
};


//render(<Exemple/>,document.querySelector('#root'));
export default Presen;
