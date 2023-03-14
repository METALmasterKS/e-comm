import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "../Banner";

const Index = ({children}) => {
  return (<>
      <Header/>
      <main className="container">
        <div className="row">
          <div className="col">
            <Banner/>
            {children}
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Index;
