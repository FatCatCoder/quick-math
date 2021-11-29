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
        let rCalc: number = r, dCalc: number = d, cCalc: number = c, aCalc: number = a;
        
        if((r | d | c | a) === 0 || undefined){
            return []
        }

        else if(r){
            rCalc = r
            dCalc = 2*r
            cCalc = 2 * Math.PI * r
            aCalc = Math.PI * r**2
        }
        else if(d){
            rCalc = d/2
            dCalc = d
            cCalc = Math.PI * d
            aCalc =  Math.PI * (d/2)**2
        }
        else if(c){
            rCalc = c/(2*Math.PI)
            dCalc = c/Math.PI
            cCalc = c
            aCalc = c**2 / (4*Math.PI)
        }
        else if(a){
            rCalc = Math.sqrt(a/Math.PI)
            dCalc = Math.sqrt((4*a)/(Math.PI))
            cCalc = 2 * Math.sqrt(Math.PI*a)
            aCalc = a
        }
        return [
            {"name": 'radius', "value": rCalc},
            {"name": 'diameter', "value": dCalc},
            {"name": 'circumference', "value": cCalc},
            {"name": 'area', "value": aCalc}
        ];
    }

    const handleChange = (event: any) => {
        let val = event.target.value;

        switch(event.target.name) {
            case 'radius':
                setRadiusValue(val)
                setSolutions(conversion(val))
              break;
            case 'diameter':
                setDiameterValue(val)
                setSolutions(conversion(0, val))
              break;
            case 'circumference':
                setCircumferenceValue(val)
                setSolutions(conversion(0, 0, val))
                break;
            case 'area':
                setAreaValue(val)
                setSolutions(conversion(0, 0, 0, val))
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
            {
                solutions.map((x: CircleFace, y: number) => {
                    return <p key={y}>{`${x.name} ${x.value}`}</p>
                })
            }

        </div>
    )
}
