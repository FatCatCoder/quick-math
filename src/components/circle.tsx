import React, { useState } from 'react'

interface CircleFace {
    name: string,
    value: number
}

export default function circle() {
    const [radiusValue, setRadiusValue] = useState();
    const [diameterValue, setDiameterValue] = useState();
    const [circumferenceValue, setCircumferenceValue] = useState();
    const [areaValue, setAreaValue] = useState();

    const [solutions, setSolutions] = useState<any>([]);


    function conversion(r: number = 0, d: number = 0, c: number = 0, a: number = 0): CircleFace[]{
        if(r){
            return [
                {"name": 'radius', "value": r},
                {"name": 'diameter', "value": 2*r},
                {"name": 'circumference', "value": 2* Math.PI * r},
                {"name": 'area', "value": Math.PI * r**2}
        ]
        }
        return [];
    }

    const handleChange = (event: any) => {
        switch(event.target.name) {
            case 'radius':
                setRadiusValue(event.target.value)
                setSolutions(conversion(event.target.value))
              break;
            case 'diameter':
                setDiameterValue(event.target.value)
              break;
            case 'circumference':
                setCircumferenceValue(event.target.value)
                break;
            case 'area':
                setAreaValue(event.target.value)
                break;
          }
    }
    return (
        <div>

            <form>
                <p>radius</p>
                <input name={"radius"} value={radiusValue} onChange={(e) => handleChange(e)} />
                <br />
                <p>diameter</p>
                <input name={"diameter"} value={diameterValue} onChange={(e) => handleChange(e)} />
                <br />
                <p>circumference</p>
                <input name={"circumference"} value={circumferenceValue} onChange={(e) => handleChange(e)} />
                <br />
                <p>area</p>
                <input name={"area"} value={areaValue} onChange={(e) => handleChange(e)} />
            </form>

            <p>Solution:</p>
            {solutions.map((x: CircleFace, y: number) => {
                return <p key={y}>{`${x.name} ${x.value}`}</p>
            })}

        </div>
    )
}
