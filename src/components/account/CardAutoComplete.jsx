import {Autocomplete, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {getUserId} from "../../services/authService";
import {getAccountsList} from "../../services/userService";
import "mdui/components/text-field.js"


export default function CardAutoComplete({ className, getContent }) {
  const [options, setOptions] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const userId = getUserId()


  const getAccountList = async () => {
    try {
      const response = await getAccountsList(userId)
      setOptions(response.data.content)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    getAccountList()
  }, [])

  const handleCardSelected = async (event, newValue) => {
    const id = newValue ? newValue.id : null;
    const msk = newValue ? newValue.number : null;
    setSelectedId(id); // 更新本地状态
    getContent(id, msk)
  }

  return (
    <>
      <Autocomplete
        className={"card-auto " + className}
        freeSolo
        renderInput={
          (params) =>
            <TextField {...params} label="选择您的银行卡" variant={"outlined"} />
          // <mdui-text-field {...params} label={"选择您的银行卡"} variant={"outlined"}/>
        }
        options={options}
        getOptionLabel={(option) => option.number}
        onChange={handleCardSelected}
      />
    </>
  )
}