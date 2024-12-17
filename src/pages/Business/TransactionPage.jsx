import {TransactionCard} from "../../components/transaction/TransactionCard";


export const TransactionPage = (props) => {
  return (
    <div className="transaction-page" style={{width: "100vw", height:"100vh", display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center"}}>
      <TransactionCard/>
    </div>
  )
}