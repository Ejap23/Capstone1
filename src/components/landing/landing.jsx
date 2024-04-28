import React from "react";


class Home extends React.Component{
    render(){
    return (
    
        <>


        <body class="h-screen bg-gray-400 ">
           <div class="h-96 w-full bg-gray-900  flex items-center justify-center">
                <div class="h-60 w-full bg-gray-500 text-white text-6xl font-bold pl-56"> 
                    BANNER
                </div>        
           </div>
           <br></br>
           <div class="h-56 w-full bg-gray-500 flex items-center justify-around">
           <div class="h-56 w-56 bg-gray-900 text-white text-3xl ">product</div>
           <div class="h-56 w-56 bg-gray-900 text-white text-3xl ">product</div>
           <div class="h-56 w-56 bg-gray-900 text-white text-3xl ">product</div>

           </div>
        </body>
        </>
    );
  }
}
  
  export default Home;