import React from "react";

import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components"

import foto from "../assets/4884149.jpg"

import "../App.css"

function Construcao() {
  return (
    <div>
        <div className="col-md text-center text-md-left">
          <h2>Página em Construção</h2>
        </div>
        <div className="text-center">
            <img src={foto} class="rounded" className="photo" alt="Responsive"/>
        </div>
    </div>
  );
};

export default withAuthenticationRequired(Construcao, {
  onRedirecting: () => <Loading />,
})