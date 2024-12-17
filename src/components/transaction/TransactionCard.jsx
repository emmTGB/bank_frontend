import "mdui/components/card.js"
import 'mdui/components/radio-group.js';
import 'mdui/components/radio.js';
import 'mdui/components/icon.js';
import CardAutoComplete from "../account/CardAutoComplete";
import "./TransactionCard.css"
import {TextField} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {getAccountDetailsM} from "../../services/accountService";
import {doTransaction} from "../../services/transactionService";
import {TransactionSymbol} from "../svg/TransactionSymbol";
import {BankIcons} from "../Icons/BankIcons";
import {AuthDialog} from "../user/AuthDialog";
import {NavBackButton} from "../NavBackButton";

export const TransactionCard = props => {
  const [isTransfer, setIsTransfer] = useState(true);
  const [transactionType, setTransactionType] = useState("transfer");
  const [fromNumber, setFromNumber] = useState("");
  const [fromNumberMsk, setFromNumberMsk] = useState("");
  const [toNumber, setToNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [direction, setDirection] = useState(-1);
  const [comment, setComment] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [details, setDetails] = useState({});

  const submitRef = useRef();


  const handleTypeChange = (event) => {
    const type = event.target.value;
    setTransactionType(type);
    if (type === "transfer") {
      setIsTransfer(() => true)
    } else {
      setIsTransfer(() => false)
    }
    if(type === "deposit"){
      setDirection(()=>1)
    }else{
      setDirection(()=>-1)
    }
  }

  const fetchFromId = async (id, msk) => {
    try {
      if (!id) {
        setFromNumber("")
        setIsSelected(() => false)
        return
      }
      const response = await getAccountDetailsM(id)
      console.log(response)
      setDetails(() => response.data);
      setFromNumber(() => response.data.accountNumber)
      setIsSelected(() => true)
      setFromNumberMsk(msk)
    } catch (error) {
      setFromNumber("")
      setIsSelected(() => false)
      console.log(error)
    }
  }

  const handleAmountChange = (event) => {
    event.preventDefault()
    setAmount(event.target.value);
    console.log(event.target.value);
  }

  const handleCommentChange = (event) => {
    event.preventDefault()
    setComment(event.target.value);
  }

  const onToChange = (event) => {
    event.preventDefault()
    setToNumber(event.target.value)
  }

  const handleTransactionSubmit = async (authRequest) => {
    const transaction = {
      accountNumber: fromNumber,
      toAccountNumber: toNumber,
      transactionType: transactionType.toUpperCase(),
      transactionDate: new Date().toISOString(),
      amount: parseFloat(amount),
      description: comment,
      authRequest: authRequest,
    }
    submitRef.current.loading = true
    console.log(transaction)
    try {
      await doTransaction(transactionType, transaction);
    } catch (error) {
      console.log(error)
      switch (error.status){
        case 401:
        case 403:
          throw error;
        case 500:
          alert("服务器错误")
          break;
        default:
          break;
      }
    }finally {
      submitRef.current.loading = false
    }
  }

  useEffect(()=>{
    submitRef.current.disabled = !((!isTransfer || toNumber) && fromNumber && amount && details.balance + amount * direction >= 0);
    if(isTransfer && toNumber){
      submitRef.current.disabled = toNumber.length !== 19
    }
    }, [isTransfer, fromNumber, toNumber, amount, details.balance, direction])

  return (
    <>
      <div className="trans-card-wrap">
        <mdui-card>
          <div className="left-content">
            <div className="title">
              <mdui-icon><TransactionSymbol/></mdui-icon>
              <h1>交易</h1>
            </div>

            <div className="display-wrap">
              <h3>您的银行卡</h3>
              {isSelected ?
                <div className="account-details">
                  <div className="row-1">
                    <mdui-icon><BankIcons bank={details.bankName}/></mdui-icon>
                    <span>{fromNumberMsk}</span>
                  </div>
                  <div className="row-2">
                    <span>可用余额:</span>
                    <span className={"balance"}>{details.balance}</span>
                  </div>
                </div> :
                <span>
                  请选择一张卡
                </span>
              }
            </div>
          </div>
          <div className="trans-form">
            <mdui-radio-group value={"transfer"} onInput={handleTypeChange}>
              <mdui-radio value="transfer">转账</mdui-radio>
              <mdui-radio value="withdraw">取款</mdui-radio>
              <mdui-radio value="deposit">存款</mdui-radio>
            </mdui-radio-group>
            <CardAutoComplete className={"txt-f trans-card-auto"} getContent={fetchFromId} />
            <TextField variant={"outlined"} label={"目标卡号(19位)"} disabled={!isTransfer} onChange={onToChange}
              className={`txt-f target-number ${isTransfer ? "show" : ""}`} />
            <TextField variant={"outlined"} label={"输入金额"} onChange={handleAmountChange}
              className={`txt-f amount`} />
            <TextField variant={"outlined"} label={"附言"} onChange={handleCommentChange}
              className={`txt-f comment`} />
            <mdui-button ref={submitRef}>
              下一步
            </mdui-button>
          </div>
          <AuthDialog entranceRef={submitRef} onSubmit={handleTransactionSubmit}/>
          <NavBackButton className={"back-button"} size={32}/>
        </mdui-card>
      </div>
    </>
  )
}