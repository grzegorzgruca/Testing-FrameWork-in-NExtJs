export default async function One(props) {
    console.log("huj");
    let data = await ApiCall()
    return(<>
        {data && (<h2>Two parrarel</h2>)}
        </>)
}

function ApiCall() {
   return new Promise((resolve) => {setTimeout(() => {
       setTimeout(() => {
         resolve(true)
       }, 3800);
    }, 1000)} )
  
}