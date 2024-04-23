import CarDto from "./Car.dto"

interface CardProps{
    car: CarDto
}

export default function Card(props: CardProps){
    const url = `/${props.car.brand.toLowerCase()}_${props.car.model.toLowerCase()}.png`

    return  <div className="col-lg-3 col-sm-12 m-2 p-2 card">
        <h1 className="card-title">{props.car.license_plate_number}</h1>
        <p>Márka: {props.car.brand}</p>
        <p>Model: {props.car.model}</p>
        <p>Napidíj: {props.car.daily_cost} Ft</p>
        <img src={url} alt="image" />
    </div>
}