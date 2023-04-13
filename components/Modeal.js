import { Autocomplete, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Modeal = ({ brandCar,brandOpiton,setBrandOption,brandOpitonOther,setBrandOptionOther }) => {
    const [first, setfirst] = useState([])
    const [brand, setBrand] = useState(null)


    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`https://staging.mazaady.com/api/v1/get-options-child/53 (option id)`, {
                method: 'GET',
                headers: {
                    'private-key': '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16',
                    'content-language': 'ar',
                    'Accept': 'application/json',
                }
            })
            const data = await response.json()
            setfirst(data.data)
        }
        getData()
    }, [])


    const handleOptionChangerrr = (event, value) => {
        if (value !== null) {
            setBrand(value.id);

        } else {
            setBrand(null);

        }
    };

    const selectedCategoryId = brand;

    const selectedCategory = brandCar?.options?.find(category => category.id === selectedCategoryId);

const other = [
    {id: 51380, name: 'other', slug: 'other', parent: 645, child: true}
]

// const [selectedOption, setSelectedOption] = useState("");

// const handleOptionChange = (event) => {
//   setSelectedOption(event.target.value);
// };

// let subCatId = mainSelected[0].children.find(e=> e.id === optionSub )
    // const m = brandCar.options
    console.log([...other, ...(first[0]?.options || [])][0].name);
    // console.log(brand === 51380 ? "lolo" : "kiki");


    return (
        <div>
            {brandCar.options.length > 0 ? <Autocomplete
             onChange={() => setBrandOption("")}
             inputValue={brandOpiton}
             onInputChange={(event, value) => {
                setBrandOption(value);
             }}
                // onChange={handleOptionChangerrr}
                id="combo-box-demo"
                options={[...other, ...(first[0]?.options || [])]}
                getOptionLabel={(option) => option.name}
                sx={{ width: 300 ,margin:"1rem 0"}}

                renderInput={(params) => <TextField {...params} label="brand" />}
            /> : null}

              { brandOpiton === [...other, ...(first[0]?.options || [])][0].name && <TextField
               onChange={(e)=> setBrandOptionOther(e.target.value)}
               value={brandOpitonOther}
               sx={{ width: 300 ,margin:"1rem 0"}}

               />}
                {/* {brand === 51380 ? <input type="text" /> : null} */}
        </div>
    )
}

export default Modeal