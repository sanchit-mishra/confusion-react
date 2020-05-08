import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


	function RenderComments({comments}) {
		
		if (comments == null) {
			return <div></div>
		}
		const coments = comments.map((cmt) => {
			return (
				<div className="container">
				<li key={cmt.id}>
					<p>{cmt.comment}</p>
					<p>
						--- {cmt.author}, &nbsp; 
						{new Intl.DateTimeFormat("en-US", {year: "numeric",month: "long",day: "2-digit",}).format(new Date(cmt.date))}
					</p>
				</li>
				</div>
			);
		});
		return (
			<div className="col-12 col-md-5 m-1">
				<h4> Comments </h4>
				<ul className="list-unstyled">{coments}</ul>
			</div>
		);
		
	}

    function RenderDish({dish}) {
		if (dish != null) {
			return (
				<div className="col-12 col-md-5 m-1">
					<Card>
						<CardImg width="100%" src={dish.image} alt={dish.name} />
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
				</div>
			);
		} else {
			return <div></div>
		}
	}

	const DishDetail = (props) => {
		if (props.dish == null) {
			return <div></div>
		}
		const dishItem = <RenderDish dish={props.dish} />
        
        const commentList = <RenderComments comments={props.dish.comments} />
		return (
			<div className="row">
			{dishItem}
			{commentList}
			</div>
		);
	}


export default DishDetail;