import axios from "axios";
import { useEffect, useState } from "react";
const Restaurent = () => {
  const [restaurentData, setRestaurentData] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:4000/restaurent`).then((result) => {
      setRestaurentData(result.data);
    });
  }, []);
  if (restaurentData !== null) {
    return (
      <>
        {console.log(restaurentData)}
        <div className="restaurent-container">
          <div className="container-fluid">
              <div className="row">
              {restaurentData.map((ob, i) => {
                return (
                  <div className="col-md-5">
                    <div class="card mb-3 ">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img
                            src={ob.rFile}
                            class="img-fluid rounded-start"
                          />
                        </div>
                        <div class="col-md-8 card-desc">
                          <div class="card-body">
                            <h5 class="card-title">{ob.rName}</h5>
                            <div className="rating">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            </div>
                            <p class="card-text">
                            {ob.rAddress}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          </div>
      </>
    );
  }
};
export default Restaurent;
