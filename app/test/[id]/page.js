"use client"
export default function Dynamic({params}) {
  return (
    <>
 
      <p>To testowa strona z adresem </p> <span className="font-bold italic">{params.id}</span>
    </>
  );
}
