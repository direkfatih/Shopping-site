import React, { useContext } from "react";
import { AppContext } from "../context/GlobalContext";
import FavorilerBos from "./FavorilerBos";
import { useNavigate } from "react-router-dom";

function Favoriler() {
  const { favoriler, favorilerdenCikar, sepeteEkle } = useContext(AppContext);

  const navigate = useNavigate();
  return (
    <div>
      <div className="container favorilersayfa">
        {favoriler.length > 0 ? (
          <div className="row">
            {favoriler.map((product) => (
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
                    <p className="card-text">Marka {product.brand}</p>
                    <svg
                      cursor={"pointer"}
                      onClick={() => favorilerdenCikar(product.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      height="2em"
                      viewBox="0 0 4321 521"
                    >
                      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                    <button
                        cursor={"pointer"}
                        onClick={() => sepeteEkle(product)}
                        className="btn btn-danger"
                      >
                        Sepete Ekle
                      </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <FavorilerBos />
        )}
      </div>
    </div>
  );
}

export default Favoriler;
