import React, { useState, useRef, useEffect, useReducer } from "react";
import { Autocomplete, Box, Button, Stack, TextField } from "@mui/material";
import TableLazyLoading from '../components/TableLazyLoading'
import Modeal from '../components/Modeal'
import Head from "next/head";
import TabelData from "../components/TabelData";
const Index = ({ main, user }) => {
  //?get the data
  const mainSelected = main.categories;

  const [selectedOption, setSelectedOption] = useState(null);
  const [optionSub, setOptionSub] = useState(null);

  //?get the id from main category
  const handleOptionChange = (event, value) => {
    if (value !== null) {
      setSelectedOption(value.id);
    } else {
      setSelectedOption(null);
    }
    if (selectedOption === null) {
      setOptionSub(null);
    }
  };
  //?get the id from sub-category
  const handleChangerSubCat = (event, value) => {
    if (value !== null) {
      setOptionSub(value.id);
    } else {
      setOptionSub(null);
    }
  };

  //todo generate the sub Category
  const selectedCategoryId = selectedOption;

  const selectedCategory = mainSelected.find(
    (category) => category.id === selectedCategoryId
  );

  let subCatId = mainSelected[0].children.find((e) => e.id === optionSub);
  const brandCar = user[1];

  const other = [
    { id: 4093, name: "other", slug: "other", parent: 1, child: false },
  ];

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [optionValue, setOptionValue] = useState(""); // 1
  //? tThe reducer function

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_SUB_CAT":
        return { ...state, subCat: action.payload };
      case "SET_ALL_VAL":
        return { ...state, operationType: action.payload };
      case "SET_DATA_AcounterAY":
        return { ...state, brand: action.payload };
      case "SET_gear":
        return { ...state, gear: action.payload };
      case "SET_feul":
        return { ...state, feul: action.payload };
      case "SET_condition":
        return { ...state, condition: action.payload };
      case "SET_color":
        return { ...state, color: action.payload };
      case "SET_counter":
        return { ...state, counter: action.payload };
      case "SET_unitCounter":
        return { ...state, unitCounter: action.payload };
      case "SET_cylinder":
        return { ...state, cylinder: action.payload };
      case "SET_leaderShip":
        return { ...state, leaderShip: action.payload };
      case "SET_structureNo":
        return { ...state, structureNo: action.payload };
      case "SET_COUNTRY":
        return { ...state, country: action.payload };
      case "SET_YEAR":
        return { ...state, year: action.payload };
      case "SET_BRAND_OPTION":
        return { ...state, brandOption: action.payload };
      case "SET_INPUT_OPTION":
        return { ...state, inputOption: action.payload };
      case "SET_INPUT_OPTION_2":
        return { ...state, inputOption2: action.payload };
      case "SET_INPUT_OPTION_3":
        return { ...state, inputOption3: action.payload };
      case "SET_INPUT_OPTION_4":
        return { ...state, inputOption4: action.payload };
      case "SET_INPUT_OPTION_5":
        return { ...state, inputOption5: action.payload };
      case "SET_INPUT_OPTION_6":
        return { ...state, inputOption6: action.payload };
      case "SET_INPUT_OPTION_7":
        return { ...state, inputOption7: action.payload };
      case "SET_INPUT_OPTION_8":
        return { ...state, inputOption8: action.payload };
      case "SET_INPUT_OPTION_9":
        return { ...state, inputOption9: action.payload };
      case "SET_INPUT_OPTION_10":
        return { ...state, inputOption10: action.payload };
      case "SET_INPUT_OPTION_11":
        return { ...state, inputOption11: action.payload };
      case "SET_INPUT_OPTION_12":
        return { ...state, inputOption12: action.payload };
      case "SET_INPUT_OPTION_13":
        return { ...state, inputOption13: action.payload };
      case "SET_tableData":
        return { ...state, tableData: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    subCat: "",
    operationType: "",
    brand: "",
    gear: "",
    feul: "",
    condition: "",
    color: "",
    counter: "",
    unitCounter: "",
    cylinder: "",
    leaderShip: "",
    structureNo: "",
    country: "",
    year: "",
    brandOption: "",
    inputOption: "",
    inputOption2: "",
    inputOption3: "",
    inputOption4: "",
    inputOption5: "",
    inputOption6: "",
    inputOption7: "",
    inputOption8: "",
    inputOption9: "",
    inputOption10: "",
    inputOption11: "",
    inputOption12: "",
    inputOption13: "",
  });
  const [tableData, setTableData] = useState({});

  const handelAllOption = (e) => {
    e.preventDefault();
    const addData = {
      title: optionValue,
      subCate: state.subCat,
      operationType:
        state.operationType === "other"
          ? state.inputOption
          : state.operationType,
      brand: state.brand === "other" ? state.inputOption2 : state.brand,
      gear: state.gear === "other" ? state.inputOption3 : state.gear,
      feul: state.feul === "other" ? state.inputOption4 : state.feul,
      condition:
        state.condition === "other" ? state.inputOption5 : state.condition,
      color: state.color === "other" ? state.inputOption6 : state.color,
      counter: state.counter === "other" ? state.inputOption7 : state.counter,
      unitCounter:
        state.unitCounter === "other" ? state.inputOption8 : state.unitCounter,
      cylinder:
        state.cylinder === "other" ? state.inputOption9 : state.cylinder,
      leaderShip:
        state.leaderShip === "other" ? state.inputOption10 : state.leaderShip,
      structureNo:
        state.structureNo === "other" ? state.inputOption11 : state.structureNo,
      country: state.country === "other" ? state.inputOption12 : state.country,
      brandOpitonOther: brandOpiton === "other" ? brandOpitonOther : brandOpiton,
      year: state.year === "other" ? state.inputOption13 : state.year,
    };
    setTableData(addData);
    window.scrollTo({top:0, behavior:'smooth'})
  };
  //!-----------
  const [brandOpiton, setBrandOption] = useState("");
  const [brandOpitonOther, setBrandOptionOther] = useState("");

  // const counter = [...other,...user[0].options]
  console.log("tableData", tableData);
  // console.log(user );
  return (
    <>
      <Head>
        <title>Category data</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack display='flex' flexDirection="row" justifyContent="space-around">
      <Box>

     
        <Autocomplete 
          onChange={(event, value) => {
            handleOptionChange(event, value);
            setOptionValue("");
          }}
          inputValue={optionValue}
          onInputChange={(event, value) => {
            setOptionValue(value);
          }}
          // value={handelClear }
          id="combo-box-demo"
          // options={mainSelected.map((option) => option.name)}
          options={mainSelected}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => <TextField {...params} label="التصنيفات" />}
          sx={{ width: 300 , margin:"1rem 0"}} 
        />

        

    
        {selectedCategory?.id > 0 ? (
          <Autocomplete
            onChange={(event, value) => {
              handleChangerSubCat(event, value);
              dispatch({ type: "SET_SUB_CAT", payload: "" });
            }}
            inputValue={state.subCat}
            onInputChange={(event, value) => {
              dispatch({ type: "SET_SUB_CAT", payload: value });
            }}
            disablePortal
            options={selectedCategory.children}
            getOptionLabel={(option) => option.name}
            sx={{ width: 300 ,margin:"1rem 0"}}
            renderInput={(params) => (
              <TextField {...params} label="افرع التصنيفات " />
            )}
          />
        ) : null}
        

        {optionSub === 13 ? (
          <>
            <Autocomplete
              onChange={(event, value) => {
                dispatch({ type: "SET_ALL_VAL", payload: "" });
              }}
              inputValue={state.operationType}
              onInputChange={(event, value) => {
                dispatch({ type: "SET_ALL_VAL", payload: value });
              }}
              disablePortal
              options={[...other, ...user[0].options]}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 ,margin:"1rem 0"}}
              renderInput={(params) => (
                <TextField {...params} label="افرع التصنيفات " />
              )}
            />

            {state.operationType === [...other, ...user[0].options][0].name && (
              <TextField
                onChange={(e) =>
                  dispatch({
                    type: "SET_INPUT_OPTION",
                    payload: e.target.value,
                  })
                }
                sx={{ width: 300 ,margin:"1rem 0"}}
                //  inputValue={inputOption}
                value={state.inputOption}
                onInputChange={(event, value) => {
                  dispatch({ type: "SET_INPUT_OPTION", payload: value });
                }}
              />
            )}

            <Autocomplete
              onChange={() =>
                dispatch({ type: "SET_DATA_AcounterAY", payload: "" })
              }
              inputValue={state.brand}
              onInputChange={(event, value) => {
                dispatch({ type: "SET_DATA_AcounterAY", payload: value });
              }}
              id="combo-box-demo"
              options={[...other, ...user[1].options]}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 ,margin:"1rem 0"}}
              renderInput={(params) => (
                <TextField {...params} label={user[1].name} />
              )}
          
            />




            {state.brand === [...other, ...user[1].options][0].name && (
              <TextField
                onChange={(e) =>
                  dispatch({
                    type: "SET_INPUT_OPTION_2",
                    payload: e.target.value,
                  })
                }

                sx={{ width: 300 ,margin:"1rem 0"}}
                value={state.inputOption2}
                onInputChange={(event, value) => {
                  dispatch({ type: "SET_INPUT_OPTION_2", payload: value });
                }}
              />
            )}


            {state.brand.length > 0 && (
              <Modeal brandOpitonOther={brandOpitonOther} setBrandOptionOther={setBrandOptionOther} brandCar={brandCar} brandOpiton={brandOpiton} setBrandOption={setBrandOption} />

            )}


            <Autocomplete
              onChange={() => dispatch({ type: "SET_gear", payload: "" })}
              inputValue={state.gear}
              onInputChange={(event, value) => {
                dispatch({ type: "SET_gear", payload: value });
              }}
              id="combo-box-demo"
              options={[...other, ...user[2].options]}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 ,margin:"1rem 0"}}
              renderInput={(params) => (
                <TextField {...params} label={user[2].name} />
              )}
            />
            {state.gear === [...other, ...user[2].options][0].name && (
              <TextField
                onChange={(e) =>
                  dispatch({
                    type: "SET_INPUT_OPTION_3",
                    payload: e.target.value,
                  })
                }
                sx={{ width: 300 ,margin:"1rem 0"}}
                value={state.inputOption3}
                onInputChange={(event, value) => {
                  dispatch({ type: "SET_INPUT_OPTION_3", payload: value });
                }}
              />
            )}

            <Autocomplete
              onChange={() => dispatch({ type: "SET_feul", payload: "" })}
              inputValue={state.feul}
              onInputChange={(event, value) => {
                dispatch({ type: "SET_feul", payload: value });
              }}
              id="combo-box-demo"
              options={[...other, ...user[3].options]}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 ,margin:"1rem 0"}}
              renderInput={(params) => (
                <TextField {...params} label={user[3].name} />
              )}
            />
            {state.feul === [...other, ...user[3].options][0].name && (
              <TextField
                onChange={(e) =>
                  dispatch({
                    type: "SET_INPUT_OPTION_4",
                    payload: e.target.value,
                  })
                }
                sx={{ width: 300 ,margin:"1rem 0"}}
                value={state.inputOption4}
                onInputChange={(event, value) => {
                  dispatch({ type: "SET_INPUT_OPTION_4", payload: value });
                }}
              />
            )}

            <Autocomplete
              onChange={() => dispatch({ type: "SET_condition", payload: "" })}
              inputValue={state.condition}
              onInputChange={(event, value) => {
                dispatch({ type: "SET_condition", payload: value });
              }}
              id="combo-box-demo"
              options={[...other, ...user[4].options]}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 ,margin:"1rem 0"}}
              renderInput={(params) => (
                <TextField {...params} label={user[4].name} />
              )}
            />
            {state.condition === [...other, ...user[4].options][0].name && (
              <TextField
                onChange={(e) =>
                  dispatch({
                    type: "SET_INPUT_OPTION_5",
                    payload: e.target.value,
                  })
                }
                sx={{ width: 300 ,margin:"1rem 0"}}
                value={state.inputOption5}
                onInputChange={(event, value) => {
                  dispatch({ type: "SET_INPUT_OPTION_5", payload: value });
                }}
              />
            )}
            <Autocomplete
              onChange={() => dispatch({ type: "SET_color", payload: "" })}
              inputValue={state.color}
              onInputChange={(event, value) => {
                dispatch({ type: "SET_color", payload: value });
              }}
              id="combo-box-demo"
              options={[...other, ...user[5].options]}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 ,margin:"1rem 0"}}
              renderInput={(params) => (
                <TextField {...params} label={user[5].name} />
              )}
            />
            {state.color === [...other, ...user[5].options][0].name && (
              <TextField
              sx={{ width: 300 ,margin:"1rem 0"}}
                onChange={(e) =>
                  dispatch({
                    type: "SET_INPUT_OPTION_6",
                    payload: e.target.value,
                  })
                }
                value={state.inputOption6}
                onInputChange={(event, value) => {
                  dispatch({ type: "SET_INPUT_OPTION_6", payload: value });
                }}
              />
            )}
            <Autocomplete
              onChange={() => dispatch({ type: "SET_counter", payload: "" })}
              inputValue={state.counter}
              onInputChange={(event, value) => {
                dispatch({ type: "SET_counter", payload: value });
              }}
              id="combo-box-demo"
              options={[...other, ...user[6].options]}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 ,margin:"1rem 0"}}
              renderInput={(params) => (
                <TextField {...params} label={user[6].name} />
              )}
            />
            {state.counter === [...other, ...user[6].options][0].name && (
              <TextField
                onChange={(e) =>
                  dispatch({
                    type: "SET_INPUT_OPTION_7",
                    payload: e.target.value,
                  })
                }
                sx={{ width: 300 ,margin:"1rem 0"}}
                value={state.inputOption7}
                onInputChange={(event, value) => {
                  dispatch({ type: "SET_INPUT_OPTION_7", payload: value });
                }}
              />
            )}
            <Autocomplete
              onChange={() =>
                dispatch({ type: "SET_unitCounter", payload: "" })
              }
              inputValue={state.unitCounter}
              onInputChange={(event, value) => {
                dispatch({ type: "SET_unitCounter", payload: value });
              }}
              id="combo-box-demo"
              options={[...other, ...user[7].options]}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 ,margin:"1rem 0"}}
              renderInput={(params) => (
                <TextField {...params} label={user[7].name} />
              )}
            />
            {state.unitCounter === [...other, ...user[7].options][0].name && (
              <TextField
              sx={{ width: 300 ,margin:"1rem 0"}}
                onChange={(e) =>
                  dispatch({
                    type: "SET_INPUT_OPTION_8",
                    payload: e.target.value,
                  })
                }
                value={state.inputOption8}
                onInputChange={(event, value) => {
                  dispatch({ type: "SET_INPUT_OPTION_8", payload: value });
                }}
              />
            )}
            <Autocomplete
              onChange={() => dispatch({ type: "SET_cylinder", payload: "" })}
              inputValue={state.cylinder}
              onInputChange={(event, value) => {
                dispatch({ type: "SET_cylinder", payload: value });
              }}
              id="combo-box-demo"
              options={[...other, ...user[8].options]}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 ,margin:"1rem 0"}}
              renderInput={(params) => (
                <TextField {...params} label={user[8].name} />
              )}
            />
            {state.cylinder === [...other, ...user[8].options][0].name && (
              <TextField
              sx={{ width: 300 ,margin:"1rem 0"}}
                onChange={(e) =>
                  dispatch({
                    type: "SET_INPUT_OPTION_9",
                    payload: e.target.value,
                  })
                }
                value={state.inputOption9}
                onInputChange={(event, value) => {
                  dispatch({ type: "SET_INPUT_OPTION_9", payload: value });
                }}
              />
            )}
            <Autocomplete
              onChange={() => dispatch({ type: "SET_leaderShip", payload: "" })}
              inputValue={state.leaderShip}
              onInputChange={(event, value) => {
                dispatch({ type: "SET_leaderShip", payload: value });
              }}
              id="combo-box-demo"
              options={[...other, ...user[9].options]}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 ,margin:"1rem 0"}}
              renderInput={(params) => (
                <TextField  {...params} label={user[9].name} />
              )}
            />
            {state.leaderShip === [...other, ...user[9].options][0].name && (
              <TextField
              sx={{ width: 300 ,margin:"1rem 0"}}
                onChange={(e) =>
                  dispatch({
                    type: "SET_INPUT_OPTION_10",
                    payload: e.target.value,
                  })
                }
                value={state.inputOption10}
                onInputChange={(event, value) => {
                  dispatch({ type: "SET_INPUT_OPTION_10", payload: value });
                }}
              />
            )}

            <Autocomplete
              onChange={() =>
                dispatch({ type: "SET_structureNo", payload: "" })
              }
              inputValue={state.structureNo}
              onInputChange={(event, value) => {
                dispatch({ type: "SET_structureNo", payload: value });
              }}
              id="combo-box-demo"
              options={[...other, ...user[10].options]}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 ,margin:"1rem 0"}}
              renderInput={(params) => (
                <TextField {...params} label={user[10].name} />
              )}
            />
            {state.structureNo === [...other, ...user[10].options][0].name && (
              <TextField
                onChange={(e) =>
                  dispatch({
                    type: "SET_INPUT_OPTION_11",
                    payload: e.target.value,
                  })
                }
                sx={{ width: 300 ,margin:"1rem 0"}}
                value={state.inputOption11}
                onInputChange={(event, value) => {
                  dispatch({ type: "SET_INPUT_OPTION_11", payload: value });
                }}
              />
            )}
            <Autocomplete
              onChange={() => dispatch({ type: "SET_COUNTRY", payload: "" })}
              inputValue={state.country}
              onInputChange={(event, value) => {
                dispatch({ type: "SET_COUNTRY", payload: value });
              }}
              id="combo-box-demo"
              options={[...other, ...user[11].options]}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 ,margin:"1rem 0"}}
              renderInput={(params) => (
                <TextField {...params} label={user[11].name} />
              )}
            />
            {state.country === [...other, ...user[11].options][0].name && (
              <TextField
                onChange={(e) =>
                  dispatch({
                    type: "SET_INPUT_OPTION_12",
                    payload: e.target.value,
                  })
                }
                sx={{ width: 300 ,margin:"1rem 0"}}
                value={state.inputOption12}
                onInputChange={(event, value) => {
                  dispatch({ type: "SET_INPUT_OPTION_12", payload: value });
                }}
              />
            )}
            <Autocomplete
              onChange={() => dispatch({ type: "SET_YEAR", payload: "" })}
              inputValue={state.year}
              onInputChange={(event, value) => {
                dispatch({ type: "SET_YEAR", payload: value });
              }}
              id="combo-box-demo"
              options={[...other, ...user[12].options]}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 ,margin:"1rem 0"}}
              renderInput={(params) => (
                <TextField {...params} label={user[12].name} />
              )}
            />
            {state.year === [...other, ...user[9].options][0].name && (
              <TextField
                onChange={(e) =>
                  dispatch({
                    type: "SET_INPUT_OPTION_13",
                    payload: e.target.value,
                  })
                }
                sx={{ width: 300 ,margin:"1rem 0"}}
                value={state.inputOption13}
                onInputChange={(event, value) => {
                  dispatch({ type: "SET_INPUT_OPTION_13", payload: value });
                }}
              />
            )}
          </>
        ) : null}
        <Button sx={{margin:"0 30%"}} variant="contained" onClick={handelAllOption}>add</Button>
        </Box>


        <Box sx={{ margin:"1rem 0"}}>

        <TableLazyLoading optionData={tableData}/>
        </Box>
      </Stack>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const response = await fetch(
    `https://staging.mazaady.com/api/v1/get_all_cats`,
    {
      method: "GET",
      headers: {
        "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
        "content-language": "ar",
        Accept: "aconditionlication/json",
      },
    }
  );
  const data = await response.json();

  const response2 = await fetch(
    `https://staging.mazaady.com/api/v1/properties?cat=13 (sub-category id)`,
    {
      method: "GET",
      headers: {
        "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
        "content-language": "ar",
        Accept: "aconditionlication/json",
      },
    }
  );
  const data2 = await response2.json();
  return {
    props: {
      main: data.data,
      user: data2.data,
    },
  };
}