export default function Sum({a , b , vinput}){
    return <>
        <div data-testid='sumab'>sum is : {a+b}</div>
        <h1 data-testid='input' >{vinput}</h1>
    </>
}