import React, { useState, useEffect } from "react";
import "./Women.scss";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Women = () => {
  // const [userData, setUserData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/products")
  //     .then((res) => setUserData(res.data.products))
  //     .catch((error) => console.log(error))
  //     .finally(() => {
  //       return;
  //     });
  // }, []);

  //   const filterDetails =
  //     userData &&
  //     userData.slice(0, 30).map((data) => {
  //       const {
  //         category,
  //         price,
  //         title,
  //         id,
  //         rating,
  //         stock,
  //         thumbnail,
  //         brand,
  //         discountPercentage,
  //       } = data;
  //       return (
  //         <div
  //           className="col-lg-4 col-md-6 col-sm-6 col-12 my-5 mx-auto"
  //           key={id}
  //         >
  //           <div className="mx-auto card h-100 cardImage">
  //             <img
  //               src={thumbnail}
  //               className="card-img-top mx-auto detail"
  //               alt={title}
  //             />
  //             <div className="card-body">
  //               <FontAwesomeIcon className="text-warning" icon={faStar} />
  //               <FontAwesomeIcon className="text-warning" icon={faStar} />
  //               <FontAwesomeIcon className="text-warning" icon={faStar} />
  //               <FontAwesomeIcon
  //                 className="text-warning"
  //                 icon={faStarHalfStroke}
  //               />
  //               <span className="mx-2">({rating})</span>
  //               <p className="card-text text-danger">{discountPercentage}% OFF</p>
  //               <p className="card-title fw-bold">{title}</p>
  //               <span className="card-text text-white  bg-success rounded px-2">
  //                 ${price}
  //               </span>
  //               <span className="card-text mx-1 text-secondary">
  //                 <s>${price + 100}</s>
  //               </span>
  //               <br />
  //               Category:{" "}
  //               <p className="card-text text-secondary d-inline fw-normal">
  //                 {category}
  //               </p>
  //               <br />
  //               Brand:
  //               <p className="card-text text-secondary d-inline"> {brand}</p>
  //             </div>
  //             <div className="btn btn-primary w-50 mx-4 mb-3">Add to Cart</div>
  //           </div>
  //         </div>
  //       );
  //     });
  return (
    <>
      <div className="row mx-auto">
        <p>Women Section</p>
        <div className="col-md-4">
          <p>Category</p>
        </div>
        <div className="col-md-8">
          <div className="row exclusive mx-auto">
            <div className="col-12 text-center mt-5">
              <p className="fs-2 fw-bold">Women's product</p>
            </div>
          </div>
          <div className="col-12">
            <div className="row mx-auto exe">{}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Women;

// const filterDetails =
//   userData &&
//   userData
//     .filter((data) => {
//       if (data.category.name.includes("Others")) {
//         return data.category.name.includes("Others");
//       }
//     })
//     .map((filteredData) => {
//       const { id, title, images, category, price, description } =
//         filteredData;
//       return (
//         <div
//           className="col-lg-4 col-md-6 col-sm-6 col-12 my-5 mx-auto"
//           key={id}
//         >
//           <div className="mx-auto card h-100 cardImage">
//             <img
//               src={images}
//               className="card-img-top mx-auto"
//               // style={{ width: "50%" }}
//               alt={title}
//             />
//             <div className="card-body">
//               <p className="card-title">{title}</p>
//               {/* <p className="card-title">{description}</p> */}
//               <span className="card-text text-success">${price}</span>
//               &nbsp;
//               <span className="card-text">
//                 <s>${price + 100}</s>
//               </span>
//               <br />
//               <FontAwesomeIcon className="text-warning" icon={faStar} />
//               <FontAwesomeIcon className="text-warning" icon={faStar} />
//               <FontAwesomeIcon className="text-warning" icon={faStar} />
//               <FontAwesomeIcon
//                 className="text-warning"
//                 icon={faStarHalfStroke}
//               />
//               {/* <span>({rating.rate})</span> */}
//             </div>
//           </div>
//         </div>
//       );
//     });
