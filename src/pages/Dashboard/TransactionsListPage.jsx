import {TransactionTable} from "../../components/transaction/TransactionTable";

export const TransactionsListPage = (props) => {

  return (
    <div className={"trans-list-page-wrap"}
         style={{
           width:'100%',
           display: 'flex',
           flexDirection: 'column',
           justifyContent: 'center',
           alignItems: 'center',
    }}>
      <TransactionTable/>
    </div>
  )
}