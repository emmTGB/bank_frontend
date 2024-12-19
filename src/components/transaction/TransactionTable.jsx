import {DataGrid} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import {getTransactionsList} from "../../services/accountService";
import {getAccountsList} from "../../services/userService";
import {getUserId} from "../../services/authService";
import {Autocomplete, Checkbox, Chip, TextField} from "@mui/material";
import {transactionTypeDist} from "../../utils/dists";

import "mdui/components/icon.js"
import {BankIcons} from "../Icons/BankIcons"

import "./TransactionTable.css"
import {dataGridLocale} from "../../utils/dataGridLocale";

export const TransactionTable = ({ defaultAccId }) => {
  const transactions = {}
  const [pageSize, setPageSize] = useState(5)
  const [rows, setRows] = useState([]);
  const [sAccIds, setSaccIds] = useState([]);
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 80,
    },
    {
      field: 'accountNumber',
      headerName: '操作账户',
      width: 160,
    },
    {
      field: 'toAccountNumber',
      headerName: '目标账户',
      width: 160,
    },
    {
      field: 'amount',
      headerName: '金额',
      width: 120,
      valueGetter: (value) => { return value.toFixed(2) },
    },
    {
      field: 'transactionType',
      headerName: '交易类型',
      width: 100,
      disableColumnMenu: false,
      valueGetter: (value) => { return transactionTypeDist[value] || value },
    },
    {
      field: 'transactionDate',
      headerName: '交易时间',
      minWidth: 160,
      valueGetter: (value) => new Date(value + 'Z').toLocaleString(),
    },
    {
      field: 'description',
      headerName: '描述',
      width: 140,
      sortable: false,
    },
  ]
  const [accounts, setAccounts] = useState([]);

  const userId = getUserId()

  useEffect(()=>{
    getAccountsList(userId).then(r=>{
      const content = r.data.content
      setAccounts(content)
      if(defaultAccId){
        setSaccIds([defaultAccId])
      }else {
        setSaccIds(content.map(acc => acc.id))
      }
    }).catch(err=>{
      console.log(err)
    })

    const adjustPageSize = () => {
      const availableHeight = window.innerHeight - 240
      const calculatedPageSize = Math.max(1, Math.floor(availableHeight / 52))
      setPageSize(calculatedPageSize)
    }

    adjustPageSize();

    window.addEventListener("resize", adjustPageSize);
    return () => window.removeEventListener('resize', adjustPageSize);
  }, [])

  const fetchAllTransactions = async () => {
    for (let accId of sAccIds) {
      transactions[accId] = await getTransactionsList(accId)
    }
  }

  const handleAccFilter = (e, content) => {
    e.preventDefault()
    if(content.length === 0){
      setSaccIds(() => accounts.map(acc => acc.id))
    }else{
      setSaccIds(content.map(acc => acc.id))
    }
  }

  const showTransactions = () => {
    let tmp = []
    for (let accId of sAccIds) {
      transactions[accId].forEach(transaction => {
        if(!tmp.some(item => item.id === transaction.id)){
          tmp.push(transaction)
        }
      })
    }
    setRows(() => tmp)
  }

  useEffect(() => {
    fetchAllTransactions().then(r => {
      showTransactions()
    }).catch(e => {
      console.log(e)
    })
  }, [sAccIds]);

  return (
    <div className="table-wrap">
      <Autocomplete
        disableCloseOnSelect
        limitTags={2}
        multiple
        className="acc-auto-filter"
        options={accounts}
        getOptionLabel={(option) => option.number}
        renderOption={(props, option, { selected }) => {
          const { key, ...optionProps } = props;
          return (
            <li key={key} {...optionProps}>
              <Checkbox
                style={{ marginRight: 8 }}
                checked={selected}
              />
              <mdui-icon style={{ marginRight: 8 }}><BankIcons bank={`${option.bankName}`} /></mdui-icon>{ option.number}
            </li>
          );
        }}
        renderInput={
          (params) => <TextField {...params} style={{userSelect: 'none'}} variant="outlined" label={"选择银行卡"} />
        }
        renderTags={(value, getTageProps) =>
          value.map((option, index) => {
            const { key, ...tagProps } = getTageProps({ index });
            return (
              <Chip variant="filled" key={key} label={option.number} {...tagProps} />
            )
          })
        }
        onChange={handleAccFilter}
      />

      <DataGrid
        localeText={dataGridLocale}
        className={"transaction-table"}
        rows={rows}
        columns={columns}
        autoPageSize
        getRowClassName={(params) =>
          `row-${params.row.transactionType}`
        }
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        disableRowSelectionOnClick
      >

      </DataGrid>
    </div>
  )
};