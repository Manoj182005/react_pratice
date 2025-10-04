function Hpp(){
let arr = [1,2,3,4,5,6];
let obj = {
    her : "alexa",
    age : "15"
}
return(
    <>
    <p>array is {arr}</p>
    <p>func is {obj.name}</p>
    </>

)

}
ReactDOM.createRoot(document.getElementById("root")).render(<Hpp/>);