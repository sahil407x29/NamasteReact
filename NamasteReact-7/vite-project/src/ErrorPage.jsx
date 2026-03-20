import { useRouteError } from "react-router-dom";


const Error = ()=> {
    const err = useRouteError()
    // the useRouteError is used to catch the error object
    console.log(err)
   return (
    <div>
     <h1>Something went wrong</h1>
     <h2>{err.status} : {err.statusText}</h2>
     </div>

   )
}

export default Error;