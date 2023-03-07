import api from "./services/api";
import { useState } from "react";
import {FiSearch} from "react-icons/fi"

import Header from "./componentes/Header";
import Card from "./componentes/Card";
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState();
  const [repositorios, setRepositorios] = useState();
  
  function getUsuario(e){
    e.preventDefault();
    api
    .get(`/users/${username}`)
    .then((response) => setUser(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
    getRepositorios()
  }

  function getRepositorios(){
    api
    .get(`/users/${username}/repos`)
    .then((response) => setRepositorios(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
    console.log(repositorios)
  }

  return (
    <main className="App">
      <h1>InstaHub</h1>
      <div className="input-container">
        <input type='text' placeholder="Digite o username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={getUsuario}>
          <FiSearch size={20} color={'white'}/>
        </button>
      </div>

      {user === undefined ?
      <span>Nenhum usuário encontrado...</span>
      :
      <>
      <Header
      nome={user.login}
      bio={user.bio}
      foto={user.avatar_url}
      seguindo={user.following}
      seguidores={user.followers}
      repositorios={user.public_repos}
      />
      <section className="feed">
      {repositorios.map((item) => {
          return(
            <Card
            nome={item.name}
            dt={item.created_at}
            link={item.html_url}
            lang={item.language}
            />
          )
        })}
      </section>
      </>
      } 

    </main>
  );
}

export default App;
