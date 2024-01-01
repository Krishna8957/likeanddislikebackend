const app =  require("./app");

const Port = process.env.PORT





app.listen(Port,()=>{
    console.log(`Server running PORT http://localhost:${Port}`);
})