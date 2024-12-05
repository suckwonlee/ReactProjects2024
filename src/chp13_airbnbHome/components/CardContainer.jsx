import React from "react";
import Card from "./Card";
import bg from "../imgs/bg.png"; // 이미지 import
import backgroundImage from "../imgs/13123.jpg";
import nizimura from "../imgs/1733382438.jpg"
import zombie from "../imgs/img.png"

const listings = [
    {
        id: 1,
        title: "대기권의 아늑한 우주정거장",
        price: "500000000",
        rating: 4.9,
        imageUrl: bg,
    },
    {
        id: 2,
        title: "과수원(이었던 언덕)",
        price: "300000",
        rating: 1.0,
        imageUrl: backgroundImage,
    },,
    {
        id: 3,
        title: "우주여행",
        price: "7000000",
        rating: "null",
        imageUrl: nizimura,
    },
    {
        id: 4,
        title: "강변의 작은 펜션",
        price: "600000",
        rating: 1.0,
        imageUrl: zombie,
    }
];

function CardContainer() {
    return (
        <div className="card-container">
            {listings.map((listing) => (
                <Card key={listing.id} {...listing} />
            ))}
        </div>
    );
}

export default CardContainer;
