import * as usersService from '../../utilities/users-service'

export default function OrderHistoryPage() {

   async function handleCheckToken(){
        const expDate = await usersService.checkToken()
        console.log(expDate)
    }

    return (
        <>
        <h1>Order History Page</h1>
        <button onClick={handleCheckToken}>Check When My Content Expires</button>
        </>
    );
  }