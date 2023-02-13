import React from "react";
import { useState } from "react";
import './App.css'

function App() {
  const [val, setVal] = useState({});
  const [issubmit, setIssubmit] = useState(false);
  const [message, setMessage] = useState("");
  const [checkval, setCheckval] = useState([]);
  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    setVal((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
    if (checked && type === "checkbox") {
      setCheckval((pre) => {
        return [...pre, value];
      });
    } else {
      setCheckval((pre) => {
        return pre.filter((item) => item === value);
      });
    }
  }
  function handelsubmit(e) {
    e.preventDefault();
    const answer = `Salut ${val.nom} ${val.prenom}  votre ville c'est ${val.ville} , votre genre est ${val.genre}, votre Loisire est   ${checkval}`;
    setMessage(answer);
    setIssubmit(true);
  }
  return (
    <div className="App">
      <div className=" p-3">
        <div className="inscription">
          <h1 className="fw-bolder ">Inscription</h1>
          {issubmit ? (
            <h2 className="fst-italic">{message}</h2>
          ) : (
            <form onSubmit={handelsubmit}>
              <table>
                <tbody>
                  <tr className="identifiant fw-bolder">
                    <td>Nom : </td>
                    <td>
                      <input
                        className="form-control "
                        onChange={handleChange}
                        type="text"
                        name="nom"
                        aria-label=".form-control-lg example"
                        value={val.nom}
                        placeholder="Nom"
                        required
                      />
                    </td>
                  </tr>
                  <tr className="identifiant fw-bolder">
                    <td>Prenom : </td>
                    <td>
                      <input
                        className="form-control "
                        aria-label=".form-control-lg example"
                        onChange={handleChange}
                        type="text"
                        value={val.prenom}
                        name="prenom"
                        placeholder="Prenom"
                        required
                      />
                    </td>
                  </tr>
                  <tr className="Ville fw-bolder" >
                    <td  >
                      <label>Ville : </label>
                    </td>
                    <td>
                      <select  onChange={handleChange} name="ville" className="form-select" aria-label="Default select example">
                        <option >choisi</option>
                        <option value="casablanca">Casablanca</option>
                        <option value="Rabat">Rabat</option>
                        <option value="Tiznit">Agadir</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="genre ">
                    <td  className=" fw-bolder">
                      <label>Genre</label>
                    </td>
                    <td className="fst-italic">
                      <input className="m"
                        onChange={handleChange}
                        type="radio"
                        name="genre"
                        value="homme"
                      />
                      <label>Homme</label>
                      <input className="m"
                        onChange={handleChange}
                        type="radio"
                        name="genre"
                        value="Femme"
                      />
                      <label>Femme</label>
                    </td>
                  </tr>
                  <tr >
                    <td className="Loisire fw-bolder">
                      <label>Loisire</label>
                    </td>
                    <td className="cc fst-italic ">
                      <input className="m"
                        onChange={handleChange}
                        type="checkbox"
                        value="Sport"
                      />
                      <label>Sport</label>
                      <input className="m"
                        onChange={handleChange}
                        type="checkbox"
                        value="Lecture"
                      />
                      <label>Lecture</label>
                      <input className="m"
                        onChange={handleChange}
                        type="checkbox"
                        value="Musique"
                      />
                      <label>Musique</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    </td>
                    <td>
                      <button type="submit" value="S'insrire" className="btn btn-outline-secondary  m-auto  w-100" >envoyer</button>
                    </td>
                    </tr>
                </tbody>
              </table>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
