import React, { useContext } from "react";
import { AppContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import SepetBos from "./SepetBos";

function Sepet() {
  const { sepet, sepettenCikar, toplam } = useContext(AppContext);

  const navigate = useNavigate();
  return (
    <div>
      <div className="container sepetsayfa">
        {sepet.length > 0 ? (
          <div className="row">
            {sepet.map((product) => (
              <div className="col-md-4 my-3">
                <div
                  className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ width: "25rem", height: "460px" }}
                >
                  <img
                    src={product.thumbnail}
                    alt=""
                    className="card-img-top m-auto"
                    style={{ cursor: "pointer", height: "280px" }}
                    onClick={() => navigate(`/urundetay/${product.id}`)}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{product.title}</h6>
                    <p className="card-text">Fiyat {product.price}</p>
                    <button
                      cursor={"pointer"}
                      onClick={() => sepettenCikar(product.id)}
                      className="btn btn-danger"
                    >
                      Sepetten Çıkar!
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <SepetBos />
        )}
        <h1>Toplam Fiyat: {toplam}$</h1>
      </div>
    </div>
    
  );
}

export default Sepet;
