import React from 'react';
import {Card,CardImg, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
import { Loading } from './Loading';

function RenderCard({item, isLoading, errMess}){
    if (isLoading){
        return (
            <Loading />
        );
    }
    else if (errMess){
        return(
            <h4>{errMess}</h4>
        );
    }
    else
        return(
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null }
                    {item.description}
                </CardBody>
            </Card>
        );
}



function Home(props){
    return(
        <div className="container">
            <h4>Home</h4>
            <div className="row align-item-start">
                <div className="col-12 col-md m-1">   
                    <RenderCard item={props.dish}
                            isLoading={props.dishesLoading}
                            errMess={props.dishesErrMess} />
                </div>

                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promo} />
                </div>

                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;