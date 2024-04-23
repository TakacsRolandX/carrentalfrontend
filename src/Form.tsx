import axios from "axios";
import { useState } from "react";

interface FormProps {
    setNewData: (newData: boolean) => void;
}

export default function Form(props: FormProps){
    const [plate, setPlate] = useState<string>();
    const [brand, setBrand] = useState<string>();
    const [model, setModel] = useState<string>();
    const [cost, setCost] = useState<string>();



    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/api/cars', {
            license_plate_number: plate,
            brand: brand,
            model: model,
            daily_cost: parseInt(cost!)
        });
        if(res.status === 201){
            props.setNewData(true);
            setPlate('');
            setBrand('');
            setModel('');
            setCost('');
            alert('Siker')
        }
        } catch (res) {
            alert(res.response.message)
        }
    }


    return <form onSubmit={handleSubmit} className="form" method='POST'>
    <div className="mb-3 mt-3">
        <label className="form-label">Rendszám:</label>
        <input type="string" className="form-control" id="plate" placeholder="Írja be a rendszámot" name="plate" value={plate} onChange={(e) => {setPlate(e.target.value)}}/>
    </div>
    <div className="mb-3 mt-3">
        <label className="form-label">Márka:</label>
        <input type="string" className="form-control" id="brand" placeholder="Írja be a márkát" name="brand" value={brand} onChange={(e) => {setBrand(e.target.value)}}/>
    </div>
    <div className="mb-3 mt-3">
        <label className="form-label">Típus:</label>
        <input type="string" className="form-control" id="model" placeholder="Írja be a típust" name="model" value={model} onChange={(e) => {setModel(e.target.value)}}/>
    </div>
    <div className="mb-3 mt-3">
        <label className="form-label">Napi díj:</label>
        <input type="number" className="form-control" id="cost" placeholder="Napi díj összege" name="cost" value={cost} onChange={(e) => {setCost(e.target.value)}}/>
    </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Hozzáadás</button>
    </form>
}